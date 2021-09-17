import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledTitle = styled.h1`
  ${mixins.blind};
`;

const TitlePage = ({ page }) => {
  return <StyledTitle>{page}</StyledTitle>;
};

export default TitlePage;
