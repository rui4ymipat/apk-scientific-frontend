import { Business, LocationOn, Mail, Phone } from '@mui/icons-material'
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const styles = {
    boxImageMaps:{
        '& .img-wait-zoom':{
            maxWidth:'100%'
        }
    }
};

const dataContact = {
    name: 'APK Scientific',
    address_th: '88/20 หมู่ 2 ตำบลไร่ขิง อำเภอสามพราน จังหวัดนครปฐม 73210',
    address_en: '88/20 Moo 2, Rai Khing , Sam Phran , Nakhon Pathom 73210',
    tel: '034-103-314 , 099-421-6688',
    email: 'marketing@apk-scientific.com',
}

export default function ContactUs() {
    return (
        <Box sx={{ paddingX: { xs: 3, xl: 5 }, paddingY: { xs: 3, xl: 5 } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <Box>
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <Business />
                                </ListItemIcon>
                                <ListItemText
                                    primary={dataContact.name}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOn />
                                </ListItemIcon>
                                <ListItemText
                                    primary={dataContact.address_th}
                                    secondary={dataContact.address_en}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Phone />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`โทร. ${dataContact.tel}`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Mail />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Email: ${dataContact.email}`}
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6} sx={styles.boxImageMaps}>
                    <Box className='box-img-zoom'>
                        <Zoom>
                            <img className='img-wait-zoom' src="https://snp-scientific.com/wp-content/uploads/2022/03/map-2022.jpg" alt="map" />
                        </Zoom>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
