import { Box,
    Grid,
    Typography,

} from '@mui/material'
import React from 'react'
import Details from '../components/product/Details'
import Gallery from '../components/product/Gallery'
import ProductsSlide from '../components/product/ProductsSlide'

function Product() { // ======== function main
    const data = {
        title:"เครื่องดูดจ่ายสารละลายแบบอัตโนมัติ ชนิดไม่มีวาล์ว Dispenser Ceramus Classic",
        details: `
        เป็นเครื่องดูดจ่ายสารละลายอัตโนมัติ
        สามารถต่อเข้ากับขวดบรรจุสารละลายกรด ด่าง หรือตัวทำละลาย (Solvent) ได้
        สามารถหมุนได้ 360 องศาเมื่อต่อเข้ากับขวดบรรจุสารละลายแล้ว เพื่อความสะดวกในการใช้งาน
        มีค่า Precision 0.6% และค่า Reproducibility 0.2%
        ชิ้นส่วนพลาสติกที่สัมผัสสารละลายทำจาก Fluoroplastic (PTFE) ,วาล์วทำจาก ECTFE และลูกสูบ(Piston) ทำจากเซรามิก ซึ่งทนต่อการกัดกร่อนของสารเคมี
        มี Adapter สำหรับต่อเข้ากับขวดขนาดต่าง ๆ
        มีตัวปรับปริมาตรที่สามารถเลื่อนปรับปริมาตรได้ตามต้องการ
        สามารถนำไปนึ่งฆ่าเชื้อได้ที่อุณหภูมิ 121 องศาเซลเซียส
        มีใบรับรองคุณภาพ (Quaility Certificate)
        `,
        list:[{id:'9330000', name:'Dispenser Ceramus Classic', size:'1-5 ml'},{id:'9340000', name:'Dispenser Ceramus Classic', size:'20-50 ml'},]
    }
    return (
        <Box sx={{paddingX:{xs:3, xl: 5}, paddingY:{xs:3, xl:5}}}>
            <Grid container>
                <Grid item xs={12} lg={6} xl={5} >
                    <Gallery />
                </Grid>
                <Grid item xs={12} lg={6} xl={7} >
                    <Details title={data.title} list={data.list} details={data.details} />
                </Grid>
                <Grid item xs={12} >
                    <Typography sx={{fontSize:14, textTransform:'uppercase', fontWeight:'600', color:'#444', borderBottom:'1px solid #e0e0e0', pb:1}}>
                        Related products
                    </Typography>
                    <ProductsSlide />
                </Grid>
            </Grid>
        </Box>
    )
};

export default Product