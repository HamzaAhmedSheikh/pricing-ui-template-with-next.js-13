"use client"

import { Box } from '@chakra-ui/react';
import { Header  } from '../components/Header';
import { Pricing } from '../components/Pricing';

export default function Home() {
  return (
    <div>
      <Header />
      <Pricing />
    </div>
  )
}
