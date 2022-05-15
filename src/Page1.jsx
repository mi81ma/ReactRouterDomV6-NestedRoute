import { Link, Outlet } from "react-router-dom";
// import { Page1DetailA } from "./Page1DetailA";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <div>
        <Link to="/page1/detailA">DetailA</Link>
        <br />
        <Link to="/page1/detailB">DetailB</Link>
      </div>
      <Outlet />
    </div>
  );
};
