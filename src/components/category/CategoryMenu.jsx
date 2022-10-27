import { ExpandMore } from '@mui/icons-material'
import { Box,
    Typography,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Link,
    MenuList,
    MenuItem,
} from '@mui/material'
import React, { useState } from 'react'

const style = {
    callapseHead:{
        backgroundColor: 'rgba(0,0,0,0)',
        boxShadow:'none',
    },
    linkMenu:{
        color:'#696969', ':hover':{color:'#00005f'}, textDecoration:'none', width:'100%', height:'100%'
    }
};

function CategoryMenu({data = [{id:0, title:'', main_path: '', list:[{id:0, listTitle: ''}]}]}) { // ================ function main
    // coding......

    const [expandCate, setExpandCate] = useState(true);
    return data.length > 0 ? (
        <Box className='content-menu-category' >
            <Grid container>
                <Grid item xs={12}>
                    <Accordion sx={style.callapseHead} expanded={expandCate} onChange={()=>setExpandCate(!expandCate)} >
                        <AccordionSummary sx={{'.MuiAccordionSummary-content.Mui-expanded':{color:'#00005f'}}} id="cate_header" expandIcon={<ExpandMore />} aria-controls="cate_header_content" >
                            <Typography component={'p'}>
                                ค้นหาสินค้าตามชนิดสินค้า
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MenuList>
                            {data.map((menu)=>{
                                return menu.list.length > 0 ? (
                                    <MenuItem key={menu.id} sx={{}}>
                                        <Accordion sx={[style.callapseHead, {width:'100%'}]}>
                                            <AccordionSummary sx={{p:0, '.MuiAccordionSummary-content.Mui-expanded':{color:'#00005f'}}} id={"cate_list"+menu.id} expandIcon={<ExpandMore />} aria-controls={"cate_list_content"+menu.id}>
                                                <Typography noWrap={true}>{menu.title}</Typography> 
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <MenuList>
                                                    {menu.list.map((sub_menu, idx)=>{
                                                        return (
                                                            <Link key={idx} href='#' sx={[style.linkMenu]} >
                                                                <Typography noWrap={true}>
                                                                {sub_menu.listTitle}
                                                                </Typography>
                                                            </Link>
                                                        )
                                                    })}
                                                </MenuList>
                                            </AccordionDetails>
                                        </Accordion>
                                    </MenuItem>
                                ) : (
                                    <MenuItem key={menu.id} sx={{}}>
                                        <AccordionSummary sx={{p:0, width: '100%', height: '100%'}}>
                                            <Link href='#' sx={[style.linkMenu]} >
                                                <Typography noWrap={true}>{menu.title}</Typography> 
                                            </Link>
                                        </AccordionSummary>
                                    </MenuItem>
                                )
                            })}

                            </MenuList>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Box>
    ) : (
        <Box>

        </Box>
    )
}

export default CategoryMenu