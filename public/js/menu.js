let positionMenu = 0;

setTimeout(() => { side_nav.style.transitionDuration = "1s" }, 1000)

function nav() {
    if (side_nav.style.transform == `translateX(${positionMenu}px)`) {
        positionMenu = 350;
        side_nav.style.transform = `translateX(-${positionMenu}px)`
    } else {
        positionMenu = 0;
        side_nav.style.transform = `translateX(${positionMenu}px)`
    }
}