# Custom templatetags definition
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

from django.template import Library, Node, NodeList, TemplateSyntaxError

def percentage_cycle (parser, token):
  """
  Loop for the progress bar in the 'splash.html' template.
  The loop takes care of populate the empty bar with N (where
  N is given as an argument) "black images" to build a bar
  like the ubuntu bar. For example:

  ``{% percentage_cycle 18 %}
      <img src="/img/to/display.png"/>
  {% endpercentage_cycle %}``
  
  This loop sets a variable available within the loop itself:

    ====================  ===============================================
    Variable              Description
    ====================  ===============================================

    ``percentage.iter``   The current iteration of the loop (0-indexed)

    ====================  ===============================================

  """

  try:
    tag_name, value = token.split_contents ()
  except ValueError:
    raise TemplateSyntaxError, \
          "%r tag requires a single argument" % token.contents.split()[0]
  try:
    # Be sure to have an integer
    int (value)
  except ValueError:
    raise TemplateSyntaxError, \
          "%r tag requires an integer" % token.contents.split()[0]
  nodelist_loop = parser.parse(('endpercentage_cycle',))
  parser.delete_first_token()
  return PercentageCycleNode (value, nodelist_loop)


class PercentageCycleNode (Node):
  
  def __init__ (self, value, nodelist_loop):
    self.value = value
    self.nodelist_loop = nodelist_loop

  def __repr__ (self):
    return "<PercentageCycle Node: percentage_cycle %s>" %(self.value)

  def render (self, context):
    nodelist = NodeList ()
    for i in range (int(self.value)):
      context['percentage'] = {'iter': i}
      for node in self.nodelist_loop:
        nodelist.append (node.render(context))
    return nodelist.render (context)
    

register = Library()
register.tag('percentage_cycle', percentage_cycle)
