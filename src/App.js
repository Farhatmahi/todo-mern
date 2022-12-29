import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import routes from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
