"use client";

import { Card, CardBody } from "@heroui/react";
import Hero from "./_components/section/hero";
import TeamStructure from "./_components/section/team-structure";
import Goal from "./_components/section/goal";
import Timeline from "./_components/section/timeline";
import Gallery from "./_components/section/gallery";
import ProductCta from "./_components/section/product-cta";
import Scope from "./_components/section/scope";

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Goal and Scope Section */}
      <Goal />

      {/* Scope Section */}
      <Scope />

      {/* Team Structure Section */}
      <TeamStructure />

      {/* Timeline Section */}
      <Timeline />

      {/* Gallery Section */}
      <Gallery />

      <ProductCta />
    </div>
  );
}
