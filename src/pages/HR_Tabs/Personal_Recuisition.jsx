import style from "./personalRequirments.module.css";
import { FiBarChart2, FiShoppingBag } from "react-icons/fi";
import Sidebar from "../../components/sidebar/Sidebar";
import Form from "../../components/form/Form";
import useHrP1 from "../../hooks/hrPortal/useHrP1";

const Personal_Recuisition = () => {
  const { users, showForm, setShowForm, submit , pendingUsers , acceptorOrRejector} = useHrP1();
  return (
    <div className={style.parent}>
      <div className={style.sidebarParent}>
        <Sidebar
          FirstProp="Personal Recruitment"
          SecondProp="Yearly Plan"
          FirstIcon={<FiBarChart2 className="sidebar-icon" />}
          SecondIcon={<FiShoppingBag className="sidebar-icon" />}
        />
      </div>
      <div className={style.formParent}>
        <div className={style.btnParent}>
          <button
            className={style.addBtn}
            onClick={() => {
              if (showForm) {
                setShowForm(false);
              } else {
                setShowForm(true);
              }
            }}
          >
            Add Employee
          </button>
        </div>
        {showForm ? <Form onSubmit={submit} /> : null}
        <h2 className="text-center mt-3">Employees</h2>
        <div className="table-responsive px-4 mt-5">
          <table className="table table-striped">
            <thead>
              <tr className="p-5">
                <th className="p-4">Station</th>
                <th className="p-4">Job Title</th>
                <th className="p-4">Department</th>
                <th className="p-4">Section</th>
                <th className="p-4">Supervisor</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="py-3 px-4">{user.station}</td>
                  <td className="py-3 px-4">{user.jobTitle}</td>
                  <td className="py-3 px-4">{user.department}</td>
                  <td className="py-3 px-4">{user.section}</td>
                  <td className="py-3 px-4">{user.supervisor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-center mt-3">Pending Employees</h2>
        <div className="table-responsive px-4 mt-5">
          <table className="table table-striped">
            <thead>
              <tr className="p-5">
                <th className="p-4">Station</th>
                <th className="p-4">Job Title</th>
                <th className="p-4">Department</th>
                <th className="p-4">Section</th>
                <th className="p-4">Supervisor</th>
              </tr>
            </thead>
            <tbody>
              {pendingUsers.map((user, index) => (
                <tr onDoubleClick={()=>acceptorOrRejector(user)} key={index}>
                  <td className="py-3 px-4">{user.station}</td>
                  <td className="py-3 px-4">{user.jobTitle}</td>
                  <td className="py-3 px-4">{user.department}</td>
                  <td className="py-3 px-4">{user.section}</td>
                  <td className="py-3 px-4">{user.supervisor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Personal_Recuisition;
