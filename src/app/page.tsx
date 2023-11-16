"use client"; 
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import styles from './page.module.css'

const DROPS = [
  {id: 1, name:'Greenwood Island', date:'27 August 2023', media:'5OVRmLpkP1E',  lat: -12.625240, lng: 130.949268},
  {id: 2, name:'Airyes Inlet', date:'13 September 2023', media:'KtO8zl2eISI', lat:-38.467995, lng: 144.104330}, 
  {id: 3, name:'Secret Beach - Poda Island', date:'22 October 2023', media:'ntJfb8BXAyE', lat:7.970540, lng:98.805951},
  {id: 4, name:'Kata Beach', date:'26 October 2023', media:'vgouERzN7ik', lat: 7.813757, lng:98.298382}]
 

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
