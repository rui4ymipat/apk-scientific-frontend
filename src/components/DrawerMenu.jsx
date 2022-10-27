import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Close, ExpandMore, FacebookSharp } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from '@mui/material';


const AccCusDrawMenu = ({data={id: 0, title: "", path: "",list: [{listTitle: '', listUrl: ""}]}}) => {
  return (
    <Accordion sx={{backgroundColor: '#0000', boxShadow: 'none', color:'white', width:'100%'}}>
      <AccordionSummary
        expandIcon={<ExpandMore sx={{color:'white'}} />}
        aria-controls="panel1a-content"
        id={"panel1a-header"+data.id}
      >
        <Typography>{data.title} {data.path}</Typography>
      </AccordionSummary>
      <AccordionDetails>

        <ListItemButton href={'/category'}>
          <Typography sx={{fontSize: 13, fontWeight: 'bold', color:'white'}} component={'p'}>
            สินค้าทั้งหมด
          </Typography>
        </ListItemButton>
        {data.list.map(obj=>{
          return (
            <ListItemButton href={data.path} >
              <Typography sx={{fontSize: 13, fontWeight: 'bold', color:'white'}} component={'p'}>
                {obj.listTitle}{data.path}{obj.listUrl}
              </Typography>
            </ListItemButton>
          )
        })}

      </AccordionDetails>
    </Accordion>
  )
}

export default function DrawerMenu(props) { // ============================= function main
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    // setState({ ...state, [anchor]: open });
    props.close(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

      <ListItem disablePadding>
        <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'end', px:2}}>
          <IconButton onClick={toggleDrawer(anchor, false)}>
            <Close sx={{color:'white'}} />
          </IconButton>
        </Box>
      </ListItem>

        {props.items.map(obj=>{
          return obj.list.length < 1 ? (
            <ListItem key={obj.id} disablePadding>
              <ListItemButton href={obj.path} className={obj.id === 1 ? "active" : ""}>
                <Typography  sx={{fontSize: 13, fontWeight: 'bold', color:'white'}} component={'p'}>
                  {obj.title}{obj.path}
                </Typography>
              </ListItemButton>
            </ListItem>
          ):(
            <AccCusDrawMenu key={obj.id} data={obj} />
          )
        })}
      
      </List>
      <Box sx={{marginTop: 3, display:'flex', justifyContent: 'center'}}>
        <FacebookSharp sx={{fontSize: 30, color:'white'}} />
      </Box>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor={props.anchor}
            open={props.open}
            onClose={toggleDrawer(props.anchor, false)}
            // onOpen={toggleDrawer(props.anchor, true)}
            id={'content_drawmenu'}
          >
            {list(props.anchor)}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
