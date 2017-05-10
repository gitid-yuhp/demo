var reportUrl = 'http://online.91laiqian.com/bixia/shou?shopid=388101';
var getRandomColor = function(){    

  return (function(m,s,c){    
    return (c ? arguments.callee(m,s,c-1) : '#') +    
      s[m.floor(m.random() * 16)]    
  })(Math,'0123456789abcdef',5)    
} ;
var option =  {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Demo.'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }

var ctx = document.getElementById("myChart");
//var tt = new Chart(ctx).Bar(data,options);

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {},
    options:option
});
mui.ajax({
    type: 'GET',
    data: {},
    url: reportUrl,
    dataType: "json",
    success: function(obj) {
//  		alert(obj.titls);
		var array=new Array();
		var colors=new Array();
		obj.data.forEach(function(value,index){
//			var map={
//  				value:value.value,
// 				color:"#F7464A"
//			};
			array.push(value.value);
			colors.push(getRandomColor());
		})
    		var objData={
    			labels: obj.titls,
            datasets: [{
            data: array,
            backgroundColor:colors
            }]
    		}
    		myChart = new Chart(ctx, {
    			type: 'doughnut',
    			data: objData,
    			options:option
    		});
    }
});