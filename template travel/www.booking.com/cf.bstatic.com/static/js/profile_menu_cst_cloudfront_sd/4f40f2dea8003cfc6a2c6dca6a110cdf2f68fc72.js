var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(e) {
        return e
    };
booking.jstmpl("profile_menu", function() {
    _i_("8c3:e7da36bd");
    var b, d = ["\n    ", "\n\n", '\n    <div class="uc-company-section-2">\n        <div class="uc-company-details-2">\n            ', "/private/bbg_blk_index_menu_header/name", "\n        </div>\n    </div>\n", "\n", '\n\n<div\n    class="\n        profile-menu\n        ', "\n        ", "switch-accounts-profile-menu", '\n    "\n    role="menu"\n    aria-labelledby="profile_menu_label"\n    id="profile-menu"\n>\n    <h2 id="profile_menu_label" class="visuallyhidden">', "/private/a11y_index_your_account_menu_aria_label/name", "</h2>\n    ", '\n    <div class="', "profile-item-wrapper-hard-split not-active", '">\n        <form class="profile-menu__item hard-profile-split profile-link ', "profile-menu__item--active-account", '"\n            action="', '"\n            data-component="utils/form-submit-on-click"\n            data-click-on=".profile-menu__account-link--hard-split"\n            method="POST">\n\n            ', '<input type="hidden" name="bhc_csrf_token" value="', '">', "\n            ", "\n                ", "\n                    ", '\n                <input type="hidden"\n                    name="redirect_url"\n                    value="', '"/>\n                <input type="submit"\n                    class="profile-menu__link profile-menu__link profile-menu__account-link--hard-split"\n                    value="', "/private/bb_account_menu_business/name", '" />\n                ', "profile-menu-link-icon", "iconset/briefcase", "/private/bb_account_menu_leisure/name", "iconset/user_account", '\n            <input type="hidden" name="switch_to_user_id" value="', '"/>\n        </form>\n\n        <hr class="profile-menu-separator-hard-split hard-split"/>\n\n        \n        \n        ', '\n                <form class="profile-menu__item hard-profile-split"\n                    action="', '"\n                    method="POST">\n                        <input type="hidden" name="redirect_url"\n                            ', '\n                                value="', '"\n                            ', '\n                        />\n                        <input type="submit" class="profile-menu__link profile-menu__link profile-menu__link--hard-split"\n                            ', "/private/www_product_bar_my_trips/name", "/private/bb_account_menu_bookings/name", '\n                        />\n                        <input type="hidden" name="switch_to_user_id" value="', '"/>\n                </form>\n            ', "\n\n        \n        ", '"\n                    method="POST">\n                        <input type="hidden" name="redirect_url"\n                            value="', '"/>\n                        <input type="submit" class="profile-menu__link profile-menu__link profile-menu__link--hard-split" value="', "/private/header_my_lists/name", '" />\n                        <input type="hidden" name="switch_to_user_id" value="', '\n            <form class="profile-menu__item hard-profile-split"\n                action="', '"\n                method="POST">\n                    <input type="hidden" name="redirect_url"\n                        ', '\n                            value="', '"\n                        ', '\n                    />\n                    <input type="submit" class="profile-menu__link profile-menu__link profile-menu__link--hard-split" value="', "/private/bb_account_menu_settings/name", '" />\n                    <input type="hidden" name="switch_to_user_id" value="', '"/>\n            </form>\n        ', '\n\n        <div class="profile-menu__separator hard-split"></div>\n    </div>\n', "\n\n\n", "/private/tc_menu_entry_point/name", "/private/tc_menu_entry_point_new_label/name", '\n\n<div class="', '">\n\n\t<a\n\t    class="\n\t        profile-menu__link\n            ', "profile-menu__link--iconic", "popover-trigger", '\n        "\n        role="menuitem"\n\n\t    href="', '"\n\n\t\t', '\n\t\t\tdata-title="', '"\n\t\t', "\n\n\t\t", '\n\t\t\tdata-acc-aa-db="', "\n\n\t    ", '\n            data-track-event="', '"\n        ', '\n\t        data-et-click="', '"\n\t    ', "\n\n        ", '\n            target="_blank"\n        ', '\n\n        data-et-click="customGoal:', ":", '"\n\n        ', '\n            data-wv-ga-type="viewandclick"\n            data-wv-ga-placement="Profile Menu"\n            data-component="referral/web-virality/ga"\n            target="_blank"\n        ', '\n            data-ga-track="click|GRAP Entrypoint|Profile Menu|', '\n            data-ga-track="click|Click|Action: ', '|hc_entrypoint_profile_menu"\n        ', "\n\n\t>\n\n        ", '<i class="bicon-', " profile-menu__icon profile-menu__icon--", '"></i>', '<span class="profile-menu__badge ', "</span>", "\n\n\t</a>\n\n</div>\n\n", "travel-communities", '\n    <div class="profile-menu__separator hard-split" role="presentation"></div>\n', "/private/hc_entry_web_dropdown_cshc/name", "menu_help", "help", '\n\n    <div class="profile-menu__separator hard-split"></div>\n\n    ', '\n    <form class="profile-menu__item profile-menu__item--signout ', "profile-menu__item--signout--hard-split", '"action="', '" method="POST">\n        ', '\n    <input type="hidden" name="csrf_token" value="', '" />\n', '\n<input type="hidden" name="client_id" value="', '" />\n<input type="hidden" name="state" value="', '" />\n<input type="hidden" name="redirect_uri" value="', '\n        <input type="submit" class="profile-menu__link profile-menu__link" value="', "/private/real_login_signout/name", '" role="menuitem" />\n    </form>\n', '" action="', '\n        <input type="hidden" name="logout_by_sso" value="1" />\n        <input type="hidden" name="logout" value="1" />\n        <input type="submit" class="profile-menu__link profile-menu__link" value="', "1", "\n\n\n\n\n\n\n\n", "\n\t", "\n\n\t", "\n\t\t", "\n\t\t\t", "\n\n    ", "\n        <strong>\n            \n            \n            ", "\n        </strong>\n    ", "/myrewards", '\n\n<div class="profile-menu__item profile_menu__rewards_summary--promoted profile_menu__rewards_summary--empty">\n\n    <header class="profile_menu__rewards_summary__header">\n        ', "/private/user_menu_rewards_header/name", '\n    </header>\n\n    <main class="profile_menu__rewards_summary__content">\n        <div class="bbl-rewards__scorebar-tooltip">\n            ', "/private/user_menu_rewards_prompt/name", "\n        </div>\n\n        ", '\n\n<figure class="bbl-rewards__scorebar', '">\n    ', '\n\n        <div class="bbl-rewards__scorebar__item', '">\n        ', '<svg width="32px" height="32px" viewBox="0 0 32 32" class="bbl-rewards__scorebar__item__icon-svg" aria-hidden="true" role="presentation">\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g>\n            <circle fill="#A44C20" cx="16" cy="16" r="16"></circle>\n            <g transform="translate(1.000000, 1.000000)" fill="#FEBB02" fill-rule="nonzero">\n                <path d="M13.3928571,11.6785714 C12.9964286,10.9901786 12.2598214,10.6258929 11.2767857,11.19375 L10.29375,11.7616071 C9.81160714,12.0535714 9.72857143,12.35625 10.0125,12.8571429 L11.0839286,14.7321429 L12.8571429,13.6955357 C13.2139898,13.5167676 13.4770028,13.1935065 13.5794588,12.8077598 C13.6819147,12.422013 13.6139685,12.0108477 13.3928571,11.6785714 Z"></path>\n                <path d="M14.1375,15.45 L12.8571429,16.1892857 C12.3642857,16.4732143 12.28125,16.7839286 12.5651786,17.2741071 L13.8133929,19.4383929 L15.6883929,18.3669643 C16.6044643,17.83125 16.9553571,16.9285714 16.4116071,15.9830357 C15.8678571,15.0375 14.7321429,15.1098214 14.1375,15.45 Z"></path>\n                <path d="M15,3.21428571 C8.49092973,3.21428571 3.21428571,8.49092973 3.21428571,15 C3.21428571,21.5090703 8.49092973,26.7857143 15,26.7857143 C21.5090703,26.7857143 26.7857143,21.5090703 26.7857143,15 C26.7857143,11.8742342 25.5440087,8.87649168 23.3337585,6.66624151 C21.1235083,4.45599133 18.1257658,3.21428571 15,3.21428571 Z M16.66875,20.2848214 L12.8303571,22.5 L7.15178571,12.6642857 C6.78198032,12.051786 6.95890949,11.2567842 7.55357143,10.8589286 L10.3071429,9.26785714 C12.39375,8.0625 14.2955357,8.46428571 15.2973214,10.1892857 C15.7875116,10.9610366 15.9129292,11.9095072 15.6401786,12.7821429 L15.4794643,13.2321429 L15.9375,13.1973214 C17.060565,13.2084579 18.0878877,13.8320428 18.6160714,14.8232143 C19.7598214,16.78125 18.9883929,18.9455357 16.66875,20.2848214 Z M22.0982143,16.875 C21.2845805,16.875 20.625,16.2154195 20.625,15.4017857 C20.625,14.5881519 21.2845805,13.9285714 22.0982143,13.9285714 C22.9118481,13.9285714 23.5714286,14.5881519 23.5714286,15.4017857 C23.5714286,16.2154195 22.9118481,16.875 22.0982143,16.875 Z"></path>\n                <path d="M15,9.51619735e-16 C6.71572875,-4.75809868e-16 9.51619735e-16,6.71572875 0,15 C-9.51619735e-16,23.2842712 6.71572875,30 15,30 C23.2842712,30 30,23.2842712 30,15 C30,11.0217527 28.4196474,7.20644396 25.6066017,4.39339828 C22.793556,1.58035261 18.9782473,4.75809868e-16 15,9.51619735e-16 Z M15,27.8571429 C7.89919607,27.8571429 2.14285714,22.1008039 2.14285714,15 C2.14285714,7.89919607 7.89919607,2.14285714 15,2.14285714 C22.1008039,2.14285714 27.8571429,7.89919607 27.8571429,15 C27.8571429,18.4099263 26.5025549,21.6801909 24.0913729,24.0913729 C21.6801909,26.5025549 18.4099263,27.8571429 15,27.8571429 Z"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n', '\n                <i class="bicon bicon-rewardsfill bbl-rewards__scorebar__item__icon"></i>\n            ', "\n        </div>\n    ", "\n</figure>", "bbl-rewards__scorebar--profile-menu", '\n\n        <a href="', '" class="profile_menu__reward_summary__link-myrewards">\n            ', "/private/user_menu_rewards_cta_no_coins/name", "\n        </a>\n    </main>\n\n</div>\n\n", "\n\t\t\t\t", "\n\n\t\t\t", '\n\n<div class="profile-menu__item profile_menu__rewards_summary--promoted">\n\n    ', "\n            \n            \n            ", '\n\n\n    <header class="profile_menu__rewards_summary__header">\n        ', '\n    </header>\n\n    <main class="profile_menu__rewards_summary__content">\n        ', '\n        <h5 class="profile_menu__rewards_summary__title">\n            ', "/private/user_menu_rewards_credit/name", "\n        </h5>\n        ", '\n        <p class="profile_menu__reward_summary__subtitle">\n            ', "/private/bb_loyalty_user_menu_5_completed/name", "/private/user_menu_rewards_prompt_1_3_coins/name", "/private/user_menu_rewards_prompt_4_coins/name", "\n        </p>\n        ", '" class="profile_menu__reward_summary__link-myrewards">', "/private/user_menu_rewards_cta/name", "</a>\n    </main>\n\n</div>\n\n", "/private/account_dashboard_01/name", "/private/raf_partner_invite_host_tab/name", "customGoal:", ":4", "menu_dashboard", "mydashboard", '\n\n    <div class="profile-menu__separator" role="presentation"></div>\n', "", "/private/profile_side_bar_menu_my_bookings_zhcn/name", "/private/no_my_in_menu_bookings/name", "menu_mybookings", "myreservations", "/private/ge_rewards_programme/name", "menu_genius", "genius", "/private/brewards_user_profile_cta/name", "menu_myrewards", "myrewards", "menu_rewards_and_wallet", "rewards_and_wallet", "menu_rewards", "rewards", "/private/ugc_menu_timeline_my_reviews/name", "menu_timeline", "reviewtimeline", "menu_wishlist", "wishlists", "/private/sb_index_account_add_property/name", "https://join.booking.com/?lang=", "&utm_source=ucdashboard&utm_medium=frontend&aid=", "&label=", "menu_grap", "profile-menu__badge profile-menu__badge__one_line", "grap_myreferrals", "/private/app_acq_profile_dropdown_get_app/name", "menu_gta", "gta", "\n\n\n\n\n", "menu_join", "add_property", "/private/hc_entry_web_footer_cshc/name", '\n\n<div data-ga-track="click|Click|Action: ', '|hc_entrypoint_profile_menu_js">\n    ', "\n</div>\n\n", "menu_settings", "mysettings", '\n    <div class="profile-menu__separator" role="presentation"></div>\n    ', "\n\n    \n    \n    ", '\n\n        <div class="profile-menu__separator" role="presentation"></div>\n\n        \n        ', "\n\n                ", "menu_wallet", '\n        <div class="profile-menu__separator" role="presentation"></div>\n\n        ', "/private/bbl_account_navigation_bonus/name", "bonus", '\n\n        <div class="profile-menu__separator" role="presentation"></div>\n    ', '\n            <div class="profile-menu__separator" role="presentation"></div>\n        ', "\n\n            ", "/private/bbta_menu_try_bb/name", "bbtool-promo", '\n\n            <div class="profile-menu__separator" role="presentation"></div>\n        ', "bb-briefcase", "company", '\n\n    <div class="invisible_spoken">\n        <button class="js-profile-menu__close">\n            ', "/private/accessibility_profile_close_menu_cta/name", "\n        </button>\n    </div>\n</div>\n\n\n"],
        f = ["fe_bbtool_blackout_user_company", "fe_bbtool_blackout_user", "b_site_type", "b_menu_mode", "b_brewards_account_details", "b_connected_user_accounts", "b_secure_hostname", "b_profile_switch_url", "work_label", "bbt_account_switch_bb", "fe_this_url_travel_purpose_business", "fe_this_url_travel_purpose_leisure", "fe_reservations_url_travel_purpose_business", "fe_reservations_url_travel_purpose_leisure", "fe_feature_permission_section_reservations", "b_reg_user_last_used_wishlist", "fe_booker_in_tool_travel_purpose_leisure", "fe_wishlist_href", "fe_my_settings_url_travel_purpose_business", "fe_my_settings_url_travel_purpose_leisure", "b_nonsecure_hostname", "b_query_params_with_lang_no_ext", "b_query_params_delimiter", "fe_communities_menu_ep_title", "fe_communities_badge_text", "fe_show_travel_communities_badge", "b_type", "b_l_class", "b_icon", "b_tooltip", "b_href", "b_acc_aa_db", "b_track_event", "b_is_bbtool_admin", "fe_data_et_click", "fe_exp_hash_name", "fe_exp_custom_goal_num", "b_action", "b_title", "b_badge_class", "b_badge_text", "b_is_badge_non_breakable", "fe_href", "fe_show_travel_communities_menu_item", "b_customer_service_copy", "b_query_params_with_lang", "fe_is_hard_split", "b_sso_logout_url", "b_sso_logout_csrf_token", "b_oauth_client_id", "fe_sso_logout_state", "b_sso_logout_callback_url", "b_this_url", "real_login_signout", "b_rewards_reminder_is_on", "fe_rewards__show_reminder_about_ending", "fe_rewards__collecting_deadline", "b_upcoming_rewards", "fe_journey_number_of_expired", "fe_journey_number_of_long_future_checkout", "fe_rewards__show_reminder_about_ending_", "fe_rewards__collecting_deadline_", "fe_journey_number_of_valid", "fe_journey_item_is_valid", "fe_bbloyalty_brewards_amount_bold", "fe_rewards_dashboard_url", "b_companyname", "fe_rewards_scorebar__total", "fe_rewards_scorebar__class_modifier", "fe_rewards_scorebar__stayed", "fe_rewards_scorebar__highlight_next_item", "fe_bbloyalty_scorebar__item__state", "fe_bbloyalty_scorebar__item__has_icon", "fe_rewards__game_over", "b_brewards_loyalty_program_account_type", "fe_acc_dashboard_title_copy", "fe_raf_partner_invite_host_tab_copy", "fe_data_et_click_mydashboard", "b_reg_user_detail_dashboard_url", "fe_blackout_mydashboard", "fe_mybooking_menu_title", "b_lang_for_url", "fe_genius_menu_text", "b_reg_user_is_genius", "fe_user_menu_aspiring_genius_link", "fe_profile_menu__rewards__title", "fe_user_is_rewards_user", "web_rewards_wallet_entry", "b_user_auth_level", "rewards_acc_sidebar_icon", "b_brewards_user_has_loyalty_program", "fe_review_timeline_title", "b_reg_user_review_invitations_length", "fe_wishlists_copy", "fe_join_entry_point_copy", "fe_joinapp_link", "b_aid", "b_label", "b_grap_remove_raf_checks", "b_user_is_grap_eligible", "raf_tab_new", "fe_show_grap_link", "fe_gta_menu_item_name", "b_user_has_mobile_app", "b_reg_user_detail_name_email_hash", "b_landingpage_theme_type", "fe_customer_service_link", "fe_my_settings_url", "menu_account_area_01", "fe_bbtool_user_profile_menu_reservations_link", "fe_user_profile_menu_reservations_link", "fe_is_user_company_reservations_link", "fe_user_can_see_company_reservations", "fe_bbtool_user_profile_menu_no_bookmarks", "fe_copy_profile_menu__item__bonus", "loyalty_program_bonus_url", "loyalty_program_rules", "loyalty_program_status", "fe_profile_menu__splitter_is_already_before_bb_try_or_switch_menu_item", "fe_bbtool_promo_title", "b_bbtool_product_page_url", "fe_bbtool_can_see_tool_promos", "b_user_has_business_booking", "b_user_is_business_booker", "b_reg_user_company_name_escaped", "b_page_name"];
    return _r_(function(a) {
        _i_("8c3:e165f673");
        var e = "",
            s = this.fn;

        function o(e) {
            var _;
            return _i_("8c3:406e366a"), s.MJ(s.MC(f[47])) ? (e += d[96], s.MD(f[46]) && (e += d[97]), e += [d[98], s.F.html(s.MC(f[47])), d[99]].join(""), _ = e, _i_("8c3:b67122c5"), s.MD(f[48]) ? _ += [d[100], s.F.html(s.MC(f[48])), d[101]].join("") : _ += [d[0], d[18] + s.CSRF_TOKEN() + d[19], d[5]].join(""), _ += [d[102], s.F.html(s.MC(f[49])), d[103], s.F.html(s.MC(f[50])), d[104], s.F.html(s.MC(f[51])), d[101]].join(""), e = _r_(_), e += [d[105], s.ME(d[106], s.MB, s.MN, null), d[107]].join("")) : (e += d[96], s.MD(f[46]) && (e += d[97]), e += [d[108], s.F.html(s.MC(f[52])), d[99], d[18] + s.CSRF_TOKEN() + d[19], d[109], s.MB(f[53]), d[107]].join("")), e += d[5], _r_(e)
        }

        function i(e) {
            var _;
            return _i_("8c3:6af38d83"), s.MJ(s.MC(f[47])) ? (e += d[96], s.MD(f[46]) && (e += d[97]), e += [d[98], s.F.html(s.MC(f[47])), d[99]].join(""), _ = e, _i_("8c3:e7846f50"), s.MD(f[48]) ? _ += [d[100], s.F.html(s.MC(f[48])), d[101]].join("") : _ += [d[0], d[18] + s.CSRF_TOKEN() + d[19], d[5]].join(""), _ += [d[102], s.F.html(s.MC(f[49])), d[103], s.F.html(s.MC(f[50])), d[104], s.F.html(s.MC(f[51])), d[101]].join(""), e = _r_(_), e += [d[105], s.ME(d[106], s.MB, s.MN, null), d[107]].join("")) : (e += d[96], s.MD(f[46]) && (e += d[97]), e += [d[108], s.F.html(s.MC(f[52])), d[99], d[18] + s.CSRF_TOKEN() + d[19], d[109], s.MB(f[53]), d[107]].join("")), e += d[5], _r_(e)
        }

        function t(e) {
            var _;
            _i_("8c3:98b0c905"), e = c(e += d[111]), e += d[1], s.MN("fe_user_is_rewards_user", 0), e += d[1], s.MJ(s.MC(f[4])) && s.MJ(s.MC(f[74]) + "" == "user") && (e += d[112], s.MN("fe_user_is_rewards_user", 1), e += d[113], s.MK(s.MB(f[73])) && (e = function(e) {
                if (_i_("8c3:014b5bb3"), s.MN("fe_journey_number_of_valid", 0), e += d[5], s.MN("fe_journey_number_of_expired", 0), e += d[5], s.MN("fe_journey_number_of_long_future_checkout", 0), e += d[1], s.MJ(s.MC(f[54])) ? (e += d[0], s.MN("fe_rewards__show_reminder_about_ending_", 1), e += d[0], s.MN("fe_rewards__collecting_deadline_", s.MG((s.MC(f[4]) || {}).expected_reward_expiration_date))) : (e += d[0], s.MN("fe_rewards__show_reminder_about_ending_", s.MB(f[55])), e += d[0], s.MN("fe_rewards__collecting_deadline_", s.MB(f[56]))), e += d[5], e += d[1], s.MJ(s.MG((s.MC(f[57]) || {}).hotelreservations))) {
                    e += d[0];
                    var _ = (s.MC(f[57]) || {}).hotelreservations || [];
                    a.unshift({
                        fe_rewards_journey_item: null
                    });
                    for (var n, r = 1, i = _.length; r <= i; r++) a[0].fe_rewards_journey_item = n = _[r - 1], e += d[7], s.MN("fe_journey_item_is_valid", 1), e += d[74], s.MJ(3 == n.reward_status) && (e += d[20], s.MN("fe_journey_number_of_expired", s.MI(s.MB(f[58])) + s.MI(1)), e += d[20], s.MN("fe_journey_item_is_valid", 0), e += d[7]), e += d[74], s.MJ(s.MB(f[60])) && s.MJ(n.hotelreservation_checkout + "" > "" + s.MB(f[61])) && (e += d[20], s.MN("fe_journey_number_of_long_future_checkout", s.MI(s.MB(f[59])) + s.MI(1)), e += d[20], s.MN("fe_journey_item_is_valid", 0), e += d[7]), e += d[74], s.MD(f[63]) && (e += d[20], s.MN("fe_journey_number_of_valid", s.MI(s.MB(f[62])) + s.MI(1)), e += d[7]), e += d[0];
                    a.shift(), e += d[5]
                }
                return e += d[5], _r_(e)
            }(e += d[114]), e += d[67], (s.MJ(s.MC(f[54])) && s.MJ(s.MC(f[57])) && s.MK(s.MB(f[62])) || s.MJ(0 == s.MC(f[4]).total_reservations_in_block)) && s.MJ(0 == s.MC(f[4]).available_reward_amount) ? (e += d[115], _ = e, _i_("8c3:572997ff"), _ += ["", d[116]].join(""), s.MN(f[64], [d[117], s.MC(f[4]).expected_reward_amount_formatted ? s.MC(f[4]).expected_reward_amount_formatted : s.MC(f[4]).available_reward_amount_formatted, d[118]].join("")), _ += d[116], s.MN(f[65], [s.MC(f[6]), d[119], s.MC(f[45]), s.MC(f[22])].join("")), _ += [d[120], (a.unshift({
                b_companyname: s.MC(f[66])
            }), b = s.ME(d[121], s.MB, s.MN, null), a.shift(), b), d[122], s.ME(d[123], s.MB, s.MN, null), d[124]].join(""), a.unshift({
                fe_rewards_scorebar__class_modifier: d[133],
                fe_rewards_scorebar__highlight_next_item: d[110]
            }), _ = r(_), a.shift(), _ += [d[134], s.MB(f[65]), d[135], s.ME(d[136], s.MB, s.MN, null), d[137], "", d[5]].join(""), e = _r_(_)) : (e += d[115], s.MK(s.MC(f[57])) && (e += d[138], s.MN("fe_journey_number_of_valid", s.MG((s.MC(f[4]) || {}).total_reservations_in_block)), e += d[115]), e = function(e) {
                _i_("8c3:b6859fa8"), e += ["", d[140]].join("");
                var _ = "";
                _ += d[7], s.MJ(0 < s.MC(f[4]).available_reward_amount) ? _ += [d[20], s.MG((s.MC(f[4]) || {}).available_reward_amount_formatted), d[7]].join("") : _ += [d[141], s.MC(f[4]).expected_reward_amount_formatted ? s.MC(f[4]).expected_reward_amount_formatted : s.MC(f[4]).available_reward_amount_formatted, d[7]].join("");
                _ += d[0], s.MN(f[64], _), e += [d[142], (a.unshift({
                    b_companyname: s.MC(f[66])
                }), b = s.ME(d[121], s.MB, s.MN, null), a.shift(), b), d[143]].join(""), s.MJ(0 < s.MC(f[4]).available_reward_amount) && (e += [d[144], (a.unshift({
                    amount_with_currency: "<strong>" + s.MB(f[64]) + "</strong>"
                }), b = s.ME(d[145], s.MB, s.MN, null), a.shift(), b), d[146]].join(""));
                e += d[74], s.MJ(s.MB(f[62]) < 5) && (e += d[147], s.MJ(0 < s.MC(f[4]).available_reward_amount) && s.MJ(0 == s.MB(f[62])) ? e += [d[21], s.ME(d[148], s.MB, s.MN, null), d[20]].join("") : s.MJ(s.MB(f[62]) < 4) ? e += [d[21], (a.unshift({
                    num_coins_left: s.MI(5) - s.MI(parseInt(s.MB(f[62])))
                }), b = s.ME(d[149], s.MB, s.MN, s.MO(s.MI(5) - s.MI(parseInt(s.MC(f[62]))), null, d[149])), a.shift(), b), d[20]].join("") : s.MJ(4 == s.MB(f[62])) && (e += [d[21], s.ME(d[150], s.MB, s.MN, null), d[20]].join("")), e += d[151]);
                return e += d[74], a.unshift({
                    fe_rewards_scorebar__class_modifier: d[133]
                }), e = r(e), a.shift(), e += [d[134], s.MG((s.MC(f[4]) || {}).myrewards_url), d[152], (a.unshift({
                    b_companyname: s.MC(f[66])
                }), b = s.ME(d[153], s.MB, s.MN, null), a.shift(), b), d[154], ""].join(""), _r_(e)
            }(e += d[139])), e += d[114], e += d[112]), e += d[5]), e += d[1], s.MN(f[75], [d[0], s.ME(d[155], s.MB, s.MN, null), d[5]].join("")), e += d[5], s.MN(f[76], [d[0], s.ME(d[156], s.MB, s.MN, null), d[5]].join("")), e += d[1], s.MK(s.MB(f[79])) && (e += d[0], s.MN(f[77], [d[157], s.F.entities("YQKSXPTLKGBfSOaSJTSXeUMAae"), d[158]].join("")), e += d[116], a.unshift({
                b_acc_aa_db: d[159],
                b_href: s.MC(f[78]),
                b_title: s.MB(f[75]),
                b_type: d[160],
                fe_data_et_click: s.MB(f[77])
            }), e = l(e), a.shift(), e += d[161]), e += d[56];
            var n = "";
            s.MJ(s.track_experiment("YTBAWTWEUXFSOERXUC")) ? n += [d[162], s.ME(d[38], s.MB, s.MN, null), d[0]].join("") : s.MJ(s.MC(f[81]) + "" == "zh-cn") ? n += [d[162], s.ME(d[163], s.MB, s.MN, null)].join("") : n += [d[162], s.ME(d[164], s.MB, s.MN, null)].join(""), s.MN(f[80], n), e += d[1], a.unshift({
                b_acc_aa_db: d[165],
                b_href: s.MC(f[6]) + "/myreservations" + s.MC(f[45]) + s.MC(f[22]) + "tmpl=profile/myreservations",
                b_title: s.MB(f[80]),
                b_type: d[166]
            }), e = m(e), a.shift(), e += d[1], (s.MJ(s.MC(f[83])) || s.MJ(s.MB(f[84]))) && (e += d[0], s.MN(f[82], [d[7], s.ME(d[167], s.MB, s.MN, null), d[0]].join("")), e += d[0], a.unshift({
                b_acc_aa_db: d[168],
                b_href: s.MC(f[20]) + "/genius" + s.MC(f[45]) + s.MC(f[22]),
                b_title: s.MB(f[82]),
                b_type: d[169]
            }), e = l(e), a.shift(), e += d[5]), e += d[1], s.MD(f[86]) && (e += d[112], s.MN("fe_rewards_dashboard_url", s.MC(f[6]) + "/myrewards" + s.MC(f[45]) + s.MC(f[22])), e += d[112], s.MN(f[85], (a.unshift({
                b_companyname: s.MC(f[66])
            }), b = s.ME(d[170], s.MB, s.MN, null), a.shift(), b)), e += d[113], a.unshift({
                b_acc_aa_db: d[171],
                b_href: s.MB(f[65]),
                b_title: s.MB(f[85]),
                b_type: d[172]
            }), e = l(e), a.shift(), e += d[5]), e += d[1], s.MD(f[88]) && (e += d[0], a.unshift({
                b_acc_aa_db: d[173],
                b_href: s.MC(f[6]) + "/rewards_and_wallet/rewards" + s.MC(f[45]),
                b_title: s.MB(f[87]),
                b_type: d[174]
            }), e = l(e), a.shift(), e += d[5]), e += d[1], s.MJ(s.MC(f[90])) && s.MJ(s.MC(f[74]) + "" == "user") && (e += d[112], a.unshift({
                b_acc_aa_db: d[175],
                b_href: s.MC(f[6]) + "/myrewards" + s.MC(f[45]) + s.MC(f[22]) + "tmpl=profile/myrewards",
                b_title: s.MB(f[89]),
                b_type: d[176]
            }), e = l(e), a.shift(), e += d[5]), e += d[1], s.MN(f[91], s.ME(d[177], s.MB, s.MN, null)), e += d[1], a.unshift({
                b_acc_aa_db: d[178],
                b_badge_text: s.MC(f[92]),
                b_href: s.MC(f[6]) + "/reviewtimeline" + s.MC(f[45]),
                b_title: s.MB(f[91]),
                b_type: d[179]
            }), e = m(e), a.shift(), e += d[1], s.MJ(s.MC(f[15])) && (e += d[112], s.MJ(s.MC(f[2]) + "" == "tdot") || (e += d[7], s.MN(f[93], [d[20], s.ME(d[45], s.MB, s.MN, null), d[7]].join("")), e += d[114], a.unshift({
                b_acc_aa_db: d[180],
                b_href: s.MG(((s.MC(f[15]) || [])[0] || {}).b_reg_user_detail_list_url),
                b_title: s.MB(f[93]),
                b_type: d[181]
            }), e = M(e), a.shift(), e += d[112]), e += d[5]), e += d[56], s.MN(f[94], s.ME(d[182], s.MB, s.MN, null)), e += d[5], s.MN(f[95], [d[183], s.MC(f[81]), d[184], s.F.entities(s.MC(f[96])), d[185], s.MC(f[97])].join("")), e += d[1], s.MN("fe_show_grap_link", s.MC(f[98]) && s.MC(f[99])), e += d[1], s.MD(f[101]) && (e += d[116], a.unshift({
                b_acc_aa_db: d[186],
                b_badge_class: d[187],
                b_badge_text: s.MB(f[100]),
                b_href: s.MC(f[6]) + "/invite_hosts" + s.MC(f[45]) + "&utm_source=referral_program&utm_medium=grap&utm_campaign=desktop_profile_menu",
                b_is_badge_non_breakable: 1,
                b_title: s.MB(f[76]),
                b_type: d[188]
            }), e = l(e), a.shift(), e += d[5]), e += d[1], s.MK(s.MC(f[103])) && (e += d[0], s.MN(f[102], [d[114], s.ME(d[189], s.MB, s.MN, null), d[112]].join("")), e += d[116], a.unshift({
                b_acc_aa_db: d[190],
                b_href: s.MC(f[20]) + "/apps" + s.MC(f[45]) + ";source=35;",
                b_title: s.MB(f[102]),
                b_type: d[191]
            }), e = l(e), a.shift(), e += d[5]), e += d[192], s.MK(s.MJ(s.MC(f[105]) + "" == "booking-home")) && s.MJ(s.MC(f[2]) + "" == "tdot") && (e += d[0], a.unshift({
                b_acc_aa_db: d[193],
                b_href: s.MB(f[95]) + "&contact_details=" + s.MC(f[104]),
                b_is_badge_non_breakable: 1,
                b_title: s.MB(f[94]),
                b_type: d[194]
            }), e = l(e), a.shift(), e += d[5]), e += d[1], s.MN(f[44], s.ME(d[195], s.MB, s.MN, null)), e += d[1];
            n = "";
            return n += d[0], a.unshift({
                b_acc_aa_db: d[93],
                b_href: s.MC(f[6]) + "/content/cs" + s.MC(f[45]) + s.MC(f[22]) + "source_url=need_help_banner_header_menu",
                b_title: s.MC(f[44]),
                b_type: d[94]
            }), n = l(n), a.shift(), n += d[5], s.MN(f[106], n), e += [d[196], s.F.entities(s.MC(f[37])), d[197], s.MB(f[106]), d[198]].join(""), a.unshift({
                b_acc_aa_db: d[199],
                b_href: s.MB(f[107]),
                b_title: s.MB(f[108]),
                b_type: d[200]
            }), e = m(e), a.shift(), e += d[56], s.MD(f[43]) && (e = u(e += d[201]), e += d[5]), e += d[5], _r_(e)
        }

        function r(e) {
            _i_("8c3:cd60cb24"), e = function(e) {
                if (_i_("8c3:93fe3dc5"), s.MN("fe_journey_number_of_valid", 0), e += d[5], s.MN("fe_journey_number_of_expired", 0), e += d[5], s.MN("fe_journey_number_of_long_future_checkout", 0), e += d[1], s.MJ(s.MC(f[54])) ? (e += d[0], s.MN("fe_rewards__show_reminder_about_ending_", 1), e += d[0], s.MN("fe_rewards__collecting_deadline_", s.MG((s.MC(f[4]) || {}).expected_reward_expiration_date))) : (e += d[0], s.MN("fe_rewards__show_reminder_about_ending_", s.MB(f[55])), e += d[0], s.MN("fe_rewards__collecting_deadline_", s.MB(f[56]))), e += d[5], e += d[1], s.MJ(s.MG((s.MC(f[57]) || {}).hotelreservations))) {
                    e += d[0];
                    var _ = (s.MC(f[57]) || {}).hotelreservations || [];
                    a.unshift({
                        fe_rewards_journey_item: null
                    });
                    for (var n, r = 1, i = _.length; r <= i; r++) a[0].fe_rewards_journey_item = n = _[r - 1], e += d[7], s.MN("fe_journey_item_is_valid", 1), e += d[74], s.MJ(3 == n.reward_status) && (e += d[20], s.MN("fe_journey_number_of_expired", s.MI(s.MB(f[58])) + s.MI(1)), e += d[20], s.MN("fe_journey_item_is_valid", 0), e += d[7]), e += d[74], s.MJ(s.MB(f[60])) && s.MJ(n.hotelreservation_checkout + "" > "" + s.MB(f[61])) && (e += d[20], s.MN("fe_journey_number_of_long_future_checkout", s.MI(s.MB(f[59])) + s.MI(1)), e += d[20], s.MN("fe_journey_item_is_valid", 0), e += d[7]), e += d[74], s.MD(f[63]) && (e += d[20], s.MN("fe_journey_number_of_valid", s.MI(s.MB(f[62])) + s.MI(1)), e += d[7]), e += d[0];
                    a.shift(), e += d[5]
                }
                return e += d[5], _r_(e)
            }(e += d[1]), e += d[1], s.MN("fe_rewards_scorebar__stayed", s.MG((s.MC(f[4]) || {}).stayed_reservations_in_block)), e += d[5], s.MN("fe_rewards_scorebar__total", s.MG((s.MC(f[4]) || {}).total_reservations_in_block)), e += d[1], s.MD(f[59]) && (e += d[0], s.MN("fe_rewards_scorebar__total", s.MI(s.MB(f[67])) - s.MI(s.MB(f[59]))), e += d[5]), e += [d[125], s.MB(f[68]) ? " " + s.MB(f[68]) : "", d[126]].join("");
            var _, n = s.seq(1, 5) || [];
            a.unshift({
                i: null
            });
            for (var r, i = 1, t = n.length; i <= t; i++) a[0].i = r = n[i - 1], e += d[7], s.MN("fe_bbloyalty_scorebar__item__state", ""), e += d[7], s.MN("fe_bbloyalty_scorebar__item__has_icon", 0), e += d[74], s.MJ(s.MB(f[69]) >= r.value) ? (e += d[20], s.MN("fe_bbloyalty_scorebar__item__state", "bbl-rewards__scorebar__item--stayed"), e += d[20], s.MN("fe_bbloyalty_scorebar__item__has_icon", 1), e += d[7]) : s.MJ(s.MB(f[67]) >= r.value) ? (e += d[20], s.MN("fe_bbloyalty_scorebar__item__state", "bbl-rewards__scorebar__item--pending"), e += d[20], s.MN("fe_bbloyalty_scorebar__item__has_icon", 1), e += d[7]) : s.MJ(s.MB(f[70])) && s.MJ(s.MI(s.MB(f[67])) + s.MI(1) == r.value) && (e += d[20], s.MN("fe_bbloyalty_scorebar__item__state", "bbl-rewards__scorebar__item--next-highlighted"), e += d[7]), e += [d[127], s.MB(f[71]) ? " " + s.MB(f[71]) : "", d[128]].join(""), s.MD(f[72]) && (e += d[20], s.MJ(s.MC(f[2]) + "" == "www") && s.MJ(s.MC(f[37]) + "" == "cross_product_index") ? (e += d[21], _ = e, _i_("8c3:74c96b42"), _ += d[129], e = _r_(_), e += d[20]) : e += d[130], e += d[7]), e += d[131];
            return a.shift(), e += d[132], _r_(e)
        }

        function M(e) {
            return _i_("8c3:1c05a5c1"), e += d[1], s.MN("b_l_class", "profile-menu__item profile_menu__item--" + s.MC(f[26])), e += [d[59], s.MC(f[27]), d[60]].join(""), s.MD(f[28]) && (e += d[61]), e += d[20], s.MD(f[29]) && (e += d[62]), e += [d[63], s.MC(f[30]), d[64]].join(""), s.MD(f[29]) && (e += [d[65], s.MC(f[29]), d[66]].join("")), e += d[67], s.MD(f[31]) && (e += [d[68], s.MC(f[31]), d[66]].join("")), e += d[69], s.MJ(s.MC(f[33])) && s.MJ(s.MC(f[32])) && (e += [d[70], s.MC(f[32]), d[71]].join("")), e += d[69], s.MD(f[34]) && (e += [d[72], s.MC(f[34]), d[73]].join("")), e += d[74], s.MJ(s.MC(f[26]) + "" != "genius") && (s.MJ(s.MC(f[26]) + "" == "add_property") || s.MJ(s.MC(f[26]) + "" == "add_property_faq")) && (e += d[75]), e += [d[76], s.F.entities(s.MC(f[35])), d[77], s.F.entities(s.MC(f[36])), d[78]].join(""), s.MJ(s.MC(f[26]) + "" == "myreferrals") && (e += d[79]), e += d[74], s.MJ(s.MC(f[26]) + "" == "travel-communities") && (e += d[75]), e += d[74], s.MJ(s.MC(f[26]) + "" == "grap_myreferrals") && (e += [d[80], s.MC(f[37]), d[71]].join("")), e += d[7], s.MJ(s.MC(f[26]) + "" == "help") && (e += [d[81], s.F.html(s.MC(f[37])), d[82]].join("")), e += d[83], s.MD(f[28]) && (e += [d[84], s.MC(f[28]), d[85], s.MC(f[26]), d[86]].join("")), e += d[74], s.MD(f[41]) ? e += [d[20], s.MC(f[38])].join("") : e += [d[20], s.MC(f[38]), d[20]].join(""), s.MD(f[40]) && (e += [d[87], s.MC(f[39]), d[19], s.MC(f[40]), d[88]].join("")), e += d[7], e += d[89], _r_(e)
        }

        function l(e) {
            return _i_("8c3:818bf220"), e += d[1], s.MN("b_l_class", "profile-menu__item profile_menu__item--" + s.MC(f[26])), e += [d[59], s.MC(f[27]), d[60]].join(""), s.MD(f[28]) && (e += d[61]), e += d[20], s.MD(f[29]) && (e += d[62]), e += [d[63], s.MC(f[30]), d[64]].join(""), s.MD(f[29]) && (e += [d[65], s.MC(f[29]), d[66]].join("")), e += d[67], s.MD(f[31]) && (e += [d[68], s.MC(f[31]), d[66]].join("")), e += d[69], s.MJ(s.MC(f[33])) && s.MJ(s.MC(f[32])) && (e += [d[70], s.MC(f[32]), d[71]].join("")), e += d[69], s.MD(f[34]) && (e += [d[72], s.MC(f[34]), d[73]].join("")), e += d[74], s.MJ(s.MC(f[26]) + "" != "genius") && (s.MJ(s.MC(f[26]) + "" == "add_property") || s.MJ(s.MC(f[26]) + "" == "add_property_faq")) && (e += d[75]), e += [d[76], s.F.entities(s.MC(f[35])), d[77], s.F.entities(s.MC(f[36])), d[78]].join(""), s.MJ(s.MC(f[26]) + "" == "myreferrals") && (e += d[79]), e += d[74], s.MJ(s.MC(f[26]) + "" == "travel-communities") && (e += d[75]), e += d[74], s.MJ(s.MC(f[26]) + "" == "grap_myreferrals") && (e += [d[80], s.MC(f[37]), d[71]].join("")), e += d[7], s.MJ(s.MC(f[26]) + "" == "help") && (e += [d[81], s.F.html(s.MC(f[37])), d[82]].join("")), e += d[83], s.MD(f[28]) && (e += [d[84], s.MC(f[28]), d[85], s.MC(f[26]), d[86]].join("")), e += d[74], s.MD(f[41]) ? e += [d[20], s.MC(f[38])].join("") : e += [d[20], s.MC(f[38]), d[20]].join(""), s.MD(f[40]) && (e += [d[87], s.MC(f[39]), d[19], s.MC(f[40]), d[88]].join("")), e += d[7], e += d[89], _r_(e)
        }

        function u(e) {
            return _i_("8c3:6ce90964"), e += d[1], s.MN("fe_href", s.MC(f[20]) + "/communities/index" + s.MC(f[21]) + s.MC(f[22]) + "utm_source=communities_ep" + s.MC(f[22]) + "utm_medium=menu" + s.MC(f[22]) + "utm_campaign=booking" + s.MC(f[22]) + "communities_entry_point=profile_menu"), e += d[1], s.MN(f[23], s.ME(d[57], s.MB, s.MN, null)), e += d[5], s.MD(f[25]) && (e += d[0], s.MN(f[24], s.ME(d[58], s.MB, s.MN, null)), e += d[5]), e += d[56], a.unshift({
                b_badge_text: s.MB(f[24]),
                b_href: s.MB(f[42]),
                b_title: s.MB(f[23]),
                b_type: d[90]
            }), e = l(e), a.shift(), e += d[5], _r_(e)
        }

        function m(e) {
            return _i_("8c3:8367041d"), e += d[1], s.MN("b_l_class", "profile-menu__item profile_menu__item--" + s.MC(f[26])), e += [d[59], s.MC(f[27]), d[60]].join(""), s.MD(f[28]) && (e += d[61]), e += d[20], s.MD(f[29]) && (e += d[62]), e += [d[63], s.MC(f[30]), d[64]].join(""), s.MD(f[29]) && (e += [d[65], s.MC(f[29]), d[66]].join("")), e += d[67], s.MD(f[31]) && (e += [d[68], s.MC(f[31]), d[66]].join("")), e += d[69], s.MJ(s.MC(f[33])) && s.MJ(s.MC(f[32])) && (e += [d[70], s.MC(f[32]), d[71]].join("")), e += d[69], s.MD(f[34]) && (e += [d[72], s.MC(f[34]), d[73]].join("")), e += d[74], s.MJ(s.MC(f[26]) + "" != "genius") && (s.MJ(s.MC(f[26]) + "" == "add_property") || s.MJ(s.MC(f[26]) + "" == "add_property_faq")) && (e += d[75]), e += [d[76], s.F.entities(s.MC(f[35])), d[77], s.F.entities(s.MC(f[36])), d[78]].join(""), s.MJ(s.MC(f[26]) + "" == "myreferrals") && (e += d[79]), e += d[74], s.MJ(s.MC(f[26]) + "" == "travel-communities") && (e += d[75]), e += d[74], s.MJ(s.MC(f[26]) + "" == "grap_myreferrals") && (e += [d[80], s.MC(f[37]), d[71]].join("")), e += d[7], s.MJ(s.MC(f[26]) + "" == "help") && (e += [d[81], s.F.html(s.MC(f[37])), d[82]].join("")), e += d[83], s.MD(f[28]) && (e += [d[84], s.MC(f[28]), d[85], s.MC(f[26]), d[86]].join("")), e += d[74], s.MD(f[41]) ? e += [d[20], s.MC(f[38])].join("") : e += [d[20], s.MC(f[38]), d[20]].join(""), s.MD(f[40]) && (e += [d[87], s.MC(f[39]), d[19], s.MC(f[40]), d[88]].join("")), e += d[7], e += d[89], _r_(e)
        }

        function c(e) {
            return _i_("8c3:6b26ea8e"), e += d[5], _r_(e)
        }
        return e = function(e) {
            var _, n;
            if (_i_("8c3:cce9ee45"), e += d[1], s.MJ(s.MC(f[2]) + "" == "www") && s.MJ(s.MC(f[3]) + "" != "switch-accounts") && (e += d[0], _ = e, _i_("8c3:76b27c49"), s.MD(f[1]) && (_ += [d[2], (a.unshift({
                    company_name: s.MB(f[0])
                }), b = s.ME(d[3], s.MB, s.MN, null), a.shift(), b), d[4]].join("")), _ += d[5], e = _r_(_), e += d[5]), e = c(e += d[5]), e += [d[6], s.MC(f[4]) ? " profile-menu--no-top-padding" : "", d[7]].join(""), s.MJ(s.MC(f[3]) + "" == "switch-accounts") && (e += d[8]), e += [d[9], s.ME(d[10], s.MB, s.MN, null), d[11]].join(""), e = s.MD(f[5]) ? function(e) {
                    _i_("8c3:688027e1");
                    var _, n = s.MC(f[5]) || [];
                    a.unshift({
                        fe_account: null
                    });
                    for (var r, i = 1, t = n.length; i <= t; i++) a[0].fe_account = r = n[i - 1], e += d[12], s.MJ(r.b_type + "" != "business") && (e += d[13]), e += d[14], s.MJ(s.MG((r || {}).b_active)) && (e += d[15]), e += [d[16], s.MC(f[6]), s.F.html(s.MC(f[7])), d[17], d[18] + s.CSRF_TOKEN() + d[19], d[20]].join(""), s.MJ(r.b_type + "" == "business") ? (e += d[21], s.MN(f[8], [d[22], (a.unshift({
                        company_name: s.MG(((r || {}).b_company || {}).b_name)
                    }), b = s.MB(f[9]), a.shift(), b), d[21]].join("")), e += [d[23], s.F.entities(s.MB(f[10])), d[24], s.ME(d[25], s.MB, s.MN, null), d[26], (a.unshift({
                        class: d[27],
                        name: d[28]
                    }), b = s.HELPER("icon", a[0]), a.shift(), b), d[20]].join("")) : e += [d[23], s.F.entities(s.MB(f[11])), d[24], s.ME(d[29], s.MB, s.MN, null), d[26], (a.unshift({
                        class: d[27],
                        name: d[30]
                    }), b = s.HELPER("icon", a[0]), a.shift(), b), d[20]].join(""), e += [d[31], s.F.entities(s.MG((r || {}).b_user_id)), d[32]].join(""), s.MJ(s.MC(f[3]) + "" != "switch-accounts") && (e += d[20], (s.MJ(r.b_type + "" != "business") || s.MJ(s.MB(f[14]))) && (e += [d[33], s.MC(f[6]), s.F.html(s.MC(f[7])), d[34]].join(""), s.MJ(r.b_type + "" == "business") ? e += [d[35], s.F.entities(s.MB(f[12])), d[36]].join("") : e += [d[35], s.F.entities(s.MB(f[13])), d[36]].join(""), e += d[37], s.MJ(s.track_experiment("YTBAWTWEUXFSOERXUC")) ? e += [d[35], s.ME(d[38], s.MB, s.MN, null), d[36]].join("") : e += [d[35], s.ME(d[39], s.MB, s.MN, null), d[36]].join(""), e += [d[40], s.F.entities(s.MG((r || {}).b_user_id)), d[41]].join("")), e += d[7]), e += d[42], s.MJ(s.MC(f[3]) + "" != "switch-accounts") && (e += d[20], s.MJ(r.b_type + "" != "business") && s.MJ(s.MC(f[2]) + "" != "tdot") && s.MJ(s.MC(f[15])) && (e += d[21], s.MN("fe_wishlist_href", s.MC(f[15])[0].b_reg_user_detail_list_url + "" + s.MB(f[16])), e += [d[33], s.MC(f[6]), s.F.html(s.MC(f[7])), d[43], s.F.entities(s.MB(f[17])), d[44], s.ME(d[45], s.MB, s.MN, null), d[46], s.F.entities(s.MG((r || {}).b_user_id)), d[41]].join("")), e += d[7]), e += d[42], s.MJ(s.MC(f[3]) + "" != "switch-accounts") && (e += [d[47], s.MC(f[6]), s.F.html(s.MC(f[7])), d[48]].join(""), s.MJ(r.b_type + "" == "business") ? e += [d[49], s.F.entities(s.MB(f[18])), d[50]].join("") : e += [d[49], s.F.entities(s.MB(f[19])), d[50]].join(""), e += [d[51], s.ME(d[52], s.MB, s.MN, null), d[53], s.F.entities(s.MG((r || {}).b_user_id)), d[54]].join("")), e += d[55];
                    return a.shift(), e += d[56], s.MD(f[43]) && (e = u(e += d[0]), e += d[91]), e += d[1], s.MJ(s.MC(f[3]) + "" != "switch-accounts") && (e += d[0], _ = e, _i_("8c3:5fd85855"), s.MN(f[44], s.ME(d[92], s.MB, s.MN, null)), _ += d[1], a.unshift({
                        b_acc_aa_db: d[93],
                        b_href: s.MC(f[6]) + "/content/cs" + s.MC(f[45]) + s.MC(f[22]) + "source_url=need_help_banner_header_menu" + s.MB(f[16]),
                        b_title: s.MC(f[44]),
                        b_type: d[94]
                    }), _ = l(_), a.shift(), _ += d[5], e = _r_(_), e += d[95], a.unshift({
                        fe_is_hard_split: d[110]
                    }), e = o(e), a.shift(), e += d[5]), e += d[5], _r_(e)
                }(e += d[7]) : t(e += d[7]), e += d[0], e += d[202], s.MJ(s.MC(f[33])) && s.MJ(s.MC(f[2]) + "" == "www") && s.MJ(s.MC(f[3]) + "" != "switch-accounts") && s.MK(s.MC(f[5]))) {
                e += d[74], s.MN("fe_booker_in_tool_travel_purpose_leisure", ""), e += d[203];
                var r = "";
                s.MJ(s.track_experiment("YTBAWTWEUXFSOERXUC")) ? r += [d[162], s.ME(d[38], s.MB, s.MN, null), d[20]].join("") : s.MJ(s.MC(f[81]) + "" == "zh-cn") ? r += [d[162], s.ME(d[163], s.MB, s.MN, null)].join("") : r += [d[162], s.ME(d[164], s.MB, s.MN, null)].join(""), s.MN(f[80], r), e += d[42], s.MN("fe_is_user_company_reservations_link", s.MB(f[109]) ? 1 : 0), e += d[7], s.MN("fe_user_profile_menu_reservations_link", s.MB(f[109]) ? s.MB(f[109]) : s.MC(f[6]) + "/myreservations" + s.MC(f[45]) + s.MC(f[22]) + "tmpl=profile/myreservations"), e += d[7], s.MJ(s.MC(f[33])) && s.MJ(s.MC(f[2]) + "" == "www") && (e += d[20], s.MN("fe_user_profile_menu_reservations_link", s.MB(f[110]) + "" + s.MC(f[22]) + "blp=1"), e += d[7]), e += d[74], (s.MK(s.MB(f[111])) || s.MJ(s.MB(f[111])) && s.MJ(s.MB(f[112]))) && (e += d[20], a.unshift({
                    b_acc_aa_db: d[165],
                    b_href: s.MB(f[110]),
                    b_title: s.MB(f[80]),
                    b_type: d[166]
                }), e = l(e), a.shift(), e += d[7]), e += d[42], a.unshift({
                    b_acc_aa_db: d[199],
                    b_href: s.MB(f[107]),
                    b_title: s.MB(f[108]),
                    b_type: d[200]
                }), e = m(e), a.shift(), e += d[74], s.MJ(s.MC(f[15])) && s.MK(s.MB(f[113])) && (e += d[20], s.MJ(s.MC(f[2]) + "" == "tdot") || (e += d[21], s.MN(f[93], [d[22], s.ME(d[45], s.MB, s.MN, null), d[21]].join("")), e += d[204], s.MN("fe_wishlist_href", s.MG(((s.MC(f[15]) || [])[0] || {}).b_reg_user_detail_list_url)), e += d[21], a.unshift({
                    b_acc_aa_db: d[180],
                    b_href: s.MB(f[17]) + "" + s.MB(f[16]),
                    b_title: s.MB(f[93]),
                    b_type: d[181]
                }), e = M(e), a.shift(), e += d[20]), e += d[7]), e += d[74], s.MD(f[88]) && (e += d[20], a.unshift({
                    b_acc_aa_db: d[205],
                    b_href: s.MC(f[6]) + "/rewards_and_wallet/rewards" + s.MC(f[45]) + s.MB(f[16]),
                    b_title: s.MB(f[87]),
                    b_type: d[174]
                }), e = l(e), a.shift(), e += d[7]), e += d[74], n = e, _i_("8c3:a6831ae3"), s.MN(f[44], s.ME(d[92], s.MB, s.MN, null)), n += d[1], a.unshift({
                    b_acc_aa_db: d[93],
                    b_href: s.MC(f[6]) + "/content/cs" + s.MC(f[45]) + s.MC(f[22]) + "source_url=need_help_banner_header_menu" + s.MB(f[16]),
                    b_title: s.MC(f[44]),
                    b_type: d[94]
                }), n = m(n), a.shift(), n += d[5], e = _r_(n), e += d[0]
            }
            return e += d[116], s.MN("fe_profile_menu__splitter_is_already_before_bb_try_or_switch_menu_item", 0), e += d[116], s.MJ(s.MB(f[116])) && s.MJ(s.MB(f[117])) && s.MJ(s.MB(f[115])) && (e += d[206], s.MN(f[114], [d[20], (a.unshift({
                b_companyname: s.MC(f[66])
            }), b = s.ME(d[207], s.MB, s.MN, null), a.shift(), b), d[7]].join("")), e += d[74], a.unshift({
                b_href: s.MB(f[115]) + ";utm_campaign=bblBonus;utm_source=profile-menu-item;utm_medium=" + s.MC(f[37]),
                b_title: s.MB(f[114]),
                b_type: d[208]
            }), e = m(e), a.shift(), e += d[74], s.MN("fe_profile_menu__splitter_is_already_before_bb_try_or_switch_menu_item", 1), e += d[209]), e += d[116], s.MJ(s.MC(f[3]) + "" != "switch-accounts") && s.MK(s.MC(f[5])) && (e += d[7], s.MK(s.MB(f[118])) && (e += d[210]), e += d[74], s.MJ(s.MB(f[121])) && (s.MJ(s.MC(f[122])) || s.MJ(s.MC(f[123]))) && (e += d[211], s.MN(f[119], s.ME(d[212], s.MB, s.MN, null)), e += d[211], a.unshift({
                b_href: s.MC(f[120]),
                b_title: s.MB(f[119]),
                b_type: d[213]
            }), e = l(e), a.shift(), e += d[214]), e += d[74], s.MJ(s.MC(f[33])) && s.MJ(s.MC(f[2]) + "" == "tdot") && s.MK(s.MC(f[5])) && (e += d[20], s.MN(f[8], (a.unshift({
                company_name: s.MC(f[124])
            }), b = s.MB(f[9]), a.shift(), b)), e += d[211], a.unshift({
                b_href: s.MC(f[6]) + "/company" + s.MC(f[45]),
                b_icon: d[215],
                b_title: s.MB(f[8]),
                b_track_event: "click/Profile Menu Business Account/" + s.MC(f[125]) + " page",
                b_type: d[216]
            }), e = l(e), a.shift(), e += d[214]), e = i(e += d[211]), e += d[0]), e += [d[217], s.ME(d[218], s.MB, s.MN, null), d[219]].join(""), _r_(e)
        }(e += d[0]), e += d[5], _r_(e)
    })
}()), booking.jstmpl("profile_menu_extra_class", function() {
    _i_("8c3:10fa4419");
    var i = ["\n    ", "fly-dropdown--try-bbtool", " fly-dropdown--genius", "-nobanner", "fly-dropdown--genius", "\n"],
        t = ["b_is_genius_branded", "fe_bbtool_can_see_tool_promos", "b_user_has_business_booking", "b_site_type", "b_brewards_account_details", "feature_permissions"];
    return _r_(function(e) {
        _i_("8c3:fe756763");
        var _, n = "",
            r = this.fn;
        return _ = n += i[0], _i_("8c3:074ee6d8"), r.MK(r.MB(t[5]) && r.MC(t[5]).company_action) && (r.MJ(r.MC(t[3]) + "" == "www") && (r.MJ(r.MB(t[1])) && r.MJ(r.MC(t[2])) ? (_ += i[1], r.MJ(r.MC(t[0])) && (_ += i[2], r.MJ(r.MC(t[0])) && (_ += i[3]))) : r.MJ(r.MC(t[0])) && (_ += i[4], r.MJ(r.MC(t[0])) && (_ += i[3]))), (r.MJ(r.MC(t[3]) + "" == "www") || r.MJ(r.MC(t[3]) + "" == "tdot")) && r.MD(t[4]) && (_ += " fly-dropdown--bbloyalty-widget--promoted")), n = _r_(_), _r_(n += i[5])
    })
}());