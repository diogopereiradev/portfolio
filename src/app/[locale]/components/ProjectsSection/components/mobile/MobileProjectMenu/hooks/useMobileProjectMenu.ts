'use client';
import { useContext } from 'react';
import { MobileProjectMenuContext } from '../context/mobileProjectMenuContext';

export const useMobileProjectMenu = () => useContext(MobileProjectMenuContext);