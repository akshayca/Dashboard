import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navibar from "./components/navbar.component"
import BuildList from "./components/build-list-component";
import Project_1_List from "./components/project_1-list-component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navibar />
      <br/>
      <Route path="/" exact component={BuildList} />
      <Route path="/Project_1" component={Project_1_List} />
      </div>
    </Router>
    
  );
}

export default App;
