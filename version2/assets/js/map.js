            var dufu1=document.getElementById("dufu");
            var Wuhou=document.getElementById("wuhou");
            var Panda=document.getElementById("panda");
            var Mount=document.getElementById("mount");
            var Dujiang=document.getElementById("dujiang");
           var dufu2=document.getElementById("dufus");
            var Wuhous2=document.getElementById("Wuhous");
            var Panda2=document.getElementById("Pandas");
            var Mount2=document.getElementById("mounts");
            var Dujiang2=document.getElementById("dujiangyans");
            var Kuanzhai=document.getElementById("kuanzhai");
            var Kuanzhai2=document.getElementById("broads");

             let data=[
              "./images/1.jpg",
              "./images/2.jpg",
              "./images/3.jpg",
              "./images/4.jpg",
              "./images/5.jpg",
              "./images/6.jpg",
              "./images/7.jpg",
              "./images/8.jpg",
              "./images/9.jpg",
             
             ]
            let urls;
            
            let index = 0;//声明一个变量接受图片
           
        /*setInterval(function () {
            index++;
            if (index >= data.length) {//判断index值如果大于等于数组内的长度index就等于0,就是数组的第一个索引号
                index = 0;
            }
          
            
           urls= document.querySelector("body").style.backgroundImage="url("+data[index]+")";
           console.log(urls);
        }, 3000);*/
        let mapEcharts = null;

        //初次加载中国地图
        //第一个参数:城市编码(成都地图为100000)，第二个参数:是否第一次加载，第一次加载传false
        loadMap(510100, false);
    
        //请求地图数据
        function loadMap(areaCode, notFirstLoad = true) {
          fetch(`https://raw.githubusercontent.com/jryyy02/Interactive-media/main/geoAtlasJson.json`)
            .then((res) => res.json())
            .then((res) => {
              //第一次加载，不需要注销实例
              if (notFirstLoad) {
                //注销实例
                echarts.dispose(mapEcharts);
              }
              //初始化
              initMap(areaCode, res);
            })
            .catch((err) => {
              alert("最多到县/区");
            });
        }
        function initMap(mapName, mapData) {
          mapEcharts = echarts.init(document.getElementById("3dMap"));
          // 注册地图
          echarts.registerMap(mapName, mapData);
    
          // 配置项
          let options = {
            series: [
              {
                name: "map",
                type: "map", // 地图
                map: mapName, // 加载注册的地图
                roam: false, // 鼠标事件
                data: [], //{name,value} 业务数据
              },
            ],
          };
          mapEcharts.setOption(options);
          mapEcharts.on("click", (params) => {
            //通过城市名称找到对应城市编码
            const item = allAreaCode.find((i) => i.name === params.name);
            if (item) {
              loadMap(item.code);
            }
          });
        }
/*const weathers=document.querySelector(".weathers");*/
const apiKey = "4d8fb5b93d4af21d66a2948710284366";
var markup=0;
const url = `https://api.openweathermap.org/data/2.5/weather?q=chengdu&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main,  weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
       markup = `
     
      <div class="city-temp" style="font-size:0.625rem;font-weight:bold;color:rgb(34,139,34)">${Math.round(main.temp)}<sup>°C</sup></div>
      <figure>
        <img class="city-icon" src="${icon}" alt="${
      weather[0]["description"]
    }" style="width:1.875rem; height:1.875rem;">
        <figcaption style="font-size:0.625rem;font-weight:bold; color:rgb(34,139,34)">${weather[0]["description"]}</figcaption>
      </figure>
    `;
    
  })
  
     
     /* dufu1.addEventListener("mouseenter",function (){
        document.getElementById("dufuintroduction").value=" Du Fu's Cottage Museum is the former residence of Du Fu.";
        dufu2.innerHTML=markup;
        dufu2.style.setProperty("border","2px solid rgb(34,139,34)");
      });
      dufu1.addEventListener("mouseleave",function (){
        document.getElementById("dufuintroduction").value="attraction";
        dufu2.innerHTML="";
        dufu2.style.setProperty("border","none"); 
          });
      Wuhou.addEventListener("mouseenter",function (){
        document.getElementById("Wuhouintroduction").value="Wuhou Temple was originally built in 221 in memory of Zhuge Liang";
        Wuhous2.innerHTML=markup;
        Wuhous2.style.setProperty("border","2px solid rgb(34,139,34)");
          });
      Wuhou.addEventListener("mouseleave",function (){
        document.getElementById("Wuhouintroduction").value="attraction";
        Wuhous2.innerHTML="";
        Wuhous2.style.setProperty("border","none"); 
          });
          Panda.addEventListener("mouseenter",function (){
            document.getElementById("pandaintroduction").value="Panda breeding base is a world-famous ex-situ conservation base for giant pandas";
            Panda2.innerHTML=markup; 
            Panda2.style.setProperty("border","2px solid rgb(34,139,34)"); 
          });
          Panda.addEventListener("mouseleave",function (){
            document.getElementById("pandaintroduction").value="attraction";
            Panda2.innerHTML="";
            Panda2.style.setProperty("border","none"); 
              });
          Mount.addEventListener("mouseenter",function (){
            document.getElementById("mountintroduction").value="Qingcheng Mount,World cultural Heritage Qingcheng Mountain - the main scenic spot of Dujiangyan";
            Mount2.innerHTML=markup;  
            Mount2.style.setProperty("border","2px solid rgb(34,139,34)");
          });
          Mount.addEventListener("mouseleave",function (){
            document.getElementById("mountintroduction").value="attraction";
            Mount2.innerHTML="";
            Mount2.style.setProperty("border","none"); 
          });
          Dujiang.addEventListener("mouseenter",function (){
            document.getElementById("dujiangintroduction").value="Dujiangyan is located on the Minjiang River in the west of Chengdu Plain";
            Dujiang2.innerHTML=markup; 
            Dujiang2.style.setProperty("border","2px solid rgb(34,139,34)");
          });
          Dujiang.addEventListener("mouseleave",function (){
            document.getElementById("dujiangintroduction").value="attraction";
             Dujiang2.innerHTML="";
             Dujiang2.style.setProperty("border","none"); 
            });
           Kuanzhai.addEventListener("mouseenter",function (){
              document.getElementById("broadintroduction").value="Broad and Narrow Allay is on Qingyang Strict,Chengdu City";
              Kuanzhai2.innerHTML=markup; 
              Kuanzhai2.style.setProperty("border","2px solid rgb(34,139,34)");
            });
          Kuanzhai.addEventListener("mouseleave",function (){
              document.getElementById("broadintroduction").value="food";
               Kuanzhai2.innerHTML="";
               Kuanzhai2.style.setProperty("border","none"); 
              });
            /* <h2 class="city-name" data-name="${name},${sys.country}" >
        <span style="font-size:10px; font-weight:bold;">${name}</span>
        <sup style="font-size:10px;font-weight:bold;">${sys.country}</sup>
      </h2>*/
      ! function () {
        function n(n, e, t) {
            return n.getAttribute(e) || t
        }

        function e(n) {
            return document.getElementsByTagName(n)
        }

        function t() {
            var t = e("script"),
                o = t.length,
                i = t[o - 1];
            return {
                l: o,
                z: n(i, "zIndex", -1),
                o: n(i, "opacity", .5),
                c: n(i, "color", "0,0,0"),
                n: n(i, "count", 99)
            }
        }

        function o() {
            a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }

        function i() {
            r.clearRect(0, 0, a, c);
            var n, e, t, o, m, l;
            s.forEach(function (i, x) {
                for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e += 1) {
                    n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
                }
            }), x(i)
        }
        var a, c, u, m = document.createElement("canvas"),
            d = t(),
            l = "c_n" + d.l,
            r = m.getContext("2d"),
            x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
                window.setTimeout(n, 1e3 / 45)
            },
            w = Math.random,
            y = {
                x: null,
                y: null,
                max: 2e4
            };
        m.id = l, m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o, e("body")[0].appendChild(m), o(), window.onresize = o, window.onmousemove = function (n) {
            n = n || window.event, y.x = n.clientX, y.y = n.clientY
        }, window.onmouseout = function () {
            y.x = null, y.y = null
        };
        for (var s = [], f = 0; d.n > f; f += 1) {
            var h = w() * a,
                g = w() * c,
                v = 2 * w() - 1,
                p = 2 * w() - 1;
            s.push({
                x: h,
                y: g,
                xa: v,
                ya: p,
                max: 6e3
            })
        }
        u = s.concat([y]), setTimeout(function () {
            i()
        }, 100)
    }();