const inputLength = document.getElementById("length")
const inputWidth = document.getElementById("width")

inputLength.addEventListener('input', calculateRectangle)
inputWidth.addEventListener('input', calculateRectangle)

function calculateRectangle() {
    const length = parseFloat(inputLength.value)
    const width = parseFloat(inputWidth.value)

    if (isNaN(length) || isNaN(width)) {
        document.getElementById("error").textContent = "Enter only numbers, please"
        return
    }

    if (length <= 0 || width <= 0) {
        document.getElementById("error").textContent = "Enter positive values, please"
        return
    }
    const area = length * width;
    const perimeter = 2 * (length + width);
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    document.getElementById("perimeter").textContent = perimeter.toString()
    document.getElementById("area").textContent = area.toString()
    document.getElementById("diagonal").textContent = diagonal.toString()
    document.getElementById("error").textContent = ""
}