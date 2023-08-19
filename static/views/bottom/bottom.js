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
    }
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
    <div class="d-flex justify-center">
    <div class="text-center pointer" @click="openLink">
      <v-img
        class="mx-auto"
        max-width="50px"
        src="./static/img/home/icon_tg.png"
      ></v-img>
      <div class="primary--text mt-3">
        {{$t("bottom.str3")}}
      </div>
      <div class="contentText--text mt-2 text-14">
        Telegram
      </div>
    </div>
    <v-img
      style="margin: 0 15%;"
      contain
      max-height="80px"
      max-width="1px"
      src="./static/img/home/fengexian.png"
    ></v-img>
    <div class="text-center pointer" style="width: 70px">
      <v-img
        class="mx-auto"
        max-width="50px"
        src="./static/img/home/icon_whatsApp.png"
      ></v-img>
      <div class="primary--text mt-3"">{{$t("bottom.str3")}}</div>
      <div class="contentText--text mt-2 text-14">
        WhatsApp
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
    <div class="text-center ml-auto pointer" @click="openLink">
      <v-img
        class="mx-auto"
        max-width="70px"
        src="./static/img/home/icon_tg.png"
      ></v-img>
      <div class="primary--text mt-3">{{$t("bottom.str3")}}</div>
      <div class="contentText--text">Telegram</div>
    </div>
    <v-img
      style="margin: 0 8%"
      contain
      max-height="90px"
      max-width="1px"
      src="./static/img/home/fengexian.png"
    ></v-img>
    <div class="text-center pointer">
      <v-img
        class="mx-auto"
        max-width="70px"
        src="./static/img/home/icon_whatsApp.png"
      ></v-img>
      <div class="primary--text mt-3">{{$t("bottom.str3")}}</div>
      <div class="contentText--text">WhatsApp</div>
    </div>
  </v-sheet>
  `,
});

// export default header;
