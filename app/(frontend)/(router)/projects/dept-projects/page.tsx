"use client";

import * as React from "react";
import axios from "axios";
import DeptAccordionController from "./components/accordion/DeptAccordionController";
import type {
  DeptItemBase,
  Project,
  DeptProjectsMap,
  ApiResponse,
} from "./components/types";
import DeptSection from "./components/panel/DeptContentSection";
import { CircularProgress } from "@mui/material";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:3000/api/v1";

const DEPT_TABS = [
  {
    value: "technology",
    label: "TECHNOLOGY",
    color: "bg-[#DBB968]",
    apiDept: "Technology",
  },
  {
    value: "business",
    label: "BUSINESS",
    color: "bg-[#2C305F]",
    apiDept: "Business",
  },
  {
    value: "marketing",
    label: "MARKETING",
    color: "bg-[#DBB968]",
    apiDept: "Marketing",
  },
  {
    value: "human-resources",
    label: "HUMAN RESOURCES",
    color: "bg-[#2C305F]",
    apiDept: "Human Resources",
  },
] as const;

export default function DeptProjects() {
  const departments = React.useMemo(
    () => Array.from(new Set(DEPT_TABS.map((d) => d.apiDept))),
    []
  );

  // State for the projects in each department
  const [departmentProjects, setDepartmentProjects] =
    React.useState<DeptProjectsMap>({});
  // 1. NEW: State to store the fetched descriptions for each department
  const [departmentDescriptions, setDepartmentDescriptions] = React.useState<
    Record<string, string>
  >({});

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const projectResults: DeptProjectsMap = {};
        const descriptionResults: Record<string, string> = {}; // Temp storage for descriptions

        await Promise.all(
          departments.map(async (dept) => {
            const params = {
              type: "department",
              status: "ongoing",
              department: dept,
            };
            const res = await axios.get<ApiResponse>(`${API_BASE}/projects`, {
              params,
              signal: controller.signal as any,
            });

            // Extract projects
            const list = res.data?.data?.projects ?? [];
            projectResults[dept] = list.map(
              (p): Project => ({
                id: p.slug,
                title: p.title,
                imageUrl: p.image_url,
                slug: p.slug,
              })
            );

            descriptionResults[dept] =
              res.data?.data?.department_description ?? "";
          })
        );

        setDepartmentProjects(projectResults);
        setDepartmentDescriptions(descriptionResults); // Set the descriptions state
        setError(null);
      } catch (e: any) {
        console.error("Error fetching department projects:", e);
        if (axios.isCancel(e)) return;
        if (e.response?.status === 404) {
          setError("Department projects API not found");
        } else if (e.code === "ERR_NETWORK") {
          setError("Network error. Please check your connection.");
        } else {
          setError(
            "Failed to fetch department projects. Please try again later."
          );
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [departments]);

  if (loading) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center h-64">
        <CircularProgress sx={{ color: "#DCB968" }} />
        <p className="mt-4 text-lg text-[#5E5E92]">
          Loading Department Projects
        </p>
      </div>
    );
  }
  if (error)
    return (
      <div className="relative w-[87vw] h-48 mx-auto my-10 md:h-64 p-[4px] rounded-lg bg-gradient-to-b from-[#DCB968] to-[#F7D27F]">
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#F9FAFB] rounded-[7px] text-center px-4">
          <p className="text-5xl font-bold mb-4">⚠️</p>
          <p className="text-[#2C305F] text-xl">{error}</p>
        </div>
      </div>
    );

  const items = DEPT_TABS.map(({ value, label, color, apiDept }) => ({
    value,
    label,
    color,
    renderContent: (_: DeptItemBase) => (
      <DeptSection
        label={label}
        description={departmentDescriptions[apiDept] || ""}
        items={departmentProjects[apiDept] || []}
      />
    ),
  }));

  return <DeptAccordionController items={items} defaultOpen="technology" />;
}
