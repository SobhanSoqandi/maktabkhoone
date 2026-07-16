"use client";

import React from 'react'
import useMediaQuery from '@/app/(hooks)/useMediaQuery';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';



function HeaderPanel() {
  const isResponsive = useMediaQuery("(min-width: 768px)");


  return (
    <>
      {
        isResponsive ? <HeaderDesktop />  : <HeaderMobile />
      }

    </>
  )

}

export default HeaderPanel;
