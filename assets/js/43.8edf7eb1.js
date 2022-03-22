(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{409:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"plan-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plan-model"}},[t._v("#")]),t._v(" Plan Model")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#create-a-plan"}},[t._v("Create a Plan")])]),s("li",[s("a",{attrs:{href:"#get-plan-details"}},[t._v("Get Plan details")])]),s("li",[s("a",{attrs:{href:"#trial-modes"}},[t._v("Trial modes")]),s("ul",[s("li",[s("a",{attrs:{href:"#if-plan-has-trial"}},[t._v("If plan has trial")])]),s("li",[s("a",{attrs:{href:"#if-plan-does-not-have-trial"}},[t._v("If plan does not have trial")])]),s("li",[s("a",{attrs:{href:"#trial-period-time-related-functions"}},[t._v("Trial period time related functions")])])])]),s("li",[s("a",{attrs:{href:"#tiers"}},[t._v("Tiers")]),s("ul",[s("li",[s("a",{attrs:{href:"#example"}},[t._v("Example")])])])]),s("li",[s("a",{attrs:{href:"#grace"}},[t._v("Grace")]),s("ul",[s("li",[s("a",{attrs:{href:"#grace-related-functions"}},[t._v("Grace related functions")])])])]),s("li",[s("a",{attrs:{href:"#subscription-period-time-related-functions"}},[t._v("Subscription period time related functions")])])])]),s("p"),t._v(" "),s("p",[t._v("This is the main model of the package, there is nothing without plans. After creating a plan, you\ncan "),s("RouterLink",{attrs:{to:"/v6.x/models/plan-subscription-model.html#create-a-subscription"}},[t._v("attach it to a subscription")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"create-a-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-plan"}},[t._v("#")]),t._v(" Create a Plan")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Bpuig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Subby"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Plan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tag'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'basic'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Basic Plan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'description'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'For small businesses'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'price'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'signup_fee'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'invoice_period'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'invoice_interval'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'month'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'trial_period'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'trial_interval'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'grace_period'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'grace_interval'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tier'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'currency'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'EUR'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"get-plan-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-plan-details"}},[t._v("#")]),t._v(" Get Plan details")]),t._v(" "),s("p",[t._v("You can query the plan for further details as follows:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or querying by tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'basic'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get all plan features                ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("features")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get all plan subscriptions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("subscriptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get all plan combinations")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("combinations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if the plan is free")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if the plan has trial period")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasTrial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Both "),s("code",[t._v("$plan->features")]),t._v(" and "),s("code",[t._v("$plan->subscriptions")]),t._v(" are collections, driven from relationships, and thus you can query\nthese relations as any normal Eloquent relationship. E.g. "),s("code",[t._v("$plan->features()->where('tag', 'social_profiles')->first()")]),t._v("\nor "),s("code",[t._v("$plan->getFeatureByTag('social_profiles')")]),t._v(".")]),t._v(" "),s("p",[t._v("Also read:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/v6.x/models/plan-feature-model.html#get-plan-feature-value"}},[t._v("Get Plan Feature value")])],1)]),t._v(" "),s("h2",{attrs:{id:"trial-modes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trial-modes"}},[t._v("#")]),t._v(" Trial modes")]),t._v(" "),s("p",[t._v("There are two available trial modes: "),s("code",[t._v("inside")]),t._v(" or "),s("code",[t._v("outside")]),t._v(". This defines how the trial will be counted when renewal time\nis due.")]),t._v(" "),s("p",[s("strong",[t._v("USAGE WILL NOT BE CLEARED")]),t._v(" when user has had trial time. This is what gives sense to both methods.")]),t._v(" "),s("p",[t._v("When a "),s("strong",[t._v("new subscription")]),t._v(" to a plan is made:")]),t._v(" "),s("h3",{attrs:{id:"if-plan-has-trial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-plan-has-trial"}},[t._v("#")]),t._v(" If plan has trial")]),t._v(" "),s("p",[t._v("If plan has trial, subscriber does not have subscription but only a trial. Subscription period starts and ends at "),s("code",[t._v("null")]),t._v("\nand this is considered subscription is not made. Because in a real case scenario, when a subscriber has a trial it does\nnot have a subscription yet, so the invoice period is made and charged after the trial has ended.")]),t._v(" "),s("h4",{attrs:{id:"renewal-when-trial-is-inside"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renewal-when-trial-is-inside"}},[t._v("#")]),t._v(' Renewal when trial is "inside"')]),t._v(" "),s("p",[t._v("If trial mode is "),s("code",[t._v("inside")]),t._v("; when trial ends and is renewed invoice period will have substracted the days of trial that\nhave been used.")]),t._v(" "),s("p",[s("em",[t._v("Example:")]),t._v(" 7 day trial in a 30 day subscription period.")]),t._v(" "),s("ul",[s("li",[t._v("User uses 3 days, likes the app them and renews the subscription. "),s("strong",[t._v("Result:")]),t._v(" The next subscription renewal will be in\n27 days.")]),t._v(" "),s("li",[t._v("User uses all 7 day trial. Forgets about the app and comes back a week later. "),s("strong",[t._v("Result:")]),t._v(" The next subscription\nrenewal will be in 23 days.")])]),t._v(" "),s("p",[t._v("In summary: this is "),s("strong",[t._v("NOT")]),t._v(" a free trial. User always ends up paying the full price for full period.")]),t._v(" "),s("h4",{attrs:{id:"renewal-when-trial-is-outside"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renewal-when-trial-is-outside"}},[t._v("#")]),t._v(' Renewal when trial is "outside"')]),t._v(" "),s("p",[t._v("If trial mode is "),s("code",[t._v("outside")]),t._v("; when trial ends and is renewed, invoice period will start at the moment it's renewed.")]),t._v(" "),s("p",[s("em",[t._v("Example:")]),t._v(" 7 day trial in a 30 day subscription period.")]),t._v(" "),s("ul",[s("li",[t._v("User uses 3 days, likes the app them and renews the subscription. "),s("strong",[t._v("Result:")]),t._v(" The next subscription renewal will be in\n30 days. User got 3 days for free.")]),t._v(" "),s("li",[t._v("User uses all 7 day trial. Forgets about the app and comes back a week later. "),s("strong",[t._v("Result:")]),t._v(" The next subscription\nrenewal will be in 30 days. User got 7 days for free.")])]),t._v(" "),s("p",[t._v("In summary: this is "),s("strong",[t._v("IS")]),t._v(" a free trial. User does not pay for the trial period, but for the next subscription period.")]),t._v(" "),s("h3",{attrs:{id:"if-plan-does-not-have-trial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-plan-does-not-have-trial"}},[t._v("#")]),t._v(" If plan does not have trial")]),t._v(" "),s("p",[t._v("If plan does not have trial, subscriber has subscription. Because when a plan does not have trial, a new subscription\nactivates a new invoicing period.")]),t._v(" "),s("h3",{attrs:{id:"trial-period-time-related-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trial-period-time-related-functions"}},[t._v("#")]),t._v(" Trial period time related functions")]),t._v(" "),s("p",[t._v("You can get some information about duration of your trial with:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTrialTotalDurationIn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns number of days trial lasts")]),t._v("\n")])])]),s("p",[t._v("You can use Carbon accepted intervals (in singular): "),s("code",[t._v("year")]),t._v(","),s("code",[t._v("month")]),t._v(","),s("code",[t._v("day")]),t._v(","),s("code",[t._v("hour")]),t._v(","),s("code",[t._v("minute")]),t._v(","),s("code",[t._v("second")]),t._v(","),s("code",[t._v("microsecond")]),t._v("...")]),t._v(" "),s("h2",{attrs:{id:"tiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tiers"}},[t._v("#")]),t._v(" Tiers")]),t._v(" "),s("p",[t._v("The use of tiers is "),s("strong",[t._v("optional")]),t._v('. Usually a tier is a "level" of subscription.')]),t._v(" "),s("p",[t._v("It helps with upgrading or downgrading because usually an upgrade is changed, billed and renewed instantly, and a\ndowngrade is changed and billed at the end of period (\nsee "),s("a",{attrs:{href:"https://github.com/bpuig/laravel-subby-schedule",target:"_blank",rel:"noopener noreferrer"}},[t._v("laravel-subby-schedule"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("The way it's thought is:")]),t._v(" "),s("p",[t._v("You have 3 plans: "),s("strong",[t._v("Basic")]),t._v(", "),s("strong",[t._v("Intermediate")]),t._v(" and "),s("strong",[t._v("Pro")]),t._v(". How do you now which is better than the other? You can look\nat the price.")]),t._v(" "),s("p",[t._v("But... what if there is a promo during some time and the price of "),s("strong",[t._v("Intermediate")]),t._v(" is lower now than "),s("strong",[t._v("Basic")]),t._v(" will be\nnext month when there is no promo? When you change the subscription plan from your promo "),s("strong",[t._v("Intermediate")]),t._v(" to "),s("strong",[t._v("Basic")]),t._v("\nnormally would be a downgrade, but now prices are reversed and action is an upgrade. Weird, huh?")]),t._v(" "),s("p",[t._v("What if you customize your user subscription and now it is somewhere in the middle between "),s("strong",[t._v("Intermediate")]),t._v(" and "),s("strong",[t._v("Pro")]),t._v("?\nYou can change the tier to a number in between, so you know what to do when changing (downgrading) to existing\nIntermediate or upgrading to Pro.")]),t._v(" "),s("p",[t._v("Comparing tier numbers, you can know which subscription or plan is superior to another.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example comparing current plan subscription to another plan")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("tier")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$newPlan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("tier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myUpgradeFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myDowngradeFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"grace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grace"}},[t._v("#")]),t._v(" Grace")]),t._v(" "),s("p",[t._v("Grace period is the extra time the subscription will be considered active after it has ended. By default is disabled,\nyou can set it when creating the plan with a "),s("code",[t._v("grace_period")]),t._v(" and "),s("code",[t._v("grace_interval")]),t._v(". It will be inherited by new subscriptions\nand also will be synchronized when using "),s("code",[t._v("syncPlan")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"grace-related-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grace-related-functions"}},[t._v("#")]),t._v(" Grace related functions")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasGrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns boolean indicating if plan has grace period")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGraceTotalDurationIn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns duration integer in set Carbon interval (second, day, month...)")]),t._v("\n")])])]),s("h2",{attrs:{id:"subscription-period-time-related-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscription-period-time-related-functions"}},[t._v("#")]),t._v(" Subscription period time related functions")]),t._v(" "),s("p",[t._v("You can get some information about duration of the subscription with:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSubscriptionTotalDurationIn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns number of days subscription lasts")]),t._v("\n")])])]),s("p",[t._v("You can use Carbon accepted intervals (in singular): "),s("code",[t._v("year")]),t._v(","),s("code",[t._v("month")]),t._v(","),s("code",[t._v("day")]),t._v(","),s("code",[t._v("hour")]),t._v(","),s("code",[t._v("minute")]),t._v(","),s("code",[t._v("second")]),t._v(","),s("code",[t._v("microsecond")]),t._v("...")])])}),[],!1,null,null,null);a.default=n.exports}}]);