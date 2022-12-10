import { Business, LocationOn, Mail, Phone } from '@mui/icons-material'
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import React from 'react'

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
    // lati and longti
    const [center, setCenter] = React.useState({ lat: 13.729723205636661, lng: 100.2653296856315});
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC6j-S3iTqdyRCOfY9e31zvF37Qz1U34DA"
    })
    return (
        <Box className="container-main" sx={{ paddingX: { xs: 3, xl: 5 }, paddingY: { xs: 3, xl: 5 } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={5}>
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

                <Grid item xs={12} lg={7} sx={styles.boxImageMaps}>
                    {
                        isLoaded ? (
                            <GoogleMap
                              mapContainerStyle={{width:'100%', height:450}}
                              center={center}
                              zoom={15}
                            >
                              { /* Child components, such as markers, info windows, etc. */ }
                              <MarkerF position={center} />
                            </GoogleMap>
                        ) : <></>
                    }
                </Grid>
            </Grid>
        </Box>
    )
}
