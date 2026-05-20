'use client';

import { useState } from 'react';
import {
  TrendingUp,
  ListPlus,
  Copy,
  Briefcase,
  ArrowLeftRight,
} from 'lucide-react';

const BottomHeader = () => {
  // Local state to manage which tab is currently selected
  const [activeTab, setActiveTab] = useState('Market');

  const navigationItems = [
    { id: 'Market', label: 'Market', icon: TrendingUp },
    { id: 'Watch List', label: 'Watch List', icon: ListPlus },
    { id: 'Quote', label: 'Quote', icon: Copy },
    { id: 'Portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'Trade', label: 'Trade', icon: ArrowLeftRight },
  ];

  return (
    <div className='w-full bg-white border-t border-slate-200 '>
      <div className='grid grid-cols-5 w-full'>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className='flex flex-col items-center justify-center gap-1 focus:outline-none'
            >
              {/* Dynamic color application based on active state */}
              <Icon
                className={`w-6 h-6 transition-colors ${
                  isActive
                    ? 'text-[#157145] stroke-[2.5]'
                    : 'text-slate-500 stroke-[2]'
                }`}
              />
              <span
                className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-[#157145]' : 'text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomHeader;
