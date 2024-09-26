// Event listeners


// let count = 0;
// document.getElementById("clickMe").addEventListener('click', function abc() {
//     console.log('Button clicked', count++);
// });

// Event listeners wint Closure functions for privacy.

function addEventListener() {
    let count = 0;
    document.getElementById('clickMe').addEventListener('click', function abc() {
        console.log('Clicked -', count++);
    });
}
addEventListener();