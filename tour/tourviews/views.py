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
import ubuntumenus
import applications

from django.shortcuts import render_to_response

def presentation (request):
  """Show the presentation page."""

  return render_to_response ('presentation/presentation.html')

def splash (request):
  """Show the "splash image" page."""

  return render_to_response ('splash.html')

def about (request):
  """Simply show the 'about.html' templates."""
  
  return render_to_response ('about.html')


def menu (request):
  
  # MENU :: Applications
  apps = ubuntumenus.get_applications ()
  access = applications.get_accessories ()
  games = applications.get_games ()
  graphics = applications.get_graphics ()
  internet = applications.get_internet ()
  office = applications.get_office ()
  media = applications.get_media ()


  # MENU :: Places
  places = ubuntumenus.get_places ()

  # MENU :: SYSTEM
  system = ubuntumenus.get_system ()

  return render_to_response ('ubuntu.html',
                             {'applications': apps,
                              'accessories': access,
                              'games': games,
                              'graphics': graphics,
                              'office': office,
                              'internet': internet,
                              'media': media,
                              
                              'places': places,
                              
                              'system': system}
                             )
