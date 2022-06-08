/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
function typegame(){
    this.objletter={};
    this.creatGame();
    this.num=3;
    this.check();
    this.creatScore();
    this.score=0;
    this.stage=1;
    this.stage1=0;
   this.startGame();
   this.stopGame();
}
typegame.prototype={
     creatGame:function(){
         var height=$(window).height();
         var width1=$(window).width();
      $(".screen1").css({
        width:width1,
        height:$(window).height()-10,overflow:"hidden"
     })
     },
     creatletter:function(){
      var that=this;
      do{
        var randomnum=Math.floor(Math.random()*26+65);
        var randomletter=String.fromCharCode(randomnum);
       }while(this.objletter[randomletter]);
     var top1=-Math.round(Math.random()*100);
     do{
        var left1=Math.round(Math.random()*740);
       }while(this.check(left1));
      var time=new Date().getTime();
      var ele=$("<div data-time="+time+"></div>").css({
          width:"100px",height:"100px",
          background:"url(images/"+randomletter+".png) center no-repeat",backgroundSize:"contain"
          ,lineHeight:"60px",fontSize:"30px",color:"#fff",
          textAlign:"center",position:"absolute",left:left1,top:top1
        }).appendTo(".screen1").animate({top:$(window).height()},6000,"linear",function(){
          if($("div[data-time="+time+"]")[0]){
          that.num=3;
            that.score=0;
            that.stage=1; 
           $.each(that.objletter,function(index,value){
               value.el.remove()
            });
            that.objletter={};
            that.createFail();
         }
        });
    this.objletter[randomletter]={start:left1-60,end:left1+60,keycode:randomnum,el:ele}
     },
      palyGame:function(){
         this.keydown();
        for (var i = 0; i <this.num; i++) {
           this.creatletter();
        }
     },
     check:function(left){
      var flag=false;
      $.each(this.objletter,function(index,value){
            if(left>value.start&&left<value.end){
              flag=true
            }
      });
      return flag;
     },
     keydown:function(){
      var that=this;
       $(document).keydown(function(e){
        var code=e.keyCode;
       $.each(that.objletter,function(index,value){
          if(code==value.keycode){
             value.el.remove();
             delete that.objletter[index];
             that.creatletter();
              that.score++;
             $(".score").html(that.score);
              if(that.score>=that.stage*10){
                that.score=0;
                $(".score").html(0);
                that.num++;
                that.stage++;
                $.each(that.objletter,function(index,value){
                  value.el.remove()
                });
                that.objletter={};
                that.creatStage()
              }
         }
        })
      })
    },
    creatScore:function(){
      $("<div class='score'>0</div>").css({
      background:"url(images/fs.png) no-repeat",
      backgroundSize:"150px 180px",
        width:150,height:180,
        position:"absolute",right:25,bottom:60,color:"#522E1A",
        fontSize:"60px",lineHeight:"140px",textAlign:"center"
      }).appendTo("body");
    },
    creatStage:function(){
      var that=this;
      $("<div class='stage'></div>").css({
          position:"absolute",top:"-50%",bottom:0,right:0,left:0,
        background:"url(images/cg.png)",
        width:520,height:400,backgroundSize:"contain no-repeat" ,
        margin:"auto",
        borderRadius:"5%",
        animation:"cg 2s linear"
        }).appendTo("body");
      var btn=$("<div class='btn'></div>").css({
         position:"absolute",top:"235px",right:0,left:"65px",margin:"auto",
          background:"url(images/xy.png)",
          zIndex:9999,
          fontFamily:"幼圆",
          fontSize:"22px",
          width:100,height:40,margin:"0 auto",
          marginTop:"200",
          color:"#fff",
          lineHeight:"40px",
          backgroundSize:"240px 300px",
          cursor:"pointer"
      }).appendTo(".stage").click(function(){
             that.palyGame();
             $(this).parent().remove();
      })
    },
    createFail:function(){
    var that=this;
    if(this.failbord){
      this.failbord.remove()
      }
    var btn=$("<div></div>").css({
      width:160,height:35,textAlign:"center",lineHeight:"30px",
      margin:"0 auto",cursor:"pointer",
      position:"absolute",right:0,left:0,margin:"auto",bottom:"70px"
    }).click(function(){
     $(".scor").html(0);
          that.palyGame(); 
          $(this).parent().remove()
    });
    this.failbord=$("<div></div>").css({
     position:"absolute",top:"-50%",bottom:0,right:0,left:0,
      background:"url(images/sp1.png)",
      width:500,height:350,backgroundSize:"400px 340px",
      margin:"auto",
      borderRadius:"5%",
      backgroundSize:"contain no-repeat",
      animation:"cg 2s linear"
    }).appendTo("body").append(btn)
  },
  startGame:function(){
    var that=this;
    $("<div class='start'>开始游戏</div>").css({
       width:130,height:50,textAlign:"center",lineHeight:"50px",
      margin:"0 auto",cursor:"pointer",
      background:"url(images/stop.png) no-repeat",
      backgroundSize:"130px 50px",
      color:"#392112",
      position:"absolute",
      left:"175px",bottom:0,
      fontWeight:"bold",
      marginTop:"55px"
    }).appendTo("body").click(function(){
         that.palyGame()
    })
  },
  stopGame:function(){
    var that=this;
     $(".stop1").click(function(){
        $.each(that.objletter,function(index,value){
                value.el.stop();
              });
        if($(".stop1").html()=="暂停游戏"){
          $(".stop1").html("继续游戏")
        }else if($(".stop1").html()=="继续游戏"){
           $(".stop1").html("暂停游戏");
           $.each(that.objletter,function(index,value){
            value.el.animate({top:$(window).height()},6000,"linear",function(){
                    that.num=3;
                    that.stage=1;
                    that.score=0;
                    $.each(that.objletter,function(index,value){
                      value.el.stop();
                      value.el.remove()
                    });
                    that.objletter={};
                    that.createFail();
                })
            })
         }
      })
    }
};console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");