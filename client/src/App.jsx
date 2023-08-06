import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState();
  useEffect(() => {
    async function getName() {
      const res = await fetch("http://localhost:3000/");
      setName(await res.json());
    }
    getName();
  }, []);

  return (
    <div>
      {name ? (
        <h1>
          {name.firstName} {name.lastName}
        </h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
