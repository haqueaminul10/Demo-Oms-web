'use client';

import React from 'react';
import { useBottomNav } from './provider';

const Market = React.lazy(() => import('../bottom-tabs/Market'));
const WatchList = React.lazy(() => import('../bottom-tabs/WatchList'));
const Quote = React.lazy(() => import('../bottom-tabs/Quote'));
const Portfolio = React.lazy(() => import('../bottom-tabs/Portfolio'));
const Trade = React.lazy(() => import('../bottom-tabs/Trade'));

export default function TabOutlet() {
  const { activeTab } = useBottomNav();

  if (!activeTab) return null;

  let Comp: React.LazyExoticComponent<React.ComponentType<any>> | null = null;

  switch (activeTab) {
    case 'Market':
      Comp = Market;
      break;
    case 'Watch List':
      Comp = WatchList;
      break;
    case 'Quote':
      Comp = Quote;
      break;
    case 'Portfolio':
      Comp = Portfolio;
      break;
    case 'Trade':
      Comp = Trade;
      break;
    default:
      Comp = null;
  }

  if (!Comp) return null;

  return (
    <React.Suspense fallback={<div className='p-4'>Loading...</div>}>
      <div className='min-h-[200px] '>
        <Comp />
      </div>
    </React.Suspense>
  );
}
