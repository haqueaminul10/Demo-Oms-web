'use client';

import React from 'react';

type Row = {
  id: string;
  symbol: string;
  name: string;
  last: number;
  changePercent: number;
  changeValue: number | string;
  high: number;
  low: number;
  trVolume: string;
  trd: number;
  spark: number[];
};

const data: Row[] = [
  {
    id: '1',
    symbol: 'AIL',
    name: 'AIL[Z]',
    last: 31.7,
    changePercent: -2.46,
    changeValue: -0.8,
    high: 32.07,
    low: 31.6,
    trVolume: '301,358',
    trd: 494,
    spark: [10, 40, 30, 50, 45, 30, 20],
  },
  {
    id: '2',
    symbol: 'EGEN',
    name: 'EGEN[B]',
    last: 23.0,
    changePercent: -0.86,
    changeValue: -0.2,
    high: 23.5,
    low: 22.9,
    trVolume: '11,1427',
    trd: 767,
    spark: [20, 35, 30, 25, 40, 35, 30],
  },
  {
    id: '3',
    symbol: 'GPH',
    name: 'GPHISPAT[B]',
    last: 16.0,
    changePercent: -0.62,
    changeValue: -0.1,
    high: 16.6,
    low: 15.9,
    trVolume: '4,10,824',
    trd: 200,
    spark: [30, 28, 35, 32, 30, 28, 26],
  },
  {
    id: '4',
    symbol: 'JAM',
    name: 'JAMUNAOIL[A]',
    last: 168.7,
    changePercent: 0.0,
    changeValue: 0,
    high: 169.0,
    low: 168.6,
    trVolume: '7,812',
    trd: 126,
    spark: [50, 52, 51, 50, 49, 50, 50],
  },
  {
    id: '5',
    symbol: 'MON',
    name: 'MONNOAGML[B]',
    last: 353.8,
    changePercent: 1.4,
    changeValue: 4.9,
    high: 355.0,
    low: 344.0,
    trVolume: '40,984',
    trd: 168,
    spark: [20, 22, 25, 30, 40, 50, 60],
  },
];

function Sparkline({ points, className = '' }: { points: number[]; className?: string }) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const width = 100;
  const height = 36;

  const scaled = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p - min) / Math.max(1, max - min)) * height;
    return { x, y };
  });

  const pathD = scaled.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(2)} ${pt.y.toFixed(2)}`).join(' ');
  const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  const strokeColor = '#07202b';
  const fillColor = '#07202b';

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}>
      <path d={areaD} fill={fillColor} opacity={0.06} />
      <path d={pathD} fill="none" stroke={strokeColor} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MarketList() {
  return (
    <div className='mt-3 w-full space-y-3'>
      {data.map((row) => {
        const neg = row.changePercent < 0;
        const changeBg = neg ? 'bg-[#ef4444]' : 'bg-[#10b981]';
        return (
          <div
            key={row.id}
            className='rounded-xl border-2 border-[#06b6d4] p-1'
          >
            <div className='flex items-center justify-between gap-3 bg-[#071827] text-white rounded-md p-3'>
              <div className='flex items-start gap-3'>
                <div className='w-12 h-12 rounded-md bg-[#07202b] border border-[#0b2f3a] flex items-center justify-center text-sm font-semibold text-white'>
                  {row.symbol}
                return (
                  <div key={row.id} className='rounded-xl border-2 border-transparent p-1'>
                    <div className='flex items-center justify-between gap-3 bg-[#a0ecf1] text-black rounded-md p-3'>
                  </div>
                  <div className='text-xs text-[#8b98a1]'>
                    TR: {row.trVolume} | TRD: {row.trd}
                  </div>
                </div>
              </div>

                          <div className='text-xs text-[#0f172a]'>
                            H: {row.high} L: {row.low}
                          </div>
                          <div className='text-xs text-[#0f172a]'>
                            TR: {row.trVolume} | TRD: {row.trd}
                          </div>
                  className={`text-right rounded-lg px-3 py-2 shadow-sm ${changeBg}`}
                >
                  <div className='text-sm font-medium'>{row.last}</div>
                  <div className='text-xs text-white/90'>
                        <div className='w-36 h-10 flex items-center justify-center'>
                          <Sparkline points={row.spark} className='' />
                        </div>

                        <div className={`text-right rounded-lg px-3 py-2 shadow-sm ${changeBg}`}>
                          <div className='text-sm font-medium text-white'>{row.last}</div>
                          <div className='text-xs text-white/90'>
                            {row.changePercent.toFixed(2)}%
                          </div>
                        </div>
