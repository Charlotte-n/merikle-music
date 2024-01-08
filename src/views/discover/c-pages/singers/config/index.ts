export const SingerCategoryConfig = [
  {
    title: '推荐',
    area: -1,
    artists: [
      {
        name: '推荐歌手',
        type: 1,
        url: '/discover/artist',
        id: 0
      },
      {
        name: '入驻歌手',
        type: 2,
        url: '/discover/artist?cat=5001',
        dataPath: '/artist/list?cat=5001'
      }
    ]
  },
  {
    title: '华语',
    area: 7,
    artists: [
      {
        name: '华语男歌手',
        url: '/discover/artist?id=1001',
        type: 1
      },
      {
        name: '华语女歌手',
        url: '/discover/artist?id=1002',
        type: 2
      },
      {
        name: '华语组合/乐队',
        url: '/discover/artist?id=1003',
        type: 3
      }
    ]
  },
  {
    title: '欧美',
    area: 96,
    artists: [
      {
        name: '欧美男歌手',
        url: '/discover/artist?id=2001',
        type: 1
      },
      {
        name: '欧美女歌手',
        url: '/discover/artist?id=2002',
        type: 2
      },
      {
        name: '欧美组合乐队',
        url: '/discover/artist?id=2003',
        type: 3
      }
    ]
  },
  {
    title: '日本',
    area: 8,
    artists: [
      {
        name: '日本男歌手',
        url: '/discover/artist?id=6001',
        type: 1
      },
      {
        name: '日本女歌手',
        url: '/discover/artist?id=6002',
        type: 2
      },
      {
        name: '日本组合/乐队',
        url: '/discover/artist?id=6003',
        type: 3
      }
    ]
  },
  {
    title: '韩国',
    area: 16,
    artists: [
      {
        name: '韩国男歌手',
        url: '/discover/artist?id=7001',
        type: 1
      },
      {
        name: '韩国女歌手',
        url: '/discover/artist?id=7002',
        type: 2
      },
      {
        name: '韩国组合/乐队',
        url: '/discover/artist?id=7003',
        type: 3
      }
    ]
  },
  {
    title: '其他',
    area: 0,
    artists: [
      {
        name: '其他男歌手',
        url: '/discover/artist?id=4001',
        type: 1
      },
      {
        name: '其他女歌手',
        url: '/discover/artist?id=4002',
        type: 2
      },
      {
        name: '其他组合乐队',
        url: '/discover/artist?id=4003',
        type: 3
      }
    ]
  }
]

export const Letters = [
  '热门',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '其他'
]
