/* Functions for the splash.html template file.
 * Takes care of the progress bar and to pre-load images for the tour */

var imagesPath = "/media/images/";
var ToLoadImages = new Array ();
var MenuImages = new Array ();
var PanelImages = new Array ();
var DesktopImages = new Array ();
var VariousImages = new Array ();
/* Ratings is the array for the values of the percentage to add to
 * the current progress bar status, based on how many images have
 * to be loaded for the corresponding category */
var Ratings = new Array ();

ToLoadImages[0] = MenuImages;
ToLoadImages[1] = PanelImages;
ToLoadImages[2] = DesktopImages;
ToLoadImages[3] = VariousImages;

Ratings[0] = 1;                 // Applications
Ratings[1] = 1;                 // Places
Ratings[2] = 4;                 // Panel top
Ratings[3] = 2;                 // Desktop
Ratings[4] = 1;                 // Various
Ratings[5] = 1;                 // Start the tour

/* Menu -> Applications */
MenuImages[0] = "menu/accessories/accessories.png";
MenuImages[1] = "menu/games/games.png";
MenuImages[2] = "menu/graphics/graphics.png";
MenuImages[3] = "menu/office/office.png";
MenuImages[4] = "menu/internet/internet.png";
MenuImages[5] = "menu/media/media.png";
MenuImages[6] = "menu/addremove.png";
/* Menu -> Places */
MenuImages[7] = "menu/places/home.png";
MenuImages[8] = "menu/places/documents.png";
MenuImages[9] = "menu/places/desktop.png";
MenuImages[10] = "menu/places/computer.png";
MenuImages[11] = "menu/places/nautiluscdburner.png";
MenuImages[12] = "menu/places/network.png";
MenuImages[13] = "menu/places/connectto.png";
MenuImages[14] = "menu/places/find.png";
MenuImages[15] = "menu/places/recentdocs.png";
/* Menu -> System TODO */

/* Panel -> Top */
PanelImages[0] = "menu/applications.png";
PanelImages[1] = "menu/applications_hover.png";
PanelImages[2] = "menu/places.png";
PanelImages[3] = "menu/places_hover.png";
PanelImages[4] = "menu/system.png";
PanelImages[5] = "menu/system_hover.png";
PanelImages[6] = "menu/firefox.png";
PanelImages[7] = "menu/firefox_hover.png";
PanelImages[8] = "menu/evolution.png";
PanelImages[9] = "menu/evolution_hover.png";
PanelImages[10] = "menu/logout.png";
PanelImages[11] = "menu/logout_hover.png";
PanelImages[12] = "menu/panelbg.png";
PanelImages[13] = "menu/arrow.png";
PanelImages[14] = "menu/arrow_bg.png";
PanelImages[15] = "menu/arrow_deactivated.png";
/* Panel -> bottom TODO */

/* Desktop */
DesktopImages[0] = "desktop/icon_computer.png";
DesktopImages[1] = "desktop/icon_computer_hover.png";
DesktopImages[2] = "desktop/icon_home.png";
DesktopImages[3] = "desktop/icon_home_hover.png";
DesktopImages[4] = "desktop/icon_home.png";
DesktopImages[5] = "desktop/icon_home_hover.png";

/* Various */
VariousImages[0] = "background.png";
VariousImages[1] = "loading.gif";

var globalIter;
var currentPercentage = -1;
  
/* List of stop */
var steps = new Array ();
steps[0] = "Initializing The Menus  ... ";
steps[1] = "Initializing The Panels  ...";
steps[2] = "Initializing the Desktop  ...";
steps[3] = "Loading last elements ...";
steps[4] = "Starting the tour ...";


function startProgressActions () {
  /* Start all the operations. Called with the event "onLoad". */
  
  var iter;
  var percentage;
  var innerIter;

  for (iter = 0; iter < ToLoadImages.length; iter++) {
    /* Iter = 0 ? Menu Images.
     *            Menu Images[0-6] = Applications
     *            Menu Images[7-15] = Places
     * Iter = 1 ? Panel Images
     * Iter = 2 ? Desktop Images
     * Iter = 3 ? Varous Images */

    ProgressBarIncrement (Ratings[0]);

    if (iter == 0) {
      /* Load 1st set of images, MenuImages[0-6] */
      LogActivity (0, "start");
      LoadMenuImages (1);
      ProgressBarIncrement (Ratings[1]);

    } else if (iter == 1) {
      /* Load 2nd set of images, MenuImages[7-15] */
      LoadMenuImages (2);
      window.setTimeout ("ProgressBarIncrement (" + Ratings[2] + ")", 50000);
      LogActivity (0, "end");

      /* Load 3rd set of images, PanelImages */
      LogActivity (1, "start");
      LoadPanelImages ();
      ProgressBarIncrement (Ratings[3]);
      LogActivity (1, "end");
    
    } else if (iter == 2) {
      /* Load 4th set of images, DesktopImages */
      LogActivity (2, "start");
      LoadDesktopImages ();
      ProgressBarIncrement (Ratings[4]);
      LogActivity (2, "end");

    } else if (iter == 3) {
      /* Load 5th set of images, VariousImages */
      LogActivity (3, "start");
      LoadVariousImages ();
      ProgressBarIncrement (Ratings[5]);
      LogActivity (3, "end");
     
    }
    
  }
  
  LogActivity (4, "start");  
  window.setTimeout ("StartTour ()", 1000);
}

function ProgressBarIncrement (incrementValue) {
  /* Increment the "loaded part" of the progress bar by
   * the given value */

  var obj;
  while (incrementValue >= 0 && currentPercentage < 18) {
    currentPercentage += 1;
    incrementValue -= 1;
    obj = document.getElementById ("percentage" + currentPercentage);
    if (obj) {
      obj.src = "/media/images/splash/progressbar_orange.png";
    }
  }
}

function LoadMenuImages (range) {
  /* Range = 0? load MenuImages[0-6]
   * Range = 1? load MenuImages[0-7] */

  var iter, end;
  var ImageObject;

  /* Set the start and the end of the images'list to load */
  if (range == 0) {
    iter = 0;
    end = 7;

  } else {
    iter = 7;
    end = MenuImages.length;
  }

  while (iter < end) {
    ImageObject = new Image();
    ImageObject.src = imagesPath + MenuImages[iter];
    MenuImages[iter] = ImageObject;                 // Replace in the list!
    iter += 1;
  }
}

function LoadPanelImages () {
  /* Load images for the panel */

  var iter = 0;
  var end = PanelImages.length;
  var ImageObject;

  while (iter < end) {
    ImageObject = new Image();
    ImageObject.src = imagesPath + PanelImages[iter];
    PanelImages[iter] = ImageObject;
    iter += 1;
  }
}

function LoadDesktopImages () {
  /* Load images for the desktop */

  var iter = 0;
  var end = DesktopImages.length;
  var ImageObject;

  while (iter < end) {
    ImageObject = new Image();
    ImageObject.src = imagesPath + DesktopImages[iter];
    DesktopImages[iter] = ImageObject;
    iter += 1;
  }
  
}

function LoadVariousImages () {
  /* Load "other" images */

  var iter = 0;
  var end = VariousImages.length;
  var ImageObject;

  while (iter < end) {
    ImageObject = new Image();
    ImageObject.src = imagesPath + VariousImages[iter];
    VariousImages[iter] = ImageObject;
    iter += 1;
  }
  
}

function StartTour () {
  /* Set the cookie and go to the new location */

  /* TODO: set the cookie */
  ProgressBarIncrement (1);
  /* If testing, location is '/', otherwise '/ubuntutour/' */
  location.href = "/";
}

function LogActivity (step, activity) {
  /* Log the current activity in the specific div */
  
  var log = document.getElementById ('activitieslog');

  if (activity == "end") {
    /* Same for all steps, write "OK" and start a new line */
    log.innerHTML = log.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;Ok<br />";
    return;
  }
  /* Start a new step */
  log.innerHTML = log.innerHTML + steps[step];
  return; 
}
