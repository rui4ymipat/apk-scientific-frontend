
import { ChevronLeft, ExpandCircleDown, ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuHam from '@mui/icons-material/Menu';
import {
    AppBar, Box, Button, Container,
    Grid,
    Typography,
    Menu,
    MenuItem,
    ImageListItem,
    IconButton
} from '@mui/material';
import React, {
    useState
} from 'react';
import DrawerMenu from './DrawerMenu';

const pages = ['หน้าหลัก (HOME)', 'สินค้าใหม่ (NEW PRODUCTS)', 'สินค้า', 'ข่าวสาร/บทความ (NEWS/ARTICLES)', 'เกี่ยวกับเรา', 'ติดต่อเรา (CONTACT US)'];

export default function Navbar() { // *************************************** function main 
    const [actionMunuProducts, setActionMunuProducts] = React.useState(null);
    return (
        <AppBar position='sticky' color='inherit' sx={{ boxShadow: 'none' }}>
            <Container maxWidth="xl" sx={{border: '1px solid #d0d0d0', borderRight: 'none', borderLeft: 'none'}}>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    <Button sx={{
                        color: "#00005f",
                        borderRadius: 0,
                        py:2,
                        px:3,
                        '&:hover':{
                            background:'#00005f',
                            color:'white'
                        },
                    }}>
                        {"หน้าหลัก (HOME)"}
                    </Button>

                    <Button sx={{
                        color: "#00005f",
                        borderRadius: 0,
                        py:2,
                        px:3,
                        '&:hover':{
                            background:'#00005f',
                            color:'white'
                        },
                    }}>
                        {"สินค้าใหม่ (NEW PRODUCTS)"}
                    </Button>
                    <Button sx={{
                        color:  Boolean(actionMunuProducts) ? 'white' : '#00005f',
                        borderRadius: 0,
                        py:2,
                        px:3,
                        backgroundColor: Boolean(actionMunuProducts) ? '#00005f' : 'white',
                        '&:hover':{
                            background:'#00005f',
                            color:'white'
                        },
                    }}
                        id="button_products"
                        aria-controls={Boolean(actionMunuProducts) ? 'menu_products' : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(actionMunuProducts) ? 'true' : undefined}
                        onClick={(event)=>setActionMunuProducts(event.currentTarget)}
                        endIcon={Boolean(actionMunuProducts)?<ExpandLess />:<ExpandMore />}
                    >
                        {"สินค้า"}
                    </Button>
                    {/* List popupmenu */}
                    <Menu
                        id="menu_products"
                        anchorEl={actionMunuProducts}
                        open={Boolean(actionMunuProducts)}
                        onClose={()=>setActionMunuProducts(null)}
                        MenuListProps={{
                        'aria-labelledby': 'button_products',
                        }}
                    >
                        <MenuItem onClick={()=>setActionMunuProducts(null)}>เครื่อง 1</MenuItem>
                        <MenuItem onClick={()=>setActionMunuProducts(null)}>เครื่อง 1</MenuItem>
                        <MenuItem onClick={()=>setActionMunuProducts(null)}>เครื่อง 1</MenuItem>
                        <MenuItem onClick={()=>setActionMunuProducts(null)}>เครื่อง 1</MenuItem>
                    </Menu>

                    <Button sx={{
                        color: "#00005f",
                        borderRadius: 0,
                        py:2,
                        px:3,
                        '&:hover':{
                            background:'#00005f',
                            color:'white'
                        },
                    }}>
                        {"ข่าวสาร/บทความ (NEWS/ARTICLES)"}
                    </Button>
                    <Button sx={{
                        color: "#00005f",
                        borderRadius: 0,
                        py:2,
                        px:3,
                        '&:hover':{
                            background:'#00005f',
                            color:'white'
                        },
                    }}>
                        {"เกี่ยวกับเรา"}
                    </Button>

                    <Button sx={{
                        color: "#00005f",
                        borderRadius: 0,
                        py:2,
                        px:3,
                        '&:hover':{
                            background:'#00005f',
                            color:'white'
                        },
                    }}>
                        {"ติดต่อเรา (CONTACT US)"}
                    </Button>

                </Box>

                {/* Mobile Mode */}
                <Box sx={{display: {xs:'flex', md: 'none'}, justifyContent: 'space-between', alignItems: 'center', paddingY: 2}}>
                    <Typography component={'a'} href={'/'} >
                        <ImageListItem >
                            <img src='https://snp-scientific.com/wp-content/uploads/2022/02/snp-logo04.png' style={{width: 250}} alt='logo' loading='lazy' />
                        </ImageListItem>
                    </Typography>
                    <IconButton sx={{background: '#00005f', color:'white', borderRadius: 2}}>
                        <MenuHam sx={{fontSize: 25}} />
                    </IconButton>
                </Box>
            </Container>
            {/* mobile mode menu */}
            <DrawerMenu anchor={'right'} />
        </AppBar>
    )
}
