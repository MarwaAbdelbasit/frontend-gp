import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import DoctorDashboard from "@/views/DoctorDashboard.vue";
import PatientDashboard from '@/views/PatientDashboard.vue';
import CubesGame from '@/views/CubesGame.vue';
import MusicalFingers from '@/views/MusicalFingers.vue';

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
  {
    path: "/PatientDashboard",
    name: "PatientDashboard",
    component: PatientDashboard,
  },
  {
    path: "/CubesGame",
    name: "CubesGame",
    component: CubesGame,
  },
  {
    path: "/MusicalFingers",
    name: "MusicalFingers",
    component: MusicalFingers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
