import {useState} from "react";
import Products from "./components/Products";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {

  // Day-3 useState

  // Class binding
  // const [add, setAdd] = useState(true);

  // return (
  //   <div>
  //     <h1 className={`${add && "text-decoration-line-through"}` }>Hello React</h1>
  //     <button onClick={() => setAdd(!add)}>Click</button>
  //   </div>
  // )

  // Two way binding
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [lists, setLists] = useState([
    {id: 1, name: "Mink", password: "asdf"},
    {id: 2, name: "Hey", password: "asdf"},
    {id: 3, name: "Kko", password: "asdf"},
    {id: 4, name: "Mac", password: "asdf"},
  ])

  const submitHandler = e => {
    e.preventDefault();
    // console.log(name, password);
    const newList = {id: Date.now(), name, password };
    setLists([ ...lists , newList]);
  }
  return (
    <div className="container">
      <form action="" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter sth" />
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter sth" />
        </div>
        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
      <ul>
        {lists.map(list => (
          <li key={list.id}>{list.name} - {list.password}</li>
        ))}
      </ul>
    </div>
  );

};

export default App;
