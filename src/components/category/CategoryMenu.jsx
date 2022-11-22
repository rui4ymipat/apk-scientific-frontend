import { ExpandMore, Add, Remove } from '@mui/icons-material'
import { TreeItem, TreeView } from '@mui/lab';
import { Box,
    Typography,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Badge,

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
    }
};


function CategoryMenu({data1 = [{id:0, title:'', main_path: '', list:[{id:0, listTitle: ''}]}]}) { // ================ function main
    // coding......
    const data = [
        {
            id_node: '1',
            id:1, 
            title:'Test1', 
            path: '', 
            sub_menu:[
                {
                    id_node: '1.1',
                    id:2, 
                    title: 'Test2',
                    path: '', 
                    sub_menu:[
                        {
                            id_node: '1.1.1',
                            id:3, 
                            title:'Test3', 
                            path: '', 
                            sub_menu:[]
                        },
                    ],
                },
                {
                    id_node: '1.2',
                    id:2, 
                    title: 'Test2',
                    path: '', 
                    sub_menu:[
                        {
                            id_node: '1.2.1',
                            id:3, 
                            title:'Test3', 
                            path: '', 
                            sub_menu:[]
                        },
                    ],
                },
            ],
        },
        {
            id_node: '2',
            id:1, 
            title:'Test1', 
            path: '', 
            sub_menu:[
                {
                    id_node: '2.1',
                    id:2, 
                    title: 'Test2',
                    path: '', 
                    sub_menu:[]
                },
                {
                    id_node: '2.2',
                    id:2, 
                    title: 'Test3',
                    path: '', 
                    sub_menu:[]
                },
                {
                    id_node: '2.3',
                    id:2, 
                    title: 'Test4',
                    path: '', 
                    sub_menu:[]
                },
            ],
        },
    ]
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        console.log(nodeIds);
        // console.log($(".t-custom-listmenu"));
        setExpanded(nodeIds);
    };
    const createHandler = async(id) => {
        // if node was collapsed, add to expanded list
        if(!expanded.includes(id)) {
            let arrnew = [];
            arrnew = expanded.filter(async(r)=>{
                const globalRegex = new RegExp('^['+r+']{'+r.length+'}', 'g');
                if(globalRegex.test(id)){
                    return r;
                }else{
                    return id;
                }
            });
            console.log(arrnew);
            setExpanded([...expanded, id]);
        } else {
          // remove clicked node, and children of clicked node from expanded list
          setExpanded(expanded.filter(i => i !== id && !i.startsWith(`${id}.`)));
        }
      };

    const handleSelect = (event, nodeIds) => {
        // console.log(event.currentTarget);
        setSelected(nodeIds);
    };
    const [expandCate, setExpandCate] = useState(true);

    const TreeCusItem = (nodes) =>{
        return(
            <TreeItem key={nodes.id_node} className="t-custom-listmenu" onClick={()=>createHandler(nodes.id_node)} nodeId={nodes.id_node} label={
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
                            <Typography component={'p'}>
                                ค้นหาสินค้าตามชนิดสินค้า
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <TreeView
                                //   aria-label="controlled"
                                  defaultCollapseIcon={<Remove />}
                                  defaultExpandIcon={<Add />}
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
            </Grid>
        </Box>
    ) : (
        <Box>

        </Box>
    )
}

export default CategoryMenu