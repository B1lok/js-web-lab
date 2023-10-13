const user1Btn = document.getElementById("user1-button");
const user2Btn = document.getElementById("user2-button");
const messageContainer = document.getElementById("message-container");

user1Btn.addEventListener('click', addMessage);
user2Btn.addEventListener('click', addMessage);

function addMessage(event) {
    if (event.target.id === "user1-button") {
        const message = document.getElementById("user1-input").value;
        const messageElement = getMessageElement("User1", message);
        messageElement.classList.add("user1");
        messageContainer.appendChild(messageElement);
        document.getElementById("user1-input").value = "";
        return;
    }

    const message = document.getElementById("user2-input").value;
    const messageElement = getMessageElement("User2", message);
    messageElement.classList.add("user2");
    const messageElementParent = document.createElement("div");
    messageElementParent.appendChild(messageElement);
    messageElementParent.classList.add("d-flex", "justify-content-end");
    messageContainer.appendChild(messageElementParent);
    document.getElementById("user2-input").value = "";
}

function getMessageElement(username, message) {
    if (message.trim().length === 0) {
        return;
    }

    const messageElement = document.createElement("div");
    const messageUsername = document.createElement("h5");
    const messageText = document.createElement("p");
    messageUsername.textContent = username;
    messageText.textContent = message;

    messageElement.appendChild(messageUsername);
    messageElement.appendChild(messageText);
    messageElement.className = "message";
    return messageElement;
}