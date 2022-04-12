import Users from "../components/Users/Users";

const Home = (props) => {
  return (
    <>
      <h1 className={props.className}>Digikull Students</h1>
      <Users />
    </>
  );
};

export default Home;
