import { FormatListBulleted, Widgets } from '@mui/icons-material';
import { Grid,
    Box,
    TextField,
    Button,
    Typography
} from '@mui/material';
import React, {useEffect, useState} from 'react'
import CategoryMenu from '../components/category/CategoryMenu';
import ListCateItem from '../components/category/ListCateItem';

function Category() { // ================================= function main
    const [sortBy, setSortBy] = useState("popularity");
    const [countProductShow, setcountProductShow] = useState(10);
    const [showDataGrid, setShowDataGrid] = useState(true);

    const [products, setproducts] = useState([]);
    const [menuCategory, setMenuCategory] = useState([]);

    useEffect(() => {
        setproducts([
            {
                id:1, 
                product_name:"UTL 25 digital Inline ULTRA-TURRAX เครื่องบดปั่น ความเร็วสูงชนิดต่อเนื่อง",
                img: "https://snp-scientific.com/wp-content/uploads/2022/03/hph02-300x300.jpg",
                categoryOther: [
                    { id:1, title: 'IKA' },
                    { id:2, title: 'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)' },
                ]
            },
            {
                id:2, 
                product_name:"UTL 25 digital Inline ULTRA-TURRAX เครื่องบดปั่น ความเร็วสูงชนิดต่อเนื่อง",
                img: "https://snp-scientific.com/wp-content/uploads/2022/07/magic-PLANT-2-300x300.jpg",
                categoryOther: [
                    { id:1, title: 'IKA' },
                    { id:2, title: 'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)' },
                ]
            },
            {
                id:3, 
                product_name:"UTL 25 digital Inline ULTRA-TURRAX เครื่องบดปั่น ความเร็วสูงชนิดต่อเนื่อง",
                img: "https://snp-scientific.com/wp-content/uploads/2022/07/habitat-300x300.jpg",
                categoryOther: [
                    { id:1, title: 'IKA' },
                    { id:2, title: 'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)' },
                ]
            },
            {
                id:4, 
                product_name:"UTL 25 digital Inline ULTRA-TURRAX เครื่องบดปั่น ความเร็วสูงชนิดต่อเนื่อง",
                img: "https://snp-scientific.com/wp-content/uploads/2022/07/habitat-300x300.jpg",
                categoryOther: [
                    { id:1, title: 'IKA' },
                    { id:2, title: 'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)' },
                ]
            },
            {
                id:5, 
                product_name:"UTL 25 digital Inline ULTRA-TURRAX เครื่องบดปั่น ความเร็วสูงชนิดต่อเนื่อง",
                img: "https://snp-scientific.com/wp-content/uploads/2022/07/habitat-300x300.jpg",
                categoryOther: [
                    { id:1, title: 'IKA' },
                    { id:2, title: 'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)' },
                ]
            },
        ]);
        setMenuCategory([
            {
                id:1,
                title:'สินค้าใหม่ (New Product)',
                main_path: '/category',
                list:[]
            },
            {
                id:2,
                title:'เครื่องแก้ววิทยาศาสตร์ (Glassware)เครื่องแก้ววิทยาศาสตร์ (Glassware)',
                main_path: '/category',
                list:[]
            },
            {
                id:3,
                title:'สินค้าใหม่ (New Product)',
                main_path: '/category',
                list:[{id:1, listTitle: 'ปิเปตต์ (Pipette) / บิวเรต (ฺBurette)ปิเปตต์ (Pipette) / บิวเรต (ฺBurette)'}]
            },
            {
                id:4,
                title:'เครื่องแก้ววิทยาศาสตร์ (Glassware)',
                main_path: '/category',
                list:[{id:1, listTitle: 'ปิเปตต์ (Pipette) / บิวเรต (ฺBurette)'}]
            },
        ]);
    }, []);

    return (
    <Box sx={{paddingX:{xs:3, xl: 5}, paddingY:{xs:3, xl:5}}}>
        {/* phase 1 */}
        <Grid container flexDirection={{xs:'column-reverse', lg:'row'}} spacing={5} sx={{marginBottom:8}} >
            {/* Category Menu */}
            <Grid item xs={12} lg={3} >
                <Box>
                    <Box p={2} border={'0.5px solid #e0e0e0'} borderBottom={'none'} >
                        <Typography sx={{fontSize:18, fontWeight: 600, mb:1}}>ค้นหาสินค้า</Typography>
                        <TextField 
                        sx={{
                            width:'100%',
                            marginBottom: 2
                        }}
                        id="search_input" label="Search" variant="standard" />
                        <Button sx={{backgroundColor:'#00005f', color:'#fff', ':hover': {backgroundColor:'#00009f'}}}>
                            <Typography>ค้าหา</Typography>
                        </Button>
                    </Box>
                    <Box border={'0.5px solid #e0e0e0'}>
                        {menuCategory.length > 0 ? (
                            <CategoryMenu data={menuCategory} />
                        ):(
                            <></>
                        )}
                    </Box>
                </Box>
            </Grid>

            {/* Content Products Show */}
            <Grid item xs={12} lg={9} >
                <Box>
                    <Grid container>
                        {/* filter */}
                        <Grid item xs={12} mb={5}>
                            <Box sx={{pb:2, display:{xs:'block', sm:'flex'}, alignItems:'center', justifyContent:'space-between', borderBottom: '0.5px solid #e0e0e0'}}>
                                <div style={{display:'flex', alignItems:'center', marginBottom:8}}>
                                    <label htmlFor="seleted-sort" style={{marginRight:5}}>Sort by :</label>
                                    <TextField
                                        id="seleted-sort"
                                        select
                                        // label="Sort"
                                        value={sortBy}
                                        onChange={(evt)=>setSortBy(evt.target.value)}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        sx={{border:'1px solid #e0e0e0', '&::before':{borderBottom:'none'}}}
                                    >
                                        <option value="popularity" selected >Sort by popularity</option>
                                        {[{value:'1', label:"Title"},{value:'2', label:"Title"},].map((option) => (
                                            <option key={option.value} value={option.value}>
                                            {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div style={{display:'flex', alignItems:'center', marginBottom:8}}>
                                    <label htmlFor="seleted-sort" style={{marginRight:5}}>Sort by :</label>
                                    <TextField
                                        id="seleted-sort"
                                        select
                                        // label="Sort"
                                        value={countProductShow}
                                        onChange={(evt)=>setcountProductShow(evt.target.value)}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        sx={{border:'1px solid #e0e0e0', '&::before':{borderBottom:'none'}}}
                                    >
                                        <option value="10" selected >10</option>
                                        {[{value:'1', label:"20"},{value:'2', label:"35"},].map((option) => (
                                            <option key={option.value} value={option.value}>
                                            {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <Button onClick={()=> setShowDataGrid(!showDataGrid)}>
                                        {showDataGrid ? (<FormatListBulleted />) : (<Widgets />)}
                                    </Button>
                                </div>
                            </Box>
                        </Grid>

                        {/* list product */}
                        <Grid item xs={12}>
                            {products.length > 0 ? (
                                <ListCateItem data={products} showGrid={showDataGrid} />
                            ):(
                                <></>
                            )}
                        </Grid>

                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
}

export default Category;