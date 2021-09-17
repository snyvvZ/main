import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";
import { Ic14LineArrowRight } from "../../icons";

const StyledTitle = styled.header`
  display: flex;
  align-items: center;
  padding: 0 15px;

  > h2 {
    font-size: 18px;
    line-height: 40px;
  }

  > a {
    display: flex;
    align-items: center;
    margin-left: auto;
    font-size: 12px;
    color: ${variables.gray600};

    > svg {
      margin-left: 2px;
    }
  }
`;

const Title = ({ title, linkURL }) => {
  return (
    <StyledTitle>
      <h2>{title}</h2>
      <a href={linkURL} aria-label={`${title} 전체 페이지로 이동`}>
        전체 <Ic14LineArrowRight />
      </a>
    </StyledTitle>
  );
};

export default Title;
