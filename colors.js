var Links = {
    setColor:function LinksSetColor(color){
      //var alist = document.querySelectorAll('a');
      //var i = 0;
      //while(i < alist.length){
      //alist[i].style.color = color;
      //i = i + 1;
      $('a').css('color',color);
      }
    }
  
  var Body = {
    setColor:function BodySetColor(color){
   //document.querySelector('body').style.color = color;
   $('body').css('color',color);
  },
   setBackgroundColor:function BodySetBackgroundColor(color){
   //document.querySelector('body').style.backgroundColor = color; CSS에서 가져오는거
  $('body').css('backgroundColor',color);
  }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body')

    if(self.value === 'night'){
       Body.setBackgroundColor('black');
       Body.setColor('white');
       self.value = 'day';
       Links.setColor('powderblue');
    }else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('blue');
    }
  }