<?php

class OptionsetShowHideField extends OptionsetField {


	static function include_files() {
		Requirements::javascript(THIRDPARTY_DIR.'/jquery/jquery.js');
		Requirements::javascript(THIRDPARTY_DIR.'/jquery-livequery/jquery.livequery.js');    
		Requirements::javascript('showhidefield/javascript/showhidefield.js');
	}
	
	function FieldHolder() {
		OptionsetShowHideField::include_files();
		return parent::FieldHolder();
	}
	
	function Field() {
		OptionsetShowHideField::include_files();
		return parent::Field();
	}
}
