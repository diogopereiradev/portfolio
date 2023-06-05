import React, { SVGProps } from 'react';

export function LogoIcon({ ...props }: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M40 3930 l0 -580 405 0 405 0 0 -1370 0 -1370 1174 0 1175 0 134 25 c483 89 900 288 1172 561 261 261 454 630 542 1034 35 161 43 437 18 612 -123 876 -752 1500 -1660 1648 -116 19 -178 20 -1742 20 l-1623 0 0 -580z m3053 -619 c176 -45 314 -125 424 -245 112 -122 169 -268 180 -458 21 -378 -176 -670 -535 -794 l-97 -34 -477 0 -478 0 0 775 0 775 453 0 c416 0 460 -2 530 -19z" />
      </g>
    </svg>
  );
}