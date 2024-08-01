import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import { Logo } from "./Logo";
import {AvatarBox} from "./AvatarBox"
import Navigation from "../../Navigation";

export const Sidebar = ({ collapse }) => (
  <React.Fragment>
    <Box w="full">
      <Logo collapse={collapse} />
      <Box mr={5}> 
      <Navigation collapse={collapse} />
      </Box>
    </Box>
    <AvatarBox collapse={collapse} />
  </React.Fragment>
);
