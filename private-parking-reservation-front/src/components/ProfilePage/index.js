import React from 'react'
import UserInfo from './UserInfo/index'
import OperationHistory from './OperationsHistory'
import { Badge } from 'antd'


const ProfilePage = ({ history }) => {
    return(
        <div className='profile'>
            <span>Профиль</span>
            <UserInfo />            
            <hr/>
            <span>История     
                <Badge count={2} />
            </span> 
            <OperationHistory />
        </div>        
    )
}

export default ProfilePage