'use client';

import MarketHeader from '../market-header';
import MarketSummaryCard from '../market-summary';
import TopInvestmentSector from '../top-investment-sector';

import TopStocks from '../top-stocks';

export default function Market() {
  return (
    <div>
      <MarketHeader />
      <MarketSummaryCard />
      <TopStocks />
      <TopInvestmentSector />
    </div>
  );
}
