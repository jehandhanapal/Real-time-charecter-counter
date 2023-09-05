const txtareaEl = document.getElementById('textarea');
const totalEl = document.getElementById('totalcharecter');
const remEl = document.getElementById('Remaining');

txtareaEl.addEventListener('keyup',()=>{

    updatecounter();
})
function updatecounter() {

    totalEl.innerText = txtareaEl.value.length;
    remEl.innerText = txtareaEl.getAttribute("maxlength")-txtareaEl.value.length;
}
