const sidebars = document.querySelectorAll('.side-numbers');
const socialLinks = document.querySelectorAll('.social-link a');

window.addEventListener('load', ()=>{
    addSocialLinkUnderline(socialLinks);

    if (window.innerWidth <= 650) {
        resizeHeader();
        shortenSocialLinkText(socialLinks);
    }

    generateSideBarNumbers(sidebars);
});

window.addEventListener('resize', ()=>{

    if (window.innerWidth <= 650) {
        resizeHeader();
        shortenSocialLinkText(socialLinks);
    }
    if (window.innerWidth <= 1035) {
        generateSideBarNumbers(sidebars);
    }
});

function addSocialLinkUnderline(socialLinks) {
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
}

function generateSideBarNumbers(sidebars) {
    let sideNumberStart = 4;
    let fontSize = parseInt(window.getComputedStyle(document.querySelector('html')).fontSize);

    sidebars.forEach((sidebar, index)=>{
        if (index > 0) {
            sidebar.innerHTML = '';
            let parentHeight = sidebar.parentElement.clientHeight - 6;
            let noOfLines = parentHeight / (fontSize * 1.5);
            for(let i = 0; i < noOfLines; i++) {
                sidebar.innerHTML += Math.floor(i + sideNumberStart);
                sidebar.innerHTML += '<br>';
            }
            sideNumberStart = sideNumberStart + noOfLines;
        }
    });
}

function resizeHeader() {
    let topLogo = document.getElementsByClassName('top-logo')
    let logoHeight = parseInt(window.getComputedStyle(topLogo[0]).height);
    topLogo[0].nextElementSibling.style.fontSize = (Math.floor(logoHeight) + 2) + 'px';
}

function shortenSocialLinkText(socialLinks) {
    let shortTextContent = ['Twitter', 'GitHub', 'Codepen'];
    socialLinks.forEach((socialLink, index)=>{
            socialLink.children[1].textContent = shortTextContent[index];
    });
}
