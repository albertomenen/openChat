document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const chat = document.getElementById('chat');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');

    function addMessage(message) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        chat.appendChild(messageElement);
        chat.scrollTop = chat.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message.trim()) {
            socket.emit('chat_message', message);
            addMessage(`Tú: ${message}`);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    socket.on('chat_message', (message) => {
        addMessage(`Usuario: ${message}`);
    });
});
