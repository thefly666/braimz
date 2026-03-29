"use client";

import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { cn } from "@/lib/utils";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load(scene);

    return () => {
      app.dispose();
    };
  }, [scene]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full", className)}
    />
  );
}
