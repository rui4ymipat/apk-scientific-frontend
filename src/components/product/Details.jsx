import { Box, Grid, ImageListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import ColorUse from '../../assets/theme/ColorUse'

function Details({title="", list=[{id:"", name:"", size:""}], details=""}) { // ======================== function main
  return (
    <Box>
        <Grid container>
            <Grid item xs={12} mb={6}>
                <Typography variant={'h1'} sx={{color:ColorUse.colorPrimary, fontSize: 20, marginBottom:1}} >
                    {title}
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{border:'1px solid #e0e0e0', fontSize:16}}>รหัสสินค้า (ID Product)</TableCell>
                                <TableCell sx={{border:'1px solid #e0e0e0', fontSize:16}}>ชื่อสินค้า (Name Product)</TableCell>
                                <TableCell sx={{border:'1px solid #e0e0e0', fontSize:16}}>ขนาด (Size)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((row, idx)=>{
                                return row.id !== "" ?(
                                    <TableRow key={idx}>
                                        <TableCell sx={{border:'1px solid #e0e0e0', color:ColorUse.colorGray}}>{row.id}</TableCell>
                                        <TableCell sx={{border:'1px solid #e0e0e0', color:ColorUse.colorGray}}>{row.name}</TableCell>
                                        <TableCell sx={{border:'1px solid #e0e0e0', color:ColorUse.colorGray}}>{row.size}</TableCell>
                                    </TableRow>
                                ) : (
                                    <TableRow key={idx}>
                                        <TableCell colSpan={3} align={'center'} sx={{color:ColorUse.colorGray, fontSize:18}} >ไม่พบข้อมูลที่ต้องการ</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            {/* details */}
            <Grid item xs={12} mb={3}>
                <Typography>
                    {details}
                </Typography>
            </Grid>

            {/* categories */}
            <Grid item xs={12} mb={3}>
                <Typography sx={{fontSize:13}} >
                    CATEGORIES :
                    {["EM Hirschmann","สินค้าโปรโมชั่น (Promotions)","เครื่องมือวิทยาศาสตร์ (Scientific instrument)"].map((obj, idx)=>{
                        return (
                            <Typography className='t-btn-link-category' key={idx} component={'span'} >{obj}{idx === 2 ? "":", "}</Typography>
                        )
                    })}
                </Typography>
            </Grid>
            {/* image brand */}
            <Grid item xs={12} mb={3}>
                <ImageListItem>
                    <img src={'https://snp-scientific.com/wp-content/uploads/2021/02/Hirschmann-lOGO-1.png'} style={{width:180}} className={'t-img-fluid'} alt="brand" />
                </ImageListItem>
            </Grid>

        </Grid>
    </Box>
  )
}

export default Details