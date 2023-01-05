import React from 'react'
import { ReactComponent as Play } from './Tracks/play.svg'
import { ReactComponent as Pause } from './Tracks/pause.svg'
import { ReactComponent as Next } from './Tracks/next.svg'
import { ReactComponent as Prev } from './Tracks/prev.svg'
import s from './Player.module.css'

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => (
   <div className={s.audioControls}>
      <button type="button" className={s.prev} aria-label="Previous" onClick={onPrevClick}>
         <Prev />
      </button>
      {isPlaying ? (
         <button type="button" className={s.pause} onClick={() => onPlayPauseClick(false)} aria-label="Pause">
            <Pause />
         </button>
      ) : (
         <button type="button" className={s.play} onClick={() => onPlayPauseClick(true)} aria-label="Play">
            <Play />
         </button>
      )}
      <button type="button" className={s.next} aria-label="Next" onClick={onNextClick}>
         <Next />
      </button>
   </div>
)

export default AudioControls
