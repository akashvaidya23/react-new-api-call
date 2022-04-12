import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/users";
import Button from "../Button/Button";
import Profile from "../Profile/Profile";
import styles from "./users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const clickHandler = () => {
    setPage(page === 1 ? 2 : 1);
  };

  const deleteProfileHandler = (userIndex) => {
    const UserId = users[userIndex].id;
    //Api call
    deleteUser(UserId).then((isDelete) => {
      if (isDelete) {
        const userProfiles = [...users];
        userProfiles.splice(userIndex, 1);
        setUsers(userProfiles);
      }
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    // Triggering API with promise
    getUsers(page)
      .then((Users) => {
        setUsers(Users.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [page]);

  const profiles = users.map((user, index) => {
    return (
      <Profile
        key={index}
        fname={user.first_name}
        email={user.email}
        userImage={user.avatar}
        userIndex={index}
        deleteHandler={(userIndex) => {
          deleteProfileHandler(userIndex);
        }}
      />
    );
  });
  return (
    <>
      <h2>Page No. {page}</h2>
      {isLoading && (
        <div>
          <h5>Loading....</h5>
        </div>
      )}
      {!isLoading && (
        <>
          {isError && (
            <div className={styles.errorMsg}>
              <h4>There is an error. Please try after sometimes.</h4>
            </div>
          )}
          {!isError && <>{profiles}</>}
        </>
      )}
      <div>
        <Button
          clickHandler={clickHandler}
          name="Page"
          value={page === 1 ? 2 : 1}
        />
      </div>
    </>
  );
};

export default Users;
