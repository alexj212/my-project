<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>




      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import API from '@/api';
  import VWidget from '@/components/VWidget';
  import Material from 'vuetify/es5/util/colors';

  export default {
    layout: 'dashboard',
    components: {
      VWidget,
    },
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
      linearTrending: [
        {
          subheading: 'Sales',
          headline: '2,55',
          caption: 'increase',
          percent: 15,
          icon: {
            label: 'trending_up',
            color: 'success'
          },
          linear: {
            value: 15,
            color: 'success'
          }
        },
        {
          subheading: 'Revenue',
          headline: '6,553',
          caption: 'increase',
          percent: 10,
          icon: {
            label: 'trending_down',
            color: 'error'
          },
          linear: {
            value: 15,
            color: 'error'
          }
        },
        {
          subheading: 'Orders',
          headline: '5,00',
          caption: 'increase',
          percent: 50,
          icon: {
            label: 'arrow_upward',
            color: 'info'
          },
          linear: {
            value: 50,
            color: 'info'
          }
        }
      ],
      trending: [
        {
          subheading: 'Email',
          headline: '15+',
          caption: 'email opens',
          percent: 15,
          icon: {
            label: 'email',
            color: 'info'
          },
          linear: {
            value: 15,
            color: 'info'
          }
        },
        {
          subheading: 'Tasks',
          headline: '90%',
          caption: 'tasks completed.',
          percent: 90,
          icon: {
            label: 'list',
            color: 'primary'
          },
          linear: {
            value: 90,
            color: 'success'
          }
        },
        {
          subheading: 'Issues',
          headline: '100%',
          caption: 'issues fixed.',
          percent: 100,
          icon: {
            label: 'bug_report',
            color: 'primary'
          },
          linear: {
            value: 100,
            color: 'error'
          }
        },
      ]
    }),
    computed: {
      activity () {
        return API.getActivity();
      },
      posts () {
        return API.getPost(3);
      },
      siteTrafficData () {
        return API.getMonthVisit;
      },
      locationData () {
        return API.getLocation;
      }
    },

  };
</script>
