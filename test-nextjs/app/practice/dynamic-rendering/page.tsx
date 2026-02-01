import React from 'react'
import Box from '@/components/Box';
import DynamicServerComponent from '@/components/DynamicServerComponent';

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>DynamicRenderingPage</h1>
      <DynamicServerComponent text="DynamicServerComponentへのprops"/>
    </Box>
  )
}

export default DynamicRenderingPage;


