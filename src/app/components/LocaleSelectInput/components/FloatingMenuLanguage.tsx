import React from 'react';
import { useSSRPathname } from '../../../../shared/hooks/useSSRPathname';
import { SupportedLanguages, languagesFullnameDatabase } from '../../../../shared/i18n/settings';
import { useSSRLocale } from '../../../../shared/hooks/useSSRLocale';

export function FloatingMenuLanguage(props: { locale: string }): JSX.Element {
  const locale = useSSRLocale();
  const pathname = useSSRPathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

  return (
    <li className='w-full h-[50px] hover:bg-primary-200 first:rounded-t-[10px] last:rounded-b-[10px] duration-150'>
      <a
        className='flex items-center text-[15px] w-full h-full px-[15px] hover:text-primary-300 rounded-[0px]'
        href={`${props.locale}${pathnameWithoutLocale}`}
      >
        {languagesFullnameDatabase[props.locale as SupportedLanguages]}
      </a>
    </li>
  );
}