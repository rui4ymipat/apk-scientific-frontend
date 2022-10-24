
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

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <AppBar position='sticky' color='inherit' sx={{ boxShadow: 'none' }}>
            <Container maxWidth="xl" sx={{border: '1px solid #d0d0d0', borderRight: 'none', borderLeft: 'none'}}>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    {pages.map(page=>(
                        <Button key={page} sx={{
                            color: "#00005f",
                            borderRadius: 0,
                            py:2,
                            px:3
                        }}>
                            {page}
                        </Button>
                    ))}
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Dashboard
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
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
