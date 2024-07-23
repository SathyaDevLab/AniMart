import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
