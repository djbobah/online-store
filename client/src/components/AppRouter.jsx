import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import Shop from "../pages/Shop";
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  // const isAuth = false;
  // console.log("user.isAuth,router", user.isAuth);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
      {/* <Route path="*" element={<Shop />} /> */}
    </Routes>
  );
});

export default AppRouter;
