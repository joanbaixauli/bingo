'use client'

import React from 'react'
import Button from '../ui/Button'
import { redirect } from 'next/navigation'

export default function PlayForm() {
  const handleClick = () => {
    redirect('/play/123') // Redirect to the play page with session ID
    // fetch('localhost:6000/startSession', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ sessionId: 123 }), // Example payload
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data)
    //     window.location.href = '/play/123' // Redirect to the play page with session ID
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error)
    //   })
  }
  
  return (
    <div>
      <Button onClick={handleClick} size='lg'>Start</Button>
    </div>
  )
}
