/* .js file for all the frames.
 * The file is divided in sections, starting with:
 *          START PROGRAM_NAME
 * and ending with
 *          END PROGRAM_NAME
 * /


/* START FIREFOX */

function addressbarKeyDown (e) {
  /* called everytime a key is pressed in the "address bar" of the
   * "firefox window". If the keynum is 13 (Enter), call addressbarGo () */

  var keynum;

  if (window.event) {
    /* IE */
    keynum = e.keyCode;
  } else if (e.which) {
    /* Netscape, Firefox, Opera ... */
    keynum = e.which;
  }
  
  if (keynum == 13) {
    /* Enter? */
    addressbarGo ();
  }
  
}

function addressbarGo () {
  /* Retrieve the address given by the user in the 'address bar'
   * and change the iframe page */

  var address = document.getElementById ('addressbar');
  var frame = document.getElementById ('framebody');
  
  /* check 'http', 'https', 'ftp' at the beginning */
  if (!dojo.string.startsWithAny (address.value,
                                 'http://', 'https://',
                                 'ftp://')) {
    
    /* Default: http */
    address.value = 'http://' + address.value;

  }

  frame.src = address.value;
}

/* END FIREFOX */
