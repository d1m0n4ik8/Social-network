import { BulbTwoTone } from '@ant-design/icons'
import { Space, Switch } from 'antd'
import React, { useState } from 'react'

export default function SwitchTheme({ theme, setTheme }) {
   const [cheakedSwitch, setCheakedSwitch] = useState(theme === 'dark')
   const changeTheme = (cheaked) => {
      cheaked ? setTheme('dark') : setTheme('ligth')
      setCheakedSwitch(cheaked)
   }
   return (
      <Space className="text">
         <BulbTwoTone twoToneColor={cheakedSwitch ? 'yellow' : 'black'} />
         DarkMode:
         <Switch onChange={changeTheme} checkedChildren="On" unCheckedChildren="Off" checked={cheakedSwitch} />
      </Space>
   )
}
