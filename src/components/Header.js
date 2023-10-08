import React, { useState, useEffect } from "react";

//* import heasder data
import { headerData } from "../data";

//* import components

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

//* import icons

import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
    //* Destructure header
    const { logo } = headerData;
    //* Header state
    const [isActivate, setIsActivate] = useState(false);
    //* nav mobile state
    const [navMobile, setNavMobile] = useState(false);
    //* Scroll event
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setIsActivate(true) : setIsActivate(false);
        });
    });
    return <header>Header</header>;
};

export default Header;
