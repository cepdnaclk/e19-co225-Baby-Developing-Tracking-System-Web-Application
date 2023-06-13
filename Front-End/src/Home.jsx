import { Nav } from "./Nav";
import { Footer } from "./Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "http://10.30.118.109:8080/api/v1/user";
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;

        if (token) {
          const headers = {
            "Access-Control-Allow-Origin": true,
            Authorization: "Bearer " + access,
          };

          const response = await axios.get(endpoint, { headers });
          console.log(response.data);

          if (response.data && response.data) {
            setUserName(response.data);
          }
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="relative  my-16 mx-3 rounded-lg p-4 flex-row">
        <h1 className="header text-center font-[900] text-4xl">SPROUTOPIA</h1>
        <h3 className="subheader text-center font-[500] text-2xl">
          Nutering Smiles, Shaping Futures
        </h3>
        <h3 className="subheader text-center font-[500] text-2xl">
          Hi, {userName ? userName : "Guest"}
        </h3>
      </div>

      <Footer />
    </div>
  );
};
