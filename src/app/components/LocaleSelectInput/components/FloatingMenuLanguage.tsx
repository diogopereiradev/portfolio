import React from 'react';
import { useSSRPathname } from '../../../../shared/hooks/useSSRPathname';
import { SupportedLanguages, languagesFullnameDatabase } from '../../../../shared/i18n/settings';
import { useSSRLocale } from '../../../../shared/hooks/useSSRLocale';

export function FloatingMenuLanguage(props: { locale: string }): JSX.Element {
  const locale = useSSRLocale();
  const pathname = useSSRPathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

  return (
    <li className='w-full h-[45px] hover:bg-primary-100 first:rounded-t-[7px] last:rounded-b-[7px] duration-150'>
      <a
        className='flex items-center text-[15px] w-full h-full px-[15px] text-primary-100 hover:text-primary-500 rounded-[0px] duration-150'
        href={`${props.locale}${pathnameWithoutLocale}`}
      >
        {languagesFullnameDatabase[props.locale as SupportedLanguages]}
      </a>
    </li>
  );
}