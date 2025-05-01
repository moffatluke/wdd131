let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        document.body.className = 'dark';
        logo.setAttribute('src', 'byui-logo_white.png');

        //give body dark class
        //add different image by changing src
        
    } else {
        //remove class
        document.body.className = 'light';
        logo.src = 'byui-logo_blue.webp';
        //take off class
        //change the image back to original
    }
}