"use client"

import React from 'react';

import Navigator from './navigator';

interface layoutProps extends React.HTMLProps<HTMLDivElement> {};

const NavigatorLayout = ({ className="", children}: layoutProps) => {
  return (
    <div className={`${className}`}>
      {children}
      <Navigator/>
    </div>
  );
};

export default NavigatorLayout;