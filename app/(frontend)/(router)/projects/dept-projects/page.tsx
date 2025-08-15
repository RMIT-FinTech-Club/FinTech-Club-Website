"use client";
import * as React from "react";
import axios from "axios";
import DepartmentAccordionClient from "./components/DepartmentAccordionClient";
import type { DeptItemBase, Project, DeptProjectsMap, ApiResponse } from "./components/types";
import DeptSection from "./components/carousel/DeptSection"

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:3000/api/v1";

const DEPT_TABS = [
  { value: "technology", label: "TECHNOLOGY", color: "bg-[#DBB968]", apiDept: "Technical" },
  { value: "business", label: "BUSINESS", color: "bg-[#2C305F]", apiDept: "Business" },
  { value: "marketing", label: "MARKETING", color: "bg-[#DBB968]", apiDept: "Marketing" },
  { value: "human-resources", label: "HUMAN RESOURCES", color: "bg-[#2C305F]", apiDept: "Human Resources" },
] as const;

const DEFAULT_DESC: Record<string, React.ReactNode> = {
  "TECHNOLOGY": (
    <p>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
    </p>
  ),
  "BUSINESS": (
    <p>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
    </p>
  ),
  "MARKETING": (
    <p>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
    </p>
  ),
  "HUMAN RESOURCES": (
    <p>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
    </p>
  ),
};

export default function DeptProjects() {
  const departments = React.useMemo(
    () => Array.from(new Set(DEPT_TABS.map((d) => d.apiDept))),
    []
  );

  const [departmentProjects, setDepartmentProjects] = React.useState<DeptProjectsMap>({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const results: DeptProjectsMap = {};

        await Promise.all(
          departments.map(async (dept) => {
            const params = { type: "department", status: "ongoing", department: dept };
            const res = await axios.get<ApiResponse>(`${API_BASE}/projects`, {
              params,
              signal: controller.signal as any,
            });

            const list = res.data?.data?.projects ?? [];
            results[dept] = list.map((p, idx): Project => ({
              id: `${dept}-${idx + 1}`,
              title: p.title,
              imageUrl: p.image_url,
              description: p.description,
            }));
          })
        );

        setDepartmentProjects(results);
        setError(null);
      } catch (e: any) {
        console.error("Error fetching department projects:", e);
        if (axios.isCancel(e)) return;
        if (e.response?.status === 404) {
          setError("Department projects API not found");
        } else if (e.code === "ERR_NETWORK") {
          setError("Network error. Please check your connection.");
        } else {
          setError("Failed to fetch department projects. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [departments]);

  if (loading) return <div className="p-8 text-center">Loading projects...</div>;
  if (error) return <div className="p-8 text-center text-red-500">⚠️ {error}</div>;
  
  const items = DEPT_TABS.map(({ value, label, color, apiDept }) => ({
    value,
    label,
    color,
    renderContent: (_: DeptItemBase) => (
      <DeptSection label={label} description={DEFAULT_DESC[label] || ""} items={departmentProjects[apiDept] || []} />
    ),
  }));

  return <DepartmentAccordionClient items={items} defaultOpen="technology" />;
}