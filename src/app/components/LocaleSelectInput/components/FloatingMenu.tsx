'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from '../../../../shared/hooks/useLocale';
import { SupportedLanguages, languagesFullnameDatabase, supportedLanguages } from '../../../../shared/i18n/settings';

function Language(props: { locale: string }): JSX.Element {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <li className='w-full h-[50px] hover:bg-primary-200 first:rounded-t-[10px] last:rounded-b-[10px] duration-150'>
      <a
        className='flex items-center text-[15px] w-full h-full px-[15px] hover:text-primary-300 rounded-[0px]'
        href={`${props.locale}${pathname.replace(`/${locale()}`, '')}`}
      >
        {languagesFullnameDatabase[props.locale as SupportedLanguages]}
      </a>
    </li>
  );
}

export function FloatingMenu({ state }: { state: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }): JSX.Element {
  const [isOpen] = state;

  return (
    <div className={`absolute mt-[10px] w-full bg-secondary-200 rounded-[10px] duration-150 ${isOpen? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>
      <ul className='w-full flex flex-col items-center justify-center'>
        {supportedLanguages.map(language => (
          <Language key={language} locale={language} />
        ))}
      </ul>
    </div>
  );
}