/**
 * Created by my4637275 on 2016/11/13.
 */
window.onload=tab;

function tab() {
    var set=document.getElementsByClassName('setFontSize');
    var articleSize=document.getElementsByClassName('articleSize')[0].getElementsByTagName('p');
    var num=document.getElementsByClassName('number')[0];
    var text=document.getElementsByTagName('textarea')[0];
    var size=['14px','16px','18px'];

    //设置默认字体为16px，默认16px现象字体背景为橘色
    for(let j=0;j<articleSize.length;j++){
        articleSize[j].style.fontSize=size[1];
    }
    set[1].style.background="rgb(255,162,0)";
    
    //改变字体大小
    for(let i=0;i<set.length;i++){
        set[i].onclick=function () {
            for(let j=0;j<articleSize.length;j++){
                articleSize[j].style.fontSize=size[i];
            }
            for(let m=0;m<set.length;m++){
                if(m==i){
                    set[m].style.background="rgb(255,162,0)";
                }
                else{
                    set[m].style.background="rgb(204,204,204)"
                }
            }
        }
    }
    text.onkeydown=function () {
        if(text.value.length<=150){
            num.innerHTML=text.value.length;
        }
    };
    text.onkeyup=function () {
        if(text.value.length<=150){
            num.innerHTML=text.value.length;
        }
    }
    
}