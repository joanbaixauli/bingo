'use client'

import React from 'react'
import Button from '../ui/Button'
import { useTranslations } from "next-intl";
import Input from '../ui/Input';
import style from './CreateSessionForm.module.css'
import { createGameAction } from '@/actions/play/createGame';

export default function CreateSessionForm() {
  const t = useTranslations('CreateGamePage');

  return (
    <div className={style.createSessionForm}>
      <h1>{t('title')}</h1>
      <form action={createGameAction}>
          <Input label={t('hostName')} id='hostName' name='hostName' />
          <Input label={t('cardsNumber')} id='cardsNumber' name='cardsNumber' defaultValue={1} />

          <Button size='lg'>{t('createGame')}</Button>
      </form>
    </div>
  )
}
