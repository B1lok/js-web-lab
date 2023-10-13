document.getElementById("length").addEventListener('input', calculateRectangle);
document.getElementById("width").addEventListener('input', calculateRectangle);

function calculateRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (!validate(length, width)) {
        return;
    }

    const area = length * width;
    const perimeter = 2 * (length + width);
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    document.getElementById("perimeter").textContent = perimeter.toString();
    document.getElementById("area").textContent = area.toString();
    document.getElementById("diagonal").textContent = diagonal.toString();
    document.getElementById("error").textContent = "";
}

function validate(length, width) {
    if (isNaN(length) || isNaN(width)) {
        document.getElementById("error").textContent = "Only numbers are allowed!";
        document.getElementById("error").classList.add("mb-3");
        document.getElementById("perimeter").textContent = "";
        document.getElementById("area").textContent = "";
        document.getElementById("diagonal").textContent = "";
        return;
    }

    if (length <= 0 || width <= 0) {
        document.getElementById("error").textContent = "Enter valid values, please!";
        document.getElementById("error").classList.add("mb-3");
        return;
    }

    document.getElementById("error").classList.remove("mb-3");
    return true;
}