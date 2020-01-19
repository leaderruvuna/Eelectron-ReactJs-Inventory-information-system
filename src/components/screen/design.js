import jQuery from 'jquery';

jQuery(document).ready(function ($) {
  var tab = $('.tabs h3 a');

  tab.on('click', function (event) {
    event.preventDefault();
    tab.removeClass('active');
    $(this).addClass('active');

    var tab_content = $(this).attr('href');
    $('div[id$="tab-content"]').removeClass('active');
    $(tab_content).addClass('active');
  });
});
