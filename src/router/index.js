import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import DoctorDashboard from "@/views/DoctorDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/DoctorDashboard",
    name: "DoctorDashboard",
    component: DoctorDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
