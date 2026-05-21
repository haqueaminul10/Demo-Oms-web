'use client';

import MarketHeader from '../market-header';
import MarketSummaryCard from '../market-summary';
import TopLoosers from '../top-loosers';
import TopStocks from '../top-stocks';

export default function Market() {
  return (
    <div>
      <MarketHeader />
      <MarketSummaryCard />
      <TopStocks />
      <TopLoosers />
    </div>
  );
}
