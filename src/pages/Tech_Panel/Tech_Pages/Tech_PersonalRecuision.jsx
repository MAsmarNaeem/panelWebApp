import React, { useEffect } from "react";
import style from "../../HR_Tabs/personalRequirments.module.css";
import style2 from './Personal_Recuisition.module.css'
import Tech_sidebar from "../components/Tech_sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form.js";
import useQaPortal from "../../../hooks/qaPortal/useQaPortal";

const Tech_PersonalRecuision = () => {
  const { showForm, setShowForm , submit } = useQaPortal()
  let user = useSelector((store) => store.reducers.authInfo.user);
  let navigation = useNavigate();
  useEffect(() => {
    if (user !== "tech") {
      navigation("/app/login");
    }
  });
  return (
    <div className={style2.parent}>
      <div className={style2.SidebarParent}>
        <Tech_sidebar />
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
        {showForm ? <Form onSubmit={submit}/> : null}
      </div>
    </div>
  );
};

export default Tech_PersonalRecuision;
