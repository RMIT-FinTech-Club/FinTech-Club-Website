import * as React from "react";

export type DeptItemBase = {
  value: string;
  label: string;
  color: string;
};

export type DeptItem = DeptItemBase & {
  content?: React.ReactNode;
  renderContent?: (item: DeptItemBase) => React.ReactNode;
};

export type DepartmentAccordionProps = {
  items: DeptItem[];
  defaultValue?: string;
  minTabWidth?: number;
  durationMs?: number;
  className?: string;
};

export type CSSVars = React.CSSProperties & {
  ["--acc-h"]?: string;
  ["--min-tab-w"]?: string;
  ["--acc-dur"]?: string;
};

export type DeptInputItem = DeptItemBase & Partial<Pick<DeptItem, "content" | "renderContent">>;

export type SharedHeightOpts = {
  deps?: ReadonlyArray<unknown>;
  clampVh?: number; 
};

export type Project = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  href?: string;
};

export type DeptProjectsMap = Record<string, Project[]>;
export type ApiProject = { title: string; image_url: string; description: string };
export type ApiResponse = { data?: { projects?: ApiProject[] } };