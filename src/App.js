import { Route, Routes } from "react-router-dom";
import Book from "./mySrc/components/Book/Book";
import Detail from "./mySrc/components/Detail/Detail";
import Login from "./mySrc/components/Login/Login";
import Search from "./mySrc/components/Search/Search";
import Register from "./mySrc/components/SignUp/Register";
import Transaction from "./mySrc/components/Transaction/Transaction";
import Home from "./mySrc/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/detail">
          <Route path=":_id" element={<Detail />} />
        </Route>
        <Route path="/book">
          <Route path=":_id" element={<Book />} />
        </Route>
        <Route path="/transaction">
          <Route path=":_id" element={<Transaction />} />
        </Route>
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
