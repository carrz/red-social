

//Modal
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('#login').modal('open');
  });

//Materialbox
 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

// Evento boton user
$('#link-user').click(function(){
  $('#user-profile').removeClass('hide');
  $('.main-body').addClass('hide');
});
$('#tiny-user').click(function(){
  $('#user-profile').removeClass('hide');
  $('.main-body').addClass('hide');
});

//Evento newsfeed
$('#logo').click(function(){
  $('.main-body').removeClass('hide');
  $('#user-profile').addClass('hide');
});
$('#tinyLogo').click(function(){
  $('.main-body').removeClass('hide');
  $('#user-profile').addClass('hide');
});

//Menu colapsable
$(document).ready(function(){
    $('.collapsible').collapsible();
  });

//Agregando imagenes para cargar desde el dispositivo
  function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }


//Cambiando icono <3
$('#heart1').click(function(){
	$('#heart1').remove();
  $('#a-heart1').append("<i class='material-icons black-text'>favorite</i>");
});

$('#heart2').click(function(){
  $('#heart2').remove();
  $('#a-heart2').append("<i class='material-icons black-text'>favorite</i>");
});

$('#heart3').click(function(){
  $('#heart3').remove();
  $('#a-heart3').append("<i class='material-icons black-text'>favorite</i>");
});


//Cargando nuevo post con foto del dispositivo
$('#postDevice').click(function(){

  var photo = $('#blah').attr('src');
  var textPost = $('#icon_prefix2').val();

  $('#new-post').prepend("<div class='card'>" +
      "<div class='card-image'>" +
        "<img src='" + photo + "' alt='...'>" +
        "<span class='card-title'>Name</span>" +
        "<a class='btn-floating halfway-fab waves-effect waves-light yellow lighten-1'>" +
          "<i class='material-icons black-text'>favorite_border</i>" +
        "</a>" +
      "</div>" +
      "<div class='card-content'>" +
        "<p>" + textPost + "</p>" +
      "</div>" +
    "</div>"
    );
})

//Cargando nuevo post con foto de la web
$('#postUrl').click(function(){

  var photo = $('#webUrl').val();
  var textPost = $('#icon_prefix1').val();

  $('#new-post').prepend("<div class='card'>" +
      "<div class='card-image'>" +
        "<img src='" + photo + "' alt='...'>" +
        "<span class='card-title'>Name</span>" +
        "<a class='btn-floating halfway-fab waves-effect waves-light yellow lighten-1'>" +
          "<i class='material-icons black-text'>favorite_border</i>" +
        "</a>" +
      "</div>" +
      "<div class='card-content'>" +
        "<p>" + textPost + "</p>" +
      "</div>" +
    "</div>"
    );
})

//Posteando el texto
$('#postText').click(function(){

  var textPost = $('#textToPost').val();

  $('#new-post').prepend("<div class='card black'>" +
      "<a class='btn-floating halfway-fab waves-effect waves-light yellow lighten-1'>" +
          "<i class='material-icons black-text'>favorite_border</i>" +
        "</a>" +
      "<div class='card-content'>" +
        "<p class='white-text flow-text'>" + "<i class='material-icons prefix'>format_quote</i>" + textPost + "</p>" +
      "</div>" +
    "</div>"
    );
})

// agregando posteos de imagenes y texto a la base de datos
// (no funciona)
  function uploadFile(){
    var storageRef = firebase.storage().ref('img_post/')
  }

// login facebook
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
