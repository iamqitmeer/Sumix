"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/Spinner";
import { useTheme } from "next-themes";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const [conversionHistory, setConversionHistory] = useState<any[]>([]);

  const getExchangeRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.currencyapi.com/v3/latest?apikey=cur_live_HGE5p7038N9L5Czk6iGE9YaxUYXN7zak5TKiiytI`
      );
      const data = await response.json();
      setCurrencies(data.data);
      setLoading(false);

      const fromRate = data.data[fromCurrency]?.value;
      const toRate = data.data[toCurrency]?.value;
      if (fromRate && toRate) {
        const convertedAmount = (parseFloat(amount) * toRate) / fromRate;
        setResult(convertedAmount.toFixed(2));

        const newConversion = {
          amount,
          fromCurrency,
          toCurrency,
          convertedAmount: convertedAmount.toFixed(2),
          date: new Date().toLocaleString(),
        };
        setConversionHistory([newConversion, ...conversionHistory]);
        localStorage.setItem("currencyHistory", JSON.stringify([newConversion, ...conversionHistory]));
      } else {
        setError("Invalid currency code");
      }
    } catch (error) {
      setLoading(false);
      setError("Failed to fetch exchange rates");
      console.error(error);
    }
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem("currencyHistory");
    if (savedHistory) {
      setConversionHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    getExchangeRates();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white flex flex-col justify-center items-center p-6 transition-colors duration-200">
    
      <Card className="w-full max-w-4xl bg-gray-100 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 shadow-xl">
        <div className="p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black dark:text-white">
            Currency Converter
          </h1>
          <p className="text-center text-gray-600 dark:text-zinc-400 mb-8">
            Real-time currency conversion at your fingertips
          </p>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-1/3">
                <label htmlFor="amount" className="text-sm font-medium text-gray-600 dark:text-zinc-400 mb-2 block">
                  Amount
                </label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-black dark:text-white"
                />
              </div>
              <div className="w-full md:w-1/4">
                <label className="text-sm font-medium text-gray-600 dark:text-zinc-400 mb-2 block">
                  From
                </label>
                <Select value={fromCurrency} onValueChange={setFromCurrency}>
                  <SelectTrigger className="bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-black dark:text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(currencies).map((currency) => (
                      <SelectItem key={currency} value={currency}>
                        {currency} - {currencies[currency]?.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const temp = fromCurrency;
                  setFromCurrency(toCurrency);
                  setToCurrency(temp);
                }}
                className="bg-white dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 text-black dark:text-white"
              >
                <ArrowRightLeft className="h-5 w-5" />
              </Button>
              <div className="w-full md:w-1/4">
                <label className="text-sm font-medium text-gray-600 dark:text-zinc-400 mb-2 block">
                  To
                </label>
                <Select value={toCurrency} onValueChange={setToCurrency}>
                  <SelectTrigger className="bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-black dark:text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(currencies).map((currency) => (
                      <SelectItem key={currency} value={currency}>
                        {currency} - {currencies[currency]?.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={getExchangeRates}
              className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black"
              disabled={loading}
            >
              {loading ? <Spinner className="mr-2" /> : null}
              Convert
            </Button>

            {result !== null && !loading && (
              <div className="p-4 bg-gray-200 dark:bg-zinc-700 border-l-4 border-gray-400 dark:border-zinc-500 rounded-lg">
                <p className="text-xl text-center text-black dark:text-white">
                  <span className="font-semibold">{amount} {fromCurrency}</span> ={" "}
                  <span className="font-semibold">{result} {toCurrency}</span>
                </p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-100 dark:bg-red-900 border-l-4 border-red-500 rounded-lg">
                <p className="text-center text-red-700 dark:text-red-100">{error}</p>
              </div>
            )}
          </div>
        </div>
      </Card>

      <Card className="w-full max-w-4xl mt-8 bg-gray-100 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 shadow-xl">
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Conversion History</h2>
          {conversionHistory.length > 0 ? (
            <ul className="space-y-2">
              {conversionHistory.map((history, index) => (
                <li key={index} className="bg-white dark:bg-zinc-700 p-3 rounded-lg text-black dark:text-white">
                  <p>
                    <strong>{history.amount} {history.fromCurrency}</strong> ={" "}
                    <strong>{history.convertedAmount} {history.toCurrency}</strong>
                    <br />
                    <span className="text-sm text-gray-600 dark:text-zinc-400">{history.date}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-zinc-400">No conversion history found.</p>
          )}
        </div>
      </Card>
    </div>
  );
}
