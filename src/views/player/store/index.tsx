import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLyric, getSongDetail } from '@/views/player/services/player'
import { ParseLyric } from '@/utils/parse-lyric'
import { IRootState } from '@/store'

interface IThunkState {
  state: IRootState
}

//创建异步的片段
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', async (id: number, { dispatch, getState }) => {
  //播放一首歌的时候，两种情况(请求歌曲播放的时候)
  const playSongList = (getState() as any).player.playSongList
  const findIndex = playSongList.findIndex((item: any) => item.id === id)
  if (findIndex === -1) {
    const res = await getSongDetail(id)
    const song = res.songs[0]
    const newPlaySongList = [...playSongList]
    newPlaySongList.push(song)
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongList(newPlaySongList))
    dispatch(changePlaySongIndex(newPlaySongList.length - 1))
  } else {
    dispatch(changeCurrentSongAction(playSongList[findIndex]))
    dispatch(changeCurrentSongAction(findIndex))
  }
  //请求歌词数据
  const result = await getLyric(id)
  let lyric = result.lrc.lyric
  //对歌词进行数据处理
  lyric = ParseLyric(lyric)
  dispatch(changeLyricAction(lyric))
})
//切换歌曲:根据播放模式（单曲循环，顺序，随机）
export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changeMusic',
  async (isNext: boolean, { dispatch, getState }) => {
    //1.拿到state数据
    const player = getState().player
    const playSongList = player.playSongList
    const playSongMode = player.playSongMode
    const songIndex = player.playSongIndex
    console.log(playSongList)
    //2.判断播放模式
    let newIndex = songIndex
    if (playSongMode === 0) {
      newIndex = Math.floor(Math.random() * playSongList.length)
    } else {
      newIndex = isNext ? newIndex + 1 : newIndex - 1
      if (newIndex < 0) newIndex = playSongList.length - 1
      if (newIndex > playSongList.length - 1) newIndex = 0
    }
    //3.获取对应的歌曲
    const song = playSongList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndex(newIndex))
    //4. 获取当前的音乐的歌词
    //请求歌词数据
    getLyric(song.id).then((res) => {
      let lyric = res.lrc.lyric
      //对歌词进行数据处理
      lyric = ParseLyric(lyric)
      dispatch(changeLyricAction(lyric))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyricSong: any
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playSongMode: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyricSong: {},
  lyricIndex: 0,
  playSongList: [
    {
      name: '温柔',
      id: 386538,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13193,
          name: '五月天',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000000534560',
      fee: 8,
      v: 76,
      crbt: null,
      cf: '',
      al: {
        id: 38285,
        name: '我们是五月天',
        picUrl:
          'https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
        tns: [],
        pic_str: '109951164912221924',
        pic: 109951164912221920
      },
      dt: 269800,
      h: {
        br: 320000,
        fid: 0,
        size: 10794885,
        vd: -63963,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6476948,
        vd: -61380,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4317980,
        vd: -59700,
        sr: 44100
      },
      sq: {
        br: 1053723,
        fid: 0,
        size: 35536822,
        vd: -63997,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 76,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      rtype: 0,
      mst: 9,
      cp: 684010,
      mv: 10929721,
      publishTime: 1049126400000
    },
    {
      name: '起风了',
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: '买辣椒也用券',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 42,
      crbt: null,
      cf: '',
      al: {
        id: 74715426,
        name: '起风了',
        picUrl:
          'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
        tns: [],
        pic_str: '109951163699673355',
        pic: 109951163699673360
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200
      },
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0
    },
    {
      name: '如何纪念 remix',
      id: 2094540298,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 14118805,
          name: 'Pulse.',
          tns: [],
          alias: []
        },
        {
          id: 51819183,
          name: '凯特凯西',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 90,
      st: 0,
      rt: '',
      fee: 0,
      v: 9,
      crbt: null,
      cf: '',
      al: {
        id: 177725700,
        name: '如何纪念remix',
        picUrl:
          'https://p1.music.126.net/SDBzPaExS05RIHlWl0B14Q==/109951169013314264.jpg',
        tns: [],
        pic_str: '109951169013314264',
        pic: 109951169013314270
      },
      dt: 200995,
      h: {
        br: 320002,
        fid: 0,
        size: 8041965,
        vd: -34981,
        sr: 48000
      },
      m: {
        br: 192002,
        fid: 0,
        size: 4825197,
        vd: -32395,
        sr: 48000
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3216813,
        vd: -30702,
        sr: 48000
      },
      sq: {
        br: 826773,
        fid: 0,
        size: 20772215,
        vd: -34355,
        sr: 48000
      },
      hr: {
        br: 1592131,
        fid: 0,
        size: 40001376,
        vd: -35092,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536871040,
      originCoverType: 2,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 9,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0
    }
  ],
  playSongIndex: -1,
  playSongMode: 0 //0默认模式，1顺序模式2随机模式
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricAction(state, { payload }) {
      state.lyricSong = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongList(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndex(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playSongMode = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changeLyricAction,
  changeLyricIndexAction,
  changePlaySongList,
  changePlaySongIndex,
  changePlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
