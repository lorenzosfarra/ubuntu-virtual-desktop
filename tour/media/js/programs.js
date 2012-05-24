var windowAjax;
var currentApplication;

/* callback */
function readyStateChangedProgram ()
{
  var main = document.getElementById ("main");
  var content = main.innerHTML;
  /* try to get an existent div for the current application.
   * if it doesn't exists, create a new one. */

  if (windowAjax.readyState == 4) {
    /* TODO: Check responsestatus, too */

    if (main) {
       /* values is in the form:
        *  [title, icon, width, height, image, alt,
        *   ititle, maxw, minw, maxh, minh] */
      

      var values = eval (windowAjax.responseText);

      var fromtop = Math.random () * 100 + 20;
      var fromleft = Math.random () * 400;

      /* Create a div and set various options for the style */
      var div = document.createElement ('div');
      div.style.width = (parseInt(values[2]) + 20).toString() + 'px';
      div.style.height = (parseInt(values[3]) + 20).toString() + 'px';
      div.style.position = "absolute";
      div.style.top = fromtop;
      div.style.left = fromleft;
      div.style.marginTop = "0px";
      div.style.marginLeft = "-5px";
      div.style.minWidth = values[8] + 'px';
      div.style.minHeight = values[10] + 'px';
      div.style.maxWidth = values[7] + 'px';
      div.style.maxHeight = values[9] + 'px';
      div.style.background = "url(/media/images/windows/window/border-lt.gif)";
      div.style.backgroundRepeat = "no-repeat";
      div.style.backgroundPosition = "-1px 0px";
      div.style.border = "none";
      div.setAttribute ('id', values[5]);

      /* add the new div to the body of the document */
      document.body.appendChild (div);
      
      /* set the parameters for the FloatingPane */
      var parameters = {resizable: true,
                        title: values[0],
                        iconSrc: values[1],
                        taskBarId: "",
                        displayCloseAction: true,
                        displayMaximizeAction: true,
                        displayMinimizeAction: true,
                        hasShadow: false,
                        toggle: "fade",
                        constrainToContainer: true,
                        templateCssString: null};

      var pane = dojo.widget.createWidget ("FloatingPane", parameters, div);
      pane.setContent ("<img src=\"" + values[4] + "\" alt=\"" + 
                             values[5] + "\" title=\"" + 
                             values[6] + "\" style=\"border: none;\"/>");
      
      /* Now the application is opened. Hide all the menus. */
      hide_all_menus ();
    }
  }
}

/* callback */
function readyStateChangedFrame ()
{
  var main = document.getElementById ("main");
  var content = main.innerHTML;
  /* try to get an existent div for the current application.
   * if it doesn't exists, create a new one. */
  
  if (windowAjax.readyState == 4) {
    /* TODO: Check responsestatus, too */

    if (main) {
       /* values is in the form:
        *  [title, icon, width, height, framesource, alt,
        *   ititle, maxw, minw, maxh, minh]. */
      
      var fromtop = Math.random () * 100 + 20;
      var fromleft = Math.random () * 400;
      
      var values = eval (windowAjax.responseText);
      var div = document.createElement ('div');     // create a new div
      /* Create a div, only for the right top border */
      var right_top_border_div = document.createElement ('div');
      right_top_border_div.style.width = "100%";
      right_top_border_div.style.heigth = "100%";
      right_top_border_div.style.position = "relative";
      right_top_border_div.style.border = "2px solid black";
      right_top_border_div.style.background = "url(/media/images/windows/window/border-rt.gif)";
      right_top_border_div.style.backgroundRepeat = "no-repeat";

      div.style.width = values[2];                  // set the width
      div.style.height = values[3];                 // set the height
      div.style.position = "absolute";              // set the position
      div.style.top = fromtop;                      // set "top"
      div.style.left = fromleft;                    // set "left"
      div.style.minWidth = values[8];               // set the min-width
      div.style.minHeight = values[10];             // set the min-height
      div.style.maxWidth = values[7];               // set the max-width
      div.style.maxHeight = values[9];              // set the max-height
      div.style.border = "none";
      div.style.background = "url(/media/images/windows/window/border-lt.gif)";
      div.style.backgroundRepeat = "no-repeat";
      div.style.backgroundPosition = "-1px 0px";

      div.setAttribute ('id', values[5]);           // set the id

      /* add the new div to the body of the document */
      document.body.appendChild (div);
      
      /* set the parameters for the FloatingPane */
      var parameters = {resizable: true,
                        title: values[0],
                        iconSrc: values[1],
                        taskBarId: "",
                        displayCloseAction: true,
                        displayMaximizeAction: true,
                        displayMinimizeAction: true,
                        hasShadow: false,
                        toggle: "explode",
                        constrainToContainer: true,
                        templateCssString: null,
                        templateCssPath: "/media/js/dojo/src/widget/templates/FloatingPane.css"};

      var pane = dojo.widget.createWidget ("FloatingPane", parameters, div);
      pane.setContent (values[4]);
      
      /* Now the application is opened. Hide all the menus. */
      hide_all_menus ();

    }
  }

}

function loadProgram (name)
{

  /* dynamically create and show a 'window' of the given program name */
  windowAjax = assignAjax ();
  currentApplication = name;
  windowAjax.onreadystatechange = readyStateChangedProgram;
  windowAjax.open ("GET", "/loadwindow/" + name + "/", true);
  windowAjax.send (null);

}

function loadFrame (name) {
  
  /* same as above, but for programs described by frames */
  windowAjax = assignAjax ();
  currentApplication = name;
  windowAjax.onreadystatechange = readyStateChangedFrame;
  windowAjax.open ("GET", "/loadwindow/" + name + "/", true);
  windowAjax.send (null);
}
