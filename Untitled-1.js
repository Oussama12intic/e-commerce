let img=document.getElementById('principalimag')
let menu=document.getElementById('menu')
let list=document.getElementById('list')
let quit=document.getElementById('quit')
let nmbr=document.getElementById('nmbr')
let moins=document.getElementById('moins')
let plus=document.getElementById('plus')

function getimage(i){
    img.src=i
}
function getmenu(){
    list.style.display='flex';

}
function getquit(){
    list.style.display='none'
}
function moin(){
   if(+nmbr.innerHTML<=0){
    nmbr.innerHTML=0 
}
else{
    nmbr.innerHTML-=1


} 
}
function pluse() {
    nmbr.innerHTML = +nmbr.innerHTML + 1;



    
}


