$(document).ready(function(){
    $(".slider").slick({
        arrows: false,
        dots: true,
    })
})




const triggers = document.querySelectorAll('.menu-trigger');
console.log(triggers);

triggers.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        e.preventDefault();
        // ele.classList.toggle(' text-orange-600')
        ele.classList.toggle('is-open')
    })

})


