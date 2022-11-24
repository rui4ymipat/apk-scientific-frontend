import { ExpandMore, Add, Remove } from '@mui/icons-material'
import { TreeItem, TreeView } from '@mui/lab';
import { Box,
    Typography,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Badge,
    MenuItem,
    ListItem,
} from '@mui/material'
import React, { useState } from 'react'
import $ from 'jquery';


const style = {
    callapseHead:{
        backgroundColor: 'rgba(0,0,0,0)',
        boxShadow:'none',
    },
    linkMenu:{
        color:'#696969', ':hover':{color:'#00005f'}, textDecoration:'none', width:'100%', height:'100%'
    },
    badegeBrand:{
        width:'100%'
    }
};


function CategoryMenu({data1 = [{ id_node: '1', node_parent: null, id:1, title:'', path: '', sub_menu:[] }]}) { // ================ function main
    // coding......
    const data = [
        {
            id_node: '1',
            node_parent: null,
            id:1, 
            title:'สินค้าใหม่ (New Products)', 
            path: 'main_1',
            sub_menu:[
                {
                    id_node: '1-1',
                    node_parent: '1',
                    id:2, 
                    title: 'อุปกรณ์พลาสติกสำหรับห้อง',
                    path: 'main_1/sub_1_1/',
                    sub_menu:[
                        {
                            id_node: '1-1-1',
                            node_parent: '1-1',
                            id:3, 
                            title:'อุปกรณ์พลาสติกสำหรับห้อง', 
                            path: 'main_1/sub_1_1_1/',
                            sub_menu:[]
                        },
                    ],
                },
                {
                    id_node: '1-2',
                    node_parent: '1',
                    id:2, 
                    title: 'อุปกรณ์พลาสติกสำหรับห้อง',
                    path: 'main_1/sub_1_2/',
                    sub_menu:[
                        {
                            id_node: '1-2-1',
                            node_parent: '1-2',
                            id:3, 
                            title:'อุปกรณ์พลาสติกสำหรับห้อง', 
                            path: 'main_1/sub_1_2_1/',
                            sub_menu:[
                                {
                                    id_node: '1-2-1-1',
                                    node_parent: '1-2-1',
                                    id:2, 
                                    title: 'อุปกรณ์พลาสติกสำหรับห้อง',
                                    path: 'main_1/sub_1_2_1_1/',
                                    sub_menu:[
                                        {
                                            id_node: '1-2-1-1-1',
                                            node_parent: '1-2-1-1',
                                            id:3, 
                                            title:'อุปกรณ์พลาสติกสำหรับห้อง', 
                                            path: 'main_1/sub_1_2_1_1_1/',
                                            sub_menu:[]
                                        },
                                    ],
                                },
                            ]
                        },
                    ],
                },
            ],
        },
        {
            id_node: 'dsdpkmgsd',
            node_parent: null,
            id:1, 
            title:'เครื่องแก้ววิทยาศาสตร์', 
            path: 'main_2',
            sub_menu:[
                {
                    id_node: 'sppmdpskp',
                    node_parent: 'dsdpkmgsd',
                    id:2, 
                    title: 'จานเพาะเชื้อ',
                    path: 'main_2/sub_2_1/',
                    sub_menu:[]
                },
            ],
        },
    ];
    const data_brand = [
        {
            id_brand: 1,
            name: 'Brand',
            amount: 35,
        },
        {
            id_brand: 2,
            name: 'Brand2',
            amount: 35,
        },
    ];
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    console.log(data1);
    // function stack list path Treeview
    const createHandler = async(id, nodeParent, path) => {
        // console.log(`node: ${id} parent: ${nodeParent}`);
        if(!expanded.includes(id)){
            const last_ar = expanded.filter((row, idx)=> idx === expanded.length-1 );
            if(last_ar[0] === nodeParent){
                setExpanded([...expanded, id]);
            }else if(last_ar.length === 0){
                setExpanded([...expanded, id]);
            }else{
                if(nodeParent === null){
                    setExpanded([id])
                }else{
                    setExpanded([nodeParent, id]);
                }
            }
        }else{
            setExpanded(expanded.filter(i => i !== id && !i.startsWith(`${id}.`)));
        }

    };


    const handleSelect = (event, nodeIds) => {
        // console.log(event.currentTarget);
        setSelected(nodeIds);
    };
    const [expandCate, setExpandCate] = useState(true);
    const [expandBrand, setExpandBrand] = useState(true);

    const TreeCusItem = (nodes) =>{
        return(
            <TreeItem key={nodes.id_node} className="t-custom-listmenu" onClick={()=>createHandler(nodes.id_node, nodes.node_parent, nodes.path)} nodeId={nodes.id_node} label={
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', p:0.5, pr:0}}>
                    <Typography className='t-text-listmenu'>
                        {nodes.title}
                    </Typography>
                </Box>
            }>
                {Array.isArray(nodes.sub_menu)
                ? nodes.sub_menu.map((node)=> TreeCusItem(node) )
                :null}
            </TreeItem>
        )
    };

    return data.length > 0 ? (
        <Box className='content-menu-category' >
            <Grid container>
                <Grid item xs={12}>
                    <Accordion sx={style.callapseHead} expanded={expandCate} onChange={()=>setExpandCate(!expandCate)} >
                        <AccordionSummary sx={{'.MuiAccordionSummary-content.Mui-expanded':{color:'#00005f'}}} id="cate_header" expandIcon={<ExpandMore />} aria-controls="cate_header_content" >
                            <Typography component={'p'} sx={{textTransform:'uppercase'}}>
                                Product categories
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <TreeView
                                //   aria-label="controlled"
                                  defaultCollapseIcon={<Remove />}
                                  defaultExpandIcon={<Add />}
                                //   expanded={expanded}
                                  expanded={expanded}
                                  selected={selected}
                                //   onNodeToggle={handleToggle}
                                  onNodeSelect={handleSelect}
                                  
                            >
                                {
                                    data.map(row=>TreeCusItem(row))
                                }
                            </TreeView>

                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* Brand */}
                <Grid item xs={12}>
                    <Accordion sx={style.callapseHead} expanded={expandBrand} onChange={()=>setExpandBrand(!expandBrand)} >
                        <AccordionSummary sx={{'.MuiAccordionSummary-content.Mui-expanded':{color:'#00005f'}}} id="cate_header" expandIcon={<ExpandMore />} aria-controls="cate_header_content" >
                            <Typography component={'p'} sx={{textTransform:'uppercase'}} >
                                Product categories
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            {data_brand.map((listBrand, idx)=>{
                                return(
                                    <MenuItem key={idx} className='t-brand-link'>
                                        <Typography>
                                        {listBrand.name} <span style={{marginLeft:5}} >({listBrand.amount})</span>
                                        </Typography>
                                    </MenuItem>
                                )
                            })}

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