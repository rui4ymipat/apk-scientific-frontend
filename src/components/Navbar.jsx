
import { ExpandLess, ExpandMore, Preview } from '@mui/icons-material';
import MenuHam from '@mui/icons-material/Menu';
import {
    AppBar, Box, Button, Container,
    Grid,
    Typography,
    Menu,
    MenuItem,
    ImageListItem,
    IconButton,
    Link
} from '@mui/material';
import React, {
    useState
} from 'react';
import DrawerMenu from './DrawerMenu';

const DropdownCusMenu = ({data={id: 0, title: "", path: "", list: [{listTitle: '', listUrl: ""}]}}) =>{
    const [actionMunuProducts, setActionMunuProducts] = React.useState(null);
    return (
        <>
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
                id={"button_products"+data.id}
                aria-controls={Boolean(actionMunuProducts) ? 'menu_products'+data.id : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(actionMunuProducts) ? 'true' : undefined}
                onClick={(event)=>setActionMunuProducts(event.currentTarget)}
                endIcon={Boolean(actionMunuProducts)?<ExpandLess />:<ExpandMore />}
            >
                {data.title}
            </Button>
            {/* List popupmenu */}
            <Menu
                id={"menu_products"+data.id}
                anchorEl={actionMunuProducts}
                open={Boolean(actionMunuProducts)}
                onClose={()=>setActionMunuProducts(null)}
                MenuListProps={{
                'aria-labelledby': 'button_products'+data.id,
                }}
            >
                {data.list.map((item, idx)=>(
                    <MenuItem key={idx} onClick={()=>setActionMunuProducts(null)}>
                        <Link href={item.listUrl} underline={'none'}>
                            {item.listTitle}{data.path}{item.listUrl}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default function Navbar() { // *************************************** function main 
    const [actionHamburger, setActionHamburger] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            title: "หน้าหลัก (HOME)",
            path: "/",
            list: []
        },
        {
            id: 2,
            title: "สินค้าใหม่ (NEW PRODUCTS)",
            path: "/category",
            list: []
        },
        {
            id: 3,
            title: "สินค้า",
            path: "/products",
            list: [{listTitle: 'เครื่องมือทางการใช้ 1', listUrl: "/tools1"}]
        },
        {
            id: 4,
            title: "ข่าวสาร/บทความ (NEWS/ARTICLES)",
            path: "/new-articles",
            list: []
        },
        {
            id: 5,
            title: "เกี่ยวกับเรา",
            path: "/about-us",
            list: []
        },
        {
            id: 6,
            title: "ติดต่อเรา (CONTACT US)",
            path: "/contact-us",
            list: []
        },
    ]);
    return (
        <AppBar position='sticky' color='inherit' sx={{ boxShadow: 'none', borderTop: '0.75px solid #e0e0e0', borderBottom: '0.75px solid #e0e0e0'}}>
            <Container maxWidth={'100%'} sx={{borderRight: 'none', borderLeft: 'none', paddingX:{xs:3, xl: 5}}}>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    {data.map(obj=>{
                        return obj.list.length < 1 ? (
                        <Button href={obj.path} key={obj.id} sx={{
                            color: "#00005f",
                            borderRadius: 0,
                            py:2,
                            px:3,
                            '&:hover':{
                                background:'#00005f',
                                color:'white'
                            },
                        }}>
                            {obj.title}
                        </Button>
                        ) : (
                            <DropdownCusMenu key={obj.id} data={obj} />
                        )
                    })}
                   
                </Box>

                {/* Mobile Mode */}
                <Box sx={{display: {xs:'flex', md: 'none'}, justifyContent: 'space-between', alignItems: 'center', paddingY: 2}}>
                    <Typography component={'a'} href={'/'} >
                        <ImageListItem >
                            <img src='https://snp-scientific.com/wp-content/uploads/2022/02/snp-logo04.png' style={{width: 250}} alt='logo' loading='lazy' />
                        </ImageListItem>
                    </Typography>
                    <IconButton onClick={()=>setActionHamburger(true)} sx={{background: '#00005f', color:'white', borderRadius: 2}}>
                        <MenuHam sx={{fontSize: 25}} />
                    </IconButton>
                </Box>
            </Container>
            {/* mobile mode menu */}
            <DrawerMenu anchor={'right'} open={actionHamburger} close={setActionHamburger} items={data} />
        </AppBar>
    )
}
