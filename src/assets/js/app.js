$(document).foundation();
var $menu = $('#menu-more');
var $search = $('#searchForm');
var $modal  = $('#hero_modal');

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

$('.top-bar').on('sticky.zf.stuckto:top', function(){
  $('body').addClass('stuck-header');
}).on('sticky.zf.unstuckfrom:top', function(){
  $('body').removeClass('stuck-header');
});

inlineSVG.init({
  svgSelector: 'img.svg', // the class attached to all images that should be inlined
  initClass: 'js-inlinesvg', // class added to <html>
}, function () {
  // Callback after all SVG's are inlined
  $('.activelamp-logo').css('height', '100px')[0].setAttribute('viewBox', '-20 0 70 34');
});

$('.hero-modal-play').click(function(e){
  e.preventDefault();
  if($modal.hasClass('showing-modal')) {
    player.pauseVideo();
    $modal.fadeToggle();
    $modal.removeClass('showing-modal');
  }
  else {
    $modal.fadeToggle();
    $('body').addClass('no-overflow');
    $modal.addClass('showing-modal');
    player.playVideo();
  }
});

$('.hero-modal-close').click(function(e){
  e.preventDefault();
  player.stopVideo();
  $modal.fadeToggle();

  setTimeout(function() {
    $modal.removeClass('showing-modal');
    $('body').removeClass('no-overflow');
  }, 300);
});
