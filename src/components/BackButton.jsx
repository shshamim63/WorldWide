import { useNavigate } from "react-router-dom";

import Button from "./Button";

const BackButton = () => {
  const navigate = useNavigate();

  const onReturnBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Button type=" ms-auto btn-info" handleOnClick={onReturnBack}>
      back
    </Button>
  );
};

export default BackButton;
