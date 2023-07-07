import { useContext } from 'react';
import { ExperiencesContext } from '../context/experiencesContext';

export const useExperiences = () => useContext(ExperiencesContext);