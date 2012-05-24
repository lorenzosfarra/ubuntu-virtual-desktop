/* functions for the desktop */

function change_icon (name, stat)
{
  
  /* Over the icon? Add '_hover' to the icon's filename.
   * Out? Change filename_hover back to filename. Example:
      
      1) a given image, with id 'myimg', with src = '/path/imgfn.png';
      2) var img = document.getElementById ('myimg');
      3.1) Mouse over? img.src = '/path/imgfn_hover.png';
      3.2) Mouse out? img.src = '/path/imgfn.png';
   */

  var path = "/media/images/desktop/";
  var image = document.getElementById (name);

  if (!image)
    return;

  if (stat) {
    /* Over */
    image.src = path + name + "_hover.png";

  } else {
    /* Out */
    image.src = path + name + ".png";

  }

}
