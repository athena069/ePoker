var i18n = new VueI18n({
  locale: localStorage.getItem("language") || "zh",
  messages: {
    en,
    zh,
  },
});

var routes = [
  { path: "*", redirect: "/" },
  { path: "/", component: homeComponent },
  { path: "/download", component: downloadComponent },
  { path: "/about", component: aboutComponent },
  { path: "/support", component: supportComponent },
  { path: "/use", component: useComponent },
];

var router = new VueRouter({
  routes,
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  el: "#app",
  i18n,
  vuetify,
  router,
  components: {
    "header-component": headerComponent,
    "footer-component": footerComponent,
    "bottom-component": bottomComponent,
  },

  data() {
    return {
      downloadDialog: false,
      qr: null,
    };
  },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
    operatingSystem() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // 判斷iOS
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }
      // 判斷Android
      if (/android/i.test(userAgent)) {
        return "Android";
      }
      return "unknown";
    },

    btnOptions() {
      return [
        {
          icon: "./static/img/home/icon_qlb.png",
          i18nKey: "home.menu.str3",
          event: this.test1,
          bgColor: "#867cb9",
          textColor: "#33286f",
          key: "key1",
          isShow: this.operatingSystem == "unknown" || this.operatingSystem == "iOS",
        },
        {
          icon: "./static/img/home/icon_ptxz.png",
          i18nKey: "home.menu.str2",
          event: this.test2,
          bgColor: "#c9a17e",
          textColor: "#563518",
          key: "key2",
          isShow: this.operatingSystem == "unknown" || this.operatingSystem == "iOS",
        },
        {
          icon: "./static/img/home/icon_az1.png",
          i18nKey: "home.menu.str1",
          event: this.test3,
          bgColor: "#74b654",
          textColor: "#295514",
          key: "key3",
          isShow: this.operatingSystem == "unknown" || this.operatingSystem == "Android",
        },
        // {
        //   icon: "./static/img/home/icon_ewm.png",
        //   i18nKey: "home.menu.str4",
        //   event: () => {},
        //   bgColor: "#c8cbd4",
        //   textColor: "",
        //   key: "key4",
        //   isShow: !this.isMobile,
        // },
      ];
    },
  },
  methods: {
    test1() {
      console.log("test1");
    },
    test2() {
      console.log("test2");
    },
    test3() {
      console.log("test3");
    },
    shiwDownloadDialog() {
      this.downloadDialog = true;
      this.qr = qrImg;
    },
  },
}).$mount("#app");
