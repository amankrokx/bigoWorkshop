const navUl = document.querySelector('nav')

// get todays date
const startDate = new Date()
// set the date to two days before
startDate.setDate(startDate.getDate() - 2)

// create ul
let ul = '<ul>'

for (let i = 0; i < 14; i++) {
    // attach span to li
    const day = startDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
    const date = startDate.toLocaleDateString('en-US', { day: 'numeric' })
    // attach li to ul
    if (i === 2)
        ul += `
            <li class="active">
                <span>${day}</span>
                <span>${date}</span>
            </li>`
    else
        ul += `
            <li>
                <span>${day}</span>
                <span>${date}</span>
            </li>`

    // increment date by 1
    startDate.setDate(startDate.getDate() + 1)

}

ul += '</ul>'

// attach ul to nav
navUl.innerHTML = ul