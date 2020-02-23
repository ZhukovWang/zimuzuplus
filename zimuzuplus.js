// ==UserScript==
// @name		字幕组字幕下载页面扩展脚本
// @namespace		https://lisonfan.com/
// @icon		http://www.rrys2019.com/favicon.ico
// @author		LisonFan,ZhukovWang
// @version		0.8
// @description		给字幕组的字幕下载页面增加一个字幕版本对应的视频文件下载链接
// @match		http*://www.rrys2019.com/subtitle*
// @grant		none
// @license		MIT License
// ==/UserScript==

(function() {
	'use strict';
	var text = document.getElementsByClassName('subtitle-info')[0].innerText;
	var textGSIndex = text.search("格式");
	var textBBIndex = text.search("版本");
	var text2 = text.substring(textGSIndex,textBBIndex);
	var text3 = text2.substring(3,textGSIndex);
	var arr = text3.split(" ");
	for(var i = 0; i < arr.length; i++){
		var urlStr1 = 'https://www.rarbgmirror.com/torrents.php?search=' + arr[i];
		var url1 = "<h3>" + "字幕原始对应视频下载链接：" + "<a href='" + urlStr1 + "'target='_blank'>" + arr[i] + "</a>" + "</h3>";
		var test41 = document.getElementsByClassName('subtitle-info')[0].innerHTML;
		document.getElementsByClassName('subtitle-info')[0].innerHTML = test41 + url1;
	}
    	for(var j = 0; j < arr.length; j++){
        	arr[j] = arr[j].replace(/720/,"1080");
	    	var urlStr2 = 'https://www.rarbgmirror.com/torrents.php?search=' + arr[j];
	    	var url2 = "<h3>" + "字幕1080p对应视频下载链接：" + "<a href='" + urlStr2 + "'target='_blank'>" + arr[j] + "</a>" + "</h3>";
	    	var test42 = document.getElementsByClassName('subtitle-info')[0].innerHTML;
	    	document.getElementsByClassName('subtitle-info')[0].innerHTML = test42 + url2;
	}
})();
