"use client";

import { Card, CardBody } from "@heroui/react";
import Hero from "./_components/hero";
import TeamStructure from "./_components/team-structure";
import Goal from "./_components/goal";
import Timeline from "./_components/technical/timeline";
import Gallery from "./_components/gallery";
import ProductCta from "./_components/technical/product-cta";
import Scope from "./_components/scope";
import ProductCarousel from "./_components/media/product-carousel";
import KeyActivities from "./_components/event/key-activities";
import GuestCarousel from "./_components/event/guest-carousel";
import KeyMetrics from "./_components/event/key-metric";

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

      <ProductCarousel />

      <KeyActivities />

      <GuestCarousel />

      <KeyMetrics /> 
    </div>
  );
}
