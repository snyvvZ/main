import React from "react";
import { NavLink, Route } from "react-router-dom";
import Update from "../pages/Update";
import Coordi from "../pages/Coordi";
import Ranking from "../pages/Ranking";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
`;

const MainTab = () => {
  return (
    <>
      <StyledNavigation>
        <NavLink to="/" activeClassName="is-active">
          업데이트
        </NavLink>
        <NavLink to="/coordi" activeClassName="is-active">
          코디
        </NavLink>
        <NavLink to="/ranking" activeClassName="is-active">
          랭킹
        </NavLink>
      </StyledNavigation>

      <Route path="/" exact={true} component={Update} />
      <Route path="/coordi" exact={true} component={Coordi} />
      <Route path="/ranking" exact={true} component={Ranking} />
    </>
  );
};

export default MainTab;
