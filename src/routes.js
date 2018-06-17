import Home from "./components/Home.vue";
import Header from "./components/Header.vue";


//! LAZY LOADING components import, webpack will not put into the initial bundle, it creates extra small bundles
const User = resolve => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "user" //! Group Bundle name for lazy bundle, user will bundle all start, detail and edit
  );
};
const UserStart = resolve => {
  require.ensure(["./components/user/UserStart.vue"], () => {
      resolve(require("./components/user/UserStart.vue"));
    }, 
    "user"); //! Group Bundle name for lazy bundle, user will bundle all start, detail and edit
};
const UserEdit = resolve => {
  require.ensure(["./components/user/UserEdit.vue"], () => {
      resolve(require("./components/user/UserEdit.vue"));
    }, 
    "user"); //! Group Bundle name for lazy bundle, user will bundle all start, detail and edit
};
const UserDetail = resolve => {
  require.ensure(["./components/user/UserDetail.vue"], () => {
      resolve(require("./components/user/UserDetail.vue"));
    }, 
    "user"); //! Group Bundle name for lazy bundle, user will bundle all start, detail and edit
};

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header
    }
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header
    },
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("inside route setup");
          next();
        }
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  { path: "*", redirect: "/" }
];
