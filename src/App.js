import "./App.css";
import { Box } from "@chakra-ui/layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Switch, Route } from "react-router-dom";
import Movie from "./pages/movie";
import Home from "./pages/home";
import Coliction from "./pages/coliction";
function App() {
  return (
    <Box>
      <Navbar />
      <Switch>
        <Route path="/movie/:id" exact>
          <Movie />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/coliction" exact>
          <Coliction />
        </Route>
      </Switch>

      <Footer />
    </Box>
  );
}

export default App;
