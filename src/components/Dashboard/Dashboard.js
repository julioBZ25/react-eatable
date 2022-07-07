import React from 'react'

const Dashboard = () => {

  React.useEffect(() => {
    apiFetch()
  }, [])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard