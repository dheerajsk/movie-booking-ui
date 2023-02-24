
import "./SignIn.css";

export function Signin(){

    return(

        <div className="signinContainer">
            <div className="signinForm">
                <h2 className="welcomeText">HELLO</h2>
                <h2 className="welcomeSubText">WELCOME BACK</h2>
                <div className="mb-3 form-control-group">
                    <label className="form-label">
                        Email
                    </label>
                    <input 
                    placeholder="Enter your Email"
                    type="email" name="email" className="form-control">

                    </input>
                </div>
                <div className="mb-3 form-control-group">
                    <label className="form-label">
                        Password
                    </label>
                    <input 
                      placeholder="Password"
                    type="password" name="password" className="form-control">

                    </input>
                </div>

                <div className="linkWrapper mb-3">
                    <span>
                    <input type="checkbox" ></input> &nbsp;
                    <a href="" >
                        Remember Password
                    </a>
                    </span>
                    <a href="">
                        Forgot Password
                    </a>
                </div>
                <div className="btn-wrapper">
                <button className="btn btn-primary mb-3">
                    Sign In
                </button>

                </div>
                
                <span className="loginText" htmlFor="">
                Don't have an account?  &nbsp;&nbsp;
                <a className="loginLink" href="/signup">
                SignUp Now  </a>
                </span>
            </div>
        </div>
    );

}