$(function changeBackgroundColor(){
    $('#buttondiv input').on('click', function(){
        $(this).css('background-color', $(this).val());
        
    });
    
    
  $('listdiv input').on('click', function(){
      $.getJSON('GSP-Fire-Stations.json', function(data){
          $.each(data, function(item){
              
          })
      })
  })  
  function makeList() {
            const urlStr = insertJSON('GSP-Fire-Stations.json');

}  
    
});

