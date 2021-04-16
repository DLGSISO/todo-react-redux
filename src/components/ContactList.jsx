import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import {AppContext} from '../context/context'

const ContactList = () => {

    const { users } = useContext(AppContext)

    console.log(users)
    //http://jsonplaceholder.typicode.com/users

    // fetch('http://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ contacts: data })
    // })
    // .catch(console.log)



    return (
        <div>
            <Link to='/me'>back</Link>
            {users.map((loser) => {
                const { name } = loser
                return (
                    <h1>{ name }</h1>
                )
            })}
        </div>
    )
}

export default ContactList
