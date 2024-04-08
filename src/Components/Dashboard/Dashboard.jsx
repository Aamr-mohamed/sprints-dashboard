import Layout from "../../Layout/Layout";
import SideBar from "../SideBar/SideBar";
import UsersTable from "../UsersTable/UsersTable";
function Dashboard() {
  const userString = localStorage.getItem("user");
  let user = JSON.parse(userString);

  return (
    <Layout >
        <h1 className="text-4xl text-left font-semibold mb-12 ml-8">
          Hi👋 {user.fullname}
        </h1>
        <UsersTable />
    </Layout>
  );
}

export default Dashboard;
