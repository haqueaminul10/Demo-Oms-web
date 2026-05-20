'use client';

import Marquee from 'react-fast-marquee';
import { Triangle, Minus } from 'lucide-react';

// Sample stock data structured exactly like your image ticker items
const sampleTickerData = [
  { symbol: 'AAMRANET', value: '12.00', change: 'up' },
  { symbol: 'AAMRATECH', value: '12.00', change: 'up' },
  { symbol: 'AAMRANET', value: '0.00', change: 'down' },
  { symbol: 'AAMRATECH', value: '0.00', change: 'flat' },
  { symbol: 'AAMRANET', value: '12.00', change: 'up' },
  { symbol: 'AAMRATECH', value: '0.00', change: 'flat' },
  { symbol: 'AAMRANET', value: '0.00', change: 'down' },
  { symbol: 'AAMRATECH', value: '0.00', change: 'down' },
];

const MarketTicker = () => {
  return (
    <div className='w-full bg-[#EAF7F9] py-1.5 border-b border-slate-200 overflow-hidden select-none'>
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {sampleTickerData.map((item, index) => {
          // Determine layout colors and icons based on status
          let statusColor = 'text-[#007A48]'; // Positive Green
          let StatusIcon = (
            <Triangle className='w-3 h-3 fill-current transform rotate-0' />
          );

          if (item.change === 'down') {
            statusColor = 'text-[#E11D48]'; // Negative Red
            StatusIcon = (
              <Triangle className='w-3 h-3 fill-current transform rotate-180' />
            );
          } else if (item.change === 'flat') {
            statusColor = 'text-[#3B82F6]'; // Neutral Blue
            StatusIcon = <Minus className='w-3.5 h-3.5 stroke-[3]' />;
          }

          return (
            <div
              key={index}
              className='flex items-center gap-1.5 mx-5 text-xs font-bold text-slate-800'
            >
              {/* Stock Name truncates with dots like image */}
              <span className='tracking-wide'>
                {item.symbol.length > 7
                  ? `${item.symbol.slice(0, 6)}...`
                  : item.symbol}
              </span>

              {/* Colored status indicators and values */}
              <div className={`flex items-center gap-1 ${statusColor}`}>
                {StatusIcon}
                <span>{item.value}</span>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarketTicker;
