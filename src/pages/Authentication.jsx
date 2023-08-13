import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import plant from "../assets/images/plant.jpeg";
import "../assets/css/auth.css";
import { useState } from "react";
import ForgottenPasssword from "../components/authentication/ForgotPassword";

const Authentication = () => {
    const[isLogin, setIsLogin] = useState(true);
    const[isForgottenPassword, setIsForgottenPassword] = useState(false);
    return (
        <div className="conatainer form">
            <div className="row vh-100">
                <div className="col-6 h-100 d-none d-sm-block">
                    <img src={plant} alt="Plant" className="bgImg image-fluid" style={{borderRight: '8px solid #abd373'}}/>
                </div>
                {isForgottenPassword ? <ForgottenPasssword/> : isLogin ? (
                    <SignIn setIsLogin={setIsLogin} setIsForgottenPassword={setIsForgottenPassword}/>
                    ) : (
                        <SignUp setIsLogin={setIsLogin}/>
                    )}
            </div>
        </div>
    );
}
 
export default Authentication;
