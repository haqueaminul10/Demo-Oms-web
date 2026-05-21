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

type SparklineProps = {
  points: number[];
  className?: string;
  isNegative: boolean;
  isNeutral: boolean;
};

function Sparkline({
  points,
  className = '',
  isNegative,
  isNeutral,
}: SparklineProps) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const width = 100;
  const height = 36;

  const scaled = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p - min) / Math.max(1, max - min)) * height;
    return { x, y };
  });

  const pathD = scaled
    .map(
      (pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(2)} ${pt.y.toFixed(2)}`,
    )
    .join(' ');
  const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  // Dynamic sparkline asset coloring mapped directly to performance values
  const strokeColor = isNeutral
    ? '#64748b'
    : isNegative
      ? '#ef4444'
      : '#10b981';
  const fillColor = strokeColor;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      <path d={areaD} fill={fillColor} opacity={0.08} />
      <path
        d={pathD}
        fill='none'
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default function MarketList() {
  return (
    <div className='mt-3 w-full space-y-2 px-1'>
      {data.map((row) => {
        const isNegative = row.changePercent < 0;
        const isNeutral = row.changePercent === 0;

        // Define clean performance color blocks
        const changeBg = isNeutral
          ? 'bg-slate-500'
          : isNegative
            ? 'bg-[#E11D48]'
            : 'bg-[#007A48]';

        return (
          <div key={row.id} className='w-full'>
            <div className='flex items-center justify-between gap-3 bg-[#EAF7F9] text-slate-800 rounded-xl p-3 border border-[#D0EDF0] shadow-sm'>
              {/* Left Column Section: Avatar Token Indicator & Stock Context Meta */}
              <div className='flex items-start gap-2.5 min-w-0'>
                <div className='w-11 h-11 rounded-lg bg-[#002D62] flex items-center justify-center text-xs font-black text-white uppercase tracking-wider shrink-0 shadow-sm'>
                  {row.symbol.substring(0, 4)}
                </div>

                <div className='text-xs min-w-0 flex flex-col justify-center'>
                  <div className='font-black text-slate-900 truncate tracking-wide text-sm leading-tight'>
                    {row.name}
                  </div>
                  <div className='text-[11px] font-bold text-slate-500 mt-0.5'>
                    H: <span className='text-slate-700'>{row.high}</span> | L:{' '}
                    <span className='text-slate-700'>{row.low}</span>
                  </div>
                  <div className='text-[10px] font-medium text-slate-400 mt-0.5 truncate'>
                    Vol: {row.trVolume} • Trd: {row.trd}
                  </div>
                </div>
              </div>

              {/* Right Column Section: Data Graphing Visuals & Value Badges */}
              <div className='flex items-center gap-3 shrink-0'>
                {/* Embedded Reactive Vector Waveform */}
                <div className='w-24 h-9 flex items-center justify-center bg-white/40 rounded px-1 border border-slate-200/40'>
                  <Sparkline
                    points={row.spark}
                    isNegative={isNegative}
                    isNeutral={isNeutral}
                  />
                </div>

                {/* Performance Price Label pill */}
                <div
                  className={`w-[72px] text-center rounded-lg py-1.5 shadow-sm shrink-0 flex flex-col justify-center ${changeBg}`}
                >
                  <div className='text-xs font-black text-white tracking-tight leading-none'>
                    {row.last.toFixed(2)}
                  </div>
                  <div className='text-[10px] font-black text-white/95 mt-1 leading-none tracking-tighter'>
                    {isNeutral ? '' : isNegative ? '' : '+'}
                    {row.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
