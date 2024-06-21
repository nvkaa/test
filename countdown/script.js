
const now = new Date()
const ny = new Date(2025, 1, 1)

const dif = ny.getTime() - now.getTime()

const daysLeft = Math.floor(dif / (1000 * 60 * 60 * 24))
const hoursLeft = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
const minutesLeft = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60))
const secondsLeft = Math.floor((dif % (1000 * 60)) / 1000)

const d = document.querySelector('[days]')
const h = document.querySelector('[hours]')
const m = document.querySelector('[minutes]')
const s = document.querySelector('[seconds]')

console.log(daysLeft, d);

d.textContent = daysLeft
h.textContent = hoursLeft
m.textContent = minutesLeft
s.textContent = secondsLeft
