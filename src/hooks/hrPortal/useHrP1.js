import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import getEmployees from '../../store/asynsFunctions/getEmployees';
import { updateEmployees } from '../../store/reducers/hrdata';
import getPendingEmployees from '../../store/asynsFunctions/getPendingEmployees';
import { reduceEmployee } from '../../store/reducers/pendingEmployees';

function useHrP1() {
    const dispatch = useDispatch()
    let users = useSelector((store) => store.reducers.employess);
    let pendingUsers = useSelector((store) => store.reducers.pendingEmployees);
    let user = useSelector((store) => store.reducers.authInfo.user);
    let navigation = useNavigate();
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        dispatch(getEmployees())
        dispatch(getPendingEmployees())
        if (user !== "hr") {
            navigation("/app/login");
        }
    }, []);


    const submit = async (e) => {
        await axios.post(`${process.env.REACT_APP_API_KEY}/app/add/hrdata`, e).then((res) => {
            if (res.data.message === 'ok') {
                setShowForm(false)
                alert('Employee added')
                dispatch(updateEmployees(e))
            } else {
                alert('something went wrong')
            }
        })
    }

    const acceptorOrRejector = async (e) => {
        let val = prompt('approve the user', 'yes')
        if (val === 'yes') {
            axios.post(`${process.env.REACT_APP_API_KEY}/app/add/hrdata`, e).then((res) => {
                dispatch(updateEmployees(e))
                dispatch(reduceEmployee(e._id))
                alert('Employee added')
                axios.post(`${process.env.REACT_APP_API_KEY}/app/deleteemployee`, { id: e._id }).then(() => {
                    setShowForm(false)
                })
            })
        } else if (val === 'no') {
            dispatch(reduceEmployee(e._id))
            await axios.post(`${process.env.REACT_APP_API_KEY}/app/deleteemployee`, { id: e._id })
        }
    }


    return {
        users,
        showForm,
        setShowForm,
        submit,
        pendingUsers,
        acceptorOrRejector
    }
}

export default useHrP1
