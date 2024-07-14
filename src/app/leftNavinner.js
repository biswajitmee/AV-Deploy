import React from 'react'
import Link from 'next/link';
function LeftNavInner() {
  return (
    <>
        <div className="leftPanel absolute inset-0 flex items-center w-64 h-full z-40">
      <div className="pl-3">
        <div className="one left_nav">
          <Link href="/designerPage"> Tees </Link>
        </div>
        <div className="two left_nav">
          <Link href="/casualPage"> Hoodies </Link>
        </div>
        <div className="three left_nav">
          <Link href="/athleisurePage"> Sweatshirts </Link>
        </div>
        <div className="four left_nav">
          <Link href="/loungePage"> Sweatpants </Link>
        </div>
        <div className="five left_nav">
          <Link href="/highstreetPage"> & More </Link>
        </div>
    
      </div>
    </div>

    </>
  )
}

export default LeftNavInner;