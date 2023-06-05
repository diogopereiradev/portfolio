'use client';
import { useContext } from 'react';
import { MobileMenuContext } from '../context/mobileMenuContext';

export const useMobileMenu = () => useContext(MobileMenuContext);