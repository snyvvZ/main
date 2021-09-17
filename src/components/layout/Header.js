import React from "react";
import styled, { css } from "styled-components";
import variables from "../../styles/variables";
import {
  Ic30StencilBag,
  Ic30StencilBell,
  Ic30StencilHeart,
  LogoMusinsa,
} from "../../icons";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 50px;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${variables.white};
  z-index: 500;
`;

const StyledButtonWrap = css`
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
`;

const StyledTitle = styled.h1`
  ${StyledButtonWrap};

  order: 2;
  text-align: center;

  > a {
    display: inline-flex;
    align-items: center;
    padding: 12px 10px;
  }
`;

const StyledUtilWrap = css`
  ${StyledButtonWrap};

  > a {
    display: inline-flex;
    padding: 5px;
  }
`;

const StyledUtilLeft = styled.div`
  ${StyledUtilWrap};

  order: 1;
`;

const StyledUtilRight = styled.div`
  ${StyledUtilWrap};

  order: 2;
  text-align: right;
`;

const Header = () => {
  return (
    <StyledHeader className="header">
      <StyledTitle>
        <a href="/" aria-label="무신사 메인 페이지로 이동">
          <LogoMusinsa />
        </a>
      </StyledTitle>

      <StyledUtilLeft>
        <a href="anchor" aria-label="알림 페이지로 이동">
          <Ic30StencilBell />
        </a>
      </StyledUtilLeft>

      <StyledUtilRight>
        <a href="anchor" aria-label="좋아요 페이지로 이동">
          <Ic30StencilHeart />
        </a>
        <a href="anchor" aria-label="장바구니 페이지로 이동">
          <Ic30StencilBag />
        </a>
      </StyledUtilRight>
    </StyledHeader>
  );
};

export default Header;
