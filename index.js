const input = document.getElementById('input');
function addingEventListener() {
    input.addEventListener('click', clickAlert);
    return 'clicked';

function clickAlert() {
  alert('clicked!');
}
}
