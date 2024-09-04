import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Admin from "./Routes/admin/Admin";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Admin />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
