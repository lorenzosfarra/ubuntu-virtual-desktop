# MENU: Applications
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

def get_applications ():
  """Return the structure of the "Applications" menu."""
  
  # Accessories
  accessories = ["item",
                 "accessories.png",
                 "accessories",
                 "Accessories",
                 "notactive"]
  # Games
  games = ["item",
           "games.png",
           "games",
           "Games",
           "notactive"]

  # Graphics
  graphics = ["item",
              "graphics.png",
              "graphics",
              "Graphics",
              "notactive"]
  # Internet
  internet = ["item",
              "internet.png",
              "internet",
              "Internet",
              "notactive"]

  # Office
  office = ["item",
            "office.png",
            "office",
            "Office",
            "notactive"]
  
  # Sound & Video
  media = ["item",
           "media.png",
           "media",
           "Sound &amp; Video",
           "notactive"]

  # Separator
  separator = ["separator"]

  # Add/Remove
  addremove = ["item",
               "addremove.png",
               "addremove",
               "Add/Remove...",
               "active"]

  applications = [accessories, games, graphics, 
                office, internet, media, separator,
                addremove]

  return applications

def get_places ():
  """Return the structure of the "Places" menu."""
  
  # Home Folder
  home = ["item",
          "home.png",
          "nautilus",
          "Home Folder",
          "active"]

  # Documents
  documents = ["item",
               "documents.png",
               "documents",
               "Documents",
               "active"]

  # Desktop
  desktop = ["item",
             "desktop.png",
             "desktop",
             "Desktop",
             "active"]

  # Computer
  computer = ["item",
              "computer.png",
              "computer",
              "Computer",
              "active"]


  # Separator
  separator = ["separator"]

  # CD/DVD Creator
  nautiluscdburner = ["item",
                      "nautiluscdburner.png",
                      "nautiluscdburner",
                      "CD/DVD Creator",
                      "active"]

  # Network
  network = ["item",
             "network.png",
             "network",
             "Network",
             "active"]

  # Connect to Server...
  connectto = ["item",
               "connectto.png",
               "connectto",
               "Connect to Server...",
               "active"]

  # Search for Files...
  search = ["item",
            "find.png",
            "find",
            "Search for Files...",
            "active"]
  
  # Recent Documents
  recent = ["deactivated",
            "recentdocs.png",
            "recentdocs",
            "Recent Documents",
            "notactive"]

  places = [home, documents, desktop, separator, computer,
            nautiluscdburner, separator, network, connectto,
            separator, search, recent]
  
  return places

def get_system ():
  """Return the structure of the "System" menu."""
  
  # Preferences
  preferences = ["item",
          "preferences.png",
          "preferences",
          "Preferences",
          "notactive"]

  # Administration
  administration = ["item",
               "administration.png",
               "administration",
               "Administration",
               "notactive"]
  
  # Separator
  separator = ["separator"]

  # Help and Support
  help = ["item",
             "help.png",
             "help",
             "Help and Support",
             "active"]

  # About Gnome
  aboutgnome = ["item",
              "aboutgnome.png",
              "aboutgnome",
              "About Gnome",
              "active"]


  # About Ubuntu
  aboutubuntu = ["item",
              "aboutubuntu.png",
              "aboutubuntu",
              "About Ubuntu",
              "active"]
  
  # Separator
  separator = ["separator"]
  
  # Quit ...
  quit = ["item",
          "quit.png",
          "quit",
          "Quit...",
          "active"]
  
  system = [preferences, administration, separator, help,
            aboutgnome, aboutubuntu, separator, quit]
  return system 
