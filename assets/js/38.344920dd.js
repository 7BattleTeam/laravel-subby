(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{403:function(a,s,t){"use strict";t.r(s);var e=t(45),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("p",[a._v("Install the package via composer:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require bpuig/laravel-subby\n")])])]),t("p",[a._v("Publish the configuration:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("php artisan vendor:publish --tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("subby.config\n")])])]),t("p",[a._v("Publish migrations:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("php artisan vendor:publish --tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("subby.migrations\n")])])]),t("p",[a._v("Migrate:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("php artisan migrate\n")])])]),t("h1",{attrs:{id:"upgrade-from-v5-x-to-dev"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-v5-x-to-dev"}},[a._v("#")]),a._v(" Upgrade from v5.x to dev")]),a._v(" "),t("p",[a._v("This package need to be upgraded version by version to apply database changes. See "),t("RouterLink",{attrs:{to:"/v6.x/install/migrate-v6.html"}},[a._v("migrate v6.x")]),a._v(" for breaking\nchanges.")],1),a._v(" "),t("h1",{attrs:{id:"attach-subscriptions-to-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attach-subscriptions-to-model"}},[a._v("#")]),a._v(" Attach Subscriptions to model")]),a._v(" "),t("p",[t("strong",[a._v("Laravel Subby")]),a._v(" has been specially made for Eloquent. To add Subscription functionality to your User model just use\nthe "),t("code",[a._v("\\Bpuig\\Subby\\Traits\\HasSubscriptions")]),a._v(" trait like this:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Models")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Bpuig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Subby"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Traits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("HasSubscriptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Foundation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("User")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" Authenticatable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[a._v("User")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Authenticatable")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("HasSubscriptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("That's it, we only have to use that trait in our User model or any other model! Now your users may subscribe to plans.\nThen you can import package's models wherever you need them or extend them in your own models.")])])}),[],!1,null,null,null);s.default=n.exports}}]);