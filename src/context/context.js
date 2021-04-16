import React, { useEffect, useState } from 'react'



const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchData() {
            setLoading(true);
            const response = await fetch('http://jsonplaceholder.typicode.com/users');
            const usersData = await response.json();
            setUsers(usersData);
            setLoading(false)
        }
        fetchData()
        
    }, [])

    if (loading) {
      return  <div>Loading ...</div>
    }

    return (
        <AppContext.Provider value={{isLogin, setIsLogin, users}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
