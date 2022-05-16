import { Routes, Route } from "react-router-dom";
import { page1Routes } from "./Page1Routes";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1/*" element={<Page1 />}>
        {page1Routes.map((route) => (
          <Route path={route.path} element={route.children} />
        ))}
      </Route>
      <Route path="/page2" element={<Page2 />}>
        {page2Routes.map((route) => (
          <Route path={route.path} element={route.children} />
        ))}
      </Route>
    </Routes>
  );
};
