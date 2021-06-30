import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    
    background-color: #eee2e2
  }
`;
export const NavItem = styled(NavLink)`
  color: red;
  padding: 0.1em 0.5em;

  &.active {
    color: #476ecc;
  }
  div {
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  img {
    width: 4rem;
    border-radius: 50%;
  }
`;
export const NavStyle = styled.div`
  justify-content: space-between;
  background: repeating-linear-gradient(70deg, gray, transparent 90px);
  height: 60px;
`;
export const Center = styled.h1`
  text-align: center;
`;
export const CategoryItemImage = styled.img`
  width: 5em;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 20%;
    float: left;
    border-radius: 15px;
  }

  p {
    vertical-align: middle;
  }
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const IngredientWrapper = styled.div`
  color: aqua;
  text-decoration: none;
  text-align: center;

  img {
    width: 12em;
    height: 12em;
    border-radius: 20px;
  }

  p {
    &.product-name {
      color: green;
    }
  }
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 40%;
  border-radius: 5%;
`;

export const ListWrapperCategory = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    width: 12em;
    height: 12em;
    border-radius: 20px;
  }
`;
