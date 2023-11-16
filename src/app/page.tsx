"use client"; 
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState, useMemo } from 'react';
import styles from './page.module.css';

const DynamicMap = dynamic(() => import('./components/Map'), { ssr: false });

export default function GWEG() {
  const [dropData, setDropData] = useState(null);

  useEffect(() => {
    const fetchDrops = async () => {
      try {
        const response = await fetch('/api/getDrops');
        const data = await response.json();
        setDropData(data);
      } catch (error) {
        console.error('Error fetching Drops:', error);
      }
    };

    fetchDrops();
  }, []);

  const MemoizedMap = useMemo(() => DynamicMap, []);

  return (
    <main className={styles.main}>
      <Suspense fallback={<div>Gweg Loading...</div>}>
        {dropData && <MemoizedMap drops={dropData} />}
      </Suspense>
    </main>
  );
}
