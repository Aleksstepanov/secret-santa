export const fakeRequest = time => {
  return new Promise(res => setTimeout(res, time))
}
