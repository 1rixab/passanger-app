let a = document.getElementById("num")
let b = document.getElementById("btn1")
let c = document.getElementById("btn2")
let d = document.getElementById("save")
let e = document.getElementById("notes")
let flag = 0
let countStr = flag + " - "
function save(){
    countStr = flag + " - ";
}
 
b.addEventListener("click", function(){
     flag += 1
     a.innerText = flag
})
c.addEventListener("click", function () {
  flag -= 1;
  a.textContent = flag;
});
d.addEventListener("click",function(){
      countStr = flag + " - "
    e.textContent += countStr
    a.textContent = 0
    flag = 0

})