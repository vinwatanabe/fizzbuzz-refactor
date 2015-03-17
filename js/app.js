$(document).ready(function(){
  //Creating the counter to change number for FizzBuzz
  function countNumbers(maxVal){
    for (var count = 1; count <= maxVal; count++){
      if (count % 3 == 0 && count % 5 == 0){
        $('.content').append('FizzBuzz ');
      }else if (count % 3 == 0){
        $('.content').append('Fizz ');
      }else if (count % 5 == 0){
        $('.content').append('Buzz ');
      }else{
        $('.content').append(count + ' ');
      }
    }
  }
  
  //On click the magic happens
  $('.btn_play').on('click', function(){
    var getValue = $('.txt_input').val();
    
    //Checking if the typed value is a number
    if (getValue % 1 == 0 && getValue <= 500){
      $('.content').empty();
    	countNumbers(getValue);
    	$('.txt_input').val("");
    }else{
      alert('Type only numbers between 1 and 500.');
      $('.txt_input').val("");
    }
  });
});