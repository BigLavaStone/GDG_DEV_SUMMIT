let clickSequence = [];
const requiredSequence = ['Red', 'Blue', 'Green', 'Yellow'];

document.querySelectorAll('.clickable-area').forEach(area => {
    area.addEventListener('click', function () {
        clickSequence.push(this.dataset.color);
        if (clickSequence.length > requiredSequence.length) {
            alert("Sequence did not matched. Try again.");
            clickSequence = [];
        }
        if (clickSequence.join() === requiredSequence.join()) {
            alert('http://localhost:3000/qwlp0k/sImf4e, U3ByaW5n, check console for checkpoint code.');
            console.log('Checkpoint code: z8^N4B');
            clickSequence = [];
        }
    });
});