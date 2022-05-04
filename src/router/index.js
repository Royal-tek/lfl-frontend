import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Rules from '../views/Rules.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyTeam from '../views/MyTeam.vue'
import Ranking from '../views/Ranking.vue'
import PickTeam from '../views/PickTeam.vue'
import PostNews from '../views/PostNews.vue'
import LatestNews from '../views/LatestNews.vue'
import Logout from '../views/Logout.vue'
import CoachAdmin from '../views/CoachAdmin.vue'
import PlayerRegister from '../views/PlayerRegister.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },

  {
    path : '/postnews',
        name : 'PostNews',
        component: PostNews,
        meta:{
          enterClass:"animate__animated animate__fadeInLeft",
          leaveClass:"animate__animated animate__fadeOutRight",
        }
  },
  
  {
    path : '/latestnews',
    name : 'LatestNews',
    component: LatestNews,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },


    

  {
    path: '/review',
    name: 'Review',
    component: Contact,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
  path : '/coach-admin',
  name : 'CoachAdmin',
  component : CoachAdmin,
  meta:{
    enterClass:"animate__animated animate__fadeInLeft",
    leaveClass:"animate__animated animate__fadeOutRight",
  }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      cannotBeAccesedAfterLogin : true,
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      cannotBeAccesedAfterLogin : true,
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/myteam',
    name: 'Myteam',
    component: MyTeam,
    meta: {
      requiresLogin : true,
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/leaderboards',
    name: 'Ranking',
    component: Ranking,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/pickteam',
    name: 'PickTeam',
    component: PickTeam,
    meta:{
      requiresLogin : true,
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/player-register',
    name: 'PlayerRegister',
    component : PlayerRegister,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component : Logout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
