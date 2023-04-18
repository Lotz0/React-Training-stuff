import React from 'react'
import {motion} from "framer-motion"
import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled } from './navbarStyles'

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="#">
                <img src="assets\pngwing.com (1).png" alt="logo" />
            </a>
        </div>
        <LinksContainerStyled>

            <HomeContainerStyled>
                <motion.div whileTap={{scale: 0.9 }}>
                    <a href="#">
                        <LinkContainerStyled>

                        </LinkContainerStyled>
                        Home
                    </a>
                </motion.div>
            </HomeContainerStyled>
            


        </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar