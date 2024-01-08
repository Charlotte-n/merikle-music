import moment from 'moment'

export const formateCount = (count: number) => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function formatTime(time: number) {
  //转化为s
  const timeSeconds = time / 1000
  //获取分钟和秒钟
  const min = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60
  //string中一个方法padStart(总长度,补齐)
  const formatMin = String(min).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMin}:${formatSecond}`
}

export const formatYearTime = (time: number) => {
  const result = moment(time).format('YYYY-MM-DD')
  return result
}
