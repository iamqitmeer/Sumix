"use client";

import { Card } from "@/components/ui/card";

interface DisplayProps {
  expression: string;
  result: string;
}

export function Display({ expression, result }: DisplayProps) {
  return (
    <Card className="p-4 mb-4 bg-muted">
      <div className="text-right space-y-2">
        <div className="text-lg text-muted-foreground font-mono">{expression || "0"}</div>
        <div className="text-3xl font-bold font-mono">{result || "0"}</div>
      </div>
    </Card>
  );
}