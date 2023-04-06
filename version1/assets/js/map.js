var dufu1=document.getElementById("dufu");
            var Wuhou=document.getElementById("wuhou");
            var Panda=document.getElementById("panda");
            var Mount=document.getElementById("mount");
            var Dujiang=document.getElementById("dujiang");
            dufu1.addEventListener("mouseenter",function (){
           document.getElementById("dufuintroduction").value=" Du Fu's Cottage Museum is the former residence of Du Fu.";
             });
             dufu1.addEventListener("mouseleave",function (){
           document.getElementById("dufuintroduction").value="travel";
             });
             Wuhou.addEventListener("mouseenter",function (){
           document.getElementById("Wuhouintroduction").value="Wuhou Temple was originally built in 221 in memory of Zhuge Liang";
             });
             Wuhou.addEventListener("mouseleave",function (){
           document.getElementById("Wuhouintroduction").value="travel";
             });
             Panda.addEventListener("mouseenter",function (){
           document.getElementById("pandaintroduction").value="Panda breeding base is a world-famous ex-situ conservation base for giant pandas";
             });
             Panda.addEventListener("mouseleave",function (){
           document.getElementById("pandaintroduction").value="travel";
             });
             Mount.addEventListener("mouseenter",function (){
           document.getElementById("mountintroduction").value="Qingcheng Mount,World cultural Heritage Qingcheng Mountain - the main scenic spot of Dujiangyan";
             });
             Mount.addEventListener("mouseleave",function (){
           document.getElementById("mountintroduction").value="travel";
             });
             Dujiang.addEventListener("mouseenter",function (){
           document.getElementById("dujiangintroduction").value="Dujiangyan is located on the Minjiang River in the west of Chengdu Plain";
             });
             Dujiang.addEventListener("mouseleave",function (){
           document.getElementById("dujiangintroduction").value="travel";
             });