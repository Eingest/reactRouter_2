import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(Math.floor(Math.random() * -100));
  };

  const goForward = () => {
    navigate(Math.floor(Math.random() * 100));
  };

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
