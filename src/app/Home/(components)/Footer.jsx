"use client";
import React from 'react'
import useMediaQuery from '@/app/(hooks)/useMediaQuery';
import DesktopFooter from './DesktopFooter';
import MobileBottomMenu from './MobileBottomMenu';

function Footer() {

  const isResponsive = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {
        isResponsive ? <DesktopFooter /> : <MobileBottomMenu />
      }

    </>
  )
}

export default Footer;