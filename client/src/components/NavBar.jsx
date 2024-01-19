import { useContext } from "react";
import { Context } from "..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
  };

  const admin = () => {
    console.log("user.isAuth, button", user.isAuth);
    navigate(ADMIN_ROUTE);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={SHOP_ROUTE}
        >
          КупиДевайс
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => admin()} //navigate(ADMIN_ROUTE)
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              className="ml-2"
              onClick={() => logOut()}
            >
              Выйти
            </Button>{" "}
          </Nav>
        ) : (
          <Nav className="ml-auto">
            {/* <Button variant={"outline-light"}>Админ панель</Button> */}
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
