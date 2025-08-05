"use client";

import { Card, CardBody } from "@heroui/react";
import Hero from "./_components/hero";
import TeamStructure from "./_components/team-structure";
import GoalAndScope from "./_components/goal-and-scope";
import Timeline from "./_components/timeline";

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Goal and Scope Section */}
      <GoalAndScope />

      {/* Team Structure Section */}
      <TeamStructure />

      {/* Timeline Section */}
      <Timeline /> 
    </div>
  );
}
