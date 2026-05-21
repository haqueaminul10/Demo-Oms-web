'use client';

import React from 'react';
import {
  TrendingUp,
  ThumbsUp,
  Sliders,
  List as ListIcon,
  Copy,
  Layers,
  Clock,
  Briefcase,
  FileText,
  User,
  Settings,
} from 'lucide-react';

type Item = { icon: React.ComponentType<any>; label: string };

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <div className='px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider'>
        {title}
      </div>
      <div className='flex flex-col'>
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <button
              key={it.label}
              className='flex items-center gap-3 px-4 py-3 text-sm text-slate-800 hover:bg-slate-50 focus:outline-none'
            >
              <Icon className='w-5 h-5 text-slate-500' />
              <span>{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DrawerMenu() {
  return (
    <div className='w-full'>
      <Section
        title='Market'
        items={[
          { icon: TrendingUp, label: 'Market' },
          { icon: ThumbsUp, label: 'Top Stocks' },
          { icon: Sliders, label: 'Indices' },
          { icon: ListIcon, label: 'Watch List' },
        ]}
      />

      <div className='border-t border-slate-100 my-2' />

      <Section
        title='Quote'
        items={[
          { icon: Copy, label: 'Quote' },
          { icon: Layers, label: 'Market Depth' },
          { icon: Clock, label: 'Time and Sales' },
        ]}
      />

      <div className='border-t border-slate-100 my-2' />

      <Section
        title='Trade'
        items={[
          { icon: Briefcase, label: 'Portfolio' },
          { icon: FileText, label: 'Order List' },
          { icon: User, label: 'Account Summary' },
          { icon: User, label: 'Daily Client Position' },
          { icon: Sliders, label: 'Trade' },
        ]}
      />

      <div className='border-t border-slate-100 my-2' />

      <Section title='Help' items={[{ icon: Settings, label: 'Settings' }]} />
    </div>
  );
}
