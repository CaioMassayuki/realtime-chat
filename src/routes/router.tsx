import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import LiveChat from "../pages/livechat";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<LiveChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
