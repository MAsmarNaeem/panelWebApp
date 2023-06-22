import { useState } from "react";
import { updatePendingEmployees } from "../../store/reducers/pendingEmployees";
import axios from "axios";
import { useDispatch } from "react-redux";

const useQaPortal = () => {
    const dispatch = useDispatch()
    let submit = async (e) => {
        await axios.post(`${process.env.REACT_APP_API_KEY}/app/add/qadata`, e).then((res) => {
            if (res.data.message === 'ok') {
                setShowForm(false)
                alert('Request Send to HR')
                dispatch(updatePendingEmployees)
            } else {
                alert('something went wrong')
            }
        })
    }
    const [showForm, setShowForm] = useState(true)
    return {
        showForm,
        setShowForm,
        submit
    };
};

export default useQaPortal;
