import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/reducers/auth';

function useSignin() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [values, setvalues] = useState({
        email: "hr@gmail.com",
        password: "123456",
    });
    const register = (e) => {
        let inputs = { [e.target.name]: e.target.value };
        setvalues({ ...values, ...inputs });
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            let CheckUser = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/check`, values)
            dispatch(setUser(CheckUser.data.user))
            if (CheckUser.data.user === 'hr') {
                navigate('/app/hr/personal_recuisition')
            } else if (CheckUser.data.user === 'tech') {
                navigate('/app/tech/personal_recuisition')
            } else if (CheckUser.data.user === 'qa') {
                navigate('/app/qa/personal_recuisition')
            } else {
                alert('Invalid Inputs')
            }
        }
        catch (error) {
            alert('please run the server', error)
        }
    }
    return {
        values,
        setvalues,
        register,
        submit,
    }
}

export default useSignin