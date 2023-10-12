const today = new Date().toISOString().split('T')[0];
document.getElementById("birthDate").setAttribute("max", today)


const inputDate = document.getElementById("birthDate")
inputDate.addEventListener('input',calculateDateOfBirth)

function calculateDateOfBirth(){
    const date = new Date(inputDate.value)
    const daysOfWeek = [ "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]

    const a = Math.floor((15 - date.getMonth()) / 12);
    const y = date.getFullYear() - a;
    const m = date.getMonth() + 12 * a - 1;
    const dayOfBirth = (date.getDate() + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
    document.getElementById("dayOfBirth").textContent = daysOfWeek[dayOfBirth]
}