'use client'

import React from 'react'

interface Props {
    user:{
        id:string,
        objectId:string,
        username:string,
        name:string,
        bio:string,
        image:string
    },
    btnTitle:string
}
const AccountProfile = ({user, btnTitle}:Props) => {
  return (
    <div>
      Account Profile
    </div>
  )
}

export default AccountProfile
