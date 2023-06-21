import { useEffect, useState } from "react";
import { updateMachines } from "../../store/reducers/machinary";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getMachines from "../../store/asynsFunctions/getMachines";

function useMachinary() {
    const machines = useSelector((store) => store.reducers.machines)
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(true);
    const [values, setvalues] = useState({
        serialnumber: "",
        machinename: "",
        location: "",
        maintainance: "",
    });
    const register = (e) => {
        let inputs = { [e.target.name]: e.target.value };
        setvalues({ ...values, ...inputs });
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:1000/app/add/machine', values).then((res) => {
            if (res.data.message === 'ok') {
                setShowForm(false)
                alert('Machine Added')
                dispatch(updateMachines(values))
            } else {
                alert('something went wrong')
            }
        })
    };
    return {
        showForm,
        setShowForm,
        values,
        setvalues,
        register,
        submit,
        machines
    }
}

export default useMachinary
