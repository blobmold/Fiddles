<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5JGQKH');
    </script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8" />
    <!-- SEO meta -->
    <meta name="robots" content="index, follow" />
    <meta name="description" content="Rooms Hotels" />
    <!-- End SEO meta -->
    <!-- IE meta -->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- End IE meta -->
    <!-- Apple meta -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="Rooms Hotels" />
    <!-- End Apple meta -->
    <!-- Mobile meta -->
    <meta name="HandheldFriendly" content="true" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />
    <!-- End mobile meta -->
    <!-- Facebook meta -->
    <meta property="og:type" content="website" />
    <?php if (is_front_page()) : ?>
        <meta property="og:url" content="<?php the_permalink(); ?>" />
        <meta property="og:title" content="<?php echo strip_tags(get_field('header_text')); ?>" />
        <meta property="og:image" content="<?php the_post_thumbnail_url(); ?>" />
        <meta property="og:site_name" content="Rooms Hotels" />
        <meta property="og:description" content="<?php echo strip_tags(get_field('subheadline')); ?>" />
    <?php else : ?>
        <meta property="og:url" content="<?php the_permalink(); ?>" />
        <meta property="og:title" content="<?php the_title(); ?>" />
        <meta property="og:image" content="<?php the_post_thumbnail_url(); ?>" />
        <meta property="og:site_name" content="Rooms Hotels" />
        <meta property="og:description" content="<?php echo get_custom_excerpt(get_the_ID()); ?>" />
    <?php endif; ?>
    <!-- End Facebook meta -->
    <!-- Twitter meta -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="<?php the_permalink(); ?>" />
    <meta name="twitter:title" content="<?php the_title(); ?>" />
    <meta name="twitter:site" content="Rooms Hotels" />
    <meta name="twitter:image" content="<?php the_post_thumbnail_url(); ?>" />
    <!-- End Twitter meta -->
    <meta name="google-site-verification" content="zTm4zAoYuGL9oO4juu0XhnbkZ3ooVQ1OSAOuDmi4vWQ" />
    <title><?php bloginfo('name'); ?> <?php is_front_page() ? '|' . bloginfo('description') : '|' . wp_title(''); ?></title>
    <!-- WP_HEAD -->
    <?php wp_head(); ?>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
    <script type="text/javascript" defer src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <script type="text/javascript" async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4yPh-Ir3_M6XKA11OK5NTUlFM8KHMh-I&region=GE&language=ge"></script>
    <script type="text/javascript" async src="http://localhost:8888/roomshotels/wp-content/themes/roomsv2child/js/gmaps.js"></script>
    <script type="text/javascript" defer src="http://localhost:8888/roomshotels/wp-content/themes/roomsv2child/js/main.js"></script>
</head>

<body <?php body_class(); ?>>

    <!-- Black Friday Pop-Up Banner -->
    <?php
    $rh_type = get_the_terms($post->ID,  'type')[0]->slug;
    $rh_prop = get_the_terms($post->ID,  'Property')[0]->slug;
    if ($rh_type === 'hotel' && ($rh_prop === "kokhta" || $rh_prop === 'tbilisi')) : ?>
        <aside class="rh-bf">
            <div class="rh-bf-overlay"></div>
            <div class="rh-bf-popup">
                <div class="rh-bf-closeBtn_container">
                    <div class="rh-bf-closeBtn"></div>
                </div>
                <div class="rh-bf-text_cont">
                    <h1>That Friday</h1>
                    <p>(-50% off)</p>
                </div>
                <div class="rh-bf-btn">
                    <a href="<?php echo $rh_prop === "tbilisi" ? "https://roomshotels.com/hotel/tbilisi/black-friday/" : ($rh_prop === "kokhta" ? "https://roomshotels.com/hotel/kokhta/black-friday/" : '#') ?>" target="_blank" class="cta cta--white">
                        <span class="rh-bf-btn_text cta__text cta__text--arrow"> See you there</span>
                    </a>
                </div>
            </div>
        </aside>
    <?php endif; ?>
    <!--End of Black Friday Pop-Up Banner -->
    <script>
        var rms_m_newsletter_data = {
            ajax_url: '<?php echo admin_url('admin-ajax.php'); ?>',
            nonce: '<?php echo wp_create_nonce('newsletter_signup'); ?>'
        };
    </script>

    <header>
        <nav class="rh-gn">
            <ul class="rh-gn-header">
                <li class="rh-gn-logo">
                    <!-- set the link -->
                    <a href="">
                        <img src="https://roomshotels.com/wp-content/themes/roomshotelsv2/img/logo-secondary-white.svg" alt="">
                    </a>
                </li>
                <li>
                    <?php
                    // Main Menu
                    wp_nav_menu(
                        [
                            'container_class'   => 'rh-gn-conatiner',
                            'menu_class'        => 'rh-gn-list',
                            'theme_location'    => 'main',
                            'depth'             => '2',
                            // 'li_class'          => '',    //Custom arg
                            'li_a_class'        => 'gn-cta',       //Custom arg
                        ]
                    );
                    ?>
                </li>
                <li class="rh-gn-burger">
                    <div class="rh-burger_btn"></div>
                </li>
            </ul>
            <div class="rh-hamburger-container">
                <?php
                // Hamburger Menu
                wp_nav_menu(
                    [
                        'container_class'   => 'rh-hamburger-wrapper',
                        'menu_class'        => 'rh-hamburger',
                        'theme_location'    => 'hamburger',
                        // 'li_a_class'        => 'gn-cta',
                        'link_before'       => '<span class="gn-cta">',
                        'link_after'        => '</span>'
                    ]
                );
                ?>
                <div class="socials socials--small">
                    <div class="socials__item">
                        <div class="socials__item__picture socials__item__picture--facebook"></div>
                        <a target="_blank" href="<?php the_field('facebook_link', 'option'); ?>" class="cta cta--noborder cta--nopadding">
                            <span class="cta__text">Facebook</span>
                        </a target="_blank">
                    </div>
                    <div class="socials__item">
                        <div class="socials__item__picture socials__item__picture--instagram"></div>
                        <a target="_blank" href="<?php the_field('instagram_feed_url', 'option'); ?>" class="cta cta--noborder cta--nopadding">
                            <span class="cta__text">Instagram</span>
                        </a target="_blank">
                    </div>
                    <div class="socials__item">
                        <div class="socials__item__picture socials__item__picture--soundcloud"></div>
                        <a target="_blank" href="<?php the_field('soundcloud_link', 'option'); ?>" class="cta cta--noborder cta--nopadding">
                            <span class="cta__text">Soundcloud</span>
                        </a target="_blank">
                    </div>
                </div>
            </div>
        </nav>
        <div class="header__bottom_position">
            <div class="header__bottom_privacy">
                <div class="privacy_close_btn">Ok</div>
                <p>Our website uses cookies to ensure you get the best experience. <a class="privacy-toggler" href="<?php echo esc_attr(esc_url(get_privacy_policy_url())); ?>" target="_blank">Privacy Policy</a></p>
            </div>
            <div class="header__bottom_covid">
                <div class="covid_close_btn"></div>
                <p><a class="covid-toggler" href="" target="_blank">Click Here</a> for Updated Travel Policy and Procedures – COVID-19</p>
            </div>
        </div>
    </header>

    <div class="floating_book_now_btn">
        <a href="https://be.synxis.com/?adult=2&arrive=2021-10-14&chain=5154&child=0&currency=USD&depart=2021-10-15&hotel=62567&level=hotel&locale=en-US&rooms=1&shell=SBE_Tbilisi_V1&start=availresults&template=SBE_Tbilisi_V1">Book Now</a>
    </div>
    <?php wp_reset_postdata(); ?>
