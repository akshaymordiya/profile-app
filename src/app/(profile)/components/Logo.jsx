import React from 'react'
import { Box } from "@mui/material";
import Image from 'next/image'

const Logo = ({ visible = true }) => {
  return (
    <Box sx={{ height: '100%', display: visible ? 'inline-block' : 'none'}}>
      <Image src="/logo.svg" width={38} height={31} alt='Akshay Moradiya' />
    </Box>
  )
}

export default Logo