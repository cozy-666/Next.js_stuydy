import React from 'react'
import Box from './Box';

type propsType = {
    text: string;
}


const StaticServerComponent = async ({text}: propsType) => {

    return (
        <Box>
            <h2>StaticServerComponent</h2>
            <p>{text}</p>
        </Box>
    )
}

export default StaticServerComponent