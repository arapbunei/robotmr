var imgArray = [];
var imgLength = 0;
var photoContWidth = 0;
var imgWidth = 0;

function setDefaults(){
  
  imgLength = $('#photo1 img').length;
  photoContWidth = (imgLength * 100) + '%';
  $('#photo1').css('width', photoContWidth); 
  //looping through the image length and putting a button and assoc name attr to the btn
  for(var i=0; i<imgLength; i++){
		 	$('#photo1 img').eq(i).attr('name',i);
      $('#photo1 img').eq(i).css('left', (i * 100) + "%");
		 	imgArray.push($('#photo1 img').eq(i));
      //$('#'+ btnHolder +'').append("<a href='#' name='"+i+"'><img src='https://dl.dropbox.com/u/7726015/images/btnNonActive.png'/></a>");
  } 
    startAnimation();
};

function startAnimation(){
  TweenMax.staggerTo([imgArray], 2, {delay: 2, css:{left:'-=300'}, onComplete: upDatePosition}, 2);  
}


function upDatePosition(){
  for(var i=0; i<imgLength; i++){
    if((imgArray[i].css('left') <= -300 + 'px')){
      imgArray[i].css("left", "600px"); 
    } 
  }
  startAnimation();
}

setDefaults();