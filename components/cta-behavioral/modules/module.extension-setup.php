<?php

add_action('admin_init', 'inboundnow_cta_bt_extension_setup');

function inboundnow_cta_bt_extension_setup()
{
/*PREPARE THIS EXTENSION FOR LICESNING*/
	if ( class_exists( 'INBOUNDNOW_EXTEND' ) ) { 
		$license = new INBOUNDNOW_EXTEND( CTA_BT_FILE , CTA_BT_LABEL , CTA_BT_SLUG , CTA_BT_VERSION_NUMBER  , CTA_BT_REMOTE_ITEM_NAME ) ;
	}
	
}