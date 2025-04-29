'use client'

import React from 'react'
import Button from '../ui/Button'
import { useTranslations } from "next-intl/";
import Input from '../ui/Input';
import style from './CreateSessionForm.module.css'

export default function CreateSessionForm() {
  const t = useTranslations('CreateGamePage');
  const handleClick = () => {
    // redirect('/play/123') // Redirect to the play page with session ID
    fetch('localhost:6000/startSession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId: 123 }), // Example payload
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        window.location.href = '/play/123' // Redirect to the play page with session ID
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div className={style.createSessionForm}>
      <h1>{t('title')}</h1>
      <form>
          <Input label={t('hostName')} />
          <Input label={t('cardsNumber')} />
          <Button onClick={handleClick} size='lg'>{t('createGame')}</Button>
      </form>
    </div>
  )
}
