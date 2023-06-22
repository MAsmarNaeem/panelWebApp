import React, { useEffect } from "react";
import style from "./Personal_Recuisition.module.css";
import Tech_sidebar from "../../Tech_Panel/components/Tech_sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMachinary from "../../../hooks/techPortal/useMachinary";
import getMachines from "../../../store/asynsFunctions/getMachines";

const Machinary = () => {
  const dispatch = useDispatch()
  const { showForm, setShowForm, values, setvalues, register, submit ,machines } =
    useMachinary();
  let navigation = useNavigate();
  let user = useSelector((store) => store.reducers.authInfo.user);
  useEffect(() => {
      dispatch(getMachines())
    if (user !== "tech") {
      navigation("/app/login");
    }
  } ,[]);
  let users = [
    {
      serialnumber: "123",
      machinename: "123",
      location: "fsd",
      maintainance: "daily",
    },
  ];
  return (
    <>
      <div className={style.parent}>
        <div className={style.btnParent1}>
          <button
            className={style.addBtn1}
            onClick={() => {
              if (showForm) {
                setShowForm(false);
              } else {
                setShowForm(true);
              }
            }}
          >
            Add Device
          </button>
        </div>
        <div className={style.SidebarParent}>
          <Tech_sidebar />
        </div>
        {showForm ? (
          <div className={style.formSection}>
            <h4 className={style.emp}>Add Machinery</h4>
            <form className={`${style.form} mt-5`}>
              <div className={style.formGroup}>
                <label htmlFor="station">Serial number</label>
                <input
                  type="text"
                  id="station"
                  name="serialnumber"
                  className={style.formInput}
                  placeholder="Enter the Serial number"
                  value={values.serialnumber}
                  onChange={register}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="jobTitle">Add Machinery Name</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="machinename"
                  className={style.formInput}
                  placeholder="Enter Machinery Name"
                  value={values.machinename}
                  onChange={register}
                />
              </div>
              <div className={style.dropdowns}>
                <div className="mb-3">
                  <label className="form-label">Location:</label>
                  <select
                    onChange={register}
                    name="location"
                    className="form-select"
                  >
                    <option value="">Choose...</option>
                    <option value="hr">HR</option>
                    <option value="tech">Tech</option>
                    <option value="Q/A">Q/A</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Add Maintaince :</label>
                  <select
                    onChange={register}
                    className="form-select"
                    name="maintainance"
                  >
                    <option value="">Choose...</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Montly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>

              <div className={style.btnParent}>
                <button
                  type="submit"
                  onClick={submit}
                  className={style.formSubmitBtn}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
      <div className={style.tableParent}>
        <h2 className="text-center mt-5">Machines</h2>
        <div className="table-responsive px-4 mt-5">
          <table className="table table-striped container">
            <thead>
              <tr className="p-5">
                <th className="p-4">S/N.</th>
                <th className="p-4">Machine No.</th>
                <th className="p-4">Location</th>
                <th className="p-4">Maintainance</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((user, index) => (
                <tr key={index}>
                  <td className="py-3 px-4">{user.serialnumber}</td>
                  <td className="py-3 px-4">{user.machinename}</td>
                  <td className="py-3 px-4">{user.location}</td>
                  <td className="py-3 px-4">{user.maintainance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Machinary;
