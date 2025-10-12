"use client";

import { Card, CardBody } from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";
import { Building2, Megaphone, Users } from "lucide-react";
import { useCountUp } from "react-countup";

const metricsList = [
  { icon: Building2, value: 100, prefix: "+", label: "Sponsors Brand" },
  { icon: Users, value: 120, prefix: "+", label: "Attendees" },
  { icon: Users, value: 50, prefix: "%", label: "Attendance Rate" },
  { icon: Megaphone, value: 1000, prefix: "+", label: "Media Coverage" },
];

function AnimatedCount({
  value,
  prefix,
  shouldStart,
}: {
  value: number;
  prefix?: string;
  shouldStart: boolean;
}) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const { start } = useCountUp({
    ref: spanRef,
    end: value,
    duration: 3,
    prefix: prefix ?? "",
  });

  useEffect(() => {
    if (shouldStart) {
      start();
    }
  }, [shouldStart, start]);

  return <span ref={spanRef} />;
}

export default function KeyMetric() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const onFirstScroll = () => setHasUserScrolled(true);
    window.addEventListener("scroll", onFirstScroll, { passive: true });
    window.addEventListener("wheel", onFirstScroll, { passive: true });
    window.addEventListener("touchmove", onFirstScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onFirstScroll);
      window.removeEventListener("wheel", onFirstScroll);
      window.removeEventListener("touchmove", onFirstScroll);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const shouldStart = hasUserScrolled && isInView;
  
  return (
    <section ref={sectionRef} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Key Metrics
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {metricsList.map((metric, index) => (
            <Card key={index}>
              <CardBody className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-4">
                  <metric.icon className="size-20" />
                </div>
                <div className="text-center">
                  <p className="text-black lg:text-5xl md:text-4xl text-3xl font-semibold">
                    <AnimatedCount
                      value={metric.value}
                      prefix={metric.prefix}
                      shouldStart={shouldStart}
                    />
                  </p>
                  <h4 className="font-semibold text-lg">{metric.label} </h4>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
