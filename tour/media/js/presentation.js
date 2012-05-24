/* Define the list of colors */
cols = new Array ();
cols[0] = '#aaaaaa';
cols[1] = '#bbbbbb';
cols[2] = '#cccccc';
cols[3] = '#eeeeee';
cols[4] = '#f8f8f8';
cols[5] = '#ffffff';

/* Define images'path's list */
var images = new Array ();
images[0] = "/media/images/presentation/tour.png";
images[1] = "/media/images/presentation/ubuntu.png";
images[2] = "/media/images/presentation/download.png";
images[3] = "/media/images/presentation/about.png";


/* Titles:
 *
 *      1) Tour
 *      2) Ubuntu
 *      3) Get
 *      4) Other */

var titles = new Array ();
titles[0] = "&laquo; The Tour &raquo;";
titles[1] = "&laquo; What's Ubuntu? &raquo;";
titles[2] = "&laquo; Get Ubuntu &raquo;";
titles[3] = "&laquo; About ... &raquo;";

/* Descriptions: they're dinamically changed in an AJAX call. */
var tour_desc = "";
var ubuntu_desc = "";
var download_desc = "";
var other_desc = "";

/* This is the currently active description. Default: "tour". */
current_description = "tour";

function fadeTextHover (name) {
    setDescription (name);
    name = name + 'link';
    for (var i = 0; i < cols.length; i++) {
      setTimeout("document.getElementById ('" + name + "').style.color = cols[" + i + "]", i * 100);
    }
}

function fadeTextOut (name) {
    name = name + 'link';
    for (var i = cols.length - 1, j = 0; i >= 0; i--, j++) {
      
      setTimeout("document.getElementById ('" + name + "').style.color = cols[" + j + "]", i * 100);
  }
}

function setDescription (name) {
  
  
  /* This is the already active name?No action. */
  if (name == current_description) {
    return;
  }

  /* Set the description based on the name */
  var title = document.getElementById ("desc_head");
  /* We have to change the active image, too. */
  var currentactive = document.getElementById ('activeimg');

  /* Get the title based on the name */
  switch (name) {
    case "tour":
      title.innerHTML = titles[0];
      currentactive.src = images[0];
      break;
    case "ubuntu":
      title.innerHTML = titles[1];
      currentactive.src = images[1];
      break;
    case "download":
      title.innerHTML = titles[2];
      currentactive.src = images[2];
      break;
    case "other":
      title.innerHTML = titles[3];
      currentactive.src = images[3];
      break;
  }
  
  setDescriptionBody (name);
  current_description = name;
}

var descAjax = null;

function setDescriptionBody (name) {
  /* If we have already the body from a precedent AJAX call,
   * simply set the text from there. Otherwise, we have to
   * do an AJAX call */
  var body = document.getElementById ("desc_body");
  if (name == "tour" && tour_desc != "") {
    body.innerHTML = tour_desc;
  } else if (name == "ubuntu" && ubuntu_desc != "") {
    body.innerHTML = ubuntu_desc;
  } else if (name == "download" && download_desc != "") {
    body.innerHTML = download_desc;
  } else if (name == "other" && other_desc != "") {
    body.innerHTML = other_desc;
  } else {
    /* Retrieve and display the description for the given name. */
    descAjax = assignAjax ();

    descAjax.onreadystatechange = readyStateChangedDescription;
    descAjax.open ("GET", "/loaddescription/" + name + "/", true);
    descAjax.send (null);
  }
}

/* callback */
function readyStateChangedDescription () {
  var body = document.getElementById ("desc_body");
  if (descAjax.readyState == 4) {
    /* TODO: check responsestatus, too */
    if (body) {
      body.innerHTML = descAjax.responseText;
      /* Set the description's variable */
      switch (current_description) {
        case "tour":
          tour_desc = descAjax.responseText;
          break;
        case "ubuntu":
          ubuntu_desc = descAjax.responseText;
          break;
        case "download":
          download_desc = descAjax.responseText;
          break;
        case "other":
          other_desc = descAjax.responseText;
          break;
      }
    }
  }
}
