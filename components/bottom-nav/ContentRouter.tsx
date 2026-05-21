'use client';

import React from 'react';
import { useBottomNav } from './provider';
import TabOutlet from './TabOutlet';

export default function ContentRouter({ children }: React.PropsWithChildren) {
  const { activeTab } = useBottomNav();

  if (activeTab) {
    return <TabOutlet />;
  }

  return <>{children}</>;
}
