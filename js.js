  function setCookie() {
      cname = "www.vote-hillary-2016.com";
      cvalue = true;
      var d = new Date();
      // d.setTime(d.getTime() + (1*24*60*60*1000));
      d.setTime(d.getTime() + (30000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie() {
      var x = document.cookie === "www.vote-hillary-2016.com=true"
      return x
  }

  function addPts(element) {
    var id, x, y;
    id = element.id;
    x = parseInt($('#'+id+"Add").html());
    y = x + 1;
    $('#'+id+"Add").html(y);
    if (id === "thumbsUp") {
      requestUp(y);
    } else {
      requestDown(y);
    }
  };

  function addAVote(element) {
    var y = getCookie();
    if (y === true) {
      alert("It looks like you have already voted. We are doing our very best to insure an accurate count on these votes and do not want voters to repeat. Please have you friends vote and check back in to see where the vote is at.")
    } else {
      setCookie();
      addPts(element);
    }
  };



  function requestUp(newNumber) {
    $.ajax({
        url: 'http://localhost:3000/thumbs_ups/1',
        type: 'PUT',
        data: {thumbs_up: {
          voteNumber: newNumber }
        }
    }).done(function(response) {
      console.log(response);
    });
  }

  function requestDown(newNumber) {
    $.ajax({
        url: 'http://localhost:3000/thumbs_downs/1',
        type: 'PUT',
        data: {thumbs_down: {
          voteNumber: newNumber }
        }
    }).done(function(response) {
      console.log(response);
    });
  }

  function getVotes() {
    var downNumber, upNumber;
    $.ajax({
      url: 'http://localhost:3000/thumbs_downs/1',
      type: 'GET'
    }).done(function(response) {
      downNumber = response.voteNumber
      $('#thumbsDownAdd').html(downNumber);
    });
    $.ajax({
      url: 'http://localhost:3000/thumbs_ups/1',
      type: 'GET'
    }).done(function(response) {
      upNumber = response.voteNumber
      $('#thumbsUpAdd').html(upNumber);
    });
  }

  // make the click event so that when you click the thumbs up
  // or thumbs down the thumbs updown is replaced with the
  // totoal number of votes... and if you have already voted
  // then the votes appears and you dont see the thumbs updown
  // just the votes number


  // this is repetitive, combine with getCookie()
  function checkIfThumsOrVotes() {
    if (document.cookie === "www.vote-hillary-2016.com=true") {
      return false
    } else {
      return true
    }
  };

  function determineShowThumbsofVotes() {
    var x = checkIfThumsOrVotes();
    if (x === true) {
      // show votes
    } else {
      // show thumbs
    }
  }


$(document).ready(function() {
  getVotes();

  $('#thumbsUp').on('click', function() {
    addAVote(this);
  });
  $('#thumbsDown').on('click', function() {
    addAVote(this);
  });

});
