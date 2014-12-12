var viewportTag;
var headTag = document.head || document.getElementsByTagName('HEAD')[0];
var metaTags = headTag.getElementsByTagName('META');
for (var i = 0; i < metaTags.length; i++) {
    if (metaTags[i].name.toLowerCase() == 'viewport') {
        viewportTag = metaTags[i];
        break;
    }
}
if (typeof viewportTag == 'undefined') {
    viewportTag = document.createElement('META');
    viewportTag.name = 'viewport';
    viewportTag.content = 'width=device-width, user-scalable=no';
    headTag.appendChild(viewportTag);
}

if (document.observe) {
    if (document.viewport && (document.viewport.getWidth() <= 600)) {
        var toggleSidebar = function(el) {
            var sidebar = $('sidebar');
            if (el.hasClassName('desc')) {
                el.removeClassName('desc');
                el.addClassName('asc');
            } else {
                el.removeClassName('asc');
                el.addClassName('desc');
            }
            sidebar.childElements().each(function(child) {
                if (child.id != 'sidebar-toggler') {
                    child.toggle();
                }
            });
        }

        document.observe('dom:loaded', function() {
            var mainMenu = $('main-menu');
            if (mainMenu) {
                var tabs = $$('div.tabs');
                mainMenu.addClassName('tabs');
                var tabsButtons = new Element('DIV');
                tabsButtons.addClassName('tabs-buttons');
                tabsButtons.style.display = 'none';
                var tabLeft = new Element('BUTTON');
                tabLeft.addClassName('tab-left');
                tabLeft.observe('click', function() { moveTabLeft(this); });
                tabsButtons.appendChild(tabLeft);
                var tabRight = new Element('BUTTON');
                tabRight.addClassName('tab-right');
                tabRight.observe('click', function() { moveTabRight(this); });
                tabsButtons.appendChild(tabRight);
                mainMenu.appendChild(tabsButtons);
                if (tabs.length == 0) {
                    displayTabsButtons();
                    Event.observe(window, 'resize', function() { displayTabsButtons(); });
                }
            }
            var sidebar = $('sidebar');
            if (sidebar) {
                var sidebarToggler = new Element('A');
                sidebarToggler.id = 'sidebar-toggler';
                sidebarToggler.addClassName('sort');
                sidebarToggler.addClassName('asc');
                sidebarToggler.observe('click', function() { toggleSidebar(this); });
                sidebar.appendChild(sidebarToggler);
                toggleSidebar(sidebarToggler);
            }
        });
    }
} else if (window.jQuery) {
    if ($(window).width() <= 600) {
        var toggleSidebar = function(el) {
            var sidebar = $('#sidebar');
            var element = $(el);
            if (element.hasClass('desc')) {
                element.removeClass('desc');
                element.addClass('asc');
            } else {
                element.removeClass('asc');
                element.addClass('desc');
            }
            sidebar.children().each(function(index, child) {
                if (child.id != 'sidebar-toggler') {
                    $(child).toggle();
                }
            });
        }

        $(document).ready(function() {
            var mainMenu = $('#main-menu');
            if (mainMenu) {
                var tabs = $('div.tabs');
                mainMenu.addClass('tabs');
                var tabsButtons = $('<div></div>');
                tabsButtons.addClass('tabs-buttons');
                tabsButtons.hide();
                var tabLeft = $('<button></button>');
                tabLeft.addClass('tab-left');
                tabLeft.click(function() { moveTabLeft(this); });
                tabsButtons.append(tabLeft);
                var tabRight = $('<button></button>');
                tabRight.addClass('tab-right');
                tabRight.click(function() { moveTabRight(this); });
                tabsButtons.append(tabRight);
                mainMenu.append(tabsButtons);
                if (tabs.length == 0) {
                    displayTabsButtons();
                    $(window).resize(displayTabsButtons);
                }
            }
            var sidebar = $('#sidebar');
            if (sidebar) {
                var sidebarToggler = $('<a></a>');
                sidebarToggler.attr('id', 'sidebar-toggler');
                sidebarToggler.addClass('sort');
                sidebarToggler.addClass('asc');
                sidebarToggler.click(function() { toggleSidebar(this); });
                sidebar.append(sidebarToggler);
                toggleSidebar(sidebarToggler);
            }
        });
    }
}
