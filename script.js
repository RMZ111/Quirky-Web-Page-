function selectEmoji(emoji) {
    document.getElementById('selected-emoji').innerText = emoji;
    changeBackgroundColor(emoji);
}

function submitEmojis() {
    const selectedEmoji = document.getElementById('selected-emoji').innerText;
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
        '😊': 'lightyellow',
        '😢': 'lightblue',
        '😂': 'lightgreen',
        '😡': 'lightcoral',
        '😲': 'lightgray',
        '😍': 'lightpink',
        '😎': 'lightgoldenrodyellow',
        '🤩': 'lightpurple'
    };
    document.body.style.backgroundColor = colors[emoji] || '#f0f8ff';
}
