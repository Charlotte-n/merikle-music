interface LyricType {
  time: number
  lyric: string
}
export const ParseLyric = (Lyric: any) => {
  const Lyrics: LyricType[] = []
  const lines: string[] = Lyric.split('\n')
  //正则匹配
  const rule = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  for (const line of lines) {
    //1.匹配时间
    const result = rule.exec(line)
    if (!result) continue

    //2.获取匹配的时间,将时间转化为ms
    const min = Number(result[1])
    const second = Number(result[2])
    const ms =
      result[3].length == 3 ? Number(result[3]) : Number(result[3]) * 10
    const totalTime = min * 60 * 1000 + second * 1000 + ms

    //3.获取文本
    const text = line.replace(rule, '')

    Lyrics.push({ time: totalTime, lyric: text })
  }
  return Lyrics
}
