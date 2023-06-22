import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setEmpty as setEmpty1, setYears } from "../../store/reducers/checkpoints/years"
import { setEmpty as setEmpty2, setMonths } from "../../store/reducers/checkpoints/months"
import { setEmpty as setEmpty3, setWeeks } from "../../store/reducers/checkpoints/weeks"
import axios from "axios"

function useYearlyPlan() {
    const [trainingName, setTrainingName] = useState('')
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

    const formSubmitH = async (e) => {
        if (e) {
            dispatch(setEmpty1())
            dispatch(setEmpty2())
            dispatch(setEmpty3())
            setShowForm(false)
            try {
                axios.post('http://localhost:1000/app/add/trainentries', { trainingInfo: store.weeks, trainingName: e }).then((res) => {
                    alert('Training Added')
                })
            } catch (error) {
                alert('some thing went wrong')
                setShowForm(false)
            }
        } else {
            alert('plz enter train name')
        }

    }

    return {
        showForm, setShowForm, yearsManager, yearsLength, setYearsLength, MonthsManager, formSubmitH, weeksManager,
        trainingName, setTrainingName
    }
}
export default useYearlyPlan

// {
//     {
//         year: 2023;
//         months: {
//             ja: [w1]
//             feb: [w1]
//             mar: []
//             apr: [w1,w2 ,w3]
//             may: [w1]
//             jun: [w1]
//             jul: [w1]
//             aug: [w1]
//         }
//     }
// }
