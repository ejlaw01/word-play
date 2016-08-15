$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    debugger;
    var userSentence = $("input#sentence").val();
    var newSentence = userSentence.split();

    var space = newSentence.map(function(sentence){
      sentence.split();
    });
  });
});
