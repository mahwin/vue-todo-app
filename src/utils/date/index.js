export function getCurrentTimeStamp() {
  return new Date().getTime();
}

export function timeStampToLocaleString(timeStamp) {
  return new Date(timeStamp).toLocaleString();
}
