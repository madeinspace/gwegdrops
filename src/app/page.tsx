"use client"; 
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import styles from './page.module.css'

const DROPS = [
  {id: 1, name:'Greenwood Island', date:new Date('2023, 8, 27').toLocaleDateString(), media:'5OVRmLpkP1E',  lat: -12.625240, lng: 130.949268},
  {id: 2, name:'Airyes Inlet', date:new Date('2023, 9, 13').toLocaleDateString(), media:'KtO8zl2eISI', lat:-38.467995, lng: 144.104330}, 
  {id: 3, name:'Secret Beach - Poda Island', date:new Date('2023, 10, 22').toLocaleDateString(), media:'ntJfb8BXAyE', lat:7.970540, lng:98.805951},
  {id: 4, name:'Kata Beach', date:new Date('2023, 10, 26').toLocaleDateString(), media:'vgouERzN7ik', lat: 7.813757, lng:98.298382}]
 

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
