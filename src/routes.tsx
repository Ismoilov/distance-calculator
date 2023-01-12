import { createBrowserRouter } from "react-router-dom";

import SearchForm from "./pages/SearchForm";
import SearchResult from "./pages/SearchResult";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchForm />,
    },
    {
      path: "/result",
      element: <SearchResult />
    },
  ]);

export default router;