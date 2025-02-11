import TourInfo from '@/components/TourInfo'
import { getUniqueTour } from '@/utils/action'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React from 'react'

const page = async ({params}) => {
    const tour = await getUniqueTour(params.id)

    if(!tour){
        redirect('/tours')
    }
  return (
    <div>
        <Link href={'/tours'} className='btn btn-secondary mb-12'>back to tours</Link>
     <TourInfo tour={tour}/>
    </div>
  )
}

export default page