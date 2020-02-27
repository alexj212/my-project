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
