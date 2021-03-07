/* function calculateDegree() {
    let Degree = "400"

    const celsius = (parseInt(Degree) - 32) * 5/9
    const fahrenheit = parseInt(Degree) * 9/5 + 32

    console.log(`Your value in Celsius is, ${celsius.toFixed(2)}˚C, and in fahrenheit is, ${fahrenheit.toFixed(2)}˚F`)
}

calculateDegree() */

function calculateDegree() {
    let degree = "50f"

    if (degree.includes('F') || degree.includes('f')) {
        degree = (parseInt(degree) - 32) * 5/9
        console.log(`${degree}˚C`)
    } else if (degree.includes('C') || degree.includes('c')) {
        degree = parseInt(degree) * 9/5 + 32
        console.log(`${degree}˚F`)
    } else {
        console.log("Ivalid degree")
    }
}

calculateDegree()