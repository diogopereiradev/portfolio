import { useContext } from 'react';
import { MobileProjectMenuContext } from '../context/mobileProjectMenuContext';

export const useMenu = () => useContext(MobileProjectMenuContext);