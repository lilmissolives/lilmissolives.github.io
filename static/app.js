window.onload = () => {
  // Cache selectors
  var lastId,
      topMenu = $(".sidenav"),
      topMenuHeight = topMenu.outerHeight()/*+15*/,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Initialize the first link
  $('.sidenav').find('a').first().addClass('active');

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;
    
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    
    if (lastId !== id) {
      // Set/remove active class
      menuItems.filter("[href='#"+lastId+"']").removeClass("active");
      menuItems.filter("[href='#"+id+"']").addClass("active")
        lastId = id;
    }                   
  });
}
