"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

export function RoomCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [result, setResult] = useState<{
    area: number;
    paint: number;
    flooring: number;
  } | null>(null);

  const calculateRoom = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    
    if (l > 0 && w > 0) {
      const area = l * w;
      // Assuming 350 sq ft per gallon of paint and 10% waste for flooring
      const paint = Math.ceil((2 * area + 2 * (l + w) * 8) / 350); // 8ft height
      const flooring = area * 1.1;
      
      setResult({
        area,
        paint,
        flooring,
      });
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <LayoutDashboard className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Room Calculator</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Room Length (feet)</label>
          <Input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Enter length"
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Room Width (feet)</label>
          <Input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Enter width"
            className="mt-1"
          />
        </div>
        <Button
          onClick={calculateRoom}
          className="w-full"
          disabled={!length || !width}
        >
          Calculate
        </Button>
        {result && (
          <div className="space-y-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="font-medium">Room Area: {result.area.toFixed(2)} sq ft</p>
            <p className="font-medium">Paint Needed: {result.paint} gallon(s)</p>
            <p className="font-medium">Flooring Needed: {result.flooring.toFixed(2)} sq ft</p>
          </div>
        )}
      </div>
    </Card>
  );
}