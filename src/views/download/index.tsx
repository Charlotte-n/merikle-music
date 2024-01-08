import React from 'react'
import { memo } from 'react'

// interface IProps {
//   children?: ReactNode
//   name: string
//   age: number
//   height?: number
// }
const DownLoad = () => {
  return <div>下载客户端</div>
}
DownLoad.defaultProps = {
  height: 1.8
}

export default memo(DownLoad)
