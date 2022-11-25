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
                                    primary={`บริษัท เอสเอ็นพี ไซเเอนติฟิค จำกัด`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOn />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`22,22/1-22/2-22/3 ซอยสายไหม 58 แขวงสายไหม เขตสายไหม กรุงเทพมหานคร 10220`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Phone />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`02-5636196-99`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Mail />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`snp@snp-scientific.com`}
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
