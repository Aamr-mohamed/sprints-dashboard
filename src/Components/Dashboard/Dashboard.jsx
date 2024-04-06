import SideBar from "../SideBar/SideBar";

function Dashboard() {
  const userString = localStorage.getItem("user");
  let user = JSON.parse(userString);

  return (
    <div className="flex flex-row w-full">
     <SideBar />
     
</div>
  );
}

export default Dashboard;
