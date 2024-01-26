import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from 'antd'

interface IProps {
  children?: ReactNode
  getTime: (value: number) => void
}

const CountDown: FC<IProps> = (props) => {
  const [time, setTime] = useState(60)
  const latestTime = useRef(time)
  const { getTime } = props
  useEffect(() => {
    latestTime.current = time
  }, [time])
  useEffect(() => {
    const id = setInterval(() => {
      if (latestTime.current <= 0) {
        getTime(latestTime.current)
        id && clearInterval(id)
      }
      setTime((value) => {
        return value - 1
      })
    }, 1000)
    return () => {
      id && clearInterval(id)
    }
  }, [])
  return (
    <Button
      style={{
        color: 'white',
        borderRadius: '20px',
        width: '100px'
      }}
    >
      {time}s
    </Button>
  )
}

export default memo(CountDown)
