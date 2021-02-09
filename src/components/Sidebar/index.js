import React from "react";
import {
  SidebarConatiner,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarRoute,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElement";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarConatiner isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Payment
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Signup
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarConatiner>
  );
};

export default Sidebar;
