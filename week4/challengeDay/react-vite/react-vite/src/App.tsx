import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  const lists = ["Profile", "Settings", "Messages", "Download"];

  const [clicked, setClicked] = useState(false);

  const onSelected = (item: String) => {
    console.log("Selected item: ", item);
  };

  return (
    <div>
      {clicked && (
        <Alert>
          {" "}
          <p>Alert keiken</p>{" "}
        </Alert>
      )}
      <ListGroup lists={lists} onSelected={onSelected} />
      {/* buttun  */}

      <button
        onClick={() => setClicked(!clicked)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {clicked ? "Clicked" : "Not Clicked"}
      </button>
    </div>
  );
}

export default App;
