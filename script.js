
function responsive(maxWidth) {
    if (maxWidth.matches) { 
        $("#banner-box").css({"margin-bottom":"-250px", "background-image": "linear-gradient(rgb(230, 145, 59), rgb(239, 75, 63","border-radius":"0px"})
        $("body").fadeIn(3000)
        $("#banner-box").fadeIn(2000)
        $("#home-title").css({"font-size":"larger"})
        $("#home-msg").css({"font-size":"x-small"})
        $("#banner-image").css({"margin-bottom":"-250px"})
        $(".suport-content").css({"height":"250px"})
        $(".j-text").css({"font-size": "10px"})
        }else {
        $(document).ready(function(){
            $("body").fadeIn(3000)
            $("#banner-box").fadeIn(2000)
            $("#banner-box").css({"margin-bottom":"0px", "background-image": "linear-gradient(rgb(230, 145, 59, 0.6), rgb(239, 75, 63, 0.8","border-radius":"20px 20px 0px 0px"})
            $("#home-title").css({"font-size":"30px"})
            $("#home-msg").css({"font-size":"large"})
            $("#banner-image").css({"margin-bottom":"0px","display":"none"})
            $(".suport-content").css({"height":"0px"})
            $(".j-text").css({"font-size": "15px"})
        })
    }
  }

  var maxWidth = window.matchMedia("(max-width: 700px)");
   var maxWidthMobile = window.matchMedia("(max-width: 450px)");
   
   responsive(maxWidth);
   maxWidth.addListener(responsive);

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function residentialFunction() {
    var dots = document.getElementById("residentialdots");
    var moreText = document.getElementById("residentialmore");
    var btnText = document.getElementById("residentialBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function commercialFunction() {
    var dots = document.getElementById("commercialdots");
    var moreText = document.getElementById("commercialmore");
    var btnText = document.getElementById("commercialBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

   $(document).ready(function(){
    $("#qs-1").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-1").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-1").css({"height": "0px"})
        }else{
            $("#as-1").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-1").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-2").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-2").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-2").css({"height": "0px"})
        }else{
            $("#as-2").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-2").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-3").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-3").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-3").css({"height": "0px"})
        }else{
            $("#as-3").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-3").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-4").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-4").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-4").css({"height": "0px"})
        }else{
            $("#as-4").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-4").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-5").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-5").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-5").css({"height": "0px"})
        }else{
            $("#as-5").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-5").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-6").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-6").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-6").css({"height": "0px"})
        }else{
            $("#as-6").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-6").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-7").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-7").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-7").css({"height": "0px"})
        }else{
            $("#as-7").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-7").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-8").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-8").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-8").css({"height": "0px"})
        }else{
            $("#as-8").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-8").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-9").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-9").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-9").css({"height": "0px"})
        }else{
            $("#as-9").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-9").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
    $("#qs-10").click(function(){
        var clicks = $(this).data('clicks');
        if(clicks){
            $("#as-10").css({"transform": "translateY(-40px)",
                "opacity": "0"})
            $("#an-box-10").css({"height": "0px"})
        }else{
            $("#as-10").css({"transform": "translateY(0px)",
                "opacity": "1"})
            $("#an-box-10").css({"height": "auto"})
        }
        $(this).data("clicks", !clicks);
    })
   })

   $('#owl-carousel-a').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    })
$('#owl-carousel-b').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$('#owl-carousel-c').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#owl-carousel-d').owlCarousel({
    loop:true,
    nav:false,
    autoplay:100,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('#owl-carousel-e').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    })

$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4,
            },
            number:{
                required:true,
                minlength:10,
            },
            email:{
                required:true,
                email:true
            },
            location:{
                required:true,
            },
            city:{
                required:true,
            },
            state:{
                required:true,
            },
            service :{
                selection:true,
            },
            submit:{
                required:true
            }
        }
    })
})