window.addEventListener('load', ()=>{

    const sidebars = document.querySelectorAll('.side-numbers');

    var sideNumberStart = 4;
    var fontSize = parseInt(window.getComputedStyle(document.querySelector('html')).fontSize);

    sidebars.forEach((sidebar, index)=>{
        if (index > 0) {
            let parentHeight = sidebar.parentElement.clientHeight - 6;
            let noOfLines = parentHeight / (fontSize * 1.5);
            for(let i = 0; i < noOfLines; i++) {
                sidebar.innerHTML += Math.floor(i + sideNumberStart);
                sidebar.innerHTML += '<br>';
            }
            sideNumberStart = sideNumberStart + noOfLines;
        }
    });

});