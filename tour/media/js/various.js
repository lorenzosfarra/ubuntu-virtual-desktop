/* initialize DnD (Drag and Drop) sources */

function DnDInit () {
  var computer = document.getElementById ('icon_computer');
  var home = document.getElementById ('icon_home');
  var hd = document.getElementById ('icon_hd');

  var dragc = new dojo.dnd.HtmlDragMoveSource (computer);
  var dragh = new dojo.dnd.HtmlDragMoveSource (home);
  var draghd = new dojo.dnd.HtmlDragMoveSource (hd);

}

function FreshLoaded () {
  /* This function is called with the 'onLoad' event.
   * It has to call some functions like the init. of DnD,
   * time and date, and so on... */

   DnDInit ();
}
