import { useEffect, useState } from "react";
import { updatedevices } from "../../store/reducers/device";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getDevices from "../../store/asynsFunctions/getDevices";

function useDevice() {
    const devices = useSelector((store) => store.reducers.devices)
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(true);
    const [values, setvalues] = useState({
        equipmentcode: "",
        equipmentname: "",
        location: "",
        range: "",
    });
    const register = (e) => {
        let inputs = { [e.target.name]: e.target.value };
        setvalues({ ...values, ...inputs });
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.API_KEY}/app/add/device`, values).then((res) => {
            if (res.data.message === 'ok') {
                setShowForm(false)
                alert('Device Added')
                dispatch(updatedevices(values))
            } else {
                alert('something went wrong')
            }
        })
    };
    useEffect(() => {
        dispatch(getDevices())
    }, [])
    return {
        showForm,
        setShowForm,
        values,
        setvalues,
        register,
        submit,
        devices
    }
}

export default useDevice
