import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import projectuser from '@/components/projectuser'
import registered from '@/pages/login/registered'
import login from '@/pages/login/login'
import mine from '@/pages/mine/mine'
import editimg from '@/pages/mine/editimg/editimg'
import project from '@/pages/project/project'
import createproject from '@/pages/project/createproject/createproject'
import projectList from '@/pages/project/projectList/projectList'
import task from '@/pages/task/task'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/registered',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/projectuser',
      name: 'projectuser',
      component: projectuser
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/editimg',
      name: 'editimg',
      component: editimg
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/createproject',
      name: 'createproject',
      component: createproject
    },{
      path: '/projectList',
      name: 'projectList',
      component: projectList
    },
    {
      path: '/task',
      name: 'task',
      component: task
    }
  ]
})
