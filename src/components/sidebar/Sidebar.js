import style from './SideMenu.module.css';
import useSideMenu from '../../hooks/useSideMenu';

const Sidebar = (props) => {
  const { pushYearlyPlans, pushPersonalRecOfHR } = useSideMenu()

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <h3>HR Panel</h3>
      </div>
      <ul className={style.nav}>
        <li className={style.navItem} onClick={pushPersonalRecOfHR}>
          {props.FirstIcon}   {props.FirstProp}
        </li>
        <li className={style.navItem} onClick={pushYearlyPlans}>
          {props.SecondIcon} {props.SecondProp}
        </li>
      </ul>
      <div className={style.sidebarFooter}>
        <p>&copy; 2023 Admin Panel. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
