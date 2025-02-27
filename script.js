// script.js
function selectEmoji(emoji) {
    document.getElementById('selected-emoji').innerText = emoji;
    changeBackgroundColor(emoji);
}

function submitEmojis() {
    const selectedEmoji = document.getElementById('selected-emoji').innerText;
    if (!selectedEmoji) {
        return;
    }
    const now = new Date();
    const historyTable = document.getElementById('emoji-history').querySelector('tbody');
    const newRow = historyTable.insertRow();
    const emojiCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const timeCell = newRow.insertCell(2);

    emojiCell.innerText = selectedEmoji;
    dateCell.innerText = now.toLocaleDateString();
    timeCell.innerText = now.toLocaleTimeString();
}

function resetEmojis() {
    document.getElementById('selected-emoji').innerText = '';
    const historyTable = document.getElementById('emoji-history').querySelector('tbody');
    historyTable.innerHTML = '';
}

function changeBackgroundColor(emoji) {
    const colors = {
        '😊': '#ffed63',
        '😢': '#064f8a',
        '😂': '#63ffce',
        '😡': '#ff5e4f',
        '😲': '#ffb60a',
        '😍': '#ffc4f9',
        '😎': '#6eb356',
        '🤩': '#700751'
    };
    document.body.style.backgroundColor = colors[emoji] || '#f0f8ff';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.submit-btn').addEventListener('click', submitEmojis);
    document.querySelector('.reset-btn').addEventListener('click', resetEmojis);
});
