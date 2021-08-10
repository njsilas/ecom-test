
import { NavLink } from "react-router-dom"

export const NavOptions = () => {
    
        return (
            <>
                <NavLink to="/" exact>Home </NavLink>
                <NavLink to="/apparel" exact> Apparel </NavLink>
                <NavLink to="/accessories" exact >Accessories</NavLink>
            </>
        );
    }


