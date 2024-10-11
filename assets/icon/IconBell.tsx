import Svg, { Path, Rect } from 'react-native-svg';
import React from 'react';

export const IconBell = ({
  color = '#71717A',
  width = 16,
  height = 16,
}: any) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M18.02 11.8002V8.91016C18.02 5.61016 15.32 2.91016 12.02 2.91016C8.71 2.91016 6.02 5.60016 6.02 8.91016V11.8002C6.02 12.4102 5.76 13.3402 5.45 13.8602L4.3 15.7702C3.59 16.9502 4.08 18.2602 5.38 18.7002C9.69 20.1402 14.34 20.1402 18.65 18.7002C19.86 18.3002 20.39 16.8702 19.73 15.7702"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <Path
      d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.9 21.1801C9.36 20.6401 9.02 19.8801 9.02 19.0601"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </Svg>
);
