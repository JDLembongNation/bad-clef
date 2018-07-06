const constructGraph = () =>{
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Computer Science", "Good Ol Uniwork", "Learning new skills", "Eating", "Being a Social Bird", "League of Legends"],
      datasets: [{
        label: 'Utility Points',
        data: [11, 6, 8, 13, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


}
const fadeInFunction = () =>{
  $(window).scroll(()=>{
    $('.concealed').each((i)=>{
      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},500);           
    }
    });
  });
}

$(document).ready(() => {
  //Adding the fade in text onto the website..
  //fadeInFunction();
  $(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.concealed').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
                
        }
        
    }); 

});
  //Adding the graph to the website
  constructGraph();
});

