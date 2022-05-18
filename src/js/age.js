const age = () => {
    const birthday = Date.UTC(2004, 4, 18, 0)
    let ageInMilliseconds = Date.now() - birthday
    let ageInYears = (
        ageInMilliseconds /
        (1000 * 60 * 60 * 24 * 365.25)
    ).toFixed(9)

    return ageInYears
}

const element = document.querySelector("#age")
const updateAge = () => {
    element.textContent = age()
}

setInterval(updateAge, 1)
