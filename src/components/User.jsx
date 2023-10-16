import { Stack } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handeleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <Stack direction="horizontal" className="user" gap={3}>
      <img src={user.avatar} alt={user.name} className="user-image" />
      <span className="welcome-context">Welcome, {user.name}</span>
      <button className="btn-logout" onClick={handeleClick}>
        Logout
      </button>
    </Stack>
  );
};

export default User;
