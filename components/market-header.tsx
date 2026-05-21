'use client';

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const MarketHeader = () => {
  const [exchange, setExchange] = useState('dse');
  const [marketType, setMarketType] = useState('main');

  return (
    <div className='w-full bg-[#EAF7F9] border-b border-[#D0EDF0] px-4 py-2.5 grid grid-cols-3 items-center font-sans select-none'>
      {/* 1. Left Side: Trading Label (Slightly larger and bolder) */}
      <div className='flex justify-start'>
        <span className='text-[#007A48] font-extrabold text-base tracking-wide'>
          Trading
        </span>
      </div>

      {/* 2. Center: DSE Select Dropdown */}
      <div className='flex justify-center'>
        <Select value={exchange} onValueChange={setExchange}>
          {/* - px-4 py-1.5 bg-[#F0F9FA] rounded-xl: Creates the pill background container
            - items-center gap-2: Enforces perfect horizontal alignment between text and arrow
          */}
          <SelectTrigger className='h-auto border-0 bg-[#F4FAFB]/80 px-4 py-1.5 rounded-xl text-[#002D62] font-black text-base focus:ring-0 focus:ring-offset-0 gap-2 [&>svg]:hidden transition-colors hover:bg-[#E2F2F5]'>
            <span className='leading-none flex items-center'>
              {exchange.toUpperCase()}
            </span>
            {/* Inline crisp triangle drop indicator */}
            <div className='w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-b-[6px] border-b-[#002D62] rotate-180 self-center mt-0.5' />
          </SelectTrigger>
          <SelectContent
            align='center'
            className='bg-white font-bold text-slate-800'
          >
            <SelectItem value='dse' className='cursor-pointer'>
              DSE
            </SelectItem>
            <SelectItem value='cse' className='cursor-pointer'>
              CSE
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 3. Right Side: Main Select Dropdown */}
      <div className='flex justify-end'>
        <Select value={marketType} onValueChange={setMarketType}>
          <SelectTrigger className='h-auto border-0 bg-[#F4FAFB]/80 px-4 py-1.5 rounded-xl text-[#475569] font-black text-base focus:ring-0 focus:ring-offset-0 gap-2 [&>svg]:hidden transition-colors hover:bg-[#E2F2F5]'>
            <span className='leading-none flex items-center'>
              {marketType === 'main' ? 'main' : marketType.toUpperCase()}
            </span>
            {/* Inline slate grey triangle drop indicator */}
            <div className='w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-b-[6px] border-b-[#475569] rotate-180 self-center mt-0.5' />
          </SelectTrigger>
          <SelectContent
            align='end'
            className='bg-white font-bold text-slate-800'
          >
            <SelectItem value='main' className='cursor-pointer'>
              MAIN
            </SelectItem>
            <SelectItem value='sme' className='cursor-pointer'>
              SME
            </SelectItem>
            <SelectItem value='atb' className='cursor-pointer'>
              ATB
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MarketHeader;
