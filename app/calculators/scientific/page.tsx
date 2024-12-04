"use client";

import { useState } from "react";
import { Display } from "./components/display";
import { Keypad } from "./components/keypad";
import { evaluateExpression } from "./utils/calculator";
import { Card } from "@/components/ui/card";

export default function ScientificCalculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (num: string) => {
    setExpression(prev => prev + num);
  };

  const handleOperatorClick = (op: string) => {
    setExpression(prev => prev + op);
  };

  const handleFunctionClick = (func: string) => {
    if (func === "√") {
      setExpression(prev => prev + "√(");
    } else {
      setExpression(prev => prev + `${func}(`);
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = evaluateExpression(expression);
      if (isNaN(calculatedResult)) {
        setResult("Error");
      } else {
        setResult(calculatedResult.toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="max-w-full mx-auto">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Scientific Calculator</h1>
        <Display expression={expression} result={result} />
        <Keypad
          onNumberClick={handleNumberClick}
          onOperatorClick={handleOperatorClick}
          onClear={handleClear}
          onCalculate={handleCalculate}
          onFunctionClick={handleFunctionClick}
        />
      </Card>
    </div>
  );
}