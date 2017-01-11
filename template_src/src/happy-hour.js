export default function () {
  const date = new Date()
  const h = date.getHours()
  let m = date.getMinutes().toString()
  m = m.length === 1 ? `0${m}` : m

  return `${h}.${m}`
}
