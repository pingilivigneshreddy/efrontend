import { getusers } from 'api/services/signup'
import React from 'react'
import { useQuery } from 'react-query'

function Dashboard() {

    const {data} = useQuery(["getusers"],getusers);
  return (
    <div>
       dashboard
    </div>
  )
}

export default Dashboard
