import React from "react";
import { FooterContainerStyled, LinksContainerStyled } from "./footer.Styles";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled>
        <a href="#">User terms</a>
        <a href="#">Support</a>
        <a href="#">Work with us</a>
      </LinksContainerStyled>
      <p>
        Hecho con amor por <span>Lotzo</span>
      </p>
    </FooterContainerStyled>
  );
};

export default Footer;
