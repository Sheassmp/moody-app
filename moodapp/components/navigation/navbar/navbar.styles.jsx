 import styled from 'styled-components';

export const NavContainer = styled.nav`
    background: linear-gradient(360deg, #383838 10%, #a2a2a2 360%);
    position: sticky;
    top: 0px;
    width: 100%;
    height: 50px;
    z-index: 1000;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
`;

export const NavLogo = styled.img`
    height: 40px;
    width: 120px;
    padding: 5px;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

export const NavLogoContainer = styled.div`
    height: 100%;
    width: 120px;
    padding: 5px;
`;

export const NavItemList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const NavItem = styled.a`
    display: inline;
    &:hover {
        color: black;
        cursor: pointer;
    }
`;

export const NavContent = styled.div`
    padding: 0rem 3rem 0rem 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;