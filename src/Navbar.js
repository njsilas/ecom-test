import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

export const NavOptions = () => {
    
        return (
            <>
                <NavLink 
                to="/"
                exact>Home
                </NavLink>
                <NavLink
                to="/apperal"
                exact>Apperal
                </NavLink>
                <NavLink
                to="/accessories"
                exact
                >Accessories
                </NavLink>
            </>
        );
    }


