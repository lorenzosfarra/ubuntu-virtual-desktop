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

def get_accessories ():
  """Return the structure of the "Applications->Accessories" menu."""
  
  # Calculator
  calc = ["item",
          "calculator.png",
          "calc",
          "Calculator"]

  # Character Map
  charmap = ["item",
             "charmap.png",
             "charmap",
             "Character Map"]

  # Dictionary
  dictionary = ["item",
                "dictionary.png",
                "dictionary",
                "Dictionary"]

  # Disk Usage Analyzer
  baobab = ["item",
            "baobab.png",
            "baobab",
            "Disk Usage Analyzer"]

  # Take Screenshot
  screenshot = ["item",
                "screenshot.png",
                "screenshot",
                "Take Screenshot"]
  
  # Terminal
  terminal = ["item",
              "terminal.png",
              "terminal",
              "Terminal"]

  # Text Editor
  editor = ["item",
            "editor.png",
            "gedit",
            "Text Editor"]


  accessories = [calc, charmap, dictionary,
                  baobab, screenshot, terminal, editor]

  return accessories

def get_games ():
  """Return the structure of the "Applications->Games" menu."""

  # AisleRiot Solitarie
  aisleriot = ["item",
               "aisleriot.png",
               "aisleriot",
               "AisleRiot Solitarie"]

  # Blackjack
  blackjack = ["item",
               "blackjack.png",
               "blackjack",
               "Blackjack"]

  # Chess
  chess = ["item",
           "glchess.png",
           "glchess",
           "Chess"]

  # Five or More
  five = ["item",
          "fiveormore.png",
          "fiveormore",
          "Five or More"]

  # Four-in-a-Row
  four = ["item",
          "fourinarow.png",
          "fourinarow",
          "Four-in-a-Row"]

  # FreeCell Solitaire
  freecell = ["item",
              "freecell.png",
              "freecell",
              "FreeCell Solitaire"]

  # Gnometris
  gnometris = ["item",
               "gnometris.png",
               "gnometris",
               "Gnometris"]

  # Iagno
  iagno = ["item",
           "iagno.png",
           "iagno",
           "Iagno"]

  # Klotski
  klotski = ["item",
             "klotski.png",
             "klotski",
             "Klotski"]

  # Mahjongg
  mahjongg = ["item",
              "mahjongg.png",
              "mahjongg",
              "Mahjongg"]

  # Mines
  mines = ["item",
           "gnomine.png",
           "gnomine",
           "Mines"]

  # Nibbles
  nibbles = ["item",
             "nibbles.png",
             "nibbles",
             "Nibbles"]

  # Robots
  robots = ["item",
            "robots.png",
            "robots",
            "Robots"]

  # Same GNOME
  samegnome = ["item",
               "samegnome.png",
               "samegnome",
               "Same GNOME"]

  # Sudoku
  sudoku = ["item",
            "sudoku.png",
            "sudoku",
            "Sudoku"]

  # Tali
  tali = ["item",
          "tali.png",
          "tali",
          "Tali"]

  # Tetravex
  tetravex = ["item",
              "tetravex.png",
              "tetravex",
              "Tetravex"]

  games = [aisleriot, blackjack, chess, five,
           four, freecell, gnometris, iagno,
           klotski, mahjongg, mines, nibbles, robots,
           samegnome, sudoku, tali, tetravex]

  return games


def get_office ():
  """Return the structure of the "Applications->Office" menu."""

  # OpenOffice.org Database
  oodatabase = ["item",
                "oodatabase.png",
                "oodatabase",
                "OpenOffice.org Database"]

  # OpenOffice.org Presentation
  oopresentation = ["item",
                    "oopresentation.png",
                    "oopresentation",
                    "OpenOffice.org Presentation"]

  # OpenOffice.org Spreadsheet
  oospreadsheet = ["item",
                   "oospreadsheet.png",
                   "oospreadsheet",
                   "OpenOffice.org Spreadsheet"]

  # OpenOffice.org Word Processor
  ooword = ["item",
            "ooword.png",
            "ooword",
            "OpenOffice.org Word Processor"]

  office = [oodatabase, oopresentation,
            oospreadsheet, ooword]

  return office

def get_graphics ():
  """Return the structure of the "Applications->Graphics" menu."""
  
  # F-Spot Photo Manager
  fspot = ["item",
           "fspot.png",
           "fspot",
           "F-Spot Photo Manager"]


  # Gimp Image Editor
  gimp = ["item",
          "gimp.png",
          "gimp",
          "Gimp Image Editor"]


  # gThumb Image Viewer
  gthumb = ["item",
            "gthumb.png",
            "gthumb",
            "gThumb Image Viewer"]
  
  # XSane Image Scanner
  xsane = ["item",
           "xsane.png",
           "xsane",
           "XSane Image Scanner"]

  graphics = [fspot, gimp, gthumb, xsane]
  return graphics


def get_internet ():
  """Return the structure of the "Applications->Internet" menu."""
  
  # Ekiga Softphone
  ekiga = ["item",
           "ekiga.png",
           "ekiga",
           "Ekiga Softphone"]

  # Evolution Mail
  evolution = ["item",
               "evolution.png",
               "evolution",
               "Evolution Mail"]

  # Firefox Web Browser
  # XXX: WARNING: For now this is the ONLY item in the "menu" that is
  #               implemented with a frame, and the properties are
  #               handled "statically" in the loadFrame () function in
  #               the ajax.js file
  firefox = ["iframe",
             "firefox.png",
             "firefox",
             "Firefox Web Browser"]
  
  # Gaim Internet Messenger
  gaim = ["item",
          "gaim.png",
          "gaim",
          "Gaim Internet Messenger"]

  # Terminal Server Client
  term_server_client = ["item",
                        "termserverclient.png",
                        "termserverclient",
                        "Terminal Server Client"]
  
  internet = [ekiga, evolution, firefox,
              gaim, term_server_client]
  
  return internet

def get_media ():
  """Return the structure of the "Applications->Sound & Video" menu."""

  # Movie Player
  totem = ["item",
           "totem.png",
           "totem",
           "Movie Player"]

  # Rhythmbox Music Player
  rhythmbox = ["item",
               "rhythmbox.png",
               "rhythmbox",
               "Rhythmbox Music Player"]

  # Serpentine Audio CD Creator
  serpentine = ["item",
                "serpentine.png",
                "serpentine",
                "Serpentine Audio CD Creator"]

  # Sound Juicer CD Extractor
  soundjuicer = ["item",
                 "soundjuicer.png",
                 "soundjuicer",
                 "Sound Juicer CD Extractor"]

  # Sound Recorder
  grecord = ["item",
             "grecord.png",
             "grecord",
             "Sound Recorder"]

  media = [totem, rhythmbox, serpentine,
           soundjuicer, grecord]
  
  return media

