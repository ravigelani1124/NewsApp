import React from "react";
import AppNaviagator from "./src/navigation";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./src/redux/store/Store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppNaviagator />
    </StoreProvider>
  );
};

export default App;
