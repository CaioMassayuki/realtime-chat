import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
