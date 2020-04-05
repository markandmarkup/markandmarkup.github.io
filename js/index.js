window.addEventListener('load', ()=>{

    const sidebars = document.querySelectorAll('.side-numbers');
    const socialLinks = document.querySelectorAll('.social-link a')

    var sideNumberStart = 4;
    var fontSize = parseInt(window.getComputedStyle(document.querySelector('html')).fontSize);

    socialLinks.forEach((socialLink)=>{
        socialLink.addEventListener('mouseover', (e)=>{
            socialLink.children[1].style.textDecoration = 'underline';
        })
    });

    socialLinks.forEach((socialLink)=>{
        socialLink.addEventListener('mouseleave', (e)=>{
            socialLink.children[1].style.textDecoration = 'none';
        })
    });

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