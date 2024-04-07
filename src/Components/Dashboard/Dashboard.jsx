import SideBar from "../SideBar/SideBar";
import UsersTable from "../UsersTable/UsersTable";
function Dashboard() {
  const userString = localStorage.getItem("user");
  let user = JSON.parse(userString);

  return (
    <div className="flex flex-row w-full">
      <SideBar />
      <div className="mt-14 w-full md:w-3/4">
        <h1 className="text-4xl text-left font-semibold mt-4 mb-12 ml-8">
          Welcome {user.fullname}
        </h1>
        <UsersTable />
      </div>
    </div>
  );
}

export default Dashboard;
