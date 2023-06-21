import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function useSideMenu() {
    let user = useSelector((store) => store.reducers.authInfo.user);
    let navigate = useNavigate()
    let pushYearlyPlans = () => {
        navigate('/app/hr/yearly_plan')
    }
    let pushPersonalRecOfHR = () => {
        if (user !== 'qa') {
            navigate('/app/hr/personal_recuisition')
        }
    }
    return {
        pushYearlyPlans,
        pushPersonalRecOfHR
    }
}

export default useSideMenu
