$(document).foundation();
var $menu = $('#menu-more');
var $search = $('#searchForm');

$menu.click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('showing-toggle')) {
    if ($(this).hasClass('showing-search')) {
      $search.fadeToggle();
      $('body').removeClass('search-form--on');
      $(this).removeClass('showing-toggle').removeClass('showing-search').removeClass('transitioning');
    }
    else {
      $('body').removeClass('search-form--on');
      $(this).removeClass('showing-toggle').removeClass('transitioning');
      $('#offCanvas').foundation('close', function() { console.log("close") });
    }
  }
  else {
    $(this).addClass('showing-toggle').addClass('transitioning');
    $('#offCanvas').foundation('open', function() { console.log("close") });
    var self = this;
    setTimeout(function() {
      $(self).removeClass('transitioning');
    }, 300);
  }
});

$('.search-toggle').click(function(e) {
  e.preventDefault();
  if ($menu.hasClass('showing-toggle')) {
    $menu.removeClass('showing-toggle').removeClass('showing-search').removeClass('transitioning');
  }
  else {
    $search.fadeToggle();
    $('body').addClass('search-form--on');
    $menu.addClass('showing-toggle').addClass('showing-search').addClass('transitioning');

    setTimeout(function() {
      $menu.removeClass('transitioning');
    }, 300);
  }
});