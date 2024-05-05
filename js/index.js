window.onload = function() {
    var focusBox=document.getElementById("focus-box");
    // var prev = document.getElementsByClassName('focus-navigation focus-prev'); 
    // var next = document.getElementsByClassName('focus-navigation focus-next'); 
    var navigation = document.getElementsByClassName('focus-navigation');
    console.log(navigation); 
    focusBox.onmouseover=function(){
        for(var i=0;i<navigation.length;i++){
            // navigation[i].style.visibility='visible';
            navigation[i].style.display='inline-block';
        }
        // prev.style.display='inline-block';
        // next.style.display='inline-block';
    }
    focusBox.onmouseout=function(){
        for(var i=0;i<navigation.length;i++){
            navigation[i].style.display='none';
        }
        // prev.style.display='none';
        // next.style.display='none';
    }

    function hotChange(){
        var current_index=0;
        var index=-1;
        var timer=window.setInterval(autoChange,2000);
        var button_li=document.getElementById("focus-pages").getElementsByTagName("a");
        var pic_li=document.getElementById("focus-container").getElementsByTagName("div");
        var title_li=document.getElementById("focus-titles").getElementsByTagName("li");
        console.log(button_li);
        console.log(pic_li);
        console.log(title_li);

        for(var i=0;i<navigation.length;i++){
            navigation[i].onmouseover=function(){
                if(timer){
                    clearInterval(timer);
                }
                for(var j=0;j<navigation.length;j++){
                    if(navigation[j]==this){
                        index=j;
                        console.log("index"+index);
                        navigation[j].onclick=function(){
                            if(index==0){
                                console.log("1: "+index+"== "+current_index);

                                current_index=current_index-2;
                                if(current_index<0) current_index+=4;
                                autoChange();
                                console.log("1: "+index+"== "+current_index);
                            }
                            else{
                                autoChange();
                                console.log("2: ======");
                            }
                        }
                        
                    }
                }

            }
            navigation[i].onmouseout=function(){
                timer=setInterval(autoChange,2000);
            }
        }

        for(var i=0;i<button_li.length;i++){
            button_li[i].onmouseover=function(){
                if(timer){
                    clearInterval(timer);
                }
                for(var j=0;j<pic_li.length;j++){
                    if(button_li[j]==this){
                        current_index=j;
                        button_li[j].className="page focus-page-active";
                        pic_li[j].className="focus-item activate";
                        title_li[j].className="title focus-title";
                    }else{
                        pic_li[j].className="focus-item";
                        button_li[j].className="page";
                        title_li[j].className="title";
                    }
                }
            }
            button_li[i].onmouseout=function(){
                timer=setInterval(autoChange,2000);
            }
        }
        function autoChange(){
            ++current_index;
            if(current_index==button_li.length){
                current_index=0;
            }
            for(var i=0;i<button_li.length;i++){
                if(i==current_index){
                    button_li[i].className="page focus-page-active";
                    pic_li[i].className="focus-item activate";
                    title_li[i].className="title focus-title";
                }
                else{
                    button_li[i].className="page";
                    pic_li[i].className="focus-item";
                    title_li[i].className="title";
                }
            }
        }
    }
    hotChange();
}						
