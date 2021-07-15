import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/HomePage.vue';

import NotFound from '../views/NotFound.vue';
import TerminologyService from '../views/TerminologyService.vue';
import VocabularyList from '../views/terminology/VocabularyList.vue';
import VocabularyCreate from '../views/terminology/VocabularyCreate.vue';
import MaintenanceMain from '../views/terminology/MaintenanceMain.vue';

import ClinicalAnnotation from '../views/ClinicalAnnotation.vue';
import ProjectList from '../views/annotation/ProjectList.vue';
import ReviewList from '../views/annotation/ReviewList.vue';

import CohortBuilder from '../views/CohortBuilder.vue';
import CohortList from '../views/cohort/CohortList.vue';
import SubsetList from '../views/cohort/SubsetList.vue';

import SidebarStandard from '../components/sidebars/SidebarStandard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage,
  }, {
    path: '/terminology',
    component: TerminologyService,
    children: [
      {
        path: '/',
        name: 'TerminologyService',
        components: {
          default: TerminologyService,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'vocabulary',
        name: 'VocabularyList',
        components: {
          default: VocabularyList,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'maintenance',
        name: 'MaintenanceMain',
        components: {
          default: MaintenanceMain,
          sidebar: SidebarStandard,
        },
      },
    ],
  }, {
    path: '/vocabulary/create',
    name: 'VocabularyCreate',
    component: VocabularyCreate,
  }, {
    path: '/annotation',
    component: ClinicalAnnotation,
    children: [
      {
        path: '/',
        name: 'ClinicalAnnotation',
        components: {
          default: ClinicalAnnotation,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'project',
        name: 'ProjectList',
        components: {
          default: ProjectList,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'review',
        name: 'ReviewList',
        components: {
          default: ReviewList,
          sidebar: SidebarStandard,
        },
      },
    ],
  }, {
    path: '/build',
    component: CohortBuilder,
    children: [
      {
        path: '/',
        name: 'CohortBuilder',
        components: {
          default: CohortBuilder,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'subset',
        name: 'SubsetList',
        components: {
          default: SubsetList,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'cohort',
        name: 'CohortList',
        components: {
          default: CohortList,
          sidebar: SidebarStandard,
        },
      },
    ],
  }, {
    path: '/:notFound(.*)',
    component: NotFound,
  }],
});
