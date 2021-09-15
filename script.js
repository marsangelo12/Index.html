$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})
$(document).ready(function(){
  $('.inactive-nav').click(function(){
      $('nav').toggleClass('active')
  })
})

$(document).ready(function(){
    $('.media-toggle').click(function(){
        $('.social-media-sb').toggleClass('sidebar-active')
    })
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// function([string1, string2],target id,[color1,color2])    
 consoleText(["HI I'M MARS ANGELO", 'I MADE THIS WEBSITE', 'TO SAY','HAPPY BIRTHDAY AGAIN',"AND","","",""
,"KALA MO DI MASAKIT YUNG PINAGSASABI MO SA'KIN???","NA PATAY GUTOM AKO?","BAKIT? DI BA YUN MASAKIT?!"
,"EH IKAW NGA INUULAM MO YUNG KALAPATI EH!","  SABI NYA, TARA, JOELLA, HULIHIN NATIN YUNG KALAPATI, KUHAIN NATIN! ",
"O SYA YUN! SYA YUNG PAGSABIHAN MO!","SYA PA NANINISI, HATI NGA KAMI SA PAGKAIN","HINDI NAMAN SYA BUMILI! HINDI NALANG NYA HINGIIN PARA HINDI SYA MAG-",
"BAKIT NAKIKISALI KA DITO HINDI KA NAMAN KASALI!","BAKIT NIAANO MO PINSAN KO IIYAK NA NGA DIBA ANG SAYA SAYA","OH BAKIT DIN!","AALIS AKO DI NAMAN AKO DITO EH! BOBO KA PALA EH.",
"BAKIT KA NAMAMANGGA?!","",""




], 'text',['tomato','rebeccapurple','lightblue', 'lightgreen']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}