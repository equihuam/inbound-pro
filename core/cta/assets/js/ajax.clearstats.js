jQuery(document).ready(function($) {    jQuery( '.clear_stats' ).on( 'click', function() {        // define the bulk edit row        var post_id = this.id.replace('wp_cta_clear_','');        var status = 0;        if (confirm('Are you sure you want to delete the ALL of stats for this call to action? (There is no undo) Alternatively you can clear stats per version.')) {            jQuery.ajax({                type: 'POST',                url: ajaxurl,                context: this,                data: {                    action: 'wp_cta_clear_stats_action',                    j_rules: status,                    page_id: post_id                },                success: function(data){                var self = this;                    jQuery(self).hide();                    jQuery(self).parent().parent().parent().parent().find(".wp-cta-impress-num, .wp-cta-con-num, .column-cta_impressions, .column-cta_conversions, .column-cta_actions").text("0");                    jQuery(self).parent().parent().parent().parent().find(".cr-number").addClass("cr-empty-0").text("0%");                    jQuery(self).parent().parent().parent().parent().find(".column-cta_cr").text("0%");                },                error: function(MLHttpRequest, textStatus, errorThrown){                alert("Ajax not enabled");                }            });            return false;        }    });    jQuery( 'body' ).on( 'click', '.wp-cta-delete-var-stats', function() {        var post_id = jQuery(this).attr("rel");        var variation_id = jQuery(this).attr('data-vid');        var variation_letter = jQuery(this).attr('data-letter');        var selector = 'li[data-postid=' + post_id + '][data-letter=' + variation_letter + ']';        if (confirm('Are you sure you want to delete stats for variation ' + variation_letter + "?")) {            jQuery.ajax({                type: 'POST',                url: ajaxurl,                context: this,                data: {                action: 'wp_cta_clear_variation_stats',                variation: variation_id,                page_id: post_id                },                success: function(data){                    var self = this;                    jQuery(self).text("Stats Removed!").css("color", "green").removeClass("wp-cta-delete-var-stats").addClass('wp-cta-clear-success');                    jQuery(selector).find(".wp-cta-impress-num, .wp-cta-con-num").text("0");                    jQuery(selector).find(".cr-number").addClass("cr-empty-0").text("0%");                    jQuery(self).parent().parent().find('.bab-stat-span-impressions, .bab-stat-span-conversions, .bab-stat-span-conversions').text("0");                    jQuery(self).parent().parent().find('.bab-stat-span-conversion_rate, .bab-stat-container-conversion_rate').text("0%");                    jQuery(self).parent().parent().parent().parent().parent().find('.bab-stat-span-impressions').text("0");                    jQuery(self).parent().parent().parent().parent().parent().find('.bab-stat-span-conversions').text("0");                    jQuery(self).parent().parent().parent().parent().parent().find('.bab-stat-span-conversion_rate').text("0%");                },                error: function(MLHttpRequest, textStatus, errorThrown){                    alert("Ajax not enabled");                }            });            return false;        }     });});