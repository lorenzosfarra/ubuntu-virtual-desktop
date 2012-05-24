/* GLOBALS */

/* Applications */
var apps_submenu = new Array ();
apps_submenu[0] = "menu_accessories";
apps_submenu[1] = "menu_games";
apps_submenu[2] = "menu_graphics";
apps_submenu[4] = "menu_office";
apps_submenu[3] = "menu_internet";
apps_submenu[5] = "menu_media";

/* Places */
var places_submenu = new Array ();

/* System */
var system_submenu = new Array ();
system_submenu[0] = "Preferences";
system_submenu[1] = "Administration";

var active_menu = "";

function checkmenus (name)
{
  
  /* The menu category (Applications, Places or System) has to be
   * activated:
   *  1) When the user clicks on the category's image;
   *  2) When the mouse is over the category's image and another
   *          category is already active; */

  if (active_menu == "" || active_menu == name)
    return;

  showmenu (name);

}

function showmenu (name)
{

/* The function does this:
 * 1) Hide all the menus no more active;
 * 2) Show the currently active menu;
 * 3) "Highlight" the button corresponding to the active menu in the main menu;
 * 4) "Un-highlight" the buttons corresponding to the unactive menus. */

  if (name == active_menu) {
    /* if the user clicks on the already active menu's category,
     * we have to hide this menu, so we call the right function */
    hide_menu (name);
    change_menu_image (name);
    active_menu = "";
    return;
  }
  
  if (name == 'applications') {
    
    hide_menu ('places');
    hide_menu ('system');
    show_menu ('applications');
    change_menu_image ('applications');

  } else if (name == "places") {
   
    hide_menu ('applications');
    hide_menu ('system');
    show_menu ('places');
    change_menu_image ('places');

  } else {
    
    hide_menu ('applications');
    hide_menu ('places');
    show_menu ('system');
    change_menu_image ('system');
  }


  active_menu = name;

}

function hover_and_hide (id, state, category)
{
  
  /* This function is useful for "active" entries (no submenu),
   * 'cause when the mouse is over them, they have to highlight
   * themselves and hide all the other entries'submenu */

   hover (id, state);
   hide_all_submenus (category);

}

function hover (id, state)
{

  /* "Highlight" the entry in the menu where the mouse is over */

  var obj = document.getElementById (id);
  var submenu = document.getElementById ("menu_" + id);

  if (state) {

    obj.style.background = "#ffd799";
    obj.style.border = "1px solid #EFB862";
    hide_all_submenus_except ("menu_" + id);

  } else {
    obj.style.background = "#f8f5f2";
    obj.style.border = "1px solid #f8f5f2";
  }

}

function hide_all_submenus (category)
{
  /* Hide all the submenus of the previously active menu ('category') */

  var main;
  var iter;
  var tempobj;

  if (category == "applications")
    main = apps_submenu;
  else if (category == "places")
    main = places_submenu;
  else
    main = system_submenu;

  if (main.length == 0)
    return;

  for (iter = 0; iter < main.length; iter++) {
    tempobj = document.getElementById (main[iter]);
    if (tempobj)
      tempobj.style.visibility = "hidden";
  }

}

function hide_all_submenus_except (name)
{

  /* Show the right submenu ('name') and hide all the others */

  var main;
  var iter;
  var tempobj;

  /* Choose the right categories, defined in the head of this file */
  if (apps_submenu.indexOf (name) >= 0)
    main = apps_submenu;
  else if (places_submenu.indexOf (name) >= 0)
    main = places_submenu;
  else
    main = system_submenu;
  
  for (iter = 0; iter < main.length; iter++) {
    
    tempobj = document.getElementById (main[iter]);
    
    if (main[iter] != name) {
      if (tempobj)
        tempobj.style.visibility = "hidden";
        tempobj.style.display = "none";
    } else {
      if (tempobj)
        tempobj.style.visibility = "visible";
        tempobj.style.display = "block";
    }

  }
}

function change_menu_image (name)
{
  /* change the menu images (applications, places or system) to "normal" */

 
  /* Images object by id */
  var img_apps = document.getElementById ('img_applications');
  var img_places = document.getElementById ('img_places');
  var img_system = document.getElementById ('img_system');

  /* "Normal" path */
  var apps_normal = "/media/images/menu/applications.png";
  var places_normal = "/media/images/menu/places.png";
  var system_normal = "/media/images/menu/system.png";

  /* "Hover" path */
  var apps_hover = "/media/images/menu/applications_hover.png";
  var places_hover = "/media/images/menu/places_hover.png";
  var system_hover = "/media/images/menu/system_hover.png";

  if (name == 'applications') {
    /* Applications */

    if (img_apps) {
      if (img_apps.src.indexOf ("hover") >= 0) {
        img_apps.src = apps_normal;
      } else {
        img_apps.src = apps_hover;
      }
    }
    if (img_places) {
      if (img_places.src.indexOf ("hover") >= 0)
        img_places.src = places_normal;
    }

    if (img_system) {
      if (img_system.src.indexOf ("hover") >= 0)
        img_system.src = system_normal;
    }
  } else if (name == 'places') {
    /* Places */

    if (img_places) {
      if (img_places.src.indexOf ("hover") >= 0) {
        img_places.src = places_normal;
      } else {
        img_places.src = places_hover;
      }
    }
    if (img_apps) {
      if (img_apps.src.indexOf ("hover") >= 0)
        img_apps.src = apps_normal;
    }

    if (img_system) {
      if (img_system.src.indexOf ("hover") >= 0)
        img_system.src = system_normal;
    }
  } else if (name == 'system') {
    /* System */

    if (img_system) {
      if (img_system.src.indexOf ("hover") >= 0) {
        img_system.src = system_normal;
      } else {
        img_system.src = system_hover;
      }
    }
    if (img_apps) {
      if (img_apps.src.indexOf ("hover") >= 0)
        img_apps.src = apps_normal;
    }

    if (img_places) {
      if (img_places.src.indexOf ("hover") >= 0)
        img_places.src = places_normal;
    }
  }
}

function hide_all_menus ()
{
}

function hide_all_menus ()
{
  hide_menu ('applications');
  hide_menu ('places');
  hide_menu ('system');
  active_menu = "";
  all_menu_images_to_normal ();


}

function hide_menu (name)
{
  /* Hide the main menu category represented by 'name' */
  var menu = document.getElementById (name);
  if (menu) {
    menu.style.visibility = "hidden";
    menu.style.display = "none";
  }
  hide_all_submenus (name);
}

function show_menu (name)
{
  /* Show the main menu category represented by 'name' */
  var menu = document.getElementById (name);
  if (menu) {
    menu.style.visibility = "visible";
    menu.style.display = "block";
  }
}

function all_menu_images_to_normal ()
{
  /* Images object by id */
  var img_apps = document.getElementById ('img_applications');
  var img_places = document.getElementById ('img_places');
  var img_system = document.getElementById ('img_system');

  /* "Normal" path */
  var apps_normal = "/media/images/menu/applications.png";
  var places_normal = "/media/images/menu/places.png";
  var system_normal = "/media/images/menu/system.png";

  if (img_apps)
    img_apps.src = apps_normal;

  if (img_places)
    img_places.src = places_normal;

  if (img_system)
    img_system.src = system_normal;

}
