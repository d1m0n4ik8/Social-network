import { Col, Row } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import AudioControls from './AudioControls'

import MusicList from './MusicList'
import s from './Player.module.css'

const AudioPlayer = ({ tracks }) => {
   const [trackIndex, setTrackIndex] = useState(0)
   const [trackProgress, setTrackProgress] = useState(0)
   const [isPlaying, setIsPlaying] = useState(false)
   const { title, artist, image, audioSrc } = tracks[trackIndex]
   const audioRef = useRef(new Audio(audioSrc))
   const intervalRef = useRef()
   const isReady = useRef(false)
   const { duration } = audioRef.current

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
   const toTrack = (trackId) => {
      setTrackIndex(trackId)
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
      <div
         id="scrollableDiv"
         style={{
            height: '80vh',
            overflow: 'auto',
            width: '100%',
         }}>
         <InfiniteScroll
            style={{ padding: 5, height: '80vh' }}
            dataLength={tracks.length}
            scrollableTarget="scrollableDiv">
            <Row className={s.player} gutter={[16, 16]}>
               <Col className="w100" md={24} lg={8}>
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
                           className={s.progress}
                           onChange={(e) => onScrub(e.target.value)}
                           onMouseUp={onScrubEnd}
                           onKeyUp={onScrubEnd}
                        />
                     </div>
                  </div>
               </Col>
               <Col className="w100" md={24} lg={16}>
                  <MusicList tracks={tracks} changeTrack={toTrack} />
               </Col>
            </Row>
         </InfiniteScroll>
      </div>
   )
}

export default AudioPlayer
