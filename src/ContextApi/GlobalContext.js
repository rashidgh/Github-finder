import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export let GlobalContextApi = createContext();

console.log(axios);

const GlobalContextProvider = ({ children }) => {
  let [result, setResult] = useState([]);
  let [load, setload] = useState(false);
  let [repos, setRepos] = useState(null);

  let Client_ID = "Iv1.84ff1d1e231bd757";
  let Client_Secret = "c5f939f9829136e3f998be9294353ef2bd606000";
  let searchResult = async term => {
    try {
      let { data } = await axios.get(
        `https://api.github.com/users/${term}?client_ID=${Client_ID}&client_Secret=${Client_Secret}`
      );
      setload(true);
      setResult(data);
      let rep = await axios.get(`https://api.github.com/users/${term}/repos`);
      setRepos(rep.data);
    } catch (error) {
      console.log(error);
    }
    setload(false);
  };
  useEffect(() => {
    searchResult("rashidgh");
  }, []);
  return (
    <GlobalContextApi.Provider value={{ searchResult, repos, load, result }}>
      {children}
    </GlobalContextApi.Provider>
  );
};

export default GlobalContextProvider;

GlobalContextApi.displayName = "GLOBAL CONTEXT API";
