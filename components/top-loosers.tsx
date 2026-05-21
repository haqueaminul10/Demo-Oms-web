'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Structured sample dataset containing 10 rows matching your stock format
const sampleStockData = [
  {
    symbol: 'ROBI PB',
    lastTraded: '12.10',
    lastQty: '9,295',
    change: '-0.20',
    pctChange: '-1.63%',
    isPositive: false,
  },
  {
    symbol: 'GP PB',
    lastTraded: '12.10',
    lastQty: '9,295',
    change: '+0.20',
    pctChange: '+1.63%',
    isPositive: true,
  },
  {
    symbol: 'PRAGATILIF PB',
    lastTraded: '12.10',
    lastQty: '9,295',
    change: '+0.20',
    pctChange: '+1.63%',
    isPositive: true,
  },
  {
    symbol: 'INTECH PB',
    lastTraded: '12.10',
    lastQty: '9,295',
    change: '-0.20',
    pctChange: '-1.63%',
    isPositive: false,
  },
  {
    symbol: 'EGEN PB',
    lastTraded: '12.10',
    lastQty: '9,295',
    change: '-0.20',
    pctChange: '-1.63%',
    isPositive: false,
  },
  {
    symbol: 'SUNLIFEINS PB',
    lastTraded: '12.10',
    lastQty: '9,295',
    change: '-0.20',
    pctChange: '-1.63%',
    isPositive: false,
  },
  {
    symbol: 'BATBC PB',
    lastTraded: '518.30',
    lastQty: '1,420',
    change: '+4.50',
    pctChange: '+0.88%',
    isPositive: true,
  },
  {
    symbol: 'SQURPHARMA',
    lastTraded: '212.10',
    lastQty: '5,630',
    change: '-1.20',
    pctChange: '-0.56%',
    isPositive: false,
  },
  {
    symbol: 'RENATA PB',
    lastTraded: '745.00',
    lastQty: '850',
    change: '0.00',
    pctChange: '0.00%',
    isPositive: null,
  },
  {
    symbol: 'BEXIMCO PB',
    lastTraded: '115.60',
    lastQty: '23,100',
    change: '-2.10',
    pctChange: '-1.78%',
    isPositive: false,
  },
];

const TopLoosers = () => {
  // Keeps track of expanded row indices for detailed view toggles
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className='w-full bg-[#EAF7F9] font-sans select-none text-slate-800 '>
      <h3 className='text-red-800 font-extrabold p-4'>Top Loosers</h3>
      {/* Table Header Row Layout */}
      <div className='grid grid-cols-12 gap-1 px-4  bg-slate-100/80 border-b border-[#D0EDF0] text-[11px] font-bold text-slate-500 uppercase tracking-tight'>
        <div className='col-span-4 flex items-center'>Symbol</div>
        <div className='col-span-3 text-right flex items-center justify-end'>
          Last Traded
        </div>
        <div className='col-span-2 text-right flex items-center justify-end'>
          Last Qty
        </div>
        <div className='col-span-3 text-right flex items-center justify-end'>
          Chg / %Chg
        </div>
      </div>

      {/* Table Body Container Layout */}
      <div className='divide-y divide-[#D0EDF0]/60'>
        {sampleStockData.map((stock, index) => {
          const isExpanded = !!expandedRows[index];

          // Determine color profiles based on real-time trade action state
          let badgeBg = 'bg-slate-200/80';
          let textColor = 'text-slate-700';
          if (stock.isPositive === true) {
            badgeBg = 'bg-[#007A48]/10';
            textColor = 'text-[#007A48]';
          } else if (stock.isPositive === false) {
            badgeBg = 'bg-[#E11D48]/10';
            textColor = 'text-[#E11D48]';
          }

          return (
            <div
              key={index}
              className='w-full bg-transparent transition-colors hover:bg-[#F4FAFB]/50'
            >
              {/* Primary Interactive Row Data Grid Line */}
              <div
                onClick={() => toggleRow(index)}
                className='grid grid-cols-12 gap-1 px-4 py-2 items-center text-xs font-bold cursor-pointer'
              >
                {/* 1. Symbol Column with inline dynamic chevron */}
                <div className='col-span-4 flex items-center gap-1 text-slate-900 font-extrabold tracking-wide'>
                  {isExpanded ? (
                    <ChevronUp className='w-3.5 h-3.5 text-slate-400 shrink-0' />
                  ) : (
                    <ChevronDown className='w-3.5 h-3.5 text-slate-400 shrink-0' />
                  )}
                  <span className='truncate'>{stock.symbol}</span>
                </div>

                {/* 2. Last Traded Value */}
                <div className='col-span-3 text-right text-slate-900 font-extrabold'>
                  {stock.lastTraded}
                </div>

                {/* 3. Last Traded Quantity */}
                <div className='col-span-2 text-right text-slate-500 font-semibold text-[11px]'>
                  {stock.lastQty}
                </div>

                {/* 4. Compact Combined Change Indicators */}
                <div className='col-span-3 flex flex-col items-end justify-center'>
                  <div
                    className={`w-full max-w-[76px]  px-1.5 rounded text-[10px] font-black text-center leading-none ${badgeBg} ${textColor}`}
                  >
                    <div>{stock.change}</div>
                    <div className='text-[9px] mt-0.5 opacity-90'>
                      {stock.pctChange}
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapsible Mobile Row Extension (Perfect for touch interfaces) */}
              {isExpanded && (
                <div className='px-4 pb-3 pt-0 text-[11px] text-slate-500 font-medium flex gap-4 items-center animate-fadeIn'>
                  <div className='bg-white/60 px-2  rounded border border-[#D0EDF0]'>
                    Row Index:{' '}
                    <span className='font-bold text-slate-800'>
                      #{index + 1}
                    </span>
                  </div>
                  <p>
                    Additional stock analysis metrics can be loaded here
                    interactively.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopLoosers;
