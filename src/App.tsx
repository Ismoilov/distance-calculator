import { RouterProvider } from "react-router-dom";

import router from "./routes";

function App() {
  return (
    <>
      <h1 className="text-center">Distance Calculator</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
