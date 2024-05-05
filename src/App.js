import Body from "./body/Body";
import Navbar from "./navbar/Navbar";
import styles from "./App.module.css";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Navbar />
        <Body />
        <div className={styles.space}></div>
      </div>
    </Provider>
  );
}

export default App;
