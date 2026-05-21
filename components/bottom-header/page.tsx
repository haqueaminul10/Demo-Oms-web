'use client';

import { useBottomNav } from '@/components/bottom-nav/provider';
import {
  TrendingUp,
  ListPlus,
  Copy,
  Briefcase,
  ArrowLeftRight,
} from 'lucide-react';

const BottomHeader = () => {
  // Use shared bottom-nav state
  const { activeTab, setActiveTab } = useBottomNav();

  const navigationItems = [
    { id: 'Market', label: 'Market', icon: TrendingUp },
    { id: 'Watch List', label: 'Watch List', icon: ListPlus },
    { id: 'Quote', label: 'Quote', icon: Copy },
    { id: 'Portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'Trade', label: 'Trade', icon: ArrowLeftRight },
  ];

  return (
    <div className='fixed bottom-0 left-0 right-0 w-full bg-white border-t border-slate-200 z-50 h-16'>
      <div className='grid grid-cols-5 w-full h-full items-center'>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
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
