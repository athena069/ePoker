const bottomComponent = Vue.component("bottom-component", {
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  methods: {
    openLink() {
      return openLink(customerServiceLink);
    },
  },
  template: `
  <v-sheet
    color="transparent"
    class="mt-auto d-flex py-10 d-flex flex-column"
    width="100%"
    v-if="isMobile"
  >
    <div class="text-center" style="margin-bottom: 8%">
      <div class="titleText--text font-weight-bold text-20">
        {{$t("bottom.str1")}}
      </div>
      <div class="contentText--text mt-1 text-14">
        {{$t("bottom.str2")}}
      </div>
    </div>
    <div class="d-flex justify-space-around mx-auto" style="width: 100%; max-width: 450px;">
      <div class="text-center pointer" @click="openLink">
        <v-img
          class="ml-4"
          max-width="65px"
          width="65px"
          src="./static/img/home/icon_tg.png"
        ></v-img>
        <div class="primary--text mt-3 text-14">
          {{$t("bottom.str3")}}
        </div>
        <div class="contentText--text mt-2 text-14">
          Telegram
        </div>
      </div>
      <div class="text-center pointer">
        <v-img
          class="ml-4"
          max-width="65px"
          width="65px"
          src="./static/img/home/icon_whatsApp.png"
        ></v-img>
        <div class="primary--text mt-3 text-14">{{$t("bottom.str3")}}</div>
        <div class="contentText--text mt-2 text-14">
          WhatsApp
        </div>
      </div>
      <div class="d-flex flex-column align-center pointer" style="width: 70px">
        <v-img
          class="ml-3"
          max-width="65px"
          width="65px"
          src="./static/img/home/icon_mail.png"
        ></v-img>
        <div class="primary--text mt-3 text-14">XXX@MAIL.COM</div>
        <div class="contentText--text mt-2 text-14 text-center">
          {{$t("bottom.str4")}}
        </div>
      </div>
    </div>
  </v-sheet>
  <v-sheet
    color="transparent"
    class="mt-auto d-flex py-10"
    width="100%"
    v-else
  >
    <div>
      <div class="titleText--text font-weight-bold text-26">
        {{$t("bottom.str1")}}
      </div>
      <div class="contentText--text mt-1">{{$t("bottom.str2")}}</div>
    </div>
    <div class="ml-auto d-flex justify-space-around" style="width: 50%">
      <div class="text-center pointer" @click="openLink">
        <v-img
          class="ml-5"
          max-width="74px"
          src="./static/img/home/icon_tg.png"
        ></v-img>
        <div class="primary--text mt-3">{{$t("bottom.str3")}}</div>
        <div class="contentText--text mt-1">Telegram</div>
      </div>
      <div class="text-center pointer">
        <v-img
          class="ml-5"
          max-width="74px"
          src="./static/img/home/icon_whatsApp.png"
        ></v-img>
        <div class="primary--text mt-3">{{$t("bottom.str3")}}</div>
        <div class="contentText--text mt-1">WhatsApp</div>
      </div>
      <div class="text-center pointer">
        <div class="d-flex align-center mx-auto" style="height: 60px; width: 74px">
          <v-img
            class="ml-2"
            max-width="100%"
            src="./static/img/home/icon_mail.png"
          ></v-img>
        </div>
        <div class="primary--text mt-3">XXX@MAIL.COM</div>
        <div class="contentText--text mt-1">{{$t("bottom.str4")}}</div>
      </div>
    </div>
  </v-sheet>
  `,
});

// export default header;
