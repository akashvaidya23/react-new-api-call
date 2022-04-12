import Button from "../Button/Button";
import styles from "./Profile.module.css";

const Profile = ({ fname, email, userImage, deleteHandler, userIndex }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.firstname}>{fname}</div>
      <div className={styles.email}>{email}</div>
      <div>
        <img src={userImage} alt="userImage" width="180px" height="180px" />
      </div>
      <div>
        <Button
          clickHandler={() => {
            deleteHandler(userIndex);
          }}
          className={styles.btn}
          name="Delete"
        />
      </div>
    </div>
  );
};

export default Profile;
