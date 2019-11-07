// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Journées Informatiques",

  transformers: {
    remark: {
      // global remark options
    }
  },
  plugins: [
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Journées Informatiques",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        serviceWorkerPath: "service-worker.js",
        shortName: "JI13",
        themeColor: "#D93848",
        backgroundColor: "#ffffff",
        icon: "/assets/img/logo.png" // must be supplied!
      }
    },

    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "src/content/blog/**/*.md",
        route: "/blog/:slug",
        remark: {}
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-150373267-1"
      }
    }
  ]
};
