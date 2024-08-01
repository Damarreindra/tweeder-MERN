import React from 'react';
import { List, ListItem } from "@chakra-ui/react";
import {
  MdHome,
  MdPerson,
  MdOutlineSettingsInputComposite,
} from "react-icons/md";
import { NavItem } from "./NavItem";
import { useLocation } from 'react-router-dom'; // Import useLocation hook

  
const items = [
  {
    type: "link",
    label: "Home",
    icon: MdHome,
    path: "/home",
  },
  {
    type: "link",
    label: "Profile",
    icon: MdPerson,
    path: `/profile`,
  },
  // {
  //   type: "link",
  //   label: "Settings",
  //   icon: MdOutlineSettingsInputComposite,
  //   path: "/settings", 
  // },
];

const Navigation = ({ collapse }) => {
  const location = useLocation();

  return (
    <List w="full" my={8} mt={5}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavItem
            item={item}
            isActive={location.pathname === item.path} // Check if current path matches item path
            collapse={collapse}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
