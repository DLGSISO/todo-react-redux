import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';

const clientId = '121843939384-fo246a72njfptr9ertp1694n3tk6h87t.apps.googleusercontent.com'

const Logout = () => {
  let history = useHistory()
  const onSuccess = () => {
    // alert('Logout made successfully');
    history.push("/login");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
    )
}

export default Logout
