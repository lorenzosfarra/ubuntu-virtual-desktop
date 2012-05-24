/* Functions to control 'gnome-panel', except the menu (see menu.js) */


function over_image (image, stat)
{
  /* over the image? change src to image_hover.png.
   * out of the image? change src back to image.png. */
   var path = "/media/images/menu/"; 
   var obj = document.getElementById ("img_" + image);
   
   if (obj) {
    
    if (stat) {
      /* over the image */
      obj.src = path + image + "_hover.png";
    } else {
      /* out */
      obj.src = path + image + ".png";
    }

   }
}
