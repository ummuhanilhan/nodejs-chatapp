const socket = io.connect('http://localhost:4000');

const sender = document.getElementById('sender');
const message = document.getElementById('message');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
  socket.emit('chat', {
    sender: sender.value,
    message: message.value
  });
});

message.addEventListener('keypress', () => {
    socket.emit('typing', sender.value);
    }
);

socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += `<p><strong>${data.sender}</strong>: ${data.message}</p>`;
    message.value = '';
    });

    message.addEventListener('keypress', () => {
    socket.emit('typing', sender.value);
    }
);

socket.on('typing', (data) => {
    feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
    }
);


