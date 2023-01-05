import React from 'react'
import tracks from './Player/Tracks/tracks'
import s from './Music.module.css'
import AudioPlayer from './Player/AudioPlayer'

const Music = () => {
   return (
      <div className={s.music}>
         <h1>Music</h1>
         <AudioPlayer tracks={tracks} />
      </div>
   )
}
export default Music
