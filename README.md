SilverStripe Show/Hide Fields Field
===================================

Creates a dropdown field that shows/hides other fields in the CMS.  Only one of the other fields will be visible at a time,
depending on what the user selects in the ShowHideField.


Maintainer Contacts
-------------------
* Nathan Cox (<nathan@flyingmonkey.co.nz>)

Requirements
------------
* SilverStripe 2.4+

Documentation
-------------
[GitHub Wiki](https://github.com/nathancox/silverstripe-showhidefield)

Installation Instructions
-------------------------

1. Place the files in a directory called showhidefield in the root of your SilverStripe installation
2. Visit yoursite.com/dev/build to rebuild the database

Usage Overview
--------------

Create the ShowHideField just like a regular DropdownField.  The values array should have a list of other fields you want to toggle in the format "fieldname" => "label the user sees"

Here's an example of using the ShowHideField on a RedirectorPage:

	$values = array(
		'LinkToID' => 'A page on your website',
		'ExternalURL' => 'Another website'
	);
	$fields->addFieldToTab('Root.Content.Main', new ShowHideField('ShowHideTitles', 'Redirect to', $values));



Known Issues
------------
[Issue Tracker](https://github.com/nathancox/silverstripe-showhidefield/issues)