freifunk-red-andy
=================

This theme is a modified version of the Red-Andy theme at http://projects.andriylesyuk.com/projects/red-andy

To install this theme change into your redmine themes directory and clone this repository, for example:

    cd /usr/share/redmine/public/themes/
    git clone https://github.com/rubo77/freifunk-red-andy.git

The Default Redmine-Favicon is replaced by a new one with a small javascript. To enable the favicon without javascript, you should copy the new favicon into the redmine public folder with:

    cp /usr/share/redmine/public/themes/freifunk-red-andy/images/favicon.ico /usr/share/redmine/public/favicon.ico

This favicon can also be used on other sub-sites, for example to use it in a wiki add the url to `mediawiki/LocalSettings.php`:

    $wgFavicon = 'http://freifunk.in-kiel.de/favicon.ico';

Or just copy it into each root folder uf all sub-sites.


Changes from originating Red-Andy theme:
----
https://github.com/rubo77/freifunk-red-andy/commit/35e3e0b4b986be777eb033427c3ef97b80a10dca
