import React from 'react'
import MusicItem from './MusicItem/MusicItem'

export default function MusicList({ tracks, changeTrack }) {
   const items = tracks.map((track, index) => (
      <MusicItem index={index + 1} key={track.id} track={track} changeTrack={changeTrack} />
   ))
   return <div style={{ width: '100%', padding: 20 }}>{items}</div>
}
