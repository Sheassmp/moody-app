import Link from "next/link";
import React, { Component } from "react";
import {NavContainer, NavContent, NavLogo, NavLogoContainer, NavItemList, NavItem} from './navbar.styles';

const NavBar = () => (     
    <NavContainer>
        <NavContent>
            <NavLogoContainer>
                <NavLogo src ="/images/mood.png"/>
            </NavLogoContainer>
            <NavItemList>
                <Link href="/information-page">
                    <NavItem>Information</NavItem>
                </Link>
                <NavItem></NavItem>
            </NavItemList>
        </NavContent>
    </NavContainer>
);

export default NavBar;


