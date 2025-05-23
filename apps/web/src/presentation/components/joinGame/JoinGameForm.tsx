'use client'

import style from './JoinGameForm.module.css'
import { useTranslations } from "next-intl";
import { joinGameAction } from '@/actions/play/joinGame';
import Button from '../ui/Button'
import Input from '../ui/Input';

export default function JoinGameForm() {
  const t = useTranslations('JoinGame');

  return (
    <div className={style.joinGameForm}>
      <h1>{t('title')}</h1>
      <form action={joinGameAction}>
          <Input label={t('playerName')} id='playerName' name='playerName' />
          <Input label={t('gameCode')} id='sessionCode' name='sessionCode' />

          <Button size='lg'>{t('joinGame')}</Button>
      </form>
    </div>
  )
}
