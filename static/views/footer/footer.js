const footerComponent = Vue.component("footer-component", {
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  methods: {
    goPath(path) {
      router.push(path);
    },
    openLink() {
      return openLink(customerServiceLink);
    },
  },
  template: `
  <v-sheet
    class="d-flex flex-column align-center py-12 px-2 footer-component"
    color="footerBg"
  >
    <!-- h5 -->
    <template v-if="isMobile">
      <v-img
        max-width="100px"
        contain
        src="static/img/header/logo.png"
      ></v-img>
      <div class="contentText--text mt-8">ePOKER</div>
      <div class="titleText--text pointer text mt-2" @click="goPath('/download')">
        {{$t("footer.str1")}}
      </div>
      <div class="contentText--text mt-6">{{$t("footer.str2")}}</div>
      <div class="titleText--text pointer text mt-2" @click="openLink">{{$t("footer.str3")}}</div>
      <div class="contentText--text mt-6">{{$t("footer.str4")}}</div>
      <div class="titleText--text pointer text mt-2" @click="goPath('/about')">{{$t("footer.str5")}}</div>
      <div class="titleText--text pointer text mt-2" @click="goPath('/use')">{{$t("footer.str6")}}</div>
      <div class="contentText--text mt-8">
        {{$t("footer.str7")}}
      </div>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet
        class="d-flex"
        color="transparent"
        max-width="1140px"
        width="100%"
      >
        <div class="mr-auto">
          <v-img
            max-width="100px"
            contain
            src="static/img/header/logo.png"
          ></v-img>
          <div class="contentText--text mt-2">
            {{$t("footer.str7")}}
          </div>
        </div>
        <div class="mr-14">
          <div class="contentText--text mb-6">ePOKER</div>
          <div class="titleText--text pointer text" @click="goPath('/download')">{{$t("footer.str1")}}</div>
        </div>
        <div class="mr-14">
          <div class="contentText--text mb-6">{{$t("footer.str2")}}</div>
          <div class="titleText--text pointer text" @click="openLink">{{$t("footer.str3")}}</div>
        </div>
        <div>
          <div class="contentText--text mb-6">{{$t("footer.str4")}}</div>
          <div class="titleText--text pointer mb-2 text" @click="goPath('/about')">{{$t("footer.str5")}}</div>
          <div class="titleText--text pointer text" @click="goPath('/use')">{{$t("footer.str6")}}</div>
        </div>
      </v-sheet>
    </template>
  </v-sheet>
  `,
});

// export default header;
