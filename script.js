document.querySelector('.wrapper').onclick = (e) => {
    let isPanelPart = false;
    for(let part of document.querySelectorAll('.wrapper div')) {
        if(part === e.target) isPanelPart = true;
    }
    if(!isPanelPart) return;
    let color = e.target.classList[0];
    document.querySelector(`.${color}-counter`).innerHTML++;
}