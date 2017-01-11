import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import './custom.css'

import happyHour from './happy-hour'

let root = $('div.app').first()

// don't need container this time
root.removeClass('container-fluid')

// require an image
const background = require('./wallup-893.jpg')

// make it background
root.css({
  'background-size': '100% 100%',
  'background-image': `url("${background}")`
})

// needed for flexbox alignment
let row = $('<div />')

let clock = $('<div />')
  .height(200)
  .addClass('flex-item')
  .addClass('text-center')
  .text(happyHour())

let miniSpan = $('<div />')
  .addClass('flex-item')
  .css({
    'font-size': '23px',
    'margin-top': '-70px'
  })
  .addClass('text-right')
  .text(new Date().getSeconds())

root.append(row)

row.append(clock)
row.append(miniSpan)

clock.click(() => {
  window.alert('Time travel not functional at this time. Sorry')
})
// let us use jquery from the console, remove for prod
window.$ = $

setInterval(() => {
  clock.text(happyHour())
}, 1000 * 3)

setInterval(() => {
  const mili = new Date()
  const microtime = parseFloat((mili.getSeconds() * 1000 + mili.getMilliseconds()) / 1000)
  miniSpan.text(`${microtime.toFixed(3)}`)
}, 27)
