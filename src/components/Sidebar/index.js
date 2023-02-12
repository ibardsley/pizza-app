import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Main</SidebarLink>
            <SidebarLink to='/'>Pizza</SidebarLink>
            <SidebarLink to='/'>Dessert</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
            <SidebarLink to='/'>Cart</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Order Now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>


  )
}

export default Sidebar