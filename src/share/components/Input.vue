<template>
  <div class="input">
    <div class="input__label">
      <label v-bind:for="id" class="input__tag">{{ tag }}</label>
      <span class="input__note" v-html="note"></span>
    </div>

    <div class="input__field">
      <input ref="input" v-bind:type="type_input" v-bind:id="id" v-bind:name="id" class="input__typein" :value="value" @input="updateValue" />
      <span v-if="isPwd">
        <button v-on:click="showPwd" v-if="show" class="input__pwd-show">Show</button>
        <button v-on:click="showPwd" v-else class="input__pwd-show" >Hide</button>
      </span>
    </div>
    <!-- Required for first name -->
    <div class="error" v-if="!$store.state.fNameValid && inputType === 1">{{error}}</div>
    <!-- Required for last name -->
    <div class="error" v-if="!$store.state.lNameValid && inputType === 2">{{error}}</div>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    input_type: String,
    id: String,
    tag: String,
    note: String,
    isPwd: Boolean,
    value: String,
    inputType: Number,
  },
  data: function(){
        return {
            show: true,
            showText: true, 
            type_input: this.input_type,
            pwd: String
        }
    },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    error() {
      switch(this.inputType){
        case 1:{
          return "Field is required"
        }
        case 2:{
          return "Field is required"
        }
      }
      return ""
    }
  },
  methods: {
    showPwd: function(){
      this.show = !this.show;
      this.showText = !this.showText;
      this.type_input = this.type_input === "password" ? "text" : "password";
      this.$refs.input.focus();
    },
    updateValue(event){
      this.$emit('input',event.target.value)
    }
  }
};


</script>
<style>
.input {
  margin: 5px 0;
  width: 100%;
  text-align: center;
}
.input__label {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.input__tag {
  font-weight: bold;
  display: block;
  text-align: left;
  color: black;
}
.input__note {
  text-decoration: none;
  font-size: 14px;
  color: grey;
}

.input__field {
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 7px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 5px 0;
}
.input__typein {
  background: transparent;
  border: none;
  height: 40px;
  width: 100%;
  font-size: 16px;
  margin-right: 5px;
}
.input__field:focus-within {
  box-shadow: rgb(25 25 25) 0px 0px 0px 2px;
}
.input__typein:focus, .input__pwd-show {
  outline: none;
}
.input__pwd-show {
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

</style>