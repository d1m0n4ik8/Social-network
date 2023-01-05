import React, { useEffect } from 'react'
import s from './Player.module.css'

const Backdrop = ({ activeColor, trackIndex, isPlaying }) => {
   useEffect(() => {
      document.documentElement.style.setProperty('--active-color', activeColor)
   }, [trackIndex, activeColor])

   return <div className={s.colorBackdrop + `${isPlaying ? 'playing' : 'idle'}`} />
}

export default Backdrop
