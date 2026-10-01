import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}`, {}, { withCredentials: true })
      .then(({ data }) => {
        if (data.status) {
          setUsername(data.user);
          setLoading(false);
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  if (loading) return null;

  return (
    <>
      <TopBar username={username} />
      <Dashboard username={username} />
    </>
  );
};

export default Home;