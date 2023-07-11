'use client';
import React, { useEffect } from 'react';
import { TechnologyData } from '../@types/experiences.type';
import { useExperiences } from '../hooks/useExperiences';

export function TechnologySelectButton({ data, selected }: { data: TechnologyData, selected?: boolean }): JSX.Element {
  const { updateData, setSelectedTechnology, selectedTechnology } = useExperiences();

  const handleClick = () => {
    updateData(data);
    setSelectedTechnology(data.name);
  };

  useEffect(() => {
    if(selected) handleClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li>
      <button
        onClick={handleClick}
        className={`
          w-[160px] 
          max-w-[160px] 
          rounded-[0px] 
          text-left 
          font-[400] 
          text-primary-100 
          hover:bg-primary-0
          border-l-[3px] 
          ${selectedTechnology === data.name? 'border-l-primary-100 bg-primary-0 text-secondary-100' : 'bg-transparent border-l-primary-0'}
        `}
      >
        {data.name}
      </button>
    </li>
  );
}