import React, { useEffect } from "react";
import { FiBarChart2 } from "react-icons/fi";
import style from '../HR_Tabs/personalRequirments.module.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Form from '../../components/form/Form'
import useQaPortal from "../../hooks/qaPortal/useQaPortal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const QAPortal = () => {
  const { showForm, setShowForm , submit } = useQaPortal()
  let user = useSelector((store) => store.reducers.authInfo.user);
  let navigation = useNavigate();
  useEffect(() => {
      if (user !== "qa") {
          navigation("/app/login");
      }
  },[]);
  return (
    <div className={style.parent}>
      <div className={style.sidebarParent}>
        <Sidebar
          FirstProp="Personal Recruitment"
          FirstIcon={<FiBarChart2 className="sidebar-icon" />}
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
        {showForm ? <Form onSubmit={submit}/> : null}
      </div>
    </div>
  );
};

export default QAPortal;
