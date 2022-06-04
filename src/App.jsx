import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/List";
import Hotels from "./pages/Hotels/Hotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotels />} />
        <Route
          path='*'
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
