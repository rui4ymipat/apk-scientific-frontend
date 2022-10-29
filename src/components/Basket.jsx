import { ShoppingBasket } from '@mui/icons-material'
import { Badge, Fab } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Basket() {
  return (
    <Box sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 99
    }}>
        <Fab sx={{
            color:'white', background:'#00005f',
            ':hover':{ color:'#00005f' }
            }} >
            <Badge color='error' badgeContent={10} max={9} >
                <ShoppingBasket/>
            </Badge>
        </Fab>
    </Box>
  )
}

export default Basket