import { useState, useEffect } from 'react';
import { conversionLogic, UnitCategory, unitData } from '../utils/conversionLogic';

interface ConversionHistory {
  fromValue: number;
  fromUnit: string;
  toValue: number;
  toUnit: string;
  category: UnitCategory;
}

export const useUnitConverter = () => {
  const [activeTab, setActiveTab] = useState<UnitCategory>('length');
  const [fromUnit, setFromUnit] = useState<string | null>(null);
  const [toUnit, setToUnit] = useState<string | null>(null);
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<ConversionHistory[]>([]);
  const [favorites, setFavorites] = useState<ConversionHistory[]>([]);
  const [error, setError] = useState<string | null>(null); // Added error state

  useEffect(() => {
    setFromUnit(null);
    setToUnit(null);
    setResult(null);
  }, [activeTab]);

  useEffect(() => {
    setToUnit(null);
    setResult(null);
  }, [fromUnit]);

  const handleConvert = () => {
    if (fromUnit && toUnit) {
      try {
        const convertedValue = conversionLogic(value, fromUnit, toUnit);
        setResult(convertedValue);

        const newConversion: ConversionHistory = {
          fromValue: value,
          fromUnit,
          toValue: convertedValue,
          toUnit,
          category: activeTab,
        };

        setHistory((prev) => [newConversion, ...prev.slice(0, 9)]);
      } catch (err) {
        setError('Conversion failed. Please check the units and try again.');
      }
    } else {
      setError('Please select both units before converting.');
    }
  };

  const toggleFavorite = (conversion: ConversionHistory) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (fav) =>
          fav.fromUnit === conversion.fromUnit &&
          fav.toUnit === conversion.toUnit &&
          fav.category === conversion.category
      );
      if (exists) {
        return prev.filter(
          (fav) =>
            !(
              fav.fromUnit === conversion.fromUnit &&
              fav.toUnit === conversion.toUnit &&
              fav.category === conversion.category
            )
        );
      } else {
        return [...prev, conversion];
      }
    });
  };

  const isFavorite = (conversion: ConversionHistory) =>
    favorites.some(
      (fav) =>
        fav.fromUnit === conversion.fromUnit &&
        fav.toUnit === conversion.toUnit &&
        fav.category === conversion.category
    );

  // Clear History Function
  const clearHistory = () => setHistory([]);

  // Clear Favorites Function
  const clearFavorites = () => setFavorites([]);

  return {
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
    clearHistory,  // Added clearHistory
    clearFavorites, // Added clearFavorites
    error, // Added error state
    setError, // Added setError function
    units: unitData[activeTab],
  };
};
