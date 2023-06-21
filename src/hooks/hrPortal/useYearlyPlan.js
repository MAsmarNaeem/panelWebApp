import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setYears } from "../../store/reducers/checkpoints/years"
import { setMonths } from "../../store/reducers/checkpoints/months"
import { setWeeks } from "../../store/reducers/checkpoints/weeks"
import axios from "axios"

function useYearlyPlan() {
    const [yearsLength, setYearsLength] = useState([])
    let store = useSelector((store) => store.reducers)
    let dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)
    const yearsManager = (years) => {
        dispatch(setYears(years))
    }

    const MonthsManager = (year, months) => {
        dispatch(setMonths({ year, months }))
    }

    const weeksManager = (year, month, weeks) => {
        dispatch(setWeeks({ year, month, weeks }))
    }

    const formSubmitH = async () => {
        try {
            await axios.post('http://localhost:1000/app/add/trainentries', store.weeks)
        } catch (error) {
            alert('some thing went wrong')
            setShowForm(false)
        }

    }

    return {
        showForm, setShowForm, yearsManager, yearsLength, setYearsLength, MonthsManager, formSubmitH, weeksManager
    }
}

export default useYearlyPlan
