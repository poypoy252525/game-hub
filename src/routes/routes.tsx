import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Index from "../components/Index";
import GameDetails from "../components/GameDetails";

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
