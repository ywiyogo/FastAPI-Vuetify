<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Boxicons-icon component
 */
export default {
  page: {
    title: "Boxicons",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Boxicons",
      items: [
        {
          text: "Icons",
          href: "/"
        },
        {
          text: "Boxicons",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Examples</h4>
            <p class="card-subtitle mb-4">
              Use class
              <code>&lt;i class="bx bx-**">&lt;/i></code>
            </p>

            <h5>Regular</h5>
            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sticker"></i> bx bx-sticker
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shield-quarter"></i> bx bx-shield-quarter
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-upside-down"></i> bx bx-upside-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-laugh"></i> bx bx-laugh
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-"></i> bx bx-
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-meh-blank"></i> bx bx-meh-blank
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-happy-beaming"></i> bx bx-happy-beaming
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shocked"></i> bx bx-shocked
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sleepy"></i> bx bx-sleepy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-confused"></i> bx bx-confused
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wink-smile"></i> bx bx-wink-smile
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dizzy"></i> bx bx-dizzy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-happy-heart-eyes"></i> bx bx-happy-heart-eyes
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-angry"></i> bx bx-angry
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-smile"></i> bx bx-smile
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-tired"></i> bx bx-tired
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cool"></i> bx bx-cool
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-happy-alt"></i> bx bx-happy-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wink-tongue"></i> bx bx-wink-tongue
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-meh-alt"></i> bx bx-meh-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-food-menu"></i> bx bx-food-menu
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-food-tag"></i> bx bx-food-tag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-female-sign"></i> bx bx-female-sign
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-male-sign"></i> bx bx-male-sign
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-female"></i> bx bx-female
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-male"></i> bx bx-male
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-clinic"></i> bx bx-clinic
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-health"></i> bx bx-health
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shekel"></i> bx bx-shekel
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-yen"></i> bx bx-yen
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-won"></i> bx bx-won
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pound"></i> bx bx-pound
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-euro"></i> bx bx-euro
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rupee"></i> bx bx-rupee
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-ruble"></i> bx bx-ruble
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-lira"></i> bx bx-lira
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bitcoin"></i> bx bx-bitcoin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-tone"></i> bx bx-tone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bolt-circle"></i> bx bx-bolt-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cake"></i> bx bx-cake
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-spa"></i> bx bx-spa
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dish"></i> bx bx-dish
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-fridge"></i> bx bx-fridge
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-image-add"></i> bx bx-image-add
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-image-alt"></i> bx bx-image-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-space-bar"></i> bx bx-space-bar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx- alarm-add"></i> bx bx-alarm-add
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-archive-out"></i> bx bx-archive-out
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-archive-in"></i> bx bx-archive-in
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-add-to-queue"></i> bx bx-add-to-queue
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-border-radius"></i> bx bx-border-radius
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-check-shield"></i> bx bx-check-shield
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-label"></i> bx bx-label
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-file-find"></i> bx bx-file-find
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-face"></i> bx bx-face
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-extension"></i> bx bx-extension
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-exit"></i> bx bx-exit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-conversation"></i> bx bx-conversation
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sort-z-a"></i> bx bx-sort-z-a
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sort-a-z"></i> bx bx-sort-a-z
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-printer"></i> bx bx-printer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-radio"></i> bx bx-radio
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-customize"></i> bx bx-customize
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-brush-alt"></i> bx bx-brush-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-briefcase-alt-2"></i> bx bx-briefcase-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-time-five"></i> bx bx-time-five
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pie-chart-alt-2"></i> bx bx-pie-chart-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-gas-pump"></i> bx bx-gas-pump
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-mobile-vibration"></i> bx bx-mobile-vibration
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-mobile-landscape"></i> bx bx-mobile-landscape
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-border-all"></i> bx bx-border-all
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-border-bottom"></i> bx bx-border-bottom
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-border-top"></i> bx bx-border-top
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-border-left"></i> bx bx-border-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-border-right"></i> bx bx-border-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dialpad-alt"></i> bx bx-dialpad-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-filter-alt"></i> bx bx-filter-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-brightness"></i> bx bx-brightness
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-brightness-half"></i> bx bx-brightness-half
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wifi-off"></i> bx bx-wifi-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-credit-card-alt"></i> bx bx-credit-card-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-band-aid"></i> bx bx-band-aid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-hive"></i> bx bx-hive
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-map-pin"></i> bx bx-map-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-line-chart"></i> bx bx-line-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-receipt"></i> bx bx-receipt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-purchase-tag-alt"></i> bx bx-purchase-tag-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-basket"></i> bx bx-basket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-palette"></i> bx bx-palette
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-no-entry"></i> bx bx-no-entry
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message-alt-dots"></i> bx bx-message-alt-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message-alt"></i> bx bx-message-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-check-square"></i> bx bx-check-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-log-out-circle"></i> bx bx-log-out-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-log-in-circle"></i> bx bx-log-in-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-doughnut-chart"></i> bx bx-doughnut-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-building-house"></i> bx bx-building-house
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-accessibility"></i> bx bx-accessibility
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user-voice"></i> bx bx-user-voice
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cuboid"></i> bx bx-cuboid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cube-alt"></i> bx bx-cube-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-polygon"></i> bx bx-polygon
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-square-rounded"></i> bx bx-square-rounded
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-square"></i> bx bx-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-error-alt"></i> bx bx-error-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shield-alt-2"></i> bx bx-shield-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-paint-roll"></i> bx bx-paint-roll
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-droplet"></i> bx bx-droplet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-street-view"></i> bx bx-street-view
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-plus-medical"></i> bx bx-plus-medical
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-search-alt-2"></i> bx bx-search-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bowling-ball"></i> bx bx-bowling-ball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dna"></i> bx bx-dna
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cycling"></i> bx bx-cycling
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shape-circle"></i> bx bx-shape-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-down-arrow-alt"></i> bx bx-down-arrow-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-up-arrow-alt"></i> bx bx-up-arrow-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-right-arrow-alt"></i> bx bx-right-arrow-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-left-arrow-alt"></i> bx bx-left-arrow-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-lock-open-alt"></i> bx bx-lock-open-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-lock-alt"></i> bx bx-lock-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cylinder"></i> bx bx-cylinder
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pyramid"></i> bx bx-pyramid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-comment-dots"></i> bx bx-comment-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-comment"></i> bx bx-comment
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-landscape"></i> bx bx-landscape
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-book-open"></i> bx bx-book-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-transfer-alt"></i> bx bx-transfer-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-copy-alt"></i> bx bx-copy-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-run"></i> bx bx-run
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user-pin"></i> bx bx-user-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-grid"></i> bx bx-grid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-code-alt"></i> bx bx-code-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-mail-send"></i> bx bx-mail-send
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-ghost"></i> bx bx-ghost
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shape-triangle"></i> bx bx-shape-triangle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shape-square"></i> bx bx-shape-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-video-recording"></i> bx bx-video-recording
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-notepad"></i> bx bx-notepad
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bug-alt"></i> bx bx-bug-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-mouse-alt"></i> bx bx-mouse-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-edit-alt"></i> bx bx-edit-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chat"></i> bx bx-chat
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-book-content"></i> bx bx-book-content
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message-square-dots"></i> bx bx-message-square-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message-square"></i> bx bx-message-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-slideshow"></i> bx bx-slideshow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wallet-alt"></i> bx bx-wallet-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-memory-card"></i> bx bx-memory-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message-rounded-dots"></i> bx bx-message-rounded-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message-dots"></i> bx bx-message-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bar-chart-alt-2"></i> bx bx-bar-chart-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-store-alt"></i> bx bx-store-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-buildings"></i> bx bx-buildings
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-home-circle"></i> bx bx-home-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-money"></i> bx bx-money
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-walk"></i> bx bx-walk
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-repeat"></i> bx bx-repeat
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-font-family"></i> bx bx-font-family
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-joystick-button"></i> bx bx-joystick-button
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-paint"></i> bx bx-paint
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-unlink"></i> bx bx-unlink
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-brush"></i> bx bx-brush
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rotate-left"></i> bx bx-rotate-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-badge-check"></i> bx bx-badge-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-show-alt"></i> bx bx-show-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-caret-down"></i> bx bx-caret-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-caret-right"></i> bx bx-caret-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-caret-up"></i> bx bx-caret-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-caret-left"></i> bx bx-caret-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calendar-event"></i> bx bx-calendar-event
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-magnet"></i> bx bx-magnet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rewind-circle"></i> bx bx-rewind-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-card"></i> bx bx-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-help-circle"></i> bx bx-help-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-test-tube"></i> bx bx-test-tube
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-note"></i> bx bx-note
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sort-down"></i> bx bx-sort-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sort-up"></i> bx bx-sort-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-id-card"></i> bx bx-id-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-badge"></i> bx bx-badge
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-grid-small"></i> bx bx-grid-small
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-grid-vertical"></i> bx bx-grid-vertical
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-grid-horizontal"></i> bx bx-grid-horizontal
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-move-vertical"></i> bx bx-move-vertical
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-move-horizontal"></i> bx bx-move-horizontal
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-stats"></i> bx bx-stats
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-equalizer"></i> bx bx-equalizer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-disc"></i> bx bx-disc
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-analyse"></i> bx bx-analyse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-search-alt"></i> bx bx-search-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dollar-circle"></i> bx bx-dollar-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-football"></i> bx bx-football
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-ball"></i> bx bx-ball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-circle"></i> bx bx-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-transfer"></i> bx bx-transfer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-fingerprint"></i> bx bx-fingerprint
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-font-color"></i> bx bx-font-color
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-highlight"></i> bx bx-highlight
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-file-blank"></i> bx bx-file-blank
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-strikethrough"></i> bx bx-strikethrough
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-photo-album"></i> bx bx-photo-album
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-code-block"></i> bx bx-code-block
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-font-size"></i> bx bx-font-size
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-handicap"></i> bx bx-handicap
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dialpad"></i> bx bx-dialpad
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wind"></i> bx bx-wind
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-water"></i> bx bx-water
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-swim"></i> bx bx-swim
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-restaurant"></i> bx bx-restaurant
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-box"></i> bx bx-box
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-menu-alt-right"></i> bx bx-menu-alt-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-menu-alt-left"></i> bx bx-menu-alt-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-video-plus"></i> bx bx-video-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-list-ol"></i> bx bx-list-ol
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-planet"></i> bx bx-planet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-hotel"></i> bx bx-hotel
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-movie"></i> bx bx-movie
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-taxi"></i> bx bx-taxi
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-train"></i> bx bx-train
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bath"></i> bx bx-bath
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bed"></i> bx bx-bed
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-area"></i> bx bx-area
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bot"></i> bx bx-bot
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dumbbell"></i> bx bx-dumbbell
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-check-double"></i> bx bx-check-double
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bus"></i> bx bx-bus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-check-circle"></i> bx bx-check-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rocket"></i> bx bx-rocket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-certification"></i> bx bx-certification
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-slider-alt"></i> bx bx-slider-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sad"></i> bx bx-sad
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-meh"></i> bx bx-meh
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-happy"></i> bx bx-happy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cart-alt"></i> bx bx-cart-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-car"></i> bx bx-car
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-loader-alt"></i> bx bx-loader-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-loader-circle"></i> bx bx-loader-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wrench"></i> bx bx-wrench
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-alarm-off"></i> bx bx-alarm-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-layout"></i> bx bx-layout
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dock-left"></i> bx bx-dock-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dock-top"></i> bx bx-dock-top
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dock-right"></i> bx bx-dock-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dock-bottom"></i> bx bx-dock-bottom
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dock-bottom"></i> bx bx-dock-bottom
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-world"></i> bx bx-world
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-selection"></i> bx bx-selection
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-paper-plane"></i> bx bx-paper-plane
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-slider"></i> bx bx-slider
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-loader"></i> bx bx-loader
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chalkboard"></i> bx bx-chalkboard
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-trash-alt"></i> bx bx-trash-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-grid-alt"></i> bx bx-grid-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-command"></i> bx bx-command
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-window-close"></i> bx bx-window-close
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-notification-off"></i> bx bx-notification-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-plug"></i> bx bx-plug
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-infinite"></i> bx bx-infinite
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-carousel"></i> bx bx-carousel
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-hourglass"></i> bx bx-hourglass
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-briefcase-alt"></i> bx bx-briefcase-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wallet"></i> bx bx-wallet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-station"></i> bx bx-station
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-collection"></i> bx bx-collection
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-tv"></i> bx bx-tv
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-closet"></i> bx bx-closet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-paperclip"></i> bx bx-paperclip
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-expand"></i> bx bx-expand
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pen"></i> bx bx-pen
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-purchase-tag"></i> bx bx-purchase-tag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-images"></i> bx bx-images
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pie-chart-alt"></i> bx bx-pie-chart-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-news"></i> bx bx-news
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-downvote"></i> bx bx-downvote
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-upvote"></i> bx bx-upvote
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-globe-alt"></i> bx bx-globe-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-store"></i> bx bx-store
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-hdd"></i> bx bx-hdd
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-skip-previous-circle"></i> bx bx-skip-previous-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-skip-next-circle"></i> bx bx-skip-next-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chip"></i> bx bx-chip
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cast"></i> bx bx-cast
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-body"></i> bx bx-body
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-phone-outgoing"></i> bx bx-phone-outgoing
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-phone-incoming"></i> bx bx-phone-incoming
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-collapse"></i> bx bx-collapse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rename"></i> bx bx-rename
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rotate-right"></i> bx bx-rotate-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-horizontal-center"></i> bx bx-horizontal-center
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-ruler"></i> bx bx-ruler
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-import"></i> bx bx-import
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calendar-alt"></i> bx bx-calendar-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-battery"></i> bx bx-battery
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-server"></i> bx bx-server
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-task"></i> bx bx-task
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-folder-open"></i> bx bx-folder-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-film"></i> bx bx-film
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-aperture"></i> bx bx-aperture
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-phone-call"></i> bx bx-phone-call
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-up-arrow"></i> bx bx-up-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-undo"></i> bx bx-undo
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-timer"></i> bx bx-timer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-support"></i> bx bx-support
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-subdirectory-right"></i> bx bx-subdirectory-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-right-arrow"></i> bx bx-
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-"></i> bx bx-right-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-revision"></i> bx bx-revision
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-repost"></i> bx bx-repost
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-reply"></i> bx bx-reply
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-reply-all"></i> bx bx-reply-all
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-redo"></i> bx bx-redo
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-radar"></i> bx bx-radar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-poll"></i> bx bx-poll
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-list-check"></i> bx bx-list-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-like"></i> bx bx-like
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-left-arrow"></i> bx bx-left-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-joystick-alt"></i> bx bx-joystick-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-history"></i> bx bx-history
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-flag"></i> bx bx-flag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-first-aid"></i> bx bx-first-aid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-export"></i> bx bx-export
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-down-arrow"></i> bx bx-down-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dislike"></i> bx bx-dislike
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-crown"></i> bx bx-crown
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-barcode"></i> bx bx-barcode
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user"></i> bx bx-user
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user-x"></i> bx bx-user-x
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user-plus"></i> bx bx-user-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user-minus"></i> bx bx-user-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user-circle"></i> bx bx-user-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-user-check"></i> bx bx-user-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-underline"></i> bx bx-underline
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-trophy"></i> bx bx-trophy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-trash"></i> bx bx-trash
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-text"></i> bx bx-text
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sun"></i> bx bx-sun
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-star"></i> bx bx-star
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sort"></i> bx bx-sort
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shuffle"></i> bx bx-shuffle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shopping-bag"></i> bx bx-shopping-bag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shield"></i> bx bx-shield
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-shield-alt"></i> bx bx-shield-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-share"></i> bx bx-share
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-share-alt"></i> bx bx-share-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-select-multiple"></i> bx bx-select-multiple
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-screenshot"></i> bx bx-screenshot
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-save"></i> bx bx-save
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pulse"></i> bx bx-pulse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-power-off"></i> bx bx-power-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-plus"></i> bx bx-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pin"></i> bx bx-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pencil"></i> bx bx-pencil
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pin"></i> bx bx-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pencil"></i> bx bx-pencil
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-paste"></i> bx bx-paste
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-paragraph"></i> bx bx-paragraph
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-package"></i> bx bx-package
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-notification"></i> bx bx-notification
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-music"></i> bx bx-music
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-move"></i> bx bx-move
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-mouse"></i> bx bx-mouse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-minus"></i> bx bx-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-microphone-off"></i> bx bx-microphone-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-log-out"></i> bx bx-log-out
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-log-in"></i> bx bx-log-in
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-link-external"></i> bx bx-link-external
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-joystick"></i> bx bx-joystick
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-italic"></i> bx bx-italic
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-home-alt"></i> bx bx-home-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-heading"></i> bx bx-heading
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-hash"></i> bx bx-hash
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-group"></i> bx bx-group
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-git-repo-forked"></i> bx bx-git-repo-forked
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-git-pull-request"></i> bx bx-git-pull-request
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-git-merge"></i> bx bx-git-merge
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-git-compare"></i> bx bx-git-compare
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-git-commit"></i> bx bx-git-commit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-git-branch"></i> bx bx-git-branch
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-font"></i> bx bx-font
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-filter"></i> bx bx-filter
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-file"></i> bx bx-file
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-edit"></i> bx bx-edit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-diamond"></i> bx bx-diamond
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-detail"></i> bx bx-detail
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cut"></i> bx bx-cut
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cube"></i> bx bx-cube
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-crop"></i> bx bx-crop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-credit-card"></i> bx bx-credit-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-columns"></i> bx bx-columns
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cog"></i> bx bx-cog
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud-snow"></i> bx bx-cloud-snow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud-rain"></i> bx bx-cloud-rain
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud-lightning"></i> bx bx-cloud-lightning
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud-light-rain"></i> bx bx-cloud-light-rain
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud-drizzle"></i> bx bx-cloud-drizzle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-check"></i> bx bx-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cart"></i> bx bx-cart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calculator"></i> bx bx-calculator
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bold"></i> bx bx-bold
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-award"></i> bx bx-award
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-anchor"></i> bx bx-anchor
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-album"></i> bx bx-album
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-adjust"></i> bx bx-adjust
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-x"></i> bx bx-x
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-table"></i> bx bx-table
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-duplicate"></i> bx bx-duplicate
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-windows"></i> bx bx-windows
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-window"></i> bx bx-window
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-window-open"></i> bx bx-window-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-wifi"></i> bx bx-wifi
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-voicemail"></i> bx bx-voicemail
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-video-off"></i> bx bx-video-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-usb"></i> bx bx-usb
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-upload"></i> bx bx-upload
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-alarm"></i> bx bx-alarm
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-tennis-ball"></i> bx bx-tennis-ball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-target-lock"></i> bx bx-target-lock
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-tag"></i> bx bx-tag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-tab"></i> bx bx-tab
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-spreadsheet"></i> bx bx-spreadsheet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sitemap"></i> bx bx-sitemap
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sidebar"></i> bx bx-sidebar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-send"></i> bx bx-send
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pie-chart"></i> bx bx-pie-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-phone"></i> bx bx-phone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-navigation"></i> bx bx-navigation
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-mobile"></i> bx bx-mobile
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-mobile-alt"></i> bx bx-mobile-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message"></i> bx bx-message
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-message-rounded"></i> bx bx-message-rounded
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-map"></i> bx bx-map
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-map-alt"></i> bx bx-map-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-lock"></i> bx bx-lock
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-lock-open"></i> bx bx-lock-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-list-minus"></i> bx bx-list-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-list-ul"></i> bx bx-list-ul
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-list-plus"></i> bx bx-list-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-link"></i> bx bx-link
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-link-alt"></i> bx bx-link-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-layer"></i> bx bx-layer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-laptop"></i> bx bx-laptop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-home"></i> bx bx-home
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-heart"></i> bx bx-heart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-headphone"></i> bx bx-headphone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-devices"></i> bx bx-devices
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-globe"></i> bx bx-globe
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-gift"></i> bx bx-gift
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-envelope"></i> bx bx-envelope
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-download"></i> bx bx-download
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dots-vertical"></i> bx bx-dots-vertical
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dots-vertical-rounded"></i> bx bx-dots-vertical-rounded
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dots-horizontal"></i> bx bx-dots-horizontal
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dots-horizontal-rounded"></i> bx bx-dots-horizontal-rounded
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-dollar"></i> bx bx-dollar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-directions"></i> bx bx-directions
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-desktop"></i> bx bx-desktop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-data"></i> bx bx-data
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-compass"></i> bx bx-compass
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-crosshair"></i> bx bx-crosshair
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-terminal"></i> bx bx-terminal
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud"></i> bx bx-cloud
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud-upload"></i> bx bx-cloud-upload
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-cloud-download"></i> bx bx-cloud-download
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chart"></i> bx bx-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calendar"></i> bx bx-calendar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calendar-x"></i> bx bx-calendar-x
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calendar-minus"></i> bx bx-calendar-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calendar-check"></i> bx bx-calendar-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-calendar-plus"></i> bx bx-calendar-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-buoy"></i> bx bx-buoy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bulb"></i> bx bx-bulb
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bluetooth"></i> bx bx-bluetooth
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bug"></i> bx bx-bug
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-building"></i> bx bx-building
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-broadcast"></i> bx bx-broadcast
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-briefcase"></i> bx bx-briefcase
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bookmark-plus"></i> bx bx-bookmark-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bookmark-minus"></i> bx bx-bookmark-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-"></i> bx bx-
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-book"></i> bx bx-book
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-book-bookmark"></i> bx bx-book-bookmark
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-block"></i> bx bx-block
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-basketball"></i> bx bx-basketball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bar-chart"></i> bx bx-bar-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bar-chart-square"></i> bx bx-bar-chart-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bar-chart-alt"></i> bx bx-bar-chart-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-at"></i> bx bx-at
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-archive"></i> bx bx-archive
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-zoom-out"></i> bx bx-zoom-out
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-zoom-in"></i> bx bx-zoom-in
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-x-circle"></i> bx bx-x-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-volume"></i> bx bx-volume
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-volume-mute"></i> bx bx-volume-mute
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-volume-low"></i> bx bx-volume-low
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-volume-full"></i> bx bx-volume-full
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-video"></i> bx bx-video
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-vertical-center"></i> bx bx-vertical-center
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-up-arrow-circle"></i> bx bx-up-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-trending-up"></i> bx bx-trending-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-trending-down"></i> bx bx-trending-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-toggle-right"></i> bx bx-toggle-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-toggle-left"></i> bx bx-toggle-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-time"></i> bx bx-time
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-sync"></i> bx bx-sync
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-stopwatch"></i> bx bx-stopwatch
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-stop"></i> bx bx-stop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-stop-circle"></i> bx bx-stop-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-skip-previous"></i> bx bx-skip-previous
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-skip-next"></i> bx bx-skip-next
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-show"></i> bx bx-show
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-search"></i> bx bx-search
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rss"></i> bx bx-rss
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-right-top-arrow-circle"></i> bx bx-right-top-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-right-indent"></i> bx bx-right-indent
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-right-down-arrow-circle"></i> bx bx-right-down-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-right-arrow-circle"></i> bx bx-right-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-reset"></i> bx bx-reset
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rewind"></i> bx bx-rewind
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-rectangle"></i> bx bx-rectangle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-radio-circle"></i> bx bx-radio-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-radio-circle-marked"></i> bx bx-radio-circle-marked
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-question-mark"></i> bx bx-question-mark
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-plus-circle"></i> bx bx-plus-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-play"></i> bx bx-play
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-play-circle"></i> bx bx-play-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pause"></i> bx bx-pause
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-pause-circle"></i> bx bx-pause-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-moon"></i> bx bx-moon
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-minus-circle"></i> bx bx-minus-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-microphone"></i> bx bx-microphone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-menu"></i> bx bx-menu
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-left-top-arrow-circle"></i> bx bx-left-top-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-left-indent"></i> bx bx-left-indent
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-left-down-arrow-circle"></i> bx bx-left-down-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-left-arrow-circle"></i> bx bx-left-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-last-page"></i> bx bx-last-page
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-key"></i> bx bx-key
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-align-justify"></i> bx bx-align-justify
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-info-circle"></i> bx bx-info-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-image"></i> bx bx-image
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-hide"></i> bx bx-hide
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-fullscreen"></i> bx bx-fullscreen
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-folder"></i> bx bx-folder
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-folder-plus"></i> bx bx-folder-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-folder-minus"></i> bx bx-folder-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-first-page"></i> bx bx-first-page
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-fast-forward"></i> bx bx-fast-forward
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-fast-forward-circle"></i> bx bx-fast-forward-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-exit-fullscreen"></i> bx bx-exit-fullscreen
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-error"></i> bx bx-error
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-error-circle"></i> bx bx-error-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-down-arrow-circle"></i> bx bx-down-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-copyright"></i> bx bx-copyright
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-copy"></i> bx bx-copy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-coffee"></i> bx bx-coffee
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-code"></i> bx bx-code
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-code-curly"></i> bx bx-code-curly
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-clipboard"></i> bx bx-clipboard
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevrons-left"></i> bx bx-chevrons-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevrons-right"></i> bx bx-chevrons-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevrons-up"></i> bx bx-chevrons-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevrons-down"></i> bx bx-chevrons-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevron-right"></i> bx bx-chevron-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevron-left"></i> bx bx-chevron-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevron-up"></i> bx bx-chevron-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-chevron-down"></i> bx bx-chevron-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-checkbox-square"></i> bx bx-checkbox-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-checkbox"></i> bx bx-checkbox
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-checkbox-checked"></i> bx bx-checkbox-checked
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-captions"></i> bx bx-captions
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-camera"></i> bx bx-camera
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-camera-off"></i> bx bx-camera-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bullseye"></i> bx bx-bullseye
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bookmarks"></i> bx bx-bookmarks
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bookmark"></i> bx bx-bookmark
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bell"></i> bx bx-bell
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bell-plus"></i> bx bx-bell-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bell-off"></i> bx bx-bell-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-bell-minus"></i> bx bx-bell-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-arrow-back"></i> bx bx-arrow-back
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-align-right"></i> bx bx-align-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-align-middle"></i> bx bx-align-middle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bx-align-left"></i> bx bx-align-left
              </div>
            </div>
            <!-- end row -->

            <h5 class="mt-5">Solid Icons</h5>
            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-wink-tongue"></i> bx bxs-wink-tongue
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-upside-down"></i> bx bxs-upside-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-happy-alt"></i> bx bxs-happy-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-laugh"></i> bx bxs-laugh
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-meh-blank"></i> bx bxs-meh-blank
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cool"></i> bx bxs-cool
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-tired"></i> bx bxs-tired
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-happy-beaming"></i> bx bxs-happy-beaming
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-shocked"></i> bx bxs-shocked
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-happy"></i> bx bxs-happy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-sad"></i> bx bxs-sad
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-sleepy"></i> bx bxs-sleepy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-confused"></i> bx bxs-confused
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-meh-alt"></i> bx bxs-meh-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-meh"></i> bx bxs-meh
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-smile"></i> bx bxs-smile
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-wink-smile"></i> bx bxs-wink-smile
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dizzy"></i> bx bxs-dizzy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-happy-heart-eyes"></i> bx bxs-happy-heart-eyes
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-angry"></i> bx bxs-angry
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-business"></i> bx bxs-business
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-camera-plus"></i> bx bxs-camera-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-food-menu"></i> bx bxs-food-menu
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-offer"></i> bx bxs-offer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-clinic"></i> bx bxs-clinic
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hand-left"></i> bx bxs-hand-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hand-down"></i> bx bxs-hand-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hand-right"></i> bx bxs-hand-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hand-up"></i> bx bxs-hand-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-baby-carriage"></i> bx bxs-baby-carriage
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-caret-left-circle"></i> bx bxs-caret-left-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-caret-right-circle"></i> bx bxs-caret-right-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-caret-down-circle"></i> bx bxs-caret-down-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-caret-up-circle"></i> bx bxs-caret-up-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-tone"></i> bx bxs-tone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bolt-circle"></i> bx bxs-bolt-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-city"></i> bx bxs-city
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cake"></i> bx bxs-cake
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-spa"></i> bx bxs-spa
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dish"></i> bx bxs-dish
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-fridge"></i> bx bxs-fridge
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-image-add"></i> bx bxs-image-add
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-alarm-add"></i> bx bxs-alarm-add
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-archive-out"></i> bx bxs-archive-out
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-archive-in"></i> bx bxs-archive-in
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-add-to-queue"></i> bx bxs-add-to-queue
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-check-shield"></i> bx bxs-check-shield
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-label"></i> bx bxs-label
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-face"></i> bx bxs-face
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-find"></i> bx bxs-file-find
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-extension"></i> bx bxs-extension
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-exit"></i> bx bxs-exit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-brush-alt"></i> bx bxs-brush-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-layout"></i> bx bxs-layout
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-quote-alt-right"></i> bx bxs-quote-alt-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-quote-alt-left"></i> bx bxs-quote-alt-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-mobile-vibration"></i> bx bxs-mobile-vibration
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-fast-forward-circle"></i> bx bxs-fast-forward-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-rewind-circle"></i> bx bxs-rewind-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-carousel"></i> bx bxs-carousel
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-customize"></i> bx bxs-customize
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calendar-event"></i> bx bxs-calendar-event
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calendar-check"></i> bx bxs-calendar-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calendar-x"></i> bx bxs-calendar-x
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calendar-minus"></i> bx bxs-calendar-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calendar-plus"></i> bx bxs-calendar-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calendar-alt"></i> bx bxs-calendar-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calendar"></i> bx bxs-calendar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-briefcase-alt-2"></i> bx bxs-briefcase-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bookmark-minus"></i> bx bxs-bookmark-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bookmarks"></i> bx bxs-bookmarks
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-time-five"></i> bx bxs-time-five
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-pie-chart-alt-2"></i> bx bxs-pie-chart-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-time"></i> bx bxs-time
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-timer"></i> bx bxs-timer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-stopwatch"></i> bx bxs-stopwatch
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-compass"></i> bx bxs-compass
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-check"></i> bx bxs-user-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-x"></i> bx bxs-user-x
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-grid"></i> bx bxs-grid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-zoom-out"></i> bx bxs-zoom-out
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-zoom-in"></i> bx bxs-zoom-in
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-search"></i> bx bxs-search
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bell-minus"></i> bx bxs-bell-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bell-plus"></i> bx bxs-bell-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-folder-minus"></i> bx bxs-folder-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-mobile"></i> bx bxs-mobile
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-data"></i> bx bxs-data
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-skip-next-circle"></i> bx bxs-skip-next-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-skip-previous-circle"></i> bx bxs-skip-previous-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-chalkboard"></i> bx bxs-chalkboard
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-school"></i> bx bxs-school
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-institution"></i> bx bxs-institution
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-left-down-arrow-circle"></i> bx bxs-left-down-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-left-top-arrow-circle"></i> bx bxs-left-top-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-right-down-arrow-circle"></i> bx bxs-right-down-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-right-top-arrow-circle"></i> bx bxs-right-top-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-down-arrow"></i> bx bxs-down-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-up-arrow"></i> bx bxs-up-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-left-arrow"></i> bx bxs-left-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-right-arrow"></i> bx bxs-right-arrow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-rectangle"></i> bx bxs-rectangle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-brightness"></i> bx bxs-brightness
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-brightness-half"></i> bx bxs-brightness-half
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-paint"></i> bx bxs-paint
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-credit-card"></i> bx bxs-credit-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-credit-card-alt"></i> bx bxs-credit-card-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-band-aid"></i> bx bxs-band-aid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-map-pin"></i> bx bxs-map-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-receipt"></i> bx bxs-receipt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-purchase-tag-alt"></i> bx bxs-purchase-tag-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-basket"></i> bx bxs-basket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-palette"></i> bx bxs-palette
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-plane-alt"></i> bx bxs-plane-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-component"></i> bx bxs-component
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-traffic-barrier"></i> bx bxs-traffic-barrier
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-no-entry"></i> bx bxs-no-entry
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message-alt-dots"></i> bx bxs-message-alt-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message-alt"></i> bx bxs-message-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-check-square"></i> bx bxs-check-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-notification-off"></i> bx bxs-notification-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-notification"></i> bx bxs-notification
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-log-out"></i> bx bxs-log-out
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-log-in"></i> bx bxs-log-in
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-log-out-circle"></i> bx bxs-log-out-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-log-in-circle"></i> bx bxs-log-in-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-circle"></i> bx bxs-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-doughnut-chart"></i> bx bxs-doughnut-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-building-house"></i> bx bxs-building-house
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-comment-error"></i> bx bxs-comment-error
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-voice"></i> bx bxs-user-voice
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cuboid"></i> bx bxs-cuboid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cube-alt"></i> bx bxs-cube-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-polygon"></i> bx bxs-polygon
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-square-rounded"></i> bx bxs-square-rounded
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-square"></i> bx bxs-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-error-alt"></i> bx bxs-error-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-shield-alt-2"></i> bx bxs-shield-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-paint-roll"></i> bx bxs-paint-roll
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-comment-add"></i> bx bxs-comment-add
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-droplet-half"></i> bx bxs-droplet-half
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-search-alt-2"></i> bx bxs-search-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bowling-ball"></i> bx bxs-bowling-ball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hourglass-bottom"></i> bx bxs-hourglass-bottom
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hourglass-top"></i> bx bxs-hourglass-top
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-lock-open-alt"></i> bx bxs-lock-open-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-lock-alt"></i> bx bxs-lock-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-graduation"></i> bx bxs-graduation
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-vial"></i> bx bxs-vial
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cylinder"></i> bx bxs-cylinder
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-pyramid"></i> bx bxs-pyramid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-wine"></i> bx bxs-wine
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-comment-detail"></i> bx bxs-comment-detail
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-comment-dots"></i> bx bxs-comment-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-comment"></i> bx bxs-comment
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-traffic"></i> bx bxs-traffic
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-landscape"></i> bx bxs-landscape
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-adjust-alt"></i> bx bxs-adjust-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-id-card"></i> bx bxs-id-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-parking"></i> bx bxs-parking
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-plane-land"></i> bx bxs-plane-land
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-plane-take-off"></i> bx bxs-plane-take-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-analyse"></i> bx bxs-analyse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-gif"></i> bx bxs-file-gif
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-jpg"></i> bx bxs-file-jpg
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-png"></i> bx bxs-file-png
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-txt"></i> bx bxs-file-txt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-md"></i> bx bxs-file-md
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-json"></i> bx bxs-file-json
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-js"></i> bx bxs-file-js
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-css"></i> bx bxs-file-css
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-html"></i> bx bxs-file-html
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-copy-alt"></i> bx bxs-copy-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-doc"></i> bx bxs-file-doc
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-pin"></i> bx bxs-user-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-quote-single-right"></i> bx bxs-quote-single-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-quote-single-left"></i> bx bxs-quote-single-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-ghost"></i> bx bxs-ghost
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-direction-left"></i> bx bxs-direction-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-video-recording"></i> bx bxs-video-recording
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-notepad"></i> bx bxs-notepad
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bug-alt"></i> bx bxs-bug-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-mouse-alt"></i> bx bxs-mouse-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-edit-alt"></i> bx bxs-edit-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-chat"></i> bx bxs-chat
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-book-content"></i> bx bxs-book-content
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message-square-dots"></i> bx bxs-message-square-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message-square"></i> bx bxs-message-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-slideshow"></i> bx bxs-slideshow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bank"></i> bx bxs-bank
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-wallet-alt"></i> bx bxs-wallet-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-memory-card"></i> bx bxs-memory-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-devices"></i> bx bxs-devices
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message-rounded-dots"></i> bx bxs-message-rounded-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message-dots"></i> bx bxs-message-dots
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bar-chart-alt-2"></i> bx bxs-bar-chart-alt-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-store-alt"></i> bx bxs-store-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-buildings"></i> bx bxs-buildings
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-home-circle"></i> bx bxs-home-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-pdf"></i> bx bxs-file-pdf
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-yin-yang"></i> bx bxs-yin-yang
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-ship"></i> bx bxs-ship
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-factory"></i> bx bxs-factory
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-tree"></i> bx bxs-tree
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-plane"></i> bx bxs-plane
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-rectangle"></i> bx bxs-user-rectangle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-eyedropper"></i> bx bxs-eyedroppers
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cloud-lightning"></i> bx bxs-cloud-lightning
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cloud-rain"></i> bx bxs-cloud-rain
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-eraser"></i> bx bxs-eraser
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-magic-wand"></i> bx bxs-magic-wand
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hotel"></i> bx bxs-hotel
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-color-fill"></i> bx bxs-color-fill
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-capsule"></i> bx bxs-capsule
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-flask"></i> bx bxs-flask
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-joystick-button"></i> bx bxs-joystick-button
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-direction-right"></i> bx bxs-direction-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-directions"></i> bx bxs-directions
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-megaphone"></i> bx bxs-megaphone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-keyboard"></i> bx bxs-keyboard
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-brush"></i> bx bxs-brush
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-coffee-alt"></i> bx bxs-coffee-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-badge-check"></i> bx bxs-badge-check
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-landmark"></i> bx bxs-landmark
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-gas-pump"></i> bx bxs-gas-pump
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-badge"></i> bx bxs-user-badge
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-right-arrow-square"></i> bx bxs-right-arrow-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-down-arrow-square"></i> bx bxs-down-arrow-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-up-arrow-square"></i> bx bxs-up-arrow-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-left-arrow-square"></i> bx bxs-left-arrow-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-ambulance"></i> bx bxs-ambulance
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-magnet"></i> bx bxs-magnet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-card"></i> bx bxs-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-help-circle"></i> bx bxs-help-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-note"></i> bx bxs-note
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-badge"></i> bx bxs-badge
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-flame"></i> bx bxs-flame
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-disc"></i> bx bxs-disc
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-minus-square"></i> bx bxs-minus-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-plus-square"></i> bx bxs-plus-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-x-square"></i> bx bxs-x-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs- microphone-alt"></i> bx bxs-microphone-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-image-alt"></i> bx bxs-image-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-skull"></i> bx bxs-skull
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dollar-circle"></i> bx bxs-dollar-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-film"></i> bx bxs-film
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-ball"></i> bx bxs-ball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-edit"></i> bx bxs-edit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-blank"></i> bx bxs-file-blank
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bell-ring"></i> bx bxs-bell-ring
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-photo-album"></i> bx bxs-photo-album
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-key"></i> bx bxs-key
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-video-plus"></i> bx bxs-video-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-box"></i> bx bxs-box
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-planet"></i> bx bxs-planet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-movie"></i> bx bxs-movie
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-taxi"></i> bx bxs-taxi
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-train"></i> bx bxs-train
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bath"></i> bx bxs-bath
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bed"></i> bx bxs-bed
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-area"></i> bx bxs-area
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bot"></i> bx bxs-bot
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bus"></i> bx bxs-bus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-star-half"></i> bx bxs-star-half
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-checkbox-checked"></i> bx bxs-checkbox-checked
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-checkbox"></i> bx bxs-checkbox
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-check-circle"></i> bx bxs-check-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-rocket"></i> bx bxs-rocket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-certification"></i> bx bxs-certification
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-plus"></i> bx bxs-file-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dashboard"></i> bx bxs-dashboard
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-conversation"></i> bx bxs-conversation
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-battery-low"></i> bx bxs-battery-low
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-folder-open"></i> bx bxs-folder-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-zap"></i> bx bxs-zap
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-x-circle"></i> bx bxs-x-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-wrench"></i> bx bxs-wrench
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-widget"></i> bx bxs-widget
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-watch"></i> bx bxs-watch
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-watch-alt"></i> bx bxs-watch-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-wallet"></i> bx bxs-wallet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-volume"></i> bx bxs-volume
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-volume-mute"></i> bx bxs-volume-mute
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-volume-low"></i> bx bxs-volume-low
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-volume-full"></i> bx bxs-volume-full
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-videos"></i> bx bxs-videos
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-video"></i> bx bxs-video
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-video-off"></i> bx bxs-video-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user"></i> bx bxs-user
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-plus"></i> bx bxs-user-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-minus"></i> bx bxs-user-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-detail"></i> bx bxs-user-detail
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-user-circle"></i> bx bxs-user-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-upvote"></i> bx bxs-upvote
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-up-arrow-circle"></i> bx bxs-up-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-truck"></i> bx bxs-truck
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-trophy"></i> bx bxs-trophy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-trash"></i> bx bxs-trash
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-trash-alt"></i> bx bxs-trash-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-torch"></i> bx bxs-torch
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-toggle-right"></i> bx bxs-toggle-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-to-top"></i> bx bxs-to-top
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-terminal"></i> bx bxs-terminal
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-tennis-ball"></i> bx bxs-tennis-ball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-tag"></i> bx bxs-tag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-tag-x"></i> bx bxs-tag-x
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-t-shirt"></i> bx bxs-t-shirt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-sun"></i> bx bxs-sun
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-store"></i> bx bxs-store
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-star"></i> bx bxs-star
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-spreadsheet"></i> bx bxs-spreadsheet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-show"></i> bx bxs-show
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-shopping-bag"></i> bx bxs-shopping-bag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-shopping-bag-alt"></i> bx bxs-shopping-bag-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-shield"></i> bx bxs-shield
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-share"></i> bx bxs-share
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-share-alt"></i> bx bxs-share-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-server"></i> bx bxs-server
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-send"></i> bx bxs-send
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-select-multiple"></i> bx bxs-select-multiple
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-sort-alt"></i> bx bxs-sort-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-save"></i> bx bxs-save
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-ruler"></i> bx bxs-ruler
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-right-arrow-circle"></i> bx bxs-right-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-report"></i> bx bxs-report
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-rename"></i> bx bxs-rename
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-radio"></i> bx bxs-radio
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-quote-right"></i> bx bxs-quote-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-quote-left"></i> bx bxs-quote-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-purchase-tag"></i> bx bxs-purchase-tag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-printer"></i> bx bxs-printer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-plus-circle"></i> bx bxs-plus-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-plug"></i> bx bxs-plug
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-playlist"></i> bx bxs-playlist
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-pin"></i> bx bxs-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-pie-chart"></i> bx bxs-pie-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-pie-chart-alt"></i> bx bxs-pie-chart-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-phone"></i> bx bxs-phone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-phone-outgoing"></i> bx bxs-phone-outgoing
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-phone-incoming"></i> bx bxs-phone-incoming
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-phone-call"></i> bx bxs-phone-call
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-pencil"></i> bx bxs-pencil
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-pen"></i> bx bxs-pen
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-paste"></i> bx bxs-paste
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-paper-plane"></i> bx bxs-paper-plane
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-package"></i> bx bxs-package
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-news"></i> bx bxs-news
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-navigation"></i> bx bxs-navigation
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-music"></i> bx bxs-music
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-mouse"></i> bx bxs-mouse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-moon"></i> bx bxs-moon
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-minus-circle"></i> bx bxs-minus-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-microphone"></i> bx bxs-microphone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-microphone-off"></i> bx bxs-microphone-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message"></i> bx bxs-message
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-message-rounded"></i> bx bxs-message-rounded
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-map"></i> bx bxs-map
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-map-alt"></i> bx bxs-map-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-lock"></i> bx bxs-lock
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-lock-open"></i> bx bxs-lock-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-like"></i> bx bxs-like
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-left-arrow-circle"></i> bx bxs-left-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-layer"></i> bx bxs-layer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-joystick"></i> bx bxs-joystick
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-joystick-alt"></i> bx bxs-joystick-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-info-circle"></i> bx bxs-info-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-inbox"></i> bx bxs-inbox
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-image"></i> bx bxs-image
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hourglass"></i> bx bxs-hourglass
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hot"></i> bx bxs-hot
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-home"></i> bx bxs-home
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hide"></i> bx bxs-hide
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-heart"></i> bx bxs-heart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-hdd"></i> bx bxs-hdd
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-group"></i> bx bxs-group
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-grid-alt"></i> bx bxs-grid-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-gift"></i> bx bxs-gift
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-flag"></i> bx bxs-flag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-flag-alt"></i> bx bxs-flag-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-first-aid"></i> bx bxs-first-aid
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-filter-alt"></i> bx bxs-filter-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file"></i> bx bxs-file
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file"></i> bx bxs-file
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-file-image"></i> bx bxs-file-image
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-error"></i> bx bxs-error
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-error-circle"></i> bx bxs-error-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-envelope"></i> bx bxs-envelope
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-eject"></i> bx bxs-eject
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-duplicate"></i> bx bxs-duplicate
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-droplet"></i> bx bxs-droplet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-drink"></i> bx bxs-drink
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-downvote"></i> bx bxs-downvote
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-download"></i> bx bxs-download
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-down-arrow-circle"></i> bx bxs-down-arrow-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dock-top"></i> bx bxs-dock-top
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dock-right"></i> bx bxs-dock-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dock-left"></i> bx bxs-dock-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dock-bottom"></i> bx bxs-dock-bottom
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-dislike"></i> bx bxs-dislike
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-discount"></i> bx bxs-discount
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-detail"></i> bx bxs-detail
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cube"></i> bx bxs-cube
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-crown"></i> bx bxs-crown
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-coupon"></i> bx bxs-coupon
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-copy"></i> bx bxs-copy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-contact"></i> bx bxs-contact
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-collection"></i> bx bxs-collection
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cog"></i> bx bxs-cog
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-coffee"></i> bx bxs-coffee
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cloud"></i> bx bxs-cloud
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cloud-upload"></i> bx bxs-cloud-upload
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cloud-download"></i> bx bxs-cloud-download
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-chip"></i> bx bxs-chip
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-chart"></i> bx bxs-chart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cart"></i> bx bxs-cart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-cart-alt"></i> bx bxs-cart-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-car"></i> bx bxs-car
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-captions"></i> bx bxs-captions
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-calculator"></i> bx bxs-calculator
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-buoy"></i> bx bxs-buoy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bulb"></i> bx bxs-bulb
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-building"></i> bx bxs-building
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bug"></i> bx bxs-bug
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-briefcase-alt"></i> bx bxs-briefcase-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-briefcase"></i> bx bxs-briefcase
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bookmark-star"></i> bx bxs-bookmark-star
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-book-open"></i> bx bxs-book-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bookmark-plus"></i> bx bxs-bookmark-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bookmark"></i> bx bxs-bookmark
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-book"></i> bx bxs-book
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bolt"></i> bx bxs-bolt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bell-off"></i> bx bxs-bell-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bell"></i> bx bxs-bell
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-battery-full"></i> bx bxs-battery-full
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-battery-charging"></i> bx bxs-battery-charging
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-battery"></i> bx bxs-battery
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-barcode"></i> bx bxs-barcode
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-bar-chart-square"></i> bx bxs-bar-chart-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-award"></i> bx bxs-award
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-folder-plus"></i> bx bxs-folder-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-folder"></i> bx bxs-folder
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-camera-off"></i> bx bxs-camera-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-camera"></i> bx bxs-camera
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-archive"></i> bx bxs-archive
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-album"></i> bx bxs-album
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-alarm-off"></i> bx bxs-alarm-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-alarm"></i> bx bxs-alarm
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxs-adjust"></i> bx bxs-adjust
              </div>
            </div>

            <!-- end row -->
            <h4 class="mt-5">Logos</h4>
            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-redbubble"></i> bx bxl-redbubble
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-patreon"></i> bx bxl-patreon
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-gitlab"></i> bx bxl-gitlab
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-etsy"></i> bx bxl-etsy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-figma"></i> bx bxl-figma
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-audible"></i> bx bxl-audible
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-algolia"></i> bx bxl-algolia
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-adobe"></i> bx bxl-adobe
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-pinterest-alt"></i> bx bxl-pinterest-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-imdb"></i> bx bxl-imdb
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-jquery"></i> bx bxl-jquery
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-facebook-circle"></i> bx bxl-facebook-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-instagram-alt"></i> bx bxl-instagram-alt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-flickr-square"></i> bx bxl-flickr-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-whatsapp-square"></i> bx bxl-whatsapp-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-squarespace"></i> bx bxl-squarespace
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-medium-old"></i> bx bxl-medium-old
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-mailchimp"></i> bx bxl-mailchimp
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-wix"></i> bx bxl-wix
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-trello"></i> bx bxl-trello
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-spotify"></i> bx bxl-spotify
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-soundcloud"></i> bx bxl-soundcloud
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-snapchat"></i> bx bxl-snapchat
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-less"></i> bx bxl-less
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-flickr"></i> bx bxl-flickr
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-shopify"></i> bx bxl-shopify
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-jsfiddle"></i> bx bxl-jsfiddle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-css3"></i> bx bxl-css3
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-microsoft"></i> bx bxl-microsoft
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-yahoo"></i> bx bxl-yahoo
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-bootstrap"></i> bx bxl-bootstrap
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-redux"></i> bx bxl-redux
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-mastercard"></i> bx bxl-mastercard
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-visa"></i> bx bxl-visa
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-baidu"></i> bx bxl-baidu
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-chrome"></i> bx bxl-chrome
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-dailymotion"></i> bx bxl-dailymotion
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-joomla"></i> bx bxl-joomla
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-internet-explorer"></i> bx bxl-internet-explorer
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-paypal"></i> bx bxl-paypal
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-edge"></i> bx bxl-edge
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-stripe"></i> bx bxl-stripe
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-telegram"></i> bx bxl-telegram
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-wordpress"></i> bx bxl-wordpress
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-periscope"></i> bx bxl-periscope
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-react"></i> bx bxl-react
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-bing"></i> bx bxl-bing
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-vuejs"></i> bx bxl-vuejs
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-kickstarter"></i> bx bxl-kickstarter
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-nodejs"></i> bx bxl-nodejs
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-javascript"></i> bx bxl-javascript
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-firefox"></i> bx bxl-firefox
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-stack-overflow"></i> bx bxl-stack-overflow
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-magento"></i> bx bxl-magento
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-product-hunt"></i> bx bxl-product-hunt
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-html5"></i> bx bxl-html5
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-git"></i> bx bxl-git
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-quora"></i> bx bxl-quora
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-yelp"></i> bx bxl-yelp
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-airbnb"></i> bx bxl-airbnb
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-opera"></i> bx bxl-opera
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-invision"></i> bx bxl-invision
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-foursquare"></i> bx bxl-foursquare
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-sass"></i> bx bxl-sass
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-wikipedia"></i> bx bxl-wikipedia
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-unsplash"></i> bx bxl-unsplash
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-digg"></i> bx bxl-digg
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-amazon"></i> bx bxl-amazon
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-ebay"></i> bx bxl-ebay
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-drupal"></i> bx bxl-drupal
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-dropbox"></i> bx bxl-dropbox
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-discourse"></i> bx bxl-discourse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-deviantart"></i> bx bxl-deviantart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-digitalocean"></i> bx bxl-digitalocean
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-creative-commons"></i> bx bxl-creative-commons
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-codepen"></i> bx bxl-codepen
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-angular"></i> bx bxl-angular
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-messenger"></i> bx bxl-messenger
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-pocket"></i> bx bxl-pocket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-vk"></i> bx bxl-vk
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-windows"></i> bx bxl-windows
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-play-store"></i> bx bxl-play-store
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-android"></i> bx bxl-android
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-apple"></i> bx bxl-apple
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-blogger"></i> bx bxl-blogger
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-pinterest"></i> bx bxl-pinterest
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-reddit"></i> bx bxl-reddit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-discord"></i> bx bxl-discord
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-twitch"></i> bx bxl-twitch
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-slack"></i> bx bxl-slack
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-slack-old"></i> bx bxl-slack-old
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-skype"></i> bx bxl-skype
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-medium-square"></i> bx bxl-medium-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-medium"></i> bx bxl-medium
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-linkedin-square"></i> bx bxl-linkedin-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-google-plus-circle"></i> bx bxl-google-plus-circle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-google-plus"></i> bx bxl-google-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-facebook-square"></i> bx bxl-facebook-square
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-bitcoin"></i> bx bxl-bitcoin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-linkedin"></i> bx bxl-linkedin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-vimeo"></i> bx bxl-vimeo
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-dribbble"></i> bx bxl-dribbble
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-behance"></i> bx bxl-behance
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-tumblr"></i> bx bxl-tumblr
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-whatsapp"></i> bx bxl-whatsapp
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-youtube"></i> bx bxl-youtube
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-twitter"></i> bx bxl-twitter
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-instagram"></i> bx bxl-instagram
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-google"></i> bx bxl-google
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-github"></i> bx bxl-github
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="bx bxl-facebook"></i> bx bxl-facebook
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>