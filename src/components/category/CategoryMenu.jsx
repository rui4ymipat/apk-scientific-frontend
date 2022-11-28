import { ExpandMore, Add, Remove } from '@mui/icons-material'
import { TreeItem, TreeView } from '@mui/lab';
import { Box,
    Typography,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    MenuItem,
    Autocomplete,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import $ from 'jquery';


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

// ================ function main
function CategoryMenu({
    data=[
        {
            id_node: '',
            node_parent: null,
            id:0, 
            title:'', 
            path: '',
            sub_menu:[]
        }
    ],
    brand=[
        {
            id_brand: 1,
            name: '',
            amount: 0,
        }
    ],
}) {

    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const [nodeslist, setNodeslist] = useState([]);
    const [pathProducts, setPathProducts] = useState([]);

    const data2=[
        {
            id_node: '1',
            node_parent: null,
            id:0, 
            title:'dgass', 
            path: '',
            sub_menu:[
                {
                    id_node: '2',
                    node_parent: '1',
                    id:0, 
                    title:'asd', 
                    path: '',
                    sub_menu:[
                        {
                            id_node: '4',
                            node_parent: '2',
                            id:0, 
                            title:'asd', 
                            path: '',
                            sub_menu:[
                                {
                                    id_node: '5',
                                    node_parent: '4',
                                    id:0, 
                                    title:'asd', 
                                    path: '',
                                    sub_menu:[
                                        
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id_node: '3',
                    node_parent: '1',
                    id:0, 
                    title:'asd', 
                    path: '',
                    sub_menu:[
                        {
                            id_node: '6',
                            node_parent: '3',
                            id:0, 
                            title:'asd', 
                            path: '',
                            sub_menu:[
                                {
                                    id_node: '7',
                                    node_parent: '6',
                                    id:0, 
                                    title:'asd', 
                                    path: '',
                                    sub_menu:[
                                        
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

    // function stack list path Treeview
    const createHandler = async(item, idNode, nodeParent) => {
        // console.log(`node: ${id} parent: ${nodeParent}`);
        if(selected === idNode){
            setSelected([])
        }else{
            setSelected(idNode);
        }
        if(!expanded.includes(idNode)){
            const last_ar = expanded.filter((row, idx)=> idx === expanded.length-1 );
            if(last_ar[0] === nodeParent){
                if(item.sub_menu.length > 0) setExpanded([...expanded, idNode]);
            }else if(last_ar.length === 0){
                if(item.sub_menu.length > 0) setExpanded([...expanded, idNode]);
            }else{
                if(nodeParent === null){
                    setExpanded([idNode])
                }else{
                    setExpanded([nodeParent, idNode]);
                }
            }
        }else{
            console.log(item);
            const newArr = item.sub_menu.map(irow=>{
                console.log(irow.id_node);
                if(irow.sub_menu.length > 0) {
                    
                }
            })
            setExpanded(expanded.filter(i => i !== idNode && !i.startsWith(`${idNode}.`)));
        };
    };

    React.useEffect(() => {
        console.log(selected, expanded);
        if(expanded.includes(selected)){
            setPathProducts([...expanded]);
        }else{
            setPathProducts([...expanded, selected])
        }

    }, [selected]);

    const [expandCate, setExpandCate] = useState(true);
    const [expandBrand, setExpandBrand] = useState(true);

    const TreeCusItem = (nodes) =>{
        return(
            <TreeItem key={nodes.id_node} className="t-custom-listmenu" onClick={()=>{createHandler(nodes, nodes.id_node, nodes.node_parent, nodes.path);}} nodeId={nodes.id_node} label={
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
            <div>
            ///
            {pathProducts.map((row)=>{
                return <span>{"=>"+row}</span>
            })}
            </div>
            <Grid container>
                <Grid item xs={12} sx={{marginBottom:3}}>
                    <Autocomplete
                    multiple
                    limitTags={2}
                    id="multiple-search-category"
                    className='t-multiselect'
                    options={brand}
                    getOptionLabel={(option) => option.product_name}
                    defaultValue={[]}
                    size={'small'}
                    sx={{
                        '& input.Mui-focused + .MuiOutlinedInput-notchedOutline':{
                            borderColor:'red'
                        }
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Search" placeholder="Seach...." />
                    )}
                    
                    />
                </Grid>
                <Grid item xs={12} sx={{ marginBottom:2}}>
                    <Accordion sx={style.callapseHead} expanded={expandCate} onChange={()=>setExpandCate(!expandCate)} >
                        <AccordionSummary sx={{ '&.MuiButtonBase-root':{minHeight:'auto'}, '.MuiAccordionSummary-content.Mui-expanded':{color:'#00005f', margin:0}}} id="cate_header" expandIcon={<ExpandMore />} aria-controls="cate_header_content" >
                            <Typography component={'p'} sx={{textTransform:'uppercase'}}>
                                Product categories
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component={'div'} sx={{height:4, width: {xs:'100%', lg:100}, background:'#efefef', maxWidth: '100%', marginBottom:1}} ></Box>
                            <TreeView
                                //   aria-label="controlled"
                                  defaultCollapseIcon={<Remove />}
                                  defaultExpandIcon={<Add />}
                                //   expanded={expanded}
                                  expanded={expanded}
                                  selected={selected}
                                //   onNodeToggle={(e, nodeIds)=>{}}
                                //   onNodeSelect={handleSelect}
                                  
                            >
                                {
                                    data2.map(row=>TreeCusItem(row))
                                }
                            </TreeView>

                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* Brand */}
                <Grid item xs={12} sx={{ marginBottom:2, }}>
                    <Accordion sx={style.callapseHead} expanded={expandBrand} onChange={()=>setExpandBrand(!expandBrand)} >
                        <AccordionSummary sx={{'&.MuiButtonBase-root':{minHeight:'auto'}, '.MuiAccordionSummary-content.Mui-expanded':{color:'#00005f', margin:0}}} id="brand_header" expandIcon={<ExpandMore />} aria-controls="brand_header_content" >
                            <Typography component={'p'} sx={{textTransform:'uppercase'}} >
                                Brnad
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component={'div'} sx={{height:4, width: {xs:'100%', lg:100}, background:'#efefef', maxWidth: '100%', marginBottom:1}} ></Box>
                            {brand.map((listBrand, idx)=>{
                                // console.log(listBrand);
                                return(
                                    <MenuItem key={idx} className='t-brand-link'>
                                        <Typography noWrap={true}>
                                        {listBrand.product_name} <span style={{marginLeft:5}} >({listBrand.id})</span>
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