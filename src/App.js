import "bootstrap/dist/css/bootstrap.min.css";
// import GroupForm from "./GroupForm";
// import Mapbox from "./MapAddAddress/mapbox"
import AnnouncingVote from "./AnnouncingVote/announcingVote"
import Home from "./HomeSidebar"
function App() {
  // return <GroupForm />;
  return (
    <div className="App">
      
      {/* <Mapbox /> */}
      {/* <AnnouncingVote /> */}
      <Home></Home>
    </div>
  );
}

export default App;
