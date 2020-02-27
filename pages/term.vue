<template>
  <div id="page-parallax">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <v-flex lg12>
          <VueTerminal ref="term"
                       prompt="$"
                       status="my custom status"
                       intro="my custom intro"
                       initialCommand="my initial command"
                       @command="onCliCommand"></VueTerminal>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<!--

  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>


        <VueTerminal ref="term"
                     prompt="$"
                     status="my custom status"
                     intro="my custom intro"
                     initialCommand="my initial command"
                     @command="onCliCommand"></VueTerminal>

      </v-layout>
    </v-container>
  </div>

-->

<script>
  import VueTerminal from '@/components/widgets/term/VueTerminal';


  export default {
    layout: 'dashboard',
    components: {
      VueTerminal
    },
    data: () => ({
      intro: 'Hello World',
    }),
    computed: {},

    methods: {

      onCliCommand(data) {
        console.log('onCliCommand ' + data);


        if (data === 'cls') {
          this.$refs.term.cls();
        } else {
          this.$refs.term.setStatus(data);
          this.$refs.term.append('response: ' + data);
        }
      }

    },
  };
</script>
