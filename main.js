$(function(){
   
    // cache the selector 
	var $ctx = $("#myChart");
	var $dataList = $('#dataList');

	// Create arrays
	var arr = [];
	var labels = [
		"Red", "Blue", "Yellow", "Green", "Purple", "Orange",
		"Red", "Blue", "Yellow", "Green", "Purple", "Orange", 
		"Red", "Blue", "Yellow", "Green", "Purple", "Orange", 
		"Red", "Blue", "Yellow", "Green", "Purple", "Orange", 
		"Red", "Blue", "Yellow", "Green", "Purple", "Orange", 
		"Red", "Blue", "Yellow", "Green", "Purple", "Orange", 
		"Red", "Blue", "Yellow", "Green", "Purple", "Orange", 
		"Red", "Blue", "Yellow", "Green", "Purple", 
	];

	var bkgColor = [
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)',
    ];


	 $.ajax({
	      url: 'test_feed.json',
	      dataType: 'json',
	      type: 'get',
	      success: function(data){
	        
	        // loop through each item in the content array
	        for (var i = 0, len = data.content.length; i < len; ++i) {

	        	// extract the bodyhtml field on the content object
	             var str = data.content[i].content.bodyHtml;
  				 

	             // if the value of bodyhtml is undefined
	             // set it to an empty string
	            if (str === undefined ){
	            	str = '';
	            }	else {


	            	// if the value is anything other then undefined, append it inside the li tag

	            	$dataList.append('<li>' + str + ' - ' + '<strong>' + WordCount(str) + ' Words' + '</strong>' + '</li>');

	            	// push the word count into an empty array
	            	arr.push(WordCount(str))

	            }

	        }

	        // Chart.js

	         var myChart = new Chart($ctx, {
				    type: 'bar',
				    data: {
				        labels: labels,
				        datasets: [{
				            label: 'count of each word',
				            data: arr,
				            backgroundColor: bkgColor,
				            //borderColor: borderColor,
				            borderWidth: 1
				        }]
				    },
				    options: {
				        scales: {
				            yAxes: [{
				                ticks: {
				                    beginAtZero:true
				                }
				            }]
				        }
				    }
				});
	      }
    });

	// Word count function
	function WordCount(str) {
	    var regex = /(<([^>]+)>)/ig,
	    body = str,   
	    result = body.replace(regex, "");

		console.log(result);
	    
	    return result.split(" ").length;
	}

});