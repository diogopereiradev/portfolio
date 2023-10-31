import React from 'react';
import { locales } from '../../../../../i18n';

export function FloatingMenuLanguage(props: { locale: string }): JSX.Element {
  return (
    <li className='w-full h-[45px] hover:bg-primary-100 first:rounded-t-[7px] last:rounded-b-[7px] duration-150'>
      <a
        className='flex items-center text-[15px] w-full h-full px-[15px] text-primary-100 hover:text-primary-500 rounded-[0px] duration-150'
        href={`/${props.locale}/`}
      >
        {locales[props.locale as keyof typeof locales].fullname}
      </a>
    </li>
  );
}