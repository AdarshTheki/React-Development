import React from "react";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import Auth from "./components/Auth";
import CartItems from "./components/CartItems";
import Layout from "./components/Layout";
import store from "./reducers/store.js";
import "./App.css";

const Main = () => {
  const users = useSelector((state) => state.user);
  const { user, isAuthenticated } = users;
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>
            Name: {user?.name} Email: {user?.email}
          </h2>
          <Layout />
          <CartItems />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
export default App;
