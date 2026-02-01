import React from 'react'
import Box from '@/components/Box';
import DynamicServerComponent from '@/components/DynamicServerComponent';
import StaticClientComponent from '@/components/StaticClientComponent';

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>DynamicRenderingPage</h1>
      <DynamicServerComponent text="DynamicServerComponentへのprops"/>
      <StaticClientComponent text="StaticClientComponentへのprops"/>
    </Box>
  )
}
export default DynamicRenderingPage;


