'use client';

import { useState } from 'react';
import { Menu, Moon, Search, Bell, X } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const TopHeader = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <nav className='w-full flex items-center justify-between px-4 py-2 bg-white min-h-[48px]'>
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
          <div className='flex items-center gap-4'>
            <Drawer direction='left'>
              <DrawerTrigger asChild>
                <button aria-label='Toggle menu'>
                  <Menu className='w-5 h-5' />
                </button>
              </DrawerTrigger>

              <DrawerContent className='h-full w-[200px] rounded-r-xl rounded-l-none'>
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <div className='px-4 py-2'>
                  <p className='text-sm text-muted-foreground'>
                    Navigation content...
                  </p>
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

            {/* Notification Dropdown Menu */}
            {/* Notification Dropdown Menu */}
            <DropdownMenu>
              {/* Removed asChild, added the aria-label here */}
              <DropdownMenuTrigger aria-label='View notifications'>
                <Bell className='w-5 h-5' />
              </DropdownMenuTrigger>

              <DropdownMenuContent align='end' className='w-64'>
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm font-medium'>Market Alert</p>
                    <p className='text-xs text-muted-foreground'>
                      DSE index dropped by 1.2% today.
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm font-medium'>System Update</p>
                    <p className='text-xs text-muted-foreground'>
                      Your watchlist has been updated.
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
