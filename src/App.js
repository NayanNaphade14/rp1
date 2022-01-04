import logo from "./logo.svg";
import "./App.css";

function App() {
  let list1 = [1, 1, 1, 1, 1];
  return (
    <>
      <h1 className="c1 tex" style={{ backgroundColor: "red" }}>
        hwllo first react word
      </h1>
      <h1>hii</h1>
      {list1.map((item) => (
        <h1>nayan suhas naphade</h1>
      ))}
    </>
  );
}

export default App;
