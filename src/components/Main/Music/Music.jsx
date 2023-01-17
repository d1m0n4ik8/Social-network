import React from 'react'
import tracks from './Player/Tracks/tracks'
import s from './Music.module.css'
import AudioPlayer from './Player/AudioPlayer'

const Music = () => {
   return (
      <div className={s.music}>
         <AudioPlayer tracks={tracks} />
      </div>
   )
}
export default Music
