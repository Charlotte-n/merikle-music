//检验手机号
export const verifyPhoneRule = (num: string) => {
  const res =
    /^(13[0-9]|14[579]|15[0-35-9]|166|17[01345678]|18[0-9]|19[89])\d{8}$/
  if (!res.test(String(Number(num)))) {
    return false
  } else {
    return true
  }
}
