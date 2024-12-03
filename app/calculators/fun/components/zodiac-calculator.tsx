"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (month: number) => {
  const thirtyDays = [4, 6, 9, 11];
  if (month === 2) return 29;
  return thirtyDays.includes(month) ? 30 : 31;
};

export function ZodiacCalculator() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [zodiac, setZodiac] = useState<string | null>(null);

  const calculateZodiac = () => {
    const m = parseInt(month);
    const d = parseInt(day);
    
    if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) setZodiac("Aries ♈");
    else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) setZodiac("Taurus ♉");
    else if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) setZodiac("Gemini ♊");
    else if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) setZodiac("Cancer ♋");
    else if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) setZodiac("Leo ♌");
    else if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) setZodiac("Virgo ♍");
    else if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) setZodiac("Libra ♎");
    else if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) setZodiac("Scorpio ♏");
    else if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) setZodiac("Sagittarius ♐");
    else if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) setZodiac("Capricorn ♑");
    else if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) setZodiac("Aquarius ♒");
    else setZodiac("Pisces ♓");
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Star className="h-6 w-6 text-yellow-500" />
        <h2 className="text-xl font-semibold">Zodiac Sign Calculator</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Birth Month</label>
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m, i) => (
                <SelectItem key={m} value={(i + 1).toString()}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium">Birth Day</label>
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select day" />
            </SelectTrigger>
            <SelectContent>
              {month && [...Array(daysInMonth(parseInt(month)))].map((_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={calculateZodiac}
          className="w-full"
          disabled={!month || !day}
        >
          Find Your Sign
        </Button>
        {zodiac && (
          <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {zodiac}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}