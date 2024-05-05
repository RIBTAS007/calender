import Body from "./body/Body";
import Navbar from "./navbar/Navbar";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Body />
      </>
    </Provider>
  );
}

export default App;
