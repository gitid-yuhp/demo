
loadScript('script/vue.min.js',function(){
	loadScript('script/vue.js',function(){}); 
});
loadScript('script/mui.min.js',function(){
	loadScript('script/mui.js',function(){});
	loadScript('script/Chart.min.js',function(){
		loadScript('script/chart.js',function(){}); 
	});
});
function loadScript(url,callback){
	var script=document.createElement('script');
	script.type="text/javaScript";
	if(script.readyState){
 		script.onreadystatechange=function(){ 
			if(script.readyState=="loaded"||script.readyState=="complete"){ 
				script.onreadystatechange=null; callback(); } 
 		};
	}else{
 		script.onload=function(){ 
 			callback(); 
 		}; 
	} 
	script.src=url;
	document.getElementsByTagName('head')[0].appendChild(script);
}