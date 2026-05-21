'use client';

import { useState } from 'react';
import { Menu, Moon, Search, Bell, X, Power, User } from 'lucide-react';
import Image from 'next/image';
import logo from '@/components/assets/Logo.png';
import { Input } from '@/components/ui/input';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import DrawerMenu from '@/components/drawer/Menu';
import MarketAnnouncement from '../market-announcement';

const TopHeader = () => {
  const [isSearching, setIsSearching] = useState(false);

  // Simulated login states (Replace with your actual auth context/state)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Anik Rahman');

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-4 bg-white border-b border-slate-200 select-none'>
      {isSearching ? (
        /* Full Width Search View */
        <div className='w-full flex items-center gap-2'>
          <div className='relative w-full flex items-center'>
            <Search className='absolute left-3 w-4 h-4 text-slate-400' />
            <Input
              type='search'
              placeholder='Search...'
              className='w-full pl-9'
              autoFocus
            />
          </div>
          <button
            onClick={() => setIsSearching(false)}
            aria-label='Close search'
          >
            <X className='w-5 h-5 text-slate-500' />
          </button>
        </div>
      ) : (
        /* Default Navbar View */
        <>
          {/* Left Side: Menu (with Drawer) & Logo */}
          <div className='flex items-center gap-4 h-full'>
            <Drawer direction='left'>
              <DrawerTrigger asChild>
                <button aria-label='Toggle menu'>
                  <Menu className='w-5 h-5' />
                </button>
              </DrawerTrigger>

              <DrawerContent className='h-full w-[260px] rounded-r-xl rounded-l-none bg-slate-50 border-r border-slate-200'>
                <DrawerHeader className='border-b border-slate-200/60 pb-4 bg-white rounded-tr-xl'>
                  <div className='flex items-center justify-between w-full'>
                    <DrawerTitle className='text-xs font-bold text-slate-400 uppercase tracking-wider'>
                      Account Profile
                    </DrawerTitle>

                    {/* Power Action Control Button */}
                    <button
                      onClick={() => setIsLoggedIn(!isLoggedIn)}
                      className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                        isLoggedIn
                          ? 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                          : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                      }`}
                      title={isLoggedIn ? 'Logout' : 'Login'}
                      aria-label={isLoggedIn ? 'Logout' : 'Login'}
                    >
                      <Power className='w-4 h-4 stroke-[2.5]' />
                    </button>
                  </div>

                  {/* Contextual Authentication Layout Blocks */}
                  <div className='mt-3 flex items-center gap-3 text-left'>
                    {isLoggedIn ? (
                      <>
                        <div className='w-9 h-9 rounded-full bg-[#EAF7F9] border border-[#D0EDF0] flex items-center justify-center text-[#007A48] shrink-0'>
                          <User className='w-4 h-4 stroke-[2.5]' />
                        </div>
                        <div className='flex flex-col truncate'>
                          <span className='text-sm font-black text-slate-800 truncate leading-none'>
                            {userName}
                          </span>
                          <span className='text-[10px] font-semibold text-emerald-600 mt-1 flex items-center gap-1'>
                            <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
                            Active Trader
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0'>
                          <User className='w-4 h-4' />
                        </div>
                        <div className='flex flex-col'>
                          <span className='text-sm font-bold text-slate-400 italic'>
                            Guest Session
                          </span>
                          <span className='text-[10px] font-medium text-slate-400 mt-0.5'>
                            Please sign in to trade
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </DrawerHeader>

                {/* Main Sidebar Dropdown Navigation Menu */}
                <div className='px-1 py-2 overflow-y-auto h-full'>
                  <DrawerMenu />
                </div>
              </DrawerContent>
            </Drawer>

            <div className='relative h-8 flex items-center'>
              <Image
                src={logo}
                alt='Logo'
                priority
                className='h-full w-auto object-contain'
              />
            </div>
          </div>

          {/* Right Side: DSE, Theme, Notification & Search */}
          <div className='flex items-center gap-4'>
            {/* White text on red background badge */}
            <span className='bg-red-600 text-white text-xs font-bold px-2 py-1 rounded select-none text-center leading-tight'>
              -28.10% <br /> -127.3
            </span>

            <button aria-label='Toggle theme'>
              <Moon className='w-5 h-5' />
            </button>

            {/* Notification Dropdown Menu Implementation */}
            <MarketAnnouncement />

            <button
              onClick={() => setIsSearching(true)}
              aria-label='Open search'
            >
              <Search className='w-5 h-5' />
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default TopHeader;
