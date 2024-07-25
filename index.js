console.log('BUM');
const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('I have been clicked');
    document.getElementById('button').innerHTML="Don't read me!";
})

// If it was a class instead of ID
// const button = document.getElementsByClass('button);
// Array.from(button).forEach(element => {
    // element.addEventListener('click' => {
        // console.log('I have been clicked')
        // })
        // });