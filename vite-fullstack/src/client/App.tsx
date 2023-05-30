import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(``);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/`);
      const data = await res.json();
      setData(JSON.stringify(data));
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="font-bold bg-red-700">{data}</h1>
    </>
  );
}

export default App;
