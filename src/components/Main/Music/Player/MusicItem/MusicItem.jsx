import { Avatar, Space } from 'antd'
import React from 'react'
import s from './MusicItem.module.css'

export default function MusicItem({ index, track, changeTrack }) {
   return (
      <Space className={s.music__item} onClick={() => changeTrack(track.id)}>
         <div className={s.index}>{index}</div>
         <Avatar size={60} src={track.image} alt="track" />
         <div>
            <div className={s.title}>
               <b>{track.title}</b>
            </div>
            <div className={s.subtitle}>{track.artist}</div>
         </div>
      </Space>
   )
}
