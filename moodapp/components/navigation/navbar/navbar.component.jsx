import Link from "next/link";
import React from "react";
import {NavContainer, NavContent, NavLogo, NavLogoContainer, NavItemList, NavItem} from './navbar.styles';

const NavBar = ({home}) => (     
    <NavContainer>
        <NavContent>
            <NavLogoContainer>
                <NavLogo src ="/images/mood.png"/>
            </NavLogoContainer>
            <NavItemList>
            {/* {
                home ? (
                <Link href="/information-page"  >
                    <NavItem>information</NavItem>
                </Link>
                ) :
                (
                <Link href="/">
                    <NavItem>home</NavItem>
                </Link>
                )
            }
                */}
            </NavItemList>
        </NavContent>
    </NavContainer>
);

export default NavBar;


