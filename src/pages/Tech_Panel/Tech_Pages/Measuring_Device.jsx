import React, { useEffect, useState } from "react";
import style from "./Personal_Recuisition.module.css";
import Tech_sidebar from "../../Tech_Panel/components/Tech_sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDevice from "../../../hooks/techPortal/useDevice";

const Measuring = () => {
  const {
    showForm,
    setShowForm,
    values,
    setvalues,
    register,
    submit,
    devices,
  } = useDevice();
  let navigation = useNavigate();

  let user = useSelector((store) => store.reducers.authInfo.user);
  useEffect(() => {
    if (user !== "tech") {
      navigation("/app/login");
    }
  });
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
            <h4 className={style.emp}>Add Device</h4>
            <form className={`${style.form} mt-5`}>
              <div className={style.formGroup}>
                <label htmlFor="station">Equipment Code</label>
                <input
                  type="text"
                  id="station"
                  name="equipmentcode"
                  className={style.formInput}
                  placeholder="Enter the Equipment Code"
                  value={values.station}
                  onChange={register}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="jobTitle">Add Equipment Name</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="equipmentname"
                  className={style.formInput}
                  placeholder="Enter Add Equipment Name"
                  value={values.jobTitle}
                  onChange={register}
                />
              </div>
              <div className={style.dropdowns}>
                <div className="mb-3">
                  <label className="form-label">Location:</label>
                  <select
                    onChange={register}
                    className="form-select"
                    name="location"
                  >
                    <option value="">Choose...</option>
                    <option value="hr">HR</option>
                    <option value="tech">Tech</option>
                    <option value="Q/A">Q/A</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Add Range :</label>
                  <select
                    onChange={register}
                    className="form-select"
                    name="range"
                  >
                    <option value="">Choose...</option>
                    <option value="daily">daily</option>
                    <option value="weekly">weekly</option>
                    <option value="monthly">montly</option>
                    <option value="yearly">yearly</option>
                  </select>
                </div>
              </div>

              <div className={style.btnParent}>
                <button onClick={(e)=>{
                  e.preventDefault()
                  alert('🙄')

                }} className={style.formSubmitBtn}>initiate</button>
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
        <h2 className="text-center mt-5">Devices</h2>
        <div className="table-responsive px-4 mt-5">
          <table className="table table-striped container">
            <thead>
              <tr className="p-5">
                <th className="p-4">Equipment Code</th>
                <th className="p-4">Equipment Name</th>
                <th className="p-4">Location</th>
                <th className="p-4">Range</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((user, index) => (
                <tr key={index}>
                  <td className="py-3 px-4">{user.equipmentcode}</td>
                  <td className="py-3 px-4">{user.equipmentname}</td>
                  <td className="py-3 px-4">{user.location}</td>
                  <td className="py-3 px-4">{user.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Measuring;
