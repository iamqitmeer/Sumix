"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const commonCurrencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "BTC", name: "Bitcoin" },
  { code: "ETH", name: "Ethereum" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  // Mock exchange rate for demonstration
  const mockConvert = () => {
    const rates: { [key: string]: number } = {
      USD: 1,
      EUR: 0.85,
      GBP: 0.73,
      JPY: 110.5,
      AUD: 1.35,
      CAD: 1.25,
      CHF: 0.92,
      CNY: 6.45,
      BTC: 0.000021,
      ETH: 0.00031,
    };

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    const converted = (parseFloat(amount) / fromRate) * toRate;
    setResult(converted);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Currency Converter</h1>
        
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="amount" className="text-sm font-medium">
                Amount
              </label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Select value={fromCurrency} onValueChange={setFromCurrency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {commonCurrencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const temp = fromCurrency;
                    setFromCurrency(toCurrency);
                    setToCurrency(temp);
                  }}
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2 md:col-start-2">
                <label className="text-sm font-medium">To</label>
                <Select value={toCurrency} onValueChange={setToCurrency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {commonCurrencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={mockConvert} className="w-full">
              Convert
            </Button>

            {result !== null && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-center text-lg">
                  {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}