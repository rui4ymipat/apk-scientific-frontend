
import { ListItemIcon, MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";
function HomeCate(props) {
    return (
        <MenuList sx={{ p: 0 }}>
            {props.data.map((item, idx) => (
                <MenuItem key={idx} href={item.action}
                    sx={{
                        '&:hover': {
                            background: '#f1132a',
                            color: 'white'
                        },
                        '&:hover .MuiListItemIcon-root': {
                            color: 'white'
                        },
                        borderBottom: '0.75px solid #d0d0d0',
                        py: 1
                    }}
                >
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <Typography noWrap >
                        {item.title}
                    </Typography>
                </MenuItem>
            ))}

        </MenuList>
    )
}

export default HomeCate