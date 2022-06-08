/**
 * Created by saco on 14-9-26
 */
var EgretShare = {
///////////////////////////////以下为分享代码
    /*分享渠道
    * 微信 qzone 新浪微博 腾讯微博
    * */
    ShareChannel:"",
    ChlWeixin:"weixin",
    ChlQzone:"qzone",
    ChlSinaWeibo:"sinaweibo",
    ChlTecentWeibo:"tecentweibo",
    ChlUnknown:"unknown",
    canShare:true,
    shareCallBack:Function,

    ShareInfo:{
        "appId":"",
        "title":"",
        "desc":"",
        "imgUrl":"",
        "link":"http://www.dmaku.com/jquery-game-1.html"
    },

    setShareData:function(title, content, link, ico){
        EgretShare.ShareInfo.title = title;
        EgretShare.ShareInfo.desc = content;
        //EgretShare.ShareInfo.link = link;
        EgretShare.ShareInfo.link = 'http://www.dmaku.com/jquery-game-1.html';
        EgretShare.ShareInfo.imgUrl = ico;
        EgretShare.weixinShareGetReady();
    },

    /*
     *   单独设置分享数据
     * */
    setShareTitle:function(title){
        EgretShare.ShareInfo.title = title;
        EgretShare.weixinShareGetReady();
    },

    setShareContent:function (content){
        EgretShare.ShareInfo.desc = content;
        EgretShare.weixinShareGetReady();
    },

    setShareLink:function (link){
        EgretShare.ShareInfo.link = link;
        EgretShare.weixinShareGetReady();
    },

    setShareIco:function (ico){
        EgretShare.ShareInfo.imgUrl = ico;
        EgretShare.weixinShareGetReady();
    },

    weixinShareGetReady:function (){
        if (window.hasOwnProperty("WeixinApi")) {
            WeixinApi.ready(function (api) {
                api.shareToFriend(EgretShare.ShareInfo);
                api.shareToTimeline(EgretShare.ShareInfo);
            });
        }
    },

    /*添加分享渠道*/
    addChannel:function(link){
        if(link.indexOf("?") != -1){
            return link + "&channel=" + EgretShare.ShareChannel;
        }else{
            return link + "?channel=" + EgretShare.ShareChannel;
        }
    },

    /*调用后台统计分享*/
    postStatistics:function(channel, isShare){
        var postChannel = EgretShare.ShareChannel;
        if(channel && channel != "")
            postChannel = channel;

        var appId = EgretShare.findLocationProperty("app_id");
        var gameId = EgretShare.findLocationProperty("game_id");
        var deviceId = EgretShare.findLocationProperty("device_id");
        if (appId && gameId) {
            if (!deviceId) {
                deviceId = localStorage.getItem("device_id");
                if (!deviceId) {
                    deviceId = Math.random();
                }
            }
            localStorage.setItem("device_id", deviceId);
            var url = "http://statistics.egret-labs.org/api.php?app_id=" + appId + "&game_id=" + gameId + "&device_id=" + deviceId + "&channel=" + postChannel;
            if(isShare)
                url += "&share=1";
            var req = new XMLHttpRequest();
            req.open("POST", url, true);
            req.send(null);
        }
    },

    /*更多游戏*/
    moreGame:function () {
        if (EgretShare.isInU9()) {
            location.href = "u9time://gamelist";
        }else if(EgretShare.isInHaima()){
            location.href = "haima://GoFrontPage";
        }else if(EgretShare.isInHaimaWeb()){
            var c = EgretShare.findLocationProperty("c");
            location.href = "http://www.haima.me/?c=" + c;
        }else if(EgretShare.isInFengkuangZhuan()){
            if(EgretShare.isInFengkuangZhuangApp())
                location.href = "http://www.dmaku.com/jquery-game-1.html";
            else
                location.href = "http://www.dmaku.com/jquery-game-1.html";
        }else{
            var appId = EgretShare.findLocationProperty("app_id");
            
            window.open('http://www.dmaku.com/jquery-game-1.html', '_top');
        }
    },

    /*分享游戏*/
    share:function (){
        var browserShareFlasg = true;
        if(EgretShare.isInU9())
            EgretShare.shareToU9();
        else if(EgretShare.isInWeChat())
            EgretShare.showShareImg();
        else if(EgretShare.isInHaima())
            EgretShare.shareToHaima();
        else if(EgretShare.isInU9Web())
            EgretShare.shareToU9Web();
        else if(EgretShare.isInFengkuangZhuangApp())
            EgretShare.shareToFengkuangZhuan();
        else{
            //浏览器分享
            browserShareFlasg = false;
            EgretShare.browserShare();
        }
        //调用后台分享统计，浏览器分享特殊处理，因为需要区分channel
        if(browserShareFlasg){
            EgretShare.postStatistics("", true);
            EgretShare.ShareChannel = EgretShare.ChlUnknown;
        }
    },

    /*浏览器分享*/
    browserShare:function(){
        EgretShare.showShareDiv();
        EgretBrowserShare.share("shareDiv", EgretShare.ShareInfo);
    },

    /*微信分享专用显示分享箭头图片*/
    showShareImg:function(){
        EgretShare.ShareChannel = EgretShare.ChlWeixin;
        if(document.getElementById("shareImg")){
            document.getElementById("shareImg").style.display = "";
        }else
        {
            var shareDiv = document.createElement("div");
            shareDiv.id = "shareImg";
            shareDiv.style.display = "";
            shareDiv.style.zIndex = 9999;
            var s = "<img width='100%' height='100%' src='http://static.egret-labs.org/h5game/shareUtils/share.png' style='position: fixed; z-index: 9999; top: 0; left: 0;'";
            s += "onClick=\"document.getElementById('shareImg').style.display='none'\" />";
            shareDiv.innerHTML = s;
            document.body.appendChild(shareDiv);
        }
    },

    /*浏览器分享div层*/
    showShareDiv:function(){
        if(document.getElementById("shareDiv")){
            document.getElementById("shareDiv").style.display = "";
        }else
        {
            var shareDiv = document.createElement("div");
            shareDiv.id = "shareDiv";
            shareDiv.style.display = "";
            shareDiv.style.zIndex = 9999;
            document.body.appendChild(shareDiv);
        }
    },

    showU9ShareDiv:function(){
        if(document.getElementById("u9shareDiv")){
            document.getElementById("u9shareDiv").style.display = "";
        }else
        {
            var shareDiv = document.createElement("div");
            shareDiv.id = "u9shareDiv";
            shareDiv.style.display = "";
            shareDiv.style.zIndex = 9999;
            document.body.appendChild(shareDiv);
        }
    },

    shareToU9:function () {
        var url = location.href;
        if (location.search == "") {
            url += "?channel=weixin";
        } else {
            url += "&channel=weixin";
        }
        url = encodeURIComponent(url);
        var a = "123";
        var msg = encodeURIComponent(EgretShare.ShareInfo.desc);
        var uid = EgretShare.getUid();
        var link = "u9time://share?" + "uid=" + uid + "&game_url=" + url + "&a=" + a + "&msg=" + msg;
        if (!uid) {
            link = "u9time://share?" + "&game_url=" + url + "&a=" + a + "&msg=" + msg;
        }
        location.href = link;
    },

    shareToHaima:function () {
        var url = location.href + "&haimaShare=1";
        url = encodeURIComponent(url);
        var msg = encodeURIComponent(EgretShare.ShareInfo.desc);
        var link = "haima://sharecustom?imgurl=" + EgretShare.ShareInfo.imgUrl+ "&sharetitle=" + EgretShare.ShareInfo.title + "&shareurl=" + url + "&channel=1&sharetext=" + msg;
        location.href = link;
    },   

    shareToU9Web:function () {
        EgretShare.showU9ShareDiv();
        var share_data={
            "title":EgretShare.ShareInfo.title,
            "content":EgretShare.ShareInfo.desc,
            "link":location.href,
            "imgUrl":EgretShare.ShareInfo.imgUrl
        };
        GS.share("u9shareDiv",share_data);
    },

    shareToFengkuangZhuan:function(){
        var url = location.href;
        url = encodeURIComponent(url);
        var msg = encodeURIComponent(EgretShare.ShareInfo.desc);
        var link = "fengkuangzhuan://share?imgurl=" + EgretShare.ShareInfo.imgUrl+ "&sharetitle=" + EgretShare.ShareInfo.title + "&shareurl=" + url + "&sharetext=" + msg;
        location.href = link;
    },

    isInWeChat:function () {
        if (window.hasOwnProperty("egret_native")) {
            return false;
        } else {
            var ua = window.navigator.userAgent;
            return ua.indexOf("MicroMessenger") != -1;
        }
    },

    //u9 yoyo卡箱
    isInU9:function () {
        var ua = window.navigator.userAgent;
        return ua.indexOf("yoyo") != -1;
    },

    //是否在非APP环境打开海马平台游戏
    isInHaimaWeb:function () {
        return EgretShare.findLocationProperty("app_id") == 1009 && EgretShare.findLocationProperty("haimaShare") == 1;
    },

    isInFengkuangZhuan:function () {
        return EgretShare.findLocationProperty("app_id") == 1011;
    },

    isInFengkuangZhuangApp:function(){
        var ua = window.navigator.userAgent;
        return ua.indexOf("fengkuangzhuan") != -1;
    },

    isInCheTuoBang:function () {
        return EgretShare.findLocationProperty("app_id") == 1012;
    },

    //在海马平台打开游戏
    isInHaima:function () {
        return EgretShare.findLocationProperty("app_id") == 1009 && EgretShare.findLocationProperty("haimaShare") != 1;
    },

    isIn360:function () {
        return EgretShare.findLocationProperty("app_id") == 1003;
    },

    //u9网页游戏平台
    isInU9Web:function(){
        return EgretShare.findLocationProperty("app_id") == 1010;
    },

    findLocationProperty:function (key) {
        if (window.hasOwnProperty("location")) {
            var search = location.search;
            if (search == "") {
                return null;
            }
            search = search.slice(1);
            var searchArr = search.split("&");
            var length = searchArr.length;
            for (var i = 0; i < length; i++) {
                var str = searchArr[i];
                var arr = str.split("=");
                if (arr[0] == key) {
                    return arr[1];
                }
            }
        }
        return null;
    },

    getUid:function () {
        return EgretShare.findLocationProperty("uid");
    },

    loaded:function(){
        if(window.hasOwnProperty("setShareInfo"))
            window.setShareInfo();
        else{
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("EgretShareLoaded", true, true);
            document.dispatchEvent(evt);
        }
    },

    loadScript:function(scriptUrl){
        if(scriptUrl){
            var pageHead = document.getElementsByTagName('HEAD').item(0);
            var script = document.createElement('script');
            script.src = scriptUrl;
            script.type = "text/javascript";
            script.async = "false";
            pageHead.appendChild(script);
        }
    },

    /*进入游戏执行*/
    onEnterGame:function(){
        EgretShare.loadScript("http://static.egret-labs.org/h5game/shareUtils/EgretBrowserShare.js");    //加载浏览器分享JS
        //以下为加载统计
        var channel = EgretShare.findLocationProperty("channel");
        EgretShare.postStatistics(channel);

        //加载平台相关统计JS
        var scriptUrl;
        if(EgretShare.isIn360())
            scriptUrl = 'http://u.360.cn/js/partner/h5gamepush.js';
        else if(EgretShare.isInU9Web())
            scriptUrl = 'http://img.yoyojie.com/templates/default/js/common/share.js';
        else if(EgretShare.isInCheTuoBang())
            scriptUrl = 'http://wxlk.chetuobang.com/web_weixinlukuang/js/edog/baiducount.js';
        EgretShare.loadScript(scriptUrl);
    }
};
EgretShare.loaded();
EgretShare.onEnterGame();
