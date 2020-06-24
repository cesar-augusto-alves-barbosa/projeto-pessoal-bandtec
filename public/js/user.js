function scrollInicio() {
    let body = document.body;
    let html = document.documentElement;

    body.scrollTop = 100;
    html.scrollTop = 100;
}

function scrollDicas() {
    let body = document.body;
    let html = document.documentElement;

    body.scrollTop = 2350;
    html.scrollTop = 2350;
}

function scrollContato() {
    let body = document.body;
    let html = document.documentElement;

    body.scrollTop = 10000;
    html.scrollTop = 10000;
}

window.onscroll = function () { verificaScroll() }

function verificaScroll() {
    let body = document.body;
    let html = document.documentElement;

    if (body.scrollTop > 2150 || html.scrollTop > 2150) {
        tips_devs.style.display = 'flex'
    }
    if (body.scrollTop > 2750 || html.scrollTop > 2750) {
        div_sugestions.style.display = 'inline-block'
    }
}