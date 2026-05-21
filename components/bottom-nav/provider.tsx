'use client';

import React, { createContext, useContext, useState } from 'react';

type TabId = 'Market' | 'Watch List' | 'Quote' | 'Portfolio' | 'Trade' | null;

type BottomNavContextValue = {
  activeTab: TabId;
  setActiveTab: (t: TabId) => void;
  clear: () => void;
};

const BottomNavContext = createContext<BottomNavContextValue | undefined>(
  undefined,
);

export const BottomNavProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('Market');

  return (
    <BottomNavContext.Provider
      value={{ activeTab, setActiveTab, clear: () => setActiveTab(null) }}
    >
      {children}
    </BottomNavContext.Provider>
  );
};

export function useBottomNav() {
  const ctx = useContext(BottomNavContext);
  if (!ctx)
    throw new Error('useBottomNav must be used within BottomNavProvider');
  return ctx;
}

export default BottomNavProvider;
