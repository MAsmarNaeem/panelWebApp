import style from "./signin.module.css";
import useSignin from "../../hooks/useSignin";

export default function Signin() {
  const { values , register, submit } = useSignin();
 
  return (
    <div className={style.container}>
      <div className={style.login}>
        <div className={style.head}>
          <p>
            Welcome to <span style={{ color: "#F46A06" }}>...</span>
          </p>
        </div>
        <p>Sign In</p>
        <div className="w-100 mb-4">
          <form className="w-100 mb-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Email address
              </label>
              <input
                type="email"
                placeholder="Enter Email address"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={values.email}
                onChange={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={register}
              />
            </div>
            <button onClick={submit} type="submit" className="mt-3 btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}