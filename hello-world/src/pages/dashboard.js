import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';


function Dashboard() {
  const { data: session, status } = useSession();

  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)
  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      setDashboardData(data)
      setIsLoading(false)
    }
    fetchDashboardData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {!session && <h1>You are not Authorized</h1>}
      {session && status === 'authenticated' && 
      <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>}
    </>
  );
  
}

export default Dashboard