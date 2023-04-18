import React from 'react'
import {HiHome} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import {motion} from "framer-motion"
import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, SpanStyled, UserContainerStyled, UserNavStyled  } from './navbarStyles'

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
                          <HiHome/>  
                        </LinkContainerStyled>
                        Home
                    </a>
                </motion.div>
            </HomeContainerStyled>
            
            <UserNavStyled>
                <UserContainerStyled>
                    <SpanStyled>
                        Inicia Sesion
                    </SpanStyled>
                    <FaUserAlt/>

                </UserContainerStyled>
            </UserNavStyled>

            <motion.div>
                <MenuContainerStyled>

                    <AiOutlineMenu/>

                </MenuContainerStyled>
            </motion.div>
        </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar