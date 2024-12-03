"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BMICalculator } from "./components/bmi-calculator";
import { CalorieCalculator } from "./components/calorie-calculator";

export default function HealthCalculators() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Health & Fitness Calculators</h1>
      <Tabs defaultValue="bmi" className="space-y-4">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="bmi">BMI Calculator</TabsTrigger>
          <TabsTrigger value="calories">Calorie Calculator</TabsTrigger>
        </TabsList>
        <TabsContent value="bmi">
          <BMICalculator />
        </TabsContent>
        <TabsContent value="calories">
          <CalorieCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
}