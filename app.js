var image = document.querySelectorAll('.image img')
var galleryimg = document.querySelector('.gallery_ner img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var gallery = document.querySelector('.gallery')
var currentindex =0
function galleryShow(){
    if(currentindex ==0)
    {
        prev.classList.add('hide')
    }
    else
    {
        prev.classList.remove('hide')
    }
    if(currentindex ==7)
    {
        next.classList.add('hide')
    }
    else
    {
        next.classList.remove('hide')
    }
    galleryimg.src = image[currentindex].src
    gallery.classList.add('show')
}
image.forEach(function(items, index){
     items.addEventListener('click', function(){
     currentindex=index
   galleryShow()
     })
})
close.addEventListener('click', function(){
    gallery.classList.remove('show')
})
prev.addEventListener('click', function(){
    if(currentindex > 0)
    {
        currentindex--;
        galleryShow()
    }
})
next.addEventListener('click', function(){
    if(currentindex >= 0)
    {
        currentindex++;
        galleryShow()
    }
})