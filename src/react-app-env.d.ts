/// <reference types="react-scripts" />

//这个是定义类型，进行合并，更好的提示
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
