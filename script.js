flag = 0;
function controller(x) {
    flag += x
    clicked(flag)
}
clicked(flag);
function clicked(m) {
    let slides = document.querySelectorAll('.slides')
    if(m==slides.length){
        flag=0;
        m=0;
    }
    if(m<0){
        flag=slides.length-1;
        m=slides.length-1;
    }
    for (let y of slides) {
        y.style.display = 'none';
    }
    slides[m].style.display = 'block';
}