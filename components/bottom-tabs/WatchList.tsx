'use client';

import React from 'react';
import WatchlistHeader from '../watchlist-header';
import MarketList from '../market-list';

export default function WatchList() {
  return (
    <div>
      <WatchlistHeader />
      <MarketList />
    </div>
  );
}
