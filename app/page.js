'use client'

import React from 'react';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, ListItemButton, Typography } from '@mui/material';
import { Home, Info, Contacts, Menu as MenuIcon } from '@mui/icons-material';
import LabelIcon from '@mui/icons-material/Label';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CreateIcon from '@mui/icons-material/Create';
import Link from 'next/link';
const SideNavBar = () => {
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Generate', 'Pantry', 'Item'].map((text, index) => (
          <Link href={`/${text.toLowerCase()}`} passHref key={text}>

            <ListItemButton component='a'>
              <ListItemIcon>
                {index === 0 ? <CreateIcon /> : index === 1 ? <RestaurantIcon /> : <LabelIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer('left', true)}
        sx={{ position: 'fixed', top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
};

export default SideNavBar;
