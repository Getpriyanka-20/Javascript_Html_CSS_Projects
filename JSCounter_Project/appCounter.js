//set count vlaue
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click',function(e){
        const sty =e.currentTarget.classList;
        if(sty.contains("decrease")){
            count--;
        }
        else if(sty.contains("increase"))
        {
            count++;
        }
        else{
            count=0;
        }
        if (count > 0){
            value.style.color="green";
        }
        else if (count < 0){
            value.style.color ="red";
        }
        else{
            value.style.color ="#333"
        }
        value.textContent = count;

    })
    
});
