// JavaScript Document
	//如果你不需要某项设置，可以直接删除，注意var flashvars的最后一个值后面不能有逗号
	var flashvars={
		f:'/images/KK-TVC-45.mp4',//视频地址
		a:'',//调用时的参数，只有当s>0的时候有效
		s:'0',//调用方式，0=普通方法（f=视频地址），1=网址形式,2=xml形式，3=swf形式(s>0时f=网址，配合a来完成对地址的组装)
		c:'0',//是否读取文本配置,0不是，1是
		x:'',//调用xml风格路径，为空的话将使用ckplayer.js的配置
		i:'/images/video/KK-TVC-45.png',//初始图片地址
		d:'',//暂停时播放的广告，swf/图片,多个用竖线隔开，图片要加链接地址，没有的时候留空就行
		u:'',//暂停时如果是图片的话，加个链接地址
		l:'',//前置广告，swf/图片/视频，多个用竖线隔开，图片和视频要加链接地址
		r:'',//前置广告的链接地址，多个用竖线隔开，没有的留空
		t:'10|10',//视频开始前播放swf/图片时的时间，多个用竖线隔开
		y:'',//这里是使用网址形式调用广告地址时使用，前提是要设置l的值为空
		z:'',//缓冲广告，只能放一个，swf格式
		e:'2',//视频结束后的动作，0是调用js函数，1是循环播放，2是暂停播放并且不调用广告，3是调用视频推荐列表的插件，4是清除视频流并调用js功能和1差不多，5是暂停播放并且调用暂停广告
		v:'80',//默认音量，0-100之间
		p:'0',//视频默认0是暂停，1是播放
		h:'0',//播放http视频流时采用何种拖动方法，=0不使用任意拖动，=1是使用按关键帧，=2是按时间点，=3是自动判断按什么(如果视频格式是.mp4就按关键帧，.flv就按关键时间)，=4也是自动判断(只要包含字符mp4就按mp4来，只要包含字符flv就按flv来)
		q:'',//视频流拖动时参考函数，默认是start
		m:'1',//默认是否采用点击播放按钮后再加载视频，0不是，1是,设置成1时不要有前置广告
		o:'',//当m=1时，可以设置视频的时间，单位，秒
		w:'',//当m=1时，可以设置视频的总字节数
		g:'',//视频直接g秒开始播放
		j:'',//视频提前j秒结束
		k:'',//提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
		n:'播放节点',//提示点文字，跟k配合使用，如 提示点1|提示点2
		//调用播放器的所有参数列表结束
		//以下为自定义的播放器参数用来在插件里引用的
		my_url:encodeURIComponent(window.location.href)//本页面地址
		//调用自定义播放器参数结束
		};
	var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always'};//这里定义播放器的其它参数如背景色（跟flashvars中的b不同），是否支持全屏，是否支持交互
	var attributes={id:'ckplayer_a1',name:'ckplayer_a1',menu:'false'};
	swfobject.embedSWF('/ckplayer/ckplayer.swf', 'a1', '100%', '100%', '10.0.0','/ckplayer/expressInstall.swf', flashvars, params, attributes);

	var video={'/images/kk-part-1-08.mp4':'video/mp4'};
	var support=['iPad','iPhone','ios','android+false','msie10+false'];//默认的在ipad,iphone,ios设备中用html5播放,android,ie10上没有安装flash的也调用html5
	CKobject.embedHTML5('video','ckplayer_a1','100%','100%',video,flashvars,support);
	
	var videos=['/images/kk-part-1-08.mp4','/images/kk-part-2b-08.mp4','/images/kk-part-3-v2 08.mp4','/images/kk-part-3.1-3.4-08.mp4','/images/kk-part-4-08.mp4','/images/KK-TVC-45.mp4'];
	var covers=['/images/ads/video_cover1.jpg','/images/ads/video_cover.jpg','/images/ads/video_cover.jpg','/images/ads/video_cover.jpg','/images/ads/video_cover.jpg','/images/ads/video_cover.jpg'];
	
	var flashvars2=clone3(flashvars);
	flashvars2.f='/images/kk-part-1-08.mp4';
	flashvars2.i='/images/video/kk-part-1-08.png';
	var attributes2={id:'ckplayer_a2',name:'ckplayer_a2',menu:'false'};
	swfobject.embedSWF('/ckplayer/ckplayer.swf', 'a2', '100%', '100%', '10.0.0','/ckplayer/expressInstall.swf', flashvars2, params, attributes2);
	var video2={'/images/kk-part-1-08.mp4':'video/mp4'};
	CKobject.embedHTML5('video2','ckplayer_a2','100%','100%',video2,flashvars2,support);
	
	var flashvars3=clone3(flashvars);
	flashvars3.f='/images/kk-part-2b-08.mp4';
	flashvars3.i='/images/video/kk-part-2b-08.png';
	var attributes3={id:'ckplayer_a3',name:'ckplayer_a3',menu:'false'};
	swfobject.embedSWF('/ckplayer/ckplayer.swf', 'a3', '100%', '100%', '10.0.0','/ckplayer/expressInstall.swf', flashvars3, params, attributes3);
	var video3={'/images/kk-part-2b-08.mp4':'video/mp4'};
	CKobject.embedHTML5('video3','ckplayer_a3','100%','100%',video3,flashvars3,support);
	
	var flashvars4=clone3(flashvars);
	flashvars4.f='/images/kk-part-3-v2-08.mp4';
	flashvars4.i='/images/video/kk-part-3-v2-08.png';
	var attributes4={id:'ckplayer_a4',name:'ckplayer_a4',menu:'false'};
	swfobject.embedSWF('/ckplayer/ckplayer.swf', 'a4', '100%', '100%', '10.0.0','/ckplayer/expressInstall.swf', flashvars4, params, attributes4);
	var video4={'/images/kk-part-3-v2-08.mp4':'video/mp4'};
	CKobject.embedHTML5('video4','ckplayer_a4','100%','100%',video4,flashvars4,support);
	
	var flashvars5=clone3(flashvars);
	flashvars5.f='/images/kk-part-3.1-3.4-08.mp4';
	flashvars5.i='/images/video/kk-part-3.1-3.4-08.png';
	var attributes5={id:'ckplayer_a5',name:'ckplayer_a5',menu:'false'};
	swfobject.embedSWF('/ckplayer/ckplayer.swf', 'a5', '100%', '100%', '10.0.0','/ckplayer/expressInstall.swf', flashvars5, params, attributes5);
	var video5={'/images/kk-part-3.1-3.4-08.mp4':'video/mp4'};
	CKobject.embedHTML5('video5','ckplayer_a5','100%','100%',video5,flashvars5,support);
	
	var flashvars6=clone3(flashvars);
	flashvars6.f='/images/kk-part-4-08.mp4';
	flashvars6.i='/images/video/kk-part-4-08.png';
	var attributes6={id:'ckplayer_a6',name:'ckplayer_a6',menu:'false'};
	swfobject.embedSWF('/ckplayer/ckplayer.swf', 'a6', '100%', '100%', '10.0.0','/ckplayer/expressInstall.swf', flashvars6, params, attributes6);
	var video6={'/images/kk-part-4-08.mp4':'video/mp4'};
	CKobject.embedHTML5('video6','ckplayer_a6','100%','100%',video6,flashvars6,support);
	
	var flashvars7=clone3(flashvars);
	flashvars7.f='/images/KK-TVC-45.mp4';

	var attributes7={id:'ckplayer_a7',name:'ckplayer_a7',menu:'false'};
	swfobject.embedSWF('/ckplayer/ckplayer.swf', 'a7', '100%', '100%', '10.0.0','/ckplayer/expressInstall.swf', flashvars7, params, attributes7);
	var video7={'/images/KK-TVC-45.mp4':'video/mp4'};
	CKobject.embedHTML5('video7','ckplayer_a7','100%','100%',video7,flashvars7,support);
	
		
function clone3(obj){ 
	function Clone(){} 
		Clone.prototype = obj; 
		var o = new Clone(); 
		for(var a in o){ 
			if(typeof o[a] == "object") { 
			o[a] = clone3(o[a]); 
		} 
	} 
	return o; 
} 
