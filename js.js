  function setCookie() {
      cname = "www.vote-hillary-2016.com";
      cvalue = true;
      var d = new Date();
      // d.setTime(d.getTime() + (1*24*60*60*1000));
      d.setTime(d.getTime() + (10000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
  }


  function getCookie() {
      var x = document.cookie === "www.vote-hillary-2016.com=true"
      return x
  }

  function checkForCookie() {
    var x = getCookie();
    if (x !== true) {
      setCookie();
      // alert('==! worked');
    }
  };

  function addPts() {
    // debugger
  };




$(document).ready(function() {

  checkForCookie();
  $('#something').on('click', function() {
    var x = getCookie();
    console.log(x);
  });

  $('#thumbsUp').on('click', function() {
    var x = parseInt($('#'+this.id+"Add").html());
    $('#'+this.id+"Add").html(x+1);
  });
  $('#thumbsDown').on('click', function() {
    var x = parseInt($('#'+this.id+"Add").html());
    $('#'+this.id+"Add").html(x+1);
  });

});
