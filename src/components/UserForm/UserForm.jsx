import { useState } from "react";
import axios from "axios";
import styles from "./UserForm.module.css";
const UserForm = () => {
  const [name, setName] = useState("");
  const [sucessMsg, setSucessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    const uName = e.target.value;
    setName(uName);
  };

  const createUserHandler = () => {
    const userData = {
      name,
    };
    const apiConfig = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    setSucessMsg("");
    setErrorMsg("");
    setIsLoading(true);
    axios
      .get("https://reqres.in/api/users", apiConfig)
      .then((res) =>
        res.status === 201 ? res.json() : new Error("User Creation Fail")
      )
      .then((data) => {
        setName("");
        setSucessMsg(`Created a user with user ID ${data.id}`);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMsg("Something Went wrong");
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className={styles.name}>
        <div>
          <label htmlFor="Name">Enter your Name</label>
        </div>
        <div>
          <input type="text" value={name} onChange={changeHandler} />
        </div>
      </div>
      <div>
        <button
          disabled={isLoading}
          className="btn btn-dark"
          onClick={createUserHandler}
        >
          Create User
        </button>
        {sucessMsg && <div className={styles.successMsg}>{sucessMsg}</div>}
        {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
        {isLoading && <div className={styles.loading}>Loading.....</div>}
      </div>
    </div>
  );
};

export default UserForm;
