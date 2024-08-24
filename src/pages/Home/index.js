// Home.js
import { Link } from "react-router-dom";
import ProjectCard from "../../common/ProjectCard";
import DataTable from "../../components/DataTable";

const Home = () => {
  return (
    <div id="home">
      <ProjectCard projectName={"datatable"} />
    </div>
  );
};

export default Home;
