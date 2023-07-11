'use client';
import React, { createContext, useState } from 'react';
import { TechnologyData } from '../@types/experiences.type';

export type ExperiencesContextProps = {
  selectedTechnology: string,
  data: TechnologyData,
  setSelectedTechnology(name: string): void,
  updateData(newdata: TechnologyData): void
};

export const ExperiencesContext = createContext<ExperiencesContextProps>({} as ExperiencesContextProps);

export type ExperiencesContextProviderStateProps = {
  selectedTechnology: string,
  data: TechnologyData
};

export function ExperiencesContextProvider({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element {
  const [data, setData] = useState<ExperiencesContextProviderStateProps>({
    selectedTechnology: '',
    data: {
      name: '',
      description: '',
      knowledges: [],
      icon: <></>,
      techExperience: {
        started: new Date()
      }
    }
  });

  const setSelectedTechnology = (name: string) => setData(old => ({ ...old, selectedTechnology: name }));

  const updateData = (newdata: TechnologyData) => setData(old => ({ ...old, data: newdata }));

  return(
    <ExperiencesContext.Provider value={{
      selectedTechnology: data.selectedTechnology,
      data: data.data,
      setSelectedTechnology,
      updateData
    }}>
      {children}
    </ExperiencesContext.Provider>
  );
}