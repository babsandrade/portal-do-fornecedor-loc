// src/ApiTest.js
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'

const MobilityAPI = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          '/api/Renter/Get',
          { Status: 1 },
          {
            headers: {
              apiKey:
                'dG64RAxGC7oZi9N06SSPduQ2TF/cqHWfVK4XvpBjcs5V8lTpjRjZVLCMaDZeM+qIYnOz8zMcfSK41AxYP9iEyAtoqJwzrqsXfcyHU7wjmLZaf840DIMPvvBBT8W+KPx8M887oqTNsdEqRQPvvj43ug=='
            }
          }
        )
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>API Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default MobilityAPI
