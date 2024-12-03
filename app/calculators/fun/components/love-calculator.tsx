"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function LoveCalculator() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateLove = () => {
    // Simple pseudo-random calculation based on names
    const combined = (name1 + name2).toLowerCase();
    let sum = 0;
    for (let i = 0; i < combined.length; i++) {
      sum += combined.charCodeAt(i);
    }
    setResult(sum % 101); // 0-100 percentage
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-red-500" />
        <h2 className="text-xl font-semibold">Love Calculator</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">First Name</label>
          <Input
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Enter first name"
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Second Name</label>
          <Input
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter second name"
            className="mt-1"
          />
        </div>
        <Button
          onClick={calculateLove}
          className="w-full"
          disabled={!name1 || !name2}
        >
          Calculate Love Match
        </Button>
        {result !== null && (
          <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              {result}% Match!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {result > 80
                ? "Perfect match! 💘"
                : result > 60
                ? "Great potential! 💝"
                : result > 40
                ? "There's a chance! 💖"
                : "Keep looking! 💔"}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}