/**
 * Created by my4637275 on 2016/11/13.
 */
window.onload=function () {
    var channel=document.getElementById('channelimg');
    var dis=document.getElementsByClassName('disconcern');
    var del=document.getElementsByClassName('delete');

    var List=document.getElementById('channelList');
    var list=document.getElementById('channelList').getElementsByTagName('li');

    var Information=document.getElementsByClassName('information')[0].getElementsByTagName('ul')[0];
    var Picture=document.getElementsByClassName('picture')[0].getElementsByTagName('ul')[0];
    var Video=document.getElementsByClassName('video')[0].getElementsByTagName('ul')[0];
    var Experiment=document.getElementsByClassName('experiment')[0].getElementsByTagName('ul')[0];

    var information=document.getElementsByClassName('information')[0].getElementsByTagName('li');
    var picture=document.getElementsByClassName('picture')[0].getElementsByTagName('li');
    var video=document.getElementsByClassName('video')[0].getElementsByTagName('li');
    var experiment=document.getElementsByClassName('experiment')[0].getElementsByTagName('li');

    for(let i=0;i<del.length;i++){
        del[i].style.display='none';
    }

    //删除节点,classname是删除节点的名字，name是删除节点所在的父元素
    function Del(classnamae,name) {
        let del=document.getElementsByClassName(classnamae);
        for (let i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                name.removeChild(name.childNodes[i]);
                del = document.getElementsByClassName(classnamae);
                Del(classnamae,name);
            };
        }
    }

     //添加频道，newclass是添加元素，classname是添加之后可删除节点的名字，name是添加之后也要进行删除操作，及添加元素的最近一级父元素
     function add(newclass,classname) {
        for(let i=0;i<newclass.length;i++){
            newclass[i].onclick=function () {
                let newli=document.createElement('li');
                newli.innerHTML='<a href="#">'+'频道名称'+'</a><span class="delete"><img src="./images/main-right-chahao_22.png"></span>';
                List.appendChild(newli);
                Del(classname,List);
            }
         }
     }

     add(information,'delete');
     add(picture,'delete');
     add(video,'delete');
     add(experiment,'delete');


    Del('delete',List);
    Del('information',Information);
    Del('picture',Picture);
    Del('video',Video);
    Del('experiment',Experiment);

    //显示隐藏
    channel.onclick=function () {
        if(dis[0].style.display=='block'){
            dis[0].style.display='none';
            for(let i=0;i<del.length;i++){
                del[i].style.display='none';
            }
        }
        else{
            dis[0].style.display='block';
            for(let i=0;i<del.length;i++){
                del[i].style.display='block';
            }
        }
    };
};

