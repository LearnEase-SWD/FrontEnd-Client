import React from 'react'
import "./index.scss"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const Login = () => {
    const handleSuccess = (response: any) => {
        console.log("Login Success: ", response);
    };

    const handleFailure = () => {
        console.log("Login Failed");
    };

    return (
        // <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        //     <div className="login-container">
        //         <div className="login-box">
        //             <h2>Login</h2>
        //             <GoogleLogin
        //                 onSuccess={handleSuccess}
        //                 onError={handleFailure}
        //                 useOneTap
        //             />
        //         </div>
        //     </div>
        // </GoogleOAuthProvider>
        <div>
            <div className="container-fluid">
                <div className="d-flex full-height p-v-15 flex-column justify-content-between">
                    <div className="d-none d-md-flex p-h-40">
                        <img src={"/assets/images/logo-web-client.png"} alt="" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="m-t-20">Sign In</h2>
                                        <p className="m-b-30">Enter your credential to get access</p>

                                        <form>
                                            <div className="form-group">
                                                <GoogleOAuthProvider clientId="229466022465-h9iih63k3f4cqpc2jucp7foqanbq70uv.apps.googleusercontent.com">
                                                    <div className="login-container">
                                                        <div className="login-box">
                                                            <GoogleLogin
                                                                onSuccess={handleSuccess}
                                                                onError={handleFailure}
                                                                theme="outline"
                                                                size="large"
                                                                shape="pill"
                                                            />
                                                        </div>
                                                    </div>
                                                </GoogleOAuthProvider>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-md-1 col-md-6 d-none d-md-block">
                                <img className="img-fluid" src={"/assets/images/login-2.png"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-flex  p-h-40 justify-content-between">
                        <span className="">© 2024 Learn Ease</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login
