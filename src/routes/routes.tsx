import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Index from "../pages/Index";
import GameDetails from "../pages/GameDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);

export default router;
