// Sample data for messages
const messages = [
    { sender: 'Alice', text: 'Hello!' },
    { sender: 'Bob', text: 'Hi there!' },
    { sender: 'Alice', text: 'How are you?' },
    { sender: 'Bob', text: 'I\'m good, thanks!' },
];

// Function to initialize chat messages
function initializeChat() {
    const chatMessages = document.getElementById('chat-messages');
    messages.forEach(message => {
        appendMessage(message.sender, message.text);
    });
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        appendMessage('You', message);
        messageInput.value = '';
        // Simulate response after a delay (simulating server response)
        setTimeout(() => {
            receiveMessage('Friend', 'I received your message!');
        }, 1000);
    }
}

// Function to receive a message
function receiveMessage(sender, text) {
    appendMessage(sender, text);
}

// Function to append a message to the chat
function appendMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    const senderElement = document.createElement('span');
    senderElement.classList.add('sender');
    senderElement.textContent = sender + ':';
    const textElement = document.createElement('span');
    textElement.classList.add('text');
    textElement.textContent = text;
    messageElement.appendChild(senderElement);
    messageElement.appendChild(textElement);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

// Initialize chat when the page loads
document.addEventListener('DOMContentLoaded', function () {
    initializeChat();
});
