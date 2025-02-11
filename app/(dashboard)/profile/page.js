import React from 'react'
import {auth, UserProfile} from "@clerk/nextjs"
import { fetchUserTokensById } from '@/utils/action'

const page = async () => {

  const {userId} = auth()

  const currentTokens = await fetchUserTokensById(userId)

  return (
    <div>
      <h2 className='mb-8 ml-8 text-xl font-extrabold'>Tokens: {currentTokens}</h2>
      <UserProfile/>

    </div>
  )
}

export default page