setInterval(scroll,5000);
  function scroll(){
    $('.ui.shape').shape('flip over');
  }

function signup(){
$('.signup').modal('show');
$('.ui.checkbox').checkbox();
}

function signin(){
$('.signin').modal('show');
$('.ui.checkbox').checkbox();
}


$(document).ready(function(){
$('#toggle').click(function(){
  $('.ui.sidebar').sidebar('toggle');
});
})


$(document).ready(function(){
    $('.done').modal('show');
})


function done() {
  return true;
}
