"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface KeypadProps {
  onNumberClick: (num: string) => void;
  onOperatorClick: (op: string) => void;
  onClear: () => void;
  onCalculate: () => void;
  onFunctionClick: (func: string) => void;
}

const scientificButtons = [
  ["sin", "cos", "tan", "π"],
  ["√", "^", "(", ")"],
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
  ["C", "⌫", "log", "ln"],
];

export function Keypad({
  onNumberClick,
  onOperatorClick,
  onClear,
  onCalculate,
  onFunctionClick,
}: KeypadProps) {
  const handleClick = (value: string) => {
    switch (value) {
      case "C":
        onClear();
        break;
      case "=":
        onCalculate();
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
      case "^":
        onOperatorClick(value);
        break;
      case "sin":
      case "cos":
      case "tan":
      case "log":
      case "ln":
      case "√":
        onFunctionClick(value);
        break;
      default:
        onNumberClick(value);
        break;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {scientificButtons.map((row, rowIndex) =>
        row.map((button, buttonIndex) => (
          <Button
            key={`${rowIndex}-${buttonIndex}`}
            variant={/[0-9.]/.test(button) ? "outline" : "secondary"}
            className={cn(
              "h-12 text-lg",
              button === "=" && "bg-purple-600 hover:bg-purple-700 text-white"
            )}
            onClick={() => handleClick(button)}
          >
            {button}
          </Button>
        ))
      )}
    </div>
  );
}