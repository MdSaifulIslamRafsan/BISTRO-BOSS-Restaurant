import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {signInUser} = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    reset();
    const {email , password} = data;
    signInUser(email , password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("login successfully");
      navigate(from, { replace: true });
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  
  }

 

  const doSubmit = () => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue) === true) {
      setDisabled(false);
      alert("Captcha Matched");
    } else {
      setDisabled(true);
      alert("Captcha Does Not Match");
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:w-1/2  lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register("email")}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register("password")}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="captcha"
                  name="text"
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                />
                <button
                type="button"
                  onClick={doSubmit}
                  className="btn mt-3 btn-outline btn-xs"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
           <p><small>New Here?  <Link to={'/signup'}>create an account</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
