'use client';

type Sector = {
  id: string;
  label: string;
  value: string; // display like '118.78cr'
  percent: number; // 0-100 for bar length
  color?: string;
};

const defaultSectors: Sector[] = [
  {
    id: 'textile',
    label: 'Textile',
    value: '118.78cr',
    percent: 95,
    color: 'bg-rose-500',
  },
  {
    id: 'pharma',
    label: 'PharmaChem',
    value: '112.94cr',
    percent: 91,
    color: 'bg-amber-500',
  },
  {
    id: 'engineering',
    label: 'Engineering',
    value: '108.31cr',
    percent: 88,
    color: 'bg-lime-500',
  },
  {
    id: 'cement',
    label: 'Cement',
    value: '81.58cr',
    percent: 66,
    color: 'bg-sky-500',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    value: '74.40cr',
    percent: 60,
    color: 'bg-blue-500',
  },
];

export default function TopInvestmentSector({
  sectors = defaultSectors,
  title = 'Top Invested Sectors',
}: {
  sectors?: Sector[];
  title?: string;
}) {
  return (
    <div className='w-full  bg-[#EAF7F9]  text-black p-4'>
      <div className='flex items-center justify-between mb-3'>
        <h3 className='text-sm font-semibold tracking-wide'>{title}</h3>
        <div className='text-slate-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      </div>

      <ul className='space-y-3'>
        {sectors.map((s) => (
          <li key={s.id} className='flex flex-col'>
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center gap-3'>
                <div className='h-2 w-8 rounded-full bg-slate-700' />
                <span className='text-sm font-medium'>{s.label}</span>
              </div>
              <span className='text-sm text-slate-300'>{s.value}</span>
            </div>

            <div className='w-full h-3 bg-slate-700 rounded-full overflow-hidden'>
              <div
                className={`${s.color} h-full rounded-full transition-width duration-300`}
                style={{ width: `${s.percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
