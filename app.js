btn = document.getElementById("btn")

btn.addEventListener('mouseover', function (){
    var height = Math.floor(Math.random()*window.innerHeight-5)
    var width = Math.floor(Math.random()*window.innerWidth -5)
    btn.style.top = `${height}px`
    btn.style.left = `${width}px`

})
btn.addEventListener('click',function (){
    btn.style.backgroundColor='green'
    btn.style.color ='white'
    btn.innerText='You win'
})