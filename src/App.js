import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <form className="form">
        <p>
          <label for="username">Username</label>
          <input type="text" id="username"></input>
        </p>
        <p>
          <label for="age">Age (Years)</label>
          <input type="number" id="age"></input>
        </p>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default App;
