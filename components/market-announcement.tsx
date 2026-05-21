'use client';

import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const MarketAnnouncement = () => {
  const announcements = [
    {
      id: 1,
      title: 'DSE NEWS: Withdrawal of Authorized Representatives',
      symbol: 'DSEX',
      price: '6.40',
      change: 'down',
      time: '14:58',
    },
    {
      id: 2,
      title: 'MIDASFIN: Emphasis of Matters',
      symbol: 'MIDASFIN/PB',
      price: '12.12',
      change: 'up',
      time: '14:57',
    },
    {
      id: 3,
      title: 'DSE NEWS: Withdrawal of Authorized Representatives',
      symbol: 'DSEX',
      price: '6.40',
      change: 'down',
      time: '14:58',
    },
    {
      id: 4,
      title: 'DSE NEWS: Withdrawal of Authorized Representatives',
      symbol: 'DSEX',
      price: '6.40',
      change: 'down',
      time: '14:58',
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bell className='w-5 h-5' />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-80 p-0'>
        <div className='max-h-64 overflow-y-auto'>
          {announcements.map((a, i) => (
            <div
              key={a.id}
              className={`flex items-start gap-3 px-4 py-3 ${
                i !== announcements.length - 1
                  ? 'border-b border-slate-100'
                  : ''
              }`}
            >
              <div className='pt-0.5'>
                <Bell className='w-4 h-4 text-slate-500' />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='text-sm font-medium text-slate-900 truncate'>
                  {a.title}
                </div>

                <div className='flex items-center justify-between mt-1'>
                  <div className='flex items-center gap-3 text-xs text-slate-500'>
                    <span className='font-semibold text-slate-700'>
                      {a.symbol}
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        a.change === 'up' ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {a.price}
                    </span>
                  </div>

                  <div className='text-xs text-slate-400'>{a.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DropdownMenuSeparator />
        <div className='px-3 py-2 text-center text-sm text-slate-600'>
          View all announcements
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MarketAnnouncement;
