/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./dash.css";
import BasePage from "../Base/BasePage";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <BasePage>
        <div className="dashboard">
          <h3>Welcome</h3>
          <div className="dash-item">
            
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Dashboard;
