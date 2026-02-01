import React from 'react'
import Box from '@/components/Box';
import StaticServerComponent from '@/components/StaticServerComponent';
import StaticClientComponent from '@/components/StaticClientComponent';

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1>StaticRenderingPage</h1>
      <StaticServerComponent text="StaticServerComponentへのprops"/>
      <StaticClientComponent text="StaticClientComponentへのprops"/>
    </Box>
  )
}
export default StaticRenderingPage;


