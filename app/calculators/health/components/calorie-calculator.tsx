"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const activityLevels = {
  sedentary: { label: "Sedentary (little or no exercise)", factor: 1.2 },
  light: { label: "Lightly active (light exercise 1-3 days/week)", factor: 1.375 },
  moderate: { label: "Moderately active (moderate exercise 3-5 days/week)", factor: 1.55 },
  very: { label: "Very active (hard exercise 6-7 days/week)", factor: 1.725 },
  extra: { label: "Extra active (very hard exercise & physical job)", factor: 1.9 },
};

export function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState<{
    bmr: number;
    maintenance: number;
    weightLoss: number;
    weightGain: number;
  } | null>(null);

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    // BMR calculation using Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const activityFactor = activityLevels[activity as keyof typeof activityLevels].factor;
    const maintenance = bmr * activityFactor;

    setResult({
      bmr: Math.round(bmr),
      maintenance: Math.round(maintenance),
      weightLoss: Math.round(maintenance - 500), // 500 calorie deficit
      weightGain: Math.round(maintenance + 500), // 500 calorie surplus
    });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="h-6 w-6 text-orange-500" />
        <h2 className="text-xl font-semibold">Calorie Calculator</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Age</label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Gender</label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium">Height (cm)</label>
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Weight (kg)</label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Activity Level</label>
          <Select value={activity} onValueChange={setActivity}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(activityLevels).map(([key, { label }]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={calculateCalories}
          className="w-full"
          disabled={!age || !gender || !height || !weight || !activity}
        >
          Calculate Calories
        </Button>
        {result && (
          <div className="space-y-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <p className="font-medium">BMR: {result.bmr} calories/day</p>
            <p className="font-medium">Maintenance: {result.maintenance} calories/day</p>
            <p className="font-medium text-green-600 dark:text-green-400">
              Weight Loss: {result.weightLoss} calories/day
            </p>
            <p className="font-medium text-blue-600 dark:text-blue-400">
              Weight Gain: {result.weightGain} calories/day
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}