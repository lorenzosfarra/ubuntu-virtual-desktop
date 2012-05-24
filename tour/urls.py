from django.conf.urls.defaults import *
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
from settings import SITE_ROOT

normalurls = patterns ('',
        (r'media/(?P<path>.*)$', 'django.views.static.serve',
                          {'document_root': SITE_ROOT + '/media/'}),
        (r'^splash/$', 'tour.tourviews.views.splash'),
        (r'^presentation/$', 'tour.tourviews.views.presentation'),
        (r'^about/$', 'tour.tourviews.views.about'),
        (r'$', 'tour.tourviews.views.menu',),)

ajaxurls = patterns ('',
        (r'^loadwindow/(?P<name>.*)$', 'tour.tourviews.ajax.get_window'),
        (r'^loaddescription/(?P<name>.*)$',
                    'tour.tourviews.ajax.get_description'),)

urlpatterns = ajaxurls + normalurls

