import { Logo, NavItem, NavStyle } from "../styles";
const NavBar = () => {
  return (
    <NavStyle className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          alt="logo"
          src="https://previews.123rf.com/images/olgastrelnikova/olgastrelnikova1901/olgastrelnikova190100001/115903194-food-icon-with-smile-label-for-food-company-grocery-store-icon-vector-illustration-with-smiling-mout.jpg"
        />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem className="nav-item" to="/categories">
          Categories
        </NavItem>
        <NavItem className="nav-item" to="/ingredients">
          Ingredients
        </NavItem>
      </div>
    </NavStyle>
  );
};
export default NavBar;
