import style from "./SideMenu.module.css";
import { MdBuild } from "react-icons/md";
import { MdStraighten } from "react-icons/md";
import { FiBarChart2, FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  let navigate = useNavigate()
  let pushtopage1 = () => {
    navigate('/app/tech/personal_recuisition')
  } 
  let pushtopage2 = () => {
    navigate('/app/tech/Machinery')
  } 
  let pushtopage3 = () => {
    navigate('/app/tech/Measuringdevice')
  } 
  let pushtopage4 = () => {
    navigate('/app/tech/yearly')
  } 
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <h3>HR Panel</h3>
      </div>
      <ul className={style.nav}>
        <li className={style.navItem2}  onClick={pushtopage1}>
          <FiBarChart2 className="sidebar-icon" size={22} /> Personal
          Recuisition
        </li>
        <li className={style.navItem2} onClick={pushtopage2}>
          <MdBuild size={22} color="white" /> Add Machinery
        </li>
        <li className={style.navItem2} onClick={pushtopage3}>
          <MdStraighten size={22} color="white" />
          Add Measuring Device
        </li>
        <li className={style.navItem2} onClick={pushtopage4}>
          <FiShoppingBag className="sidebar-icon" size={22} color="white" />
          Yearly Plan
        </li>
      </ul>
      <div className={style.sidebarFooter}>
        <p>&copy; 2023 Admin Panel. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
