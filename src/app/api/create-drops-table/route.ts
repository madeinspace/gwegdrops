import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Drops ( id INT PRIMARY KEY,
        name VARCHAR(255),
        date VARCHAR(255),
        media VARCHAR(255),
        lat DECIMAL(9, 6),
        lng DECIMAL(9, 6) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
