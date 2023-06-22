import { useState } from 'react';
import style from './form.module.css'

function Form(props) {
    const [values, setvalues] = useState({
        station: '',
        jobTitle: '',
        department: '',
        section: '',
        supervisor: '',
    })
    const register = (e) => {
        let inputs = { [e.target.name]: e.target.value };
        setvalues({ ...values, ...inputs });
    }

    return (
        <div className={style.formSection}>
            <h4 className={style.emp}>Employee Details</h4>
            <form className={`${style.form} mt-5`}>
                <div className={style.formGroup}>
                    <label htmlFor="station">Station</label>
                    <input
                        type="text"
                        id="station"
                        name="station"
                        className={style.formInput}
                        placeholder="Enter the Station"
                        value={values.station}
                        onChange={register}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        className={style.formInput}
                        placeholder="Enter the Job Title"
                        value={values.jobTitle}
                        onChange={register}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        className={style.formInput}
                        placeholder="Enter the Department"
                        value={values.department}
                        onChange={register}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="section">Section</label>
                    <input
                        type="text"
                        id="section"
                        name="section"
                        className={style.formInput}
                        placeholder="Enter the Section"
                        value={values.section}
                        onChange={register}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="supervisor">Supervisor</label>
                    <input
                        type="text"
                        id="supervisor"
                        name="supervisor"
                        value={values.supervisor}
                        onChange={register}
                        className={style.formInput}
                        placeholder="Enter the SuperVisor"
                    />                            </div>
                <div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        props.onSubmit(values)
                    }} className={style.formSubmitBtn}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
