import React, { useEffect, useState } from "react";
import style2 from "./Personal_Recuisition.module.css";
import style from "../../HR_Tabs/yearlyPlans.module.css";
import Tech_sidebar from "../../Tech_Panel/components/Tech_sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const YearlyPlan = () => {
  let navigation = useNavigate();
  let user = useSelector((store) => store.reducers.authInfo.user);
  useEffect(() => {
    if (user !== "tech") {
      navigation("/app/login");
    }
  });
  const trainingPlan = [
    {
      name: "Programmming",
      weeks: [<p>&#9866;</p>, <p>&#9866;</p>, <p>&#10004;</p>, <p>&#10004;</p>],
    },
    {
      name: "Graphic designing",
      weeks: [<p>&#9866;</p>, <p>&#10004;</p>, <p>&#9866;</p>, <p>&#10004;</p>],
    },
    // Add more training plans as needed
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [values, setvalues] = useState({
    station: "",
    jobTitle: "",
    department: "",
    section: "",
    supervisor: "",
  });
  const register = (e) => {
    let inputs = { [e.target.name]: e.target.value };
    setvalues({ ...values, ...inputs });
  };
  const submit = (e) => {
    e.preventDefault();
  };

  const [showForm, setShowForm] = useState(true);
  return (
    <div className={style2.parent}>
      <div className={style2.SidebarParent}>
        <Tech_sidebar />
      </div>
      <div className={style.tableParent}>
        <h2 className="text-center pt-2 mb-5">Yearly Plan</h2>
        <div className={style.dropdowns}>
          <div className="mb-3">
            <label className="form-label">Select a Year:</label>
            <select className="form-select">
              <option value="choose...">choose...</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2024">2025</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Select a Month:</label>
            <select className="form-select">
              <option value="choose...">choose...</option>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <table
            className={`table table-bordered mt-3`}
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Trainings</th>
                <th>1st week</th>
                <th>2nd week</th>
                <th>3rd week</th>
                <th>4th week</th>
              </tr>
            </thead>
            <tbody>
              {trainingPlan.map((plan, index) => (
                <tr key={index}>
                  <td>{plan.name}</td>
                  {plan.weeks.map((week, weekIndex) => (
                    <td key={weekIndex}>{week}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YearlyPlan;
