"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoveCalculator } from "./components/love-calculator";
import { ZodiacCalculator } from "./components/zodiac-calculator";
import { RoomCalculator } from "./components/room-calculator";

export default function FunCalculators() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Fun & Utility Calculators</h1>
      <Tabs defaultValue="love" className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="love">Love Match</TabsTrigger>
          <TabsTrigger value="zodiac">Zodiac Sign</TabsTrigger>
          <TabsTrigger value="room">Room Planner</TabsTrigger>
        </TabsList>
        <TabsContent value="love">
          <LoveCalculator />
        </TabsContent>
        <TabsContent value="zodiac">
          <ZodiacCalculator />
        </TabsContent>
        <TabsContent value="room">
          <RoomCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
}