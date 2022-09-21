import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising?pagination=2&limit=10`,
        {
          headers: {
            "x-api-key": "RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch",
          },
        }
      )

      .then((res) => {
        console.log(res.data.data);
        setProjects(res.data.data);
      });
  }, []);
  return (
    <div className="App">
      <Card projects={projects} />
    </div>
  );
}

export default App;
