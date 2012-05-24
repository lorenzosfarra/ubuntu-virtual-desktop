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
from ConfigParser import ConfigParser, ParsingError, NoOptionError
from sys import stderr
from tour.settings import TEMPLATE_DIRS

class GetWindow (ConfigParser):
  """Class to manage the files with informations on the 'windows'
  that represent the programs."""
  
  values = []                               # initially empty

  def __init__ (self):
    
    ConfigParser.__init__ (self)            # init ConfigParser
    self.values = []
  
  def parse (self, filename, section):
    """Heart of the class. Opens the given file and parse the fields
       of the given section."""
    
    print "\nparse\n"

    try:
      f = open (filename, 'r')
      self.readfp (f, filename)
      f.close ()
    except IOError, (errno, strerror):
      # Error opening the file. Return.
      stderr.write (strerror)
      stderr.flush ()
      return self.values
    
    self.values.append (self.get (section,
                                        'title'))   # get the title
    self.values.append (self.get (section,
                                       'icon'))     # get the icon
    self.values.append (self.get (section,
                                        'width'))   # get the width
    self.values.append (self.get (section,
                                         'height')) # get the height
    # If the 'image' option is not present,
    ## maybe this is a frame (like Firefox
    try:
      image = self.get (section, 'image')
      self.values.append (image)                    # get the image
    except NoOptionError, ImageNotPresent:
      # Try to see if we have to import an html
      ## source 'cause this is a frame and not
      ## an image. If this isn't a frame, then
      ## "confirm" the NoOptionError
      try:
        frame_name = TEMPLATE_DIRS[0] + '/frames/' + \
                      section.lower () + '.html'
        frame_file = open (frame_name, 'r')

        # We have to delete all the 'newline' chars, otherwise
        ## .js syntax will have problems
        frame_src = frame_file.read ().replace ("\n", "")

        frame_file.close ()
        self.values.append (frame_src)

      except IOError:
        # Ok, this is not a frame. Previous NoOptionError
        raise ImageNotPresent

    self.values.append (self.get (section,
                                      'alt'))       # get the 'alt' string
    self.values.append (self.get (section,
                                      'ititle'))    # get the 'title' string

    self.values.append (self.get (section,
                                        'maxw'))    # get the max width
      
    self.values.append (self.get (section,
                                        'minw'))    # get the min width
      
    self.values.append (self.get (section,
                                        'maxh'))    # get the max height

    self.values.append (self.get (section,
                                        'minh'))    # get the min height


  def get_values (self):
    """Return the values."""
    
    return self.values
