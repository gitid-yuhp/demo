mui.init();
mui('#offCanvasSideScroll').scroll();    
mui('#offCanvasContentScroll').scroll();
mui('body').on('tap','a',function(){document.location.href=this.href;}); 
mui('body').on('tap','li',function(){this.click()});  
    var Main = mui('#Main');//侧滑容器父节点
    Main[0].classList.add('mui-slide-in');//动画效果的类
    Main.offCanvas().refresh();//绑定动画效果     
    
    document.getElementById('offCanvasShow').addEventListener('tap',function() 
    {
        Main.offCanvas('show');
    });
    
    document.getElementById('offCanvasHide').addEventListener('tap',function()
    {
        Main.offCanvas('close');
    });
    
    
    //支持区域滚动，需要添加.mui-scroll-wrapper
    

    
    //实现ios平台的侧滑关闭页面；
    if (mui.os.plus && mui.os.ios) 
    {
        Main[0].addEventListener('shown',
        function(e) { //菜单显示完成事件
            plus.webview.currentWebview().setStyle
            ({
                'popGesture': 'none'
            });
        });
        Main[0].addEventListener('hidden',
        function(e) 
        {     //菜单关闭完成事件
            plus.webview.currentWebview().setStyle
            ({
                'popGesture': 'close'
            });
        });
    }
    
    function showMsg(s){
    		alert(s);
    }
