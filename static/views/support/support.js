const supportComponent = Vue.component("support-component", {
  data() {
    return {
      isHidden: true,
    };
  },
  // created() {
  //   setTimeout(() => {
  //     this.isHidden = false;
  //   }, overlayTime);
  // },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  methods: {
    openLink() {
      return openLink();
    },
    onImageLoaded() {
      // console.log('圖片載入完成');
      this.isHidden = false;
    },
  },
  template: `
  <v-sheet color="downloadBg" class="support-component" :class="{hidden: isHidden}" v-image-loaded="onImageLoaded">
    <!-- h5 -->
    <template v-if="isMobile">
      <v-sheet width="100%" class="relative d-flex justify-center">
        <img class="contain" width="100%" src="./static/img/support/h5/di.png">
        <v-sheet
          width="100%"
          height="100%"
          color="transparent"
          class="absolute d-flex flex-column align-center"
          style="padding: 5% 0 10%"
        >
          <div class="text-28">
            <span class="titleText--text">{{$t("support.str1")}}</span
            ><span class="primary--text">{{$t("support.str2")}}</span>
          </div>
          <div class="contentText--text text-14">{{$t("support.str3")}}</div>
          <v-sheet
            color="transparent"
            width="100%"
            class="d-flex justify-center"
            style="margin-top: 5%"
          >
            <v-sheet
              class="relative d-flex pointer"
              width="40%"
              max-width="150px"
              color="transparent"
              style="margin-right: 4%"
              @click="openLink"
            >
              <img
                width="100%"
                src="./static/img/support/1.png"
                class="contain"
              >
              <v-sheet
                class="absolute d-flex flex-column align-center justify-end"
                width="100%"
                height="100%"
                color="transparent"
                style="padding-bottom: 5%"
              >
                <div class="primary--text text-14">{{$t("bottom.str3")}}</div>
                <div class="contentText--text text-12">{{$t("bottom.str1")}}</div>
              </v-sheet>
            </v-sheet>
            <v-sheet
              class="relative d-flex pointer"
              width="40%"
              max-width="150px"
              color="transparent"
            >
              <img
                width="100%"
                src="./static/img/support/2.png"
                class="contain"
              >
              <v-sheet
                class="absolute d-flex flex-column align-center justify-end"
                width="100%"
                height="100%"
                color="transparent"
                style="padding-bottom: 5%"
              >
                <div class="primary--text text-14">XXX@MAIL.COM</div>
                <div class="contentText--text text-12">{{$t("bottom.str4")}}</div>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet width="100%" class="relative d-flex justify-center">
        <img width="100%" src="./static/img/support/di.png">
        <v-sheet
          width="100%"
          height="100%"
          color="transparent"
          class="absolute d-flex flex-column align-center justify-center"
        >
          <div class="text-38">
            <span class="titleText--text">{{$t("support.str1")}}</span
            ><span class="primary--text">{{$t("support.str2")}}</span>
          </div>
          <div class="titleText--text">{{$t("support.str3")}}</div>
          <v-sheet
            color="transparent"
            width="100%"
            class="d-flex justify-center"
            style="margin-top: 4%"
          >
            <v-sheet class="relative d-flex pointer" width="20%" color="transparent" style="margin-right: 4%" @click="openLink">
              <img
                width="100%"
                src="./static/img/support/1.png"
              >
              <v-sheet
                class="absolute d-flex flex-column align-center justify-end"
                width="100%"
                height="100%"
                color="transparent"
                style="padding-bottom: 9%"
              >
                <div class="primary--text">{{$t("bottom.str3")}}</div>
                <div class="contentText--text">{{$t("bottom.str1")}}</div>
              </v-sheet>
            </v-sheet>
            <v-sheet class="relative d-flex pointer" width="20%" color="transparent" style="margin-right: 4%">
              <img
                width="100%"
                src="./static/img/support/2.png"
              >
              <v-sheet
                class="absolute d-flex flex-column align-center justify-end"
                width="100%"
                height="100%"
                color="transparent"
                style="padding-bottom: 9%"
              >
                <div class="primary--text">XXX@MAIL.COM</div>
                <div class="contentText--text">{{$t("bottom.str4")}}</div>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </template>
  </v-sheet>
  `,
});

// export default header;
