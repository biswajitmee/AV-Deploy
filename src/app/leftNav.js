import React from 'react'
import Link from 'next/link';


function LeftNav() {
  return (
    <>
        <div className="leftPanel absolute inset-0 flex items-center w-64 h-full z-40">
      <div className="pl-3">
        <div className="one left_nav">
          <Link href="/designerPage"> Designer </Link>
        </div>
        <div className="two left_nav">
          <Link href="/casualPage"> Casual </Link>
        </div>
        <div className="three left_nav">
          <Link href="/athleisurePage"> Athleisure </Link>
        </div>
        <div className="four left_nav">
          <Link href="/loungePage"> Lounge </Link>
        </div>
        <div className="five left_nav">
          <Link href="/highstreetPage"> High Street </Link>
        </div>
        <div className="six left_nav">
          <Link href="/athleticPage"> Athletic </Link>
        </div>
        <div className="seven left_nav">
          <Link href="/swimPage"> Swim </Link>
        </div>
        <div className="eight left_nav">
          <Link href="/denimPage"> Denim </Link>
        </div>
        <div className="nine left_nav">
          <Link href="/fullfashionPage"> Full-fashion </Link>
        </div>
        <div className="ten left_nav">
          <Link href="/outdoorsPage">Outdoors </Link>
        </div>
        <div className="eleven left_nav">
          <Link href="/othersPage"> Others </Link>
        </div>
      </div>
    </div>







    </>
  )
}

export default LeftNav