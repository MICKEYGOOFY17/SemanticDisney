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

function check() {
  $('.inform')
  .form({
    fields: {
      username : 'empty',
      password : ['minLength[6]', 'empty'],
    }
  });
}

function checksign() {
  $('.upform')
  .form({
    fields: {
      username : 'empty',
      password : ['minLength[6]', 'empty'],
      email : 'empty',
      gender   : 'empty',
      terms    : 'checked'
    }
  });
}

$(document).ready(function(){
$('#toggle').click(function(){
  $('.ui.sidebar').sidebar('toggle');
});
})


$(document).ready(function(){
    $('.done').modal('show');
})

$(document).ready(function(){
    $('.sign').modal('show');
})

function done() {
  return true;
}
