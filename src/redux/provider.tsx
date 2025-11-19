import { Provider } from "react-redux";
import { store } from "./store";
import App from "../App";

const AppProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppProvider;
