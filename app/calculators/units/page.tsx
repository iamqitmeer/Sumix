"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Ruler,
  Weight,
  Thermometer,
  Droplet,
  Clock,
  Globe,
  Star,
  History,
  Info,
  ArrowRight,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useUnitConverter } from "@/hooks/useUnitConverter";
import { unitCategories } from "@/utils/conversionLogic";
import { UnitCategory } from "@/utils/conversionLogic";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const iconMap = {
  Ruler,
  Weight,
  Thermometer,
  Droplet,
  Clock,
  Globe,
};

export default function AdvancedUnitConverter() {
  const {
    activeTab,
    setActiveTab,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    value,
    setValue,
    result,
    handleConvert,
    history,
    favorites,
    toggleFavorite,
    isFavorite,
    units,
    clearHistory,
    clearFavorites,
    error,
    setError,
  } = useUnitConverter();

  React.useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  return (
    <div className="container mx-auto py-10 px-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold  text-transparent bg-clip-text">
          Ultimate Unit Converter
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Converter Card */}
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold">
              Convert Units Seamlessly
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tabs Section */}
            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as UnitCategory)}
            >
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                {unitCategories.map((category) => {
                  const Icon = iconMap[category.icon as keyof typeof iconMap];
                  return (
                    <TooltipProvider key={category.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <TabsTrigger
                            value={category.id}
                            className="flex items-center gap-2"
                          >
                            <Icon className="h-5 w-5" />
                            <span className="hidden lg:inline">
                              {category.label}
                            </span>
                          </TabsTrigger>
                        </TooltipTrigger>
                        <TooltipContent>{`Convert ${category.label.toLowerCase()} units`}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <TabsContent value={activeTab} className="mt-4">
                    {/* Conversion Section */}
                    <div className="space-y-4">
                      <div className="flex flex-col gap-4">
                        {/* From Unit */}
                        <Select
                          onValueChange={setFromUnit}
                          value={fromUnit || ""}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="From Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            {units.map((unit) => (
                              <SelectItem key={unit} value={unit}>
                                {unit}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {/* To Unit */}
                        <Select
                          onValueChange={setToUnit}
                          value={toUnit || ""}
                          disabled={!fromUnit}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="To Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            {units
                              .filter((unit) => unit !== fromUnit)
                              .map((unit) => (
                                <SelectItem key={unit} value={unit}>
                                  {unit}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Input Field */}
                      <Input
                        type="number"
                        placeholder="Enter value"
                        value={value || ""}
                        onChange={(e) =>
                          setValue(parseFloat(e.target.value) || 0)
                        }
                      />

                      {/* Result Display */}
                      <AnimatePresence>
                        {result !== null && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-secondary p-4 rounded-md"
                          >
                            <p className="text-center text-lg font-semibold">
                              {value} {fromUnit} = {result} {toUnit}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Convert Button */}
                      <Button onClick={handleConvert} className="w-full">
                        Convert
                      </Button>
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </CardContent>
        </Card>

        {/* History and Favorites Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold">
              History & Favorites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="history">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="history">
                  <History className="h-4 w-4 mr-2" />
                  History
                </TabsTrigger>
                <TabsTrigger value="favorites">
                  <Star className="h-4 w-4 mr-2" />
                  Favorites
                </TabsTrigger>
              </TabsList>
              <TabsContent value="history">
                <ScrollArea className="h-[300px] w-full pr-4">
                  <div className="space-y-2">
                    {history.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 bg-secondary rounded-md"
                      >
                        <span>
                          {item.fromValue} {item.fromUnit}{" "}
                          <ArrowRight className="inline h-4 w-4 mx-1" />{" "}
                          {item.toValue} {item.toUnit}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(item)}
                        >
                          <Star
                            className={`h-4 w-4 ${
                              isFavorite(item)
                                ? "text-yellow-400 fill-yellow-400"
                                : ""
                            }`}
                          />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearHistory}
                  className="mt-2"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear History
                </Button>
              </TabsContent>
              <TabsContent value="favorites">
                <ScrollArea className="h-[300px] w-full pr-4">
                  <div className="space-y-2">
                    {favorites.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 bg-secondary rounded-md"
                      >
                        <span>
                          {item.fromValue} {item.fromUnit}{" "}
                          <ArrowRight className="inline h-4 w-4 mx-1" />{" "}
                          {item.toValue} {item.toUnit}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(item)}
                        >
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFavorites}
                  className="mt-2"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Favorites
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Unit Information Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-4">
            <Info className="h-4 w-4 mr-2" />
            Unit Information
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Unit Information</DialogTitle>
            <DialogDescription>
              Learn more about the units and their conversions.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>
              This converter supports various unit categories including length,
              weight, temperature, volume, time, and area. Each category
              contains multiple units that can be converted between each other.
            </p>
            <p>
              For precise scientific calculations, always verify the results
              with authoritative sources.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Error Alert */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
