import React from 'react'
import { statusBoardItemProps } from '../../ts/interface_and_types'

export const StatusBoardItem = ({logo,title,value}:statusBoardItemProps) => {
  return (  

    <div >
    <span className="circle">
        <img src={logo} alt="status-board-logo" />
    </span>
    <span className="title">{title}</span>
    <span className="value">{value}</span>
</div>
  )
}
