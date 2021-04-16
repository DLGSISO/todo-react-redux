import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
// import { useGoogleLogin } from 'react-google-login'
import { AppContext } from '../context/context'
import { useHistory } from "react-router-dom";

const clientId = '121843939384-fo246a72njfptr9ertp1694n3tk6h87t.apps.googleusercontent.com'

const Login = () => {

  let history = useHistory();
  // let isLogin
  const { isLogin, setIsLogin } = useContext(AppContext)

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    if (res.profileObj) {
      setIsLogin(true);
      history.push("/me");
    } else {
      setIsLogin(false);
    }
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
    )
}

export default Login
