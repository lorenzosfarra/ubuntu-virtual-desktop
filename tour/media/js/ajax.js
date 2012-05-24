/* Debugging purpose ... */
function He () {
  alert ("!!!");
}



function assignAjax ()
{
  /* get the right XMLHttpRequst. It depends on the browser. */
  var XHR;
  var userbrowser = navigator.userAgent.toUpperCase ();
  if ( typeof(XMLHttpRequest) === "function" ||
       typeof(XMLHttpRequest) === "object" ) {

    XHR = new XMLHttpRequest ();

  } else if ( window.ActiveXObject && userbrowser.indexOf("MSIE 4") < 0) {
    
    if (userbrowser.indexOf ("MSIE 5") < 0)
      XHR = new ActiveXObject ("Msxml2.XMLHTTP");
    else
      XHR = new ActiveXObject("Microsoft.XMLHTTP");

  }

  return XHR;

}
