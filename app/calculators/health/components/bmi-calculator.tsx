"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    color: string;
  } | null>(null);

  const calculateBMI = () => {
    let bmi: number;
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (unit === "metric") {
      bmi = w / ((h / 100) * (h / 100));
    } else {
      bmi = (w * 703) / (h * h);
    }

    let category: string;
    let color: string;

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600 dark:text-blue-400";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-green-600 dark:text-green-400";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-600 dark:text-yellow-400";
    } else {
      category = "Obese";
      color = "text-red-600 dark:text-red-400";
    }

    setResult({ bmi, category, color });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Scale className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-semibold">BMI Calculator</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Unit System</label>
          <Select value={unit} onValueChange={setUnit}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="metric">Metric (cm/kg)</SelectItem>
              <SelectItem value="imperial">Imperial (in/lbs)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium">
            Height ({unit === "metric" ? "cm" : "inches"})
          </label>
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={`Enter height in ${unit === "metric" ? "cm" : "inches"}`}
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={`Enter weight in ${unit === "metric" ? "kg" : "lbs"}`}
            className="mt-1"
          />
        </div>
        <Button
          onClick={calculateBMI}
          className="w-full"
          disabled={!height || !weight}
        >
          Calculate BMI
        </Button>
        {result && (
          <div className="text-center p-4 bg-muted rounded-lg space-y-2">
            <p className="text-2xl font-bold">
              BMI: {result.bmi.toFixed(1)}
            </p>
            <p className={`text-lg font-medium ${result.color}`}>
              Category: {result.category}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}