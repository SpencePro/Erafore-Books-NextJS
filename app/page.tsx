// 'use client'
import Image from 'next/image'
import {
  Button
  , Grid
} from '@mui/material'

// Components
import { Welcome } from './ui/home/welcome';
import { About } from './ui/home/about';
import { OnSale } from './ui/home/on-sale';
import { Latest } from './ui/home/latest';

export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Welcome/>

      <OnSale/>

      <Latest/>

      <About/>
    </main>
  )
}
