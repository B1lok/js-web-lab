const messageContainer = document.getElementById("message-container")
const user1btn = document.getElementById("user1-button")
const user2btn = document.getElementById("user2-button")

user1btn.addEventListener('click', addMessage)
user2btn.addEventListener('click', addMessage)

function addMessage(event) {
    if (event.target.id === "user1-button") {
        const message = document.getElementById("user1-input").value
        messageContainer.appendChild(getMessageElement("User1", message))
        document.getElementById("user1-input").value = ""
        return
    }
    const message = document.getElementById("user2-input").value
    const messageElement = getMessageElement("User2", message)
    messageContainer.appendChild(messageElement)
    document.getElementById("user2-input").value = ""
}

function getMessageElement(username, message) {
    if (message.trim().length === 0) return
    const messageElement = document.createElement('div')
    const messageUsername = document.createElement("h5")
    messageUsername.textContent = username
    const messageText = document.createElement('p')
    messageText.textContent = message
    messageElement.appendChild(messageUsername)
    messageElement.appendChild(messageText)
    messageElement.className = "messageElement"
    return messageElement;
}