import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div>Home</div>

      <Link to="/login">
        <button>로그인</button>
      </Link>
    </>
  );
};

export default Home;
