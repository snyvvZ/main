import React from "react";
import { NavLink, Route } from "react-router-dom";
import Update from "../pages/Update";
import Coordi from "../pages/Coordi";
import Ranking from "../pages/Ranking";
import styled from "styled-components";
import variables from "../../styles/variables";

const StyledNavigation = styled.nav`
  display: flex;
  overflow: hidden;
  margin: 30px 15px 15px 15px;
  border-radius: 6px;

  > a {
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: ${variables.gray600};
    background-color: ${variables.gray200};
    border: 1px solid ${variables.gray200};
    box-sizing: border-box;

    &.is-active {
      color: ${variables.black};
      background-color: ${variables.white};
    }
  }
`;

const MainTab = () => {
  return (
    <>
      <StyledNavigation>
        <NavLink exact to="/" activeClassName="is-active">
          업데이트
        </NavLink>
        <NavLink exact to="/coordi" activeClassName="is-active">
          코디
        </NavLink>
        <NavLink exact to="/ranking" activeClassName="is-active">
          랭킹
        </NavLink>
      </StyledNavigation>

      <Route path="/" exact={true} component={Update} />
      <Route path="/coordi" exact={true} component={Coordi} />
      <Route path="/ranking" exact={true} component={Ranking} />
    </>
  );
};

export default React.memo(MainTab);
