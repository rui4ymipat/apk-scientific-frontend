import { Pagination } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ColorUse from '../assets/theme/ColorUse';

export default function PaginationCategory({pagination={ total: 12, pageSize: 12, pageNumber: 1 }, onChange=()=>{}, value=1 }) {
    const numpage = pagination.total / pagination.pageSize ;
    return (
        <Stack>
            <Pagination sx={{
                justifyContent:'center',
                display:'flex',
                '& .MuiButtonBase-root.Mui-selected':{
                    backgroundColor: ColorUse.colorPrimary,
                    color:'#fff'
                }
            }} count={numpage.toFixed()} size={'large'} page={value} onChange={(_, valPage)=>{onChange(valPage)}} shape="rounded" variant="outlined" />
        </Stack>
    )
}
