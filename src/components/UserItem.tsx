import React from 'react'
import { FC } from 'react'
import { IUser } from './types/MyTypes'

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <div style={{padding: 15, border: '2px solid blue'}}>
        {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.city}
    </div>
  )
}

export default UserItem