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

  var textIndex = 0;
  const texts = [{
    text: "Hi, you've reached ",
    index: 0,
    id: 'title-first',
  }, {
    text: "Olivia.",
    index: 0,
    id: 'name-outline',
  }];

  const getTypeDelay = () => {
    return Math.floor(Math.random() * 100) + 50;
  }

  const typeText = () => {
    if (textIndex >= texts.length) {
      setTimeout(animateOutline, 500);
      return;
    }

    var textObj = texts[textIndex];
    if (textObj.index < textObj.text.length) {
      document.getElementById(textObj.id).innerHTML += textObj.text.charAt(textObj.index);
      textObj.index += 1;
    } else {
      textIndex += 1;
    }
    setTimeout(typeText, getTypeDelay());
  }

  const animateOutline = () => {
    var elem = document.getElementById('name-outline');
    elem.style.width = '170px';
    const redrawLine = () => {
      elem.classList.add('notransition');
      elem.style.width = '0px';
      elem.offsetHeight;
      elem.classList.remove('notransition');
      elem.style.width = '170px';
    };
    // elem.onmouseover = redrawLine;
    elem.onclick = redrawLine;
  }

  typeText();
}
