import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => (props.selected ? "#03c75a" : "transparent" )};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter (( { location: {pathname} } ) => (
    <Header>
        <List>
            <Item selected={pathname === "/home"}>
                <SLink to="/home">HOME</SLink>
            </Item>
            <Item selected={pathname === "/search"}>
                <SLink to="/search">SEARCH</SLink>
            </Item>
            <Item selected={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
        </List>
    </Header>
));