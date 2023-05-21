import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/`);
      const data = await res.json();
      // setData(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Heloo</h1>
    </>
  );
}

export default App;
