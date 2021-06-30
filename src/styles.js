import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
  color: black;
  padding: 0.25em 1em;

  &.active {
    color: aqua;
  }
  div {
    justify-content: space-between;
  }
`;
export const Logo = styled(Link)`
  img {
    width: 7rem;
  }
`;
export const NavStyle = styled.div`
  justify-content: space-between;
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
    width: 40%;
    float: left;
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
  width: 50%;
`;

export const ListWrapperCategory = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    width: 12em;
    height: 12em;
    justify-content: space-around;
  }
`;
