var menu_button = document.getElementById("menu_button")
var back_button = document.getElementById("back_button")

var menu = document.getElementById("menu")

var main_menu = document.getElementById("main-menu")
var open_menu = document.getElementById("open-menu")

menu_button.onclick = function(event){
  menu.scrollBy(open_menu.getBoundingClientRect().x, 0)
}

back_button.onclick = function(event){
  menu.scrollLeft -= 1000
}