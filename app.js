document.getElementById('open-sidenav').addEventListener('click', openNav);
document.getElementById('close-sidenav').addEventListener('click', closeNav);

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
}

document.getElementById('dissect').addEventListener('click', dissect);

function dissect() {
    
    document.body.style.cursor = 'pointer';
    console.log('dissect')
    
}