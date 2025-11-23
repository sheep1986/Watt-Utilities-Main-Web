import { useState, useEffect } from 'react';

export interface MarketData {
  status: string;
  trend: 'up' | 'down' | 'stable';
  price: string;
  color: string;
  diff: string;
}

export const useMarketWatch = () => {
  const [marketData, setMarketData] = useState<MarketData>({
    status: 'Rates Dropping',
    trend: 'down',
    price: '14.20',
    color: 'text-emerald-400',
    diff: '-0.5%'
  });

  useEffect(() => {
    // Simulate live market movements for Wholesale Electricity (approx p/kWh)
    const interval = setInterval(() => {
      setMarketData(prev => {
        const currentPrice = parseFloat(prev.price);
        // Bias slightly downwards to align with "Rates Dropping" marketing, but allow fluctuations
        const movement = (Math.random() - 0.6) * 0.08; 
        const newPrice = Math.max(12, currentPrice + movement);
        const pctChange = (movement / currentPrice) * 100;

        let status = 'Stable';
        let trend: 'up' | 'down' | 'stable' = 'stable';
        let color = 'text-blue-300';

        if (pctChange < -0.02) {
            status = 'Rates Dropping';
            trend = 'down';
            color = 'text-emerald-400';
        } else if (pctChange > 0.02) {
            status = 'Market Volatility';
            trend = 'up';
            color = 'text-red-400';
        } else {
            status = 'Market Stable';
            trend = 'stable';
            color = 'text-blue-300';
        }

        return {
          status,
          trend,
          price: newPrice.toFixed(2),
          color,
          diff: `${pctChange > 0 ? '+' : ''}${pctChange.toFixed(2)}%`
        };
      });
    }, 3500); // Update every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return marketData;
};