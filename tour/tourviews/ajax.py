# This file is part of Ubuntu Virtual Desktop.
# 
# Ubuntu Virtual Desktop is free software: you can redistribute it and/or modify
# it under the terms of the GNU  General Public License as published by
# the Free Software Foundation, either version  2f the License, or
# (at your option) any later version.
# 
# Ubuntu Virtual Desktop is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with Ubuntu Virtual Desktop.  If not, see <http://www.gnu.org/licenses/>.
# 
# 
from django.http import HttpResponse
from tour.tourviews.loadprogram import GetWindow
from tour.settings import TEMPLATE_DIRS
from sys import stderr

def get_category_from_name (name):
  """Return the category of the given program name."""
  # Applications
  applications = ["addremove"]
  accessories = ["calc", "charmap", "dictionary", "baobab",
                 "screenshot", "terminal", "gedit"]
  graphics = ["gimp"]
  office = ["oospreadsheet", "oodatabase", "oopresentation", "ooword"]
  media = ["totem", "rhythmbox", "serpentine", "grecord"]
  internet = ["firefox", "evolution", "ekiga", "gaim", "termserverclient"]
  # Places
  places = ["computer", "nautilus", "connectto", "find",
            "desktop", "nautiluscdburner", "documents",
            "network"]
  # System
  system = ["help", "aboutgnome", "aboutubuntu"]
  
  if name in applications:
    return "applications"
  if name in accessories:
    return "accessories"
  if name in graphics:
    return "graphics"
  if name in office:
    return "office"
  elif name in media:
    return "media"
  elif name in places:
    return "places"
  elif name in internet:
    return "internet"
  elif name in system:
    return "system"

  return ""

def get_window (request, name):
  """Load the window corresponding to the program 'name'."""

  if name.endswith ('/'):
    name = name[:-1]

  # We have to find the right category. FIXME: is there a better way?
  category = get_category_from_name (name)
  # FIXME: take this in a dynamic way, or move to the settings file!
  filename = "/home/twilight/projects/ubuntu_desktop_tour/tour/media/windows/" + category + ".window"

  #stderr.write (filename)
  #stderr.flush ()

  window = GetWindow ()
  # the file is in the "windows/" directory, with the 'window' extension.

  window.parse (filename, name.upper ())

  # values is in the form:
  ## [title, icon, width, height, image, alt,
  ##  ititle, maxw, minw, maxh, minh]
  values = window.get_values ()

  # in javascript, we have to create an array with a command like:
  ##  > var myarray = new Array (item1, item2, ...., itemN)
  ## 
  ## so we pass the command as a string, and in the javascript we
  ## run the command with the 'eval' function

  eval_code = "new Array ('" + values[0] + "'"

  # add all the values to the "array"

  iter = 1
  while (iter < len (values)):
    eval_code += ", '" + values[iter] + "'"
    iter += 1

  eval_code += ")"
  
  print eval_code

  return HttpResponse (eval_code, mimetype="text/plain")

def get_description (request, name):
  """Load the description corresponding to the given 'name'."""
  
  # "Clear" the name from the URL
  if name.endswith ("/"):
    name = name[:-1]

  filename = TEMPLATE_DIRS[0] + "/presentation/" + name + ".html"
  stderr.write (filename)
  stderr.flush ()
  
  try:
    fileobj = open (filename, 'r')
    html = fileobj.read ()
    fileobj.close ()

  except IOError:
    html = "An error occurred ..."
  return HttpResponse (html, mimetype="text/plain")

