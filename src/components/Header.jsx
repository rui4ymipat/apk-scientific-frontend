import { Call, Facebook, Search } from '@mui/icons-material'
import { Box, 
    Grid,
    IconButton,
    Typography,
    ImageListItem,
    TextField,
    NativeSelect,
    FormControl,
    Button,
    Modal,

} from '@mui/material'
import React, {useState} from 'react'

function Header() { // ============= function main
    const [modalToggle, setModalToggle] = useState(false);
  return (
    <Box >
        {/*  */}
        <Grid container alignItems={'center'} paddingY={1} sx={{paddingX:{xs:3, xl: 5}}} >
            <Grid item xs={6} >
                <Typography variant="h1" color={"#00005f"} sx={{fontSize: 14, fontWeight: 1000}}>
                    บริษัท กขคง จำกัด
                </Typography>
            </Grid>
            <Grid item xs={6} textAlign={'end'} display='flex' justifyContent={'end'} >
                <IconButton sx={{p:0, display: {xs: 'none', lg: 'flex'}, '&:hover':{
                    background: '#00005f',
                    color:'#fff',
                }}} >
                    <Facebook sx={{padding: '2px', fontSize: 24}} />
                </IconButton>
                <IconButton onClick={()=>setModalToggle(true)} sx={{p:0, display: {xs: '', lg: 'none'}}}>
                    <Search sx={{padding: '2px', fontSize: 24}} />
                </IconButton>
            </Grid>
            <Modal
                open={modalToggle}
                onClose={()=>setModalToggle(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  sx={{ background:'#f4f4f4', borderRadius: 3, px:3, py:1, mt:2, mx:2 }}>
                    <FormControl sx={{width: '100%',color:'red'}} size="small">
                        {/* <InputLabel  variant="standard" htmlFor="uncontrolled-native">Age</InputLabel> */}
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                            }}
                        >
                            <option value={""}>All Category</option>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                    <Grid container sx={{my:1}}>
                        <Grid item xs={10}>
                            <TextField id="input-with-sx" fullWidth variant="standard" size='small' placeholder='Search...' />
                        </Grid>
                        <Grid item xs={2}>
                            <Button sx={{width:'100%',color:'white', backgroundColor:'#00005f', my: 0, p:0}}>
                                <Search sx={{ fontSize:30 }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Grid>

        {/* NavBanner */}
        <Grid container alignItems={'center'} paddingX={4} paddingY={5} sx={{display: {xs: 'none', lg: 'flex'}}} >
            <Grid item xs={12} lg={4} >
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography component={'a'} href={'/'} >
                        <ImageListItem >
                            <img src='https://snp-scientific.com/wp-content/uploads/2022/02/snp-logo04.png' style={{width: 250}} alt='logo' loading='lazy' />
                        </ImageListItem>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ display: 'flex', alignItems: 'flex-end', background:'#f4f4f4', borderRadius: 15, px:3, py:1 }} >
                <TextField id="input-with-sx" fullWidth variant="standard" size='small' placeholder='Search...' />
                <FormControl sx={{minWidth: 150,color:'red'}} size="small">
                    {/* <InputLabel  variant="standard" htmlFor="uncontrolled-native">Age</InputLabel> */}
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                        }}
                    >
                        <option value={""}>All Category</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
                <Button sx={{color:'gray', my: 0, p:0}}>
                    <Search sx={{ fontSize:30 }} />
                </Button>
            </Grid>
            <Grid item sm={12} lg={4} >
                <Box>
                    <Typography component={'p'} color={"#d54500"} display={'flex'} alignItems={'center'} justifyContent={'flex-end'} >
                        สอบถามรายละเอียด
                    </Typography>
                    <Typography component={'p'} color={"#d54500"} fontWeight={1000} display={'flex'} alignItems={'center'} justifyContent={'flex-end'} >
                        <Call sx={{mr:1}} /> 02-1235678-90
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Header