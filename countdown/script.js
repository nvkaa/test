
const getTimeLeft = () => {
    const now = new Date()
    const ny = new Date(2025, 1, 1)

    const dif = ny.getTime() - now.getTime()

    const daysLeft = Math.floor(dif / (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60))
    const secondsLeft = Math.floor((dif % (1000 * 60)) / 1000)

    return {
        daysLeft, hoursLeft, minutesLeft, secondsLeft
    }
}



const d = document.querySelector('[days]')
const h = document.querySelector('[hours]')
const m = document.querySelector('[minutes]')
const s = document.querySelector('[seconds]')

const displayTime = () => {
    let timeleft = getTimeLeft() 

    d.textContent = timeleft.daysLeft
    h.textContent = timeleft.hoursLeft
    m.textContent = timeleft.minutesLeft
    s.textContent = timeleft.secondsLeft
}

setInterval(displayTime, 1000)
