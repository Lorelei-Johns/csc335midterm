$(function changeBackgroundColor(){
    $('#buttondiv input').on('click', function(){
        $(this).css('background-color', $(this).val());
        
    });
    
    
  $('#listdiv input').on('click', function(){
      $.getJSON('GSP-Fire-Stations.json', function(data){
         //alert('hi there')
         data.stations.forEach(function(item){
             $('#listdiv select').append('<option value="'+ item.address +'">' + item.name + '</option>');
              
           })
      })
  })  
  function makeList() {
            const urlStr = insertJSON('GSP-Fire-Stations.json');

}  
    
});

