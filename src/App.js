import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import { fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateData();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Card />
      {topAlbumsData.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })}
    </div>
  );
}

export default App;
