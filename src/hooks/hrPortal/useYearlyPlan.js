import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setYears } from "../../store/reducers/checkpoints/years"
import { setMonths } from "../../store/reducers/checkpoints/months"

function useYearlyPlan() {
    const [yearsLength, setYearsLength] = useState([])
    let store = useSelector((store) => store.reducers)
    let dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)
    const yearsManager = (years) => {
        dispatch(setYears(years))
    }

    const MonthsManager = (year, months) => {
        dispatch(setMonths({
            year: year,
            month: months
        }))
        console.log(store);
    }

    return {
        showForm, setShowForm, yearsManager, yearsLength, setYearsLength, MonthsManager
    }
}

export default useYearlyPlan
