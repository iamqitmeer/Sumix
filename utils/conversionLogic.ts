type ConversionRule = number | ((value: number) => number);

const conversions: Record<string, Record<string, ConversionRule>> = {
  // Length
  Meters: {
    Kilometers: 0.001,
    Miles: 0.000621371,
    Feet: 3.28084,
    Inches: 39.3701,
    Centimeters: 100,
    Yards: 1.09361,
    Millimeters: 1000,
    Micrometers: 1e6,
    Nanometers: 1e9,
    LightYears: 1.057e-16,
  },
  // Weight
  Kilograms: {
    Pounds: 2.20462,
    Grams: 1000,
    Ounces: 35.274,
    Tons: 0.001,
    Milligrams: 1e6,
    Micrograms: 1e9,
    ImperialTons: 0.000984207,
    USTons: 0.00110231,
    Stones: 0.157473,
  },
  // Temperature
  Celsius: {
    Fahrenheit: (value) => (value * 9) / 5 + 32,
    Kelvin: (value) => value + 273.15,
    Rankine: (value) => (value + 273.15) * 1.8,
  },
  // Volume
  Liters: {
    Gallons: 0.264172,
    "Cubic Meters": 0.001,
    Milliliters: 1000,
    CubicFeet: 0.0353147,
    CubicInches: 61.0237,
    Quarts: 1.05669,
    Pints: 2.11338,
    FluidOunces: 33.814,
  },
  // Time
  Seconds: {
    Minutes: 1 / 60,
    Hours: 1 / 3600,
    Days: 1 / 86400,
    Weeks: 1 / 604800,
    Months: 1 / 2.628e+6,
    Years: 1 / 3.154e+7,
    Decades: 1 / 3.154e+8,
    Centuries: 1 / 3.154e+9,
  },
  // Area
  "Square Meters": {
    "Square Kilometers": 1e-6,
    Acres: 0.000247105,
    Hectares: 0.0001,
    "Square Miles": 3.86102e-7,
    "Square Yards": 1.19599,
    "Square Feet": 10.7639,
    "Square Inches": 1550,
  },
};

export const conversionLogic = (value: number, from: string, to: string): number => {
  const baseUnit = Object.keys(conversions).find((unit) => conversions[unit][from] || conversions[unit][to]);

  if (!baseUnit) return value;

  let result = value;

  // Convert to base unit if necessary
  if (from !== baseUnit) {
    const toBaseRule = conversions[baseUnit][from];
    result = typeof toBaseRule === "function" ? toBaseRule(result) : result / toBaseRule;
  }

  // Convert from base unit to target unit
  if (to !== baseUnit) {
    const fromBaseRule = conversions[baseUnit][to];
    result = typeof fromBaseRule === "function" ? fromBaseRule(result) : result * fromBaseRule;
  }

  return Number(result.toFixed(8));
};

export const unitData = {
  length: ["Meters", "Kilometers", "Miles", "Feet", "Inches", "Centimeters", "Yards", "Millimeters", "Micrometers", "Nanometers", "Light Years"],
  weight: ["Kilograms", "Pounds", "Grams", "Ounces", "Tons", "Milligrams", "Micrograms", "Imperial Tons", "US Tons", "Stones"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
  volume: ["Liters", "Gallons", "Cubic Meters", "Milliliters", "Cubic Feet", "Cubic Inches", "Quarts", "Pints", "Fluid Ounces"],
  time: ["Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years", "Decades", "Centuries"],
  area: ["Square Meters", "Square Kilometers", "Acres", "Hectares", "Square Miles", "Square Yards", "Square Feet", "Square Inches"],
};

export const unitCategories = [
  { id: "length", label: "Length", icon: "Ruler" },
  { id: "weight", label: "Weight", icon: "Weight" },
  { id: "temperature", label: "Temperature", icon: "Thermometer" },
  { id: "volume", label: "Volume", icon: "Droplet" },
  { id: "time", label: "Time", icon: "Clock" },
  { id: "area", label: "Area", icon: "Globe" },
];

export type UnitCategory = keyof typeof unitData;

