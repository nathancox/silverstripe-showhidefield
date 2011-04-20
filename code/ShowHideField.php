<?php

class ShowHideField extends DropdownField {


	static function include_files() {
		Requirements::javascript(THIRDPARTY_DIR.'/jquery-livequery/jquery.livequery.js');    
		Requirements::javascript('showhidefield/javascript/showhidefield.js');
	}
	
	function FieldHolder() {
		ShowHideField::include_files();
		return parent::FieldHolder();
	}
	
	function Field() {
		ShowHideField::include_files();
		return parent::Field();
	}
}
