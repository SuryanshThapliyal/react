import React, {useContext} from 'react'
import UserContext from '../contexts/Usercontexts'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile