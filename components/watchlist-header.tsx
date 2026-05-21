'use client';

import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Sliders, Star, Hash } from 'lucide-react';

export default function WatchlistHeader() {
  return (
    <div>
      <div className='w-full flex items-center gap-3 bg-white px-3 py-2  shadow-sm'>
        <div className='flex items-center gap-2'>
          <Select>
            <SelectTrigger size='sm' aria-label='DSE'>
              <SelectValue>DSE</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value='all'>All Markets</SelectItem> */}
              <SelectItem value='dse'>DSE</SelectItem>
              <SelectItem value='cse'>CSE</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger size='sm' aria-label='Select sector'>
              <SelectValue>MAIN</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value='all'>All Sectors</SelectItem> */}
              <SelectItem value='textile'>MAIN</SelectItem>
              <SelectItem value='pharma'>ATB</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger size='sm' aria-label='Select sort'>
              <SelectValue>PUBLIC</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='alpha'>PUBLIC</SelectItem>
              <SelectItem value='value'>By Invested Value</SelectItem>
              <SelectItem value='change'>By Change</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex-1' />

        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-2 text-sm text-slate-700'>
            <span>Favourite</span>
          </button>

          <button
            aria-label='Filter'
            className='p-2 rounded-md hover:bg-slate-100'
          >
            <Sliders className='w-5 h-5 text-slate-600' />
          </button>
        </div>
      </div>

      {/* <div className=' w-full'>
        <div className='w-full bg-white  shadow-sm'>
          <div className='flex items-center text-sm text-slate-600 px-3 py-2'>
            <div className='flex-1 flex items-center gap-3'>
              <div className='bg-white border border-slate-200 rounded-md p-1 flex items-center justify-center'>
                <Hash className='w-4 h-4 text-slate-700' />
              </div>
              <div>
                <div className='font-medium text-slate-800'>Symbol</div>
                <div className='text-xs text-muted-foreground'>Description</div>
              </div>
            </div>

            <div className='w-48 text-right'>
              <div className='font-medium text-slate-800'>Last Traded</div>
              <div className='text-xs text-muted-foreground'>Volume</div>
            </div>

            <div className='w-28 text-right'>
              <div className='font-medium text-slate-800'>% Chg</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
