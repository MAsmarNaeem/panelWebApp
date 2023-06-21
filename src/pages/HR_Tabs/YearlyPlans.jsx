import React, { useEffect } from "react";
import { FiBarChart2, FiShoppingBag } from "react-icons/fi";
// import '../../index.css'
import style from "./yearlyPlans.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import useYearlyPlan from "../../hooks/hrPortal/useYearlyPlan";
import Checkpoints from "../../components/checkpoints/Checkpoints";
const YearlyPlan = () => {
  const {
    showForm,
    setShowForm,
    yearsManager,
    yearsLength,
    setYearsLength,
    MonthsManager,
  } = useYearlyPlan();
  let user = useSelector((store) => store.reducers.authInfo.user);
  let reducers = useSelector((store) => store.reducers);
  let navigation = useNavigate();
  useEffect(() => {
    if (user !== "hr") {
      navigation("/app/login");
    }
  }, []);
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

  const years = ["2023", "2024", "2025", "2026"];
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

  const weeks = ["week1", "week2", "week3", "week4"];
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
      <div className={style.tableParent}>
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
            Add Training
          </button>
        </div>
        {showForm ? (
          <div className={style.formParent}>
            <div className={style.formGroup}>
              <label htmlFor="station">Enter Training Name</label>
              <input
                type="text"
                id="station"
                name="trainingname"
                className={style.formInput}
                placeholder="Enter the Training Name"
              />
            </div>
            <div>
              {!reducers.years?.user?.years ? (
                <Checkpoints
                  onsubmit={yearsManager}
                  title="years"
                  data={years}
                />
              ) : null}
              {reducers.years?.user?.years.map((year, i) => {
                return (
                  <div key={i}>
                    <h2>{year}</h2>
                    <Checkpoints
                      title="months"
                      data={months}
                      onsubmit={(e) => {
                        MonthsManager(year, e);
                      }}
                    />
                  </div>
                );
              })}
              {
                <p>
                  {reducers?.months.map((data, i) => {
                    return (
                      <div key={i}>
                        <p>{data.year}</p>
                        {data?.month.months.map((months, i) => {
                          return (
                            <div key={i}>
                              <Checkpoints title="weeks" data={weeks} />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </p>
              }
            </div>
            <div className={style.btnParent}>
              <button className={style.addBtn}>Save</button>
            </div>
          </div>
        ) : null}

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
