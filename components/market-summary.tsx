'use client';

import React from 'react';
import { CalendarDays, Triangle } from 'lucide-react';

const CondensedMarketSummary = () => {
  return (
    <div className='w-full bg-[#EAF7F9] px-4 py-2 border-b border-[#D0EDF0] font-sans select-none text-slate-800'>
      {/* 1. Top Row: Status, Index Name & Price */}
      <div className='flex items-center justify-between gap-2 pb-1.5'>
        {/* Status + Label */}
        <div className='flex items-center gap-1.5'>
          <span className='text-[10px] font-bold text-[#007A48] bg-[#007A48]/10 px-1.5 py-0.5 rounded uppercase tracking-wider'>
            Open
          </span>
          <div>
            <span className='text-sm font-black text-slate-900 leading-none'>
              DSEX
            </span>
            <span className='hidden sm:inline text-[10px] text-slate-500 ml-1'>
              (Dhaka Index)
            </span>
          </div>
        </div>

        {/* Index Value */}
        <div className='flex items-center gap-1.5 text-right'>
          <span className='text-sm font-black text-slate-900 tracking-tight'>
            4202.21
          </span>
          <span className='flex items-center text-[#007A48] text-[11px] font-bold'>
            <Triangle className='w-2 fill-current mr-0.5' />
            12.00
          </span>
        </div>
      </div>

      {/* 2. New Integrated Micro Chart Section (Placed before middle grid) */}
      <div className='w-full h-14 relative bg-white/40 border border-[#C2E4E8]/40 rounded-lg overflow-hidden mb-2 mt-0.5 flex'>
        {/* Intraday Fluctuating Sparkline Area */}
        <div className='flex-1 h-full relative pl-2 pt-1'>
          <svg
            viewBox='0 0 300 50'
            className='w-full h-full overflow-visible'
            preserveAspectRatio='none'
          >
            {/* Horizontal Dotted Reference Baseline */}
            <line
              x1='0'
              y1='28'
              x2='300'
              y2='28'
              stroke='#94A3B8'
              strokeWidth='1'
              strokeDasharray='3,3'
            />

            {/* Real Intraday Volatility Wave Line */}
            <path
              d='M 0 35 L 15 20 L 30 15 L 45 28 L 60 38 L 75 22 L 90 18 L 105 32 L 120 42 L 135 38 L 150 40 L 165 35 L 180 44 L 195 38 L 210 41 L 225 36 L 240 39 L 255 24 L 270 28 L 285 18 L 300 23'
              fill='none'
              stroke='#007A48'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          {/* Chart Timeline Label Indicator */}
          <span className='absolute left-1 bottom-0.5 text-[8px] font-bold text-slate-500 scale-90Origin-left'>
            10:00
          </span>
        </div>

        {/* Right Margin Axis Metrics Banner Container */}
        <div className='w-16 h-full border-l border-[#C2E4E8]/50 flex flex-col justify-between items-end p-1 text-[8px] font-bold text-slate-400 bg-white/20 shrink-0'>
          <span>4225.00</span>
          {/* Live Position Highlight Ribbon */}
          <span className='bg-[#007A48] text-white text-[9px] px-1 py-0.5 rounded-sm tracking-tighter leading-none w-full text-center font-black my-auto'>
            4202.21
          </span>
          <span>4180.00</span>
        </div>
      </div>

      {/* 3. Middle Grid: Inline 4-Column Core Statistics */}
      <div className='grid grid-cols-4 gap-1 py-1.5 text-center border-t border-b border-[#C2E4E8]/60'>
        <div>
          <span className='block text-[9px] font-bold text-slate-400 uppercase tracking-tight'>
            Turnover(M)
          </span>
          <span className='text-xs font-black text-slate-900'>2,548.77</span>
        </div>
        <div className='border-l border-[#C2E4E8]/60'>
          <span className='block text-[9px] font-bold text-slate-400 uppercase tracking-tight'>
            Volume(M)
          </span>
          <span className='text-xs font-bold text-slate-800'>131.91</span>
        </div>
        <div className='border-l border-[#C2E4E8]/60'>
          <span className='block text-[9px] font-bold text-slate-400 uppercase tracking-tight'>
            Trades
          </span>
          <span className='text-xs font-bold text-slate-800'>103,224</span>
        </div>
        <div className='border-l border-[#C2E4E8]/60'>
          <span className='block text-[9px] font-bold text-slate-400 uppercase tracking-tight'>
            % Cash Map
          </span>
          <div className='flex flex-col items-center justify-center px-1'>
            <span className='text-[10px] font-extrabold text-slate-900 leading-none mb-0.5'>
              0.00%
            </span>
            <div className='w-full h-1.5 bg-[#E11D48] rounded-full overflow-hidden flex'>
              <div className='w-4/5 h-full bg-[#007A48]' />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Grid: Market Breadth Indicators (Ups, Downs, etc.) */}
      <div className='flex items-center justify-between pt-1.5 text-[11px] font-bold'>
        <div className='flex gap-3 text-center'>
          <div>
            <span className='text-[#007A48]'>▲ 254</span>
            <span className='text-[9px] block font-medium text-slate-400'>
              Ups
            </span>
          </div>
          <div>
            <span className='text-[#E11D48]'>▼ 127</span>
            <span className='text-[9px] block font-medium text-slate-400'>
              Downs
            </span>
          </div>
          <div>
            <span className='text-blue-500'>● 62</span>
            <span className='text-[9px] block font-medium text-slate-400'>
              Unchg
            </span>
          </div>
        </div>

        {/* Total Symbols & Info */}
        <div className='flex items-center gap-2 text-right'>
          <div>
            <span className='text-slate-900 font-black'>443</span>
            <span className='text-[9px] block font-medium text-slate-400'>
              Traded
            </span>
          </div>
          <div className='flex items-center gap-1 text-[10px] font-medium text-slate-500 border-l border-[#C2E4E8]/60 pl-2'>
            <CalendarDays className='w-3 h-3 text-slate-400' />
            <span>17 Jul, 11:12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CondensedMarketSummary;
