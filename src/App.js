import Body from "./body/Body";
import Navbar from "./navbar/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Body />
      <div className={styles.space}></div>
    </div>
  );
}

export default App;
