import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies,removeCookie] = useCookies([]);

  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }else{
      const { data } = await axios.post(
        "http://localhost:5000",
        {},
        { withCredentials: true }
      );
      
      const { status, user } = data;
      setUsername(username);
      console.log(cookies.token)
      console.log(user)
      }
    };
    verifyCookie();
  }, [cookies, navigate,removeCookie]);
  const Logout = async() => {
  // removeCookie("token")
  const { data } = await axios.post(
    "http://localhost:5000/logout",
    {},
    { withCredentials: true }
  );
   navigate("/login")
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;