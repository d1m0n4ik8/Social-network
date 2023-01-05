import React, { useState, useEffect, useRef } from 'react'
import AudioControls from './AudioControls'
import Backdrop from './Backdrop'
import s from './Player.module.css'

const AudioPlayer = ({ tracks }) => {
   const [trackIndex, setTrackIndex] = useState(0)
   const [trackProgress, setTrackProgress] = useState(0)
   const [isPlaying, setIsPlaying] = useState(false)
   const { title, artist, color, image, audioSrc } = tracks[trackIndex]
   const audioRef = useRef(new Audio(audioSrc))
   const intervalRef = useRef()
   const isReady = useRef(false)
   const { duration } = audioRef.current

   const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%'
   const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `

   const startTimer = () => {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
         if (audioRef.current.ended) {
            toNextTrack()
         } else {
            setTrackProgress(audioRef.current.currentTime)
         }
      }, [1000])
   }

   const onScrub = (value) => {
      clearInterval(intervalRef.current)
      audioRef.current.currentTime = value
      setTrackProgress(audioRef.current.currentTime)
   }

   const onScrubEnd = () => {
      if (!isPlaying) {
         setIsPlaying(true)
      }
      startTimer()
   }

   const toPrevTrack = () => {
      if (trackIndex - 1 < 0) {
         setTrackIndex(tracks.length - 1)
      } else {
         setTrackIndex(trackIndex - 1)
      }
   }

   const toNextTrack = () => {
      if (trackIndex < tracks.length - 1) {
         setTrackIndex(trackIndex + 1)
      } else {
         setTrackIndex(0)
      }
   }

   useEffect(() => {
      if (isPlaying) {
         audioRef.current.play()
         startTimer()
      } else {
         audioRef.current.pause()
      }
   }, [isPlaying])

   useEffect(() => {
      audioRef.current.pause()

      audioRef.current = new Audio(audioSrc)
      setTrackProgress(audioRef.current.currentTime)

      if (isReady.current) {
         audioRef.current.play()
         setIsPlaying(true)
         startTimer()
      } else {
         // Set the isReady ref as true for the next pass
         isReady.current = true
      }
   }, [trackIndex, audioSrc])

   useEffect(() => {
      return () => {
         audioRef.current.pause()
         clearInterval(intervalRef.current)
      }
   }, [])

   return (
      <div className={s.audioPlayer}>
         <div className={s.trackInfo}>
            <img className={s.artwork} src={image} alt={`track artwork for ${title} by ${artist}`} />
            <h2 className={s.title}>{title}</h2>
            <h3 className={s.artist}>{artist}</h3>
            <AudioControls
               isPlaying={isPlaying}
               onPrevClick={toPrevTrack}
               onNextClick={toNextTrack}
               onPlayPauseClick={setIsPlaying}
            />
            <input
               type="range"
               value={trackProgress}
               step="1"
               min="0"
               max={duration ? duration : `${duration}`}
               className="progress"
               onChange={(e) => onScrub(e.target.value)}
               onMouseUp={onScrubEnd}
               onKeyUp={onScrubEnd}
               style={{ background: trackStyling }}
            />
         </div>
         <Backdrop trackIndex={trackIndex} activeColor={color} isPlaying={isPlaying} />
      </div>
   )
}

export default AudioPlayer
