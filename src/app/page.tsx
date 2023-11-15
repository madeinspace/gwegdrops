"use client"; 
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import styles from './page.module.css'

const DROPS = [
  {id: 1, name:'Greenwood Island', date:new Date('2023, 9, 11'), media:'Mj-CtgMtmjk',  lat: -12.625240, lng: 130.949268},
  {id: 2, name:'Airyes Inlet', date:new Date('2023, 11, 27'), media:'LOvSxWMm1hw', lat:-38.467995, lng: 144.104330}, 
  {id: 3, name:'Secret Beach - Poda Island', date:new Date('2023, 12, 18'), media:'s8jScp-ENlY', lat:7.970540, lng:98.805951},
  {id: 4, name:'Kata Beach', date:new Date('2023, 9, 23'), media:'jqUBCqGNq6k', lat: 7.813757, lng:98.298382}]
 

export default function GWEG() {



  const Map = useMemo(() => dynamic(
    () => import('./components/Map'),
    { 
      loading: () => <p>Gweg is loading</p>,
      ssr: false
    }
  ), [])


  return (
    <main className={styles.main}>
      <Map drops={DROPS}/>
    </main>
  )
}
