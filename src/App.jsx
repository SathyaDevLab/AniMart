import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import store from "./redux/store";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            closeOnClick
            pauseOnHover={false}
          />
          <Layout />
          <Analytics />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
