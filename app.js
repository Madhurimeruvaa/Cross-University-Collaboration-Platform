function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function joinProject() {
    alert("Thank you for joining the project! We'll notify the team.");
}

const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

function sendMessage(event) {
    if (event.key === 'Enter') {
        const message = chatInput.value;
        if (message.trim() !== "") {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
}
