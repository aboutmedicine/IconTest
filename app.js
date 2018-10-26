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

document.getElementById('night-mode').addEventListener('click', nightMode);

function nightMode() {
    
    document.body.style.backgroundColor = '#333';
    document.querySelector('#sidenav').style.backgroundColor = '#333';
    document.querySelector('#toolbar').style.backgroundColor = '#555';
    document.querySelector('#logo').src = 'Logo_Night.png';
    console.log('night')
    
}