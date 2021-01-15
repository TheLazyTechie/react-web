import React from "react";
import classes from "./style.module.css";

export default function App() {
  return (
    <div>
      <nav className={classes.topbar}>
        <img src="data:image/png;base64,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" />
      </nav>
      <br />
      <form className={classes.search}>
        <input className={classes.input} placeholder="Search" />
        <button className={classes.button}>Search</button>
        <button className={classes.signin} placeholder="Sign in">Sign In</button>
        <button className={classes.signup} placeholder="Sign up">Sign Up</button>
      </form>
      <div className={classes.footer}>
        <ul>
          <li>&copy; 2021 Copyright</li>
          <li>Twitter</li>
          <li>facebook</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}
