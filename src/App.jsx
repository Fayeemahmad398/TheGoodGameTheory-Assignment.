import "./App.css";
import axios from "axios";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [OriginalData, setOriginalData] = useState([]);
  const [searchTerm, setSearch] = useState("");

  async function fetchData() {
    try {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      setData(response.data);
      setOriginalData(response.data);
      console.log(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(
      OriginalData.filter((obj) => {
        if (
          obj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          obj.tagline.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [searchTerm]);

  return (
    <div>
      <Navbar setSearch={setSearch} searchTerm={searchTerm} />
      <Homepage data={data} />
    </div>
  );
}

export default App;
