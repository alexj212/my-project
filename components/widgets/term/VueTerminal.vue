<template>
  <!--
  <div class="vue-terminal-wrapper">
  </div>
  <div style="position:absolute;top:0px;bottom:0px;left:0;right:0">
  </div>

  style="position:absolute;top:0px;bottom:0;left:0;right:0"a
  -->

  <div
    class="termpage-window"
    ref="terminal"
    style="position:absolute;top:0px;bottom:0;left:0;right:0"
    a
  ></div>
</template>

<script>
import * as term from "./termpage.js";

export default {
  name: "VueTerminal",
  data: function() {
    return {
      id: null,
      terminal: null
    };
  },

  props: {
    prompt: {
      type: String,
      default: "$"
    },
    appendHistory: {
      type: Boolean,
      default: true
    },
    echo: {
      type: Boolean,
      default: true
    },
    autoFocus: {
      type: Boolean,
      default: true
    },

    intro: {
      type: String,
      default: ""
    },
    initialCommand: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    }
  },

  methods: {
    term1ProcessInput(input = "") {
      console.log("term1ProcessInput", input);
      this.$emit("command", input);
    },

    updatePrompt(prompt) {
      this.terminal.updatePrompt(prompt);
    },

    append(output) {
      this.terminal.append(output);
    },

    cls() {
      this.terminal.cls();
    },

    setStatus(status) {
      console.log("setStatus called " + status);
      this.terminal.$status.innerHTML = status;
      //this.terminal.setStatus(prompt);
    }
  },

  mounted: function() {
    let options = {
      prompt: this.prompt,
      appendHistory: this.appendHistory,
      echo: this.echo,
      autoFocus: this.autoFocus
    };

    this.terminal = term.Termpage.init(
      this.$refs.terminal,
      this.term1ProcessInput,
      options
    );

    if (this.status !== "") {
      console.log("this.status set " + this.status);
      this.terminal.setStatus(this.status);
    }

    if (this.intro !== "") {
      console.log("this.intro set " + this.status);
      this.terminal.append(this.intro);
    }

    if (this.initialCommand !== "") {
      console.log("this.initialCommand set " + this.initialCommand);
      this.terminal.handleCommand(this.initialCommand);
    }
  }
};
</script>

<style lang="css">
.termpage-window {
  background-color: black;
  border: 12px solid #888;
  padding-top: 25px;
  padding-bottom: 65px;
  overflow-y: auto;
  max-height: calc(100% - 50px);
}

.termpage-window a {
  background-color: #888;
  text-decoration: none;
  cursor: pointer;
}

.termpage-window a:hover {
  background-color: #333;
}

.termpage-window * {
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  color: #ddd;
}

/*.termpage-status {*/
/*  background-color: black;*/
/*  border: 2px solid #888;*/
/*  padding-top: 5px;*/
/*}*/

/*.termpage-status * {*/
/*  font-family: "Courier New", Courier, monospace;*/
/*  font-size: 16px;*/
/*  color: #ddd;*/
/*}*/

.termpage-status {
  background-color: blue;
  border: 2px solid #888;
  padding-top: 2px;
  position: fixed;
  bottom: 62px;
  left: 12px;
  width: calc(100% - 24px);
  min-height: 32px;
}

.termpage-status * {
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  color: #ddd;
}

.termpage-input {
  background-color: black;
}

.termpage-input {
  background-color: #222;
  color: #ddd;
  caret-color: white;
}

.termpage-input-block {
  display: flex;
}

.termpage-input {
  border-width: 0;
  outline: 0;
  flex: 1;
  padding: 0;
}

.termpage-block,
.termpage-input {
  line-height: 20px;
}

.termpage-block {
  padding-left: 5px;
  padding-right: 5px;
}

.termpage-block {
  margin: 0;
  padding: 0;
}

pre.termpage-block {
  word-break: keep-all;
  white-space: pre-wrap !important;
}

.termpage-menu {
  background-color: #888;
}

.termpage-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.termpage-menu li:hover {
  background-color: #666;
  cursor: pointer;
}
</style>
