<template>
  <div class="bg">
    <LoginHeader />
    <div class="main">
      <h1 class="main__title">{{ title }}</h1>
      <p class="main__non-member">
        {{ nonState }}
        <router-link :to="changeTo" class="main__state-change" exact>{{changeState}}</router-link>
      </p>
      <LoginButton
        text="Continue with Facebook"
        icon="fab fa-facebook-square"
        link="#"
        class="facebook-button--color"
      />
      <LoginButton
        text="Continue with Google"
        icon="fab fa-google"
        link="#"
        class="google-button--color"
      />
      <LoginButton
        text="Continue with Apple"
        icon="fab fa-apple"
        link="#"
        class="apple-button--color"
      />
      <div class="main__method-div">
        <p class="main__method-divtext">or continue with email</p>
      </div>
      <div v-if="signup" class="main__input">
        <Input
          input_type="text"
          id="fname"
          tag="First Name"
          class="input__name input__name--first"
          v-bind:value="firstName"
          v-on:input="checkFirstName($event,'handleChangeStateFName')"
          v-bind:inputType=1
        />
        <Input
          input_type="text"
          id="lname"
          tag="Last Name"
          class="input__name input__name--last"
          v-bind:value="lastName"
          v-on:input="checkLastName($event,'handleChangeStateLName')"
          v-bind:inputType=2
        />
        <Input input_type="email" id="email" tag="Email" class="input__email"/>
        <div class="input__dropdown">
          <label for="countryCode" class="dropdown__label">Country</label>
          <div class="dropdown__field">
            <select name="countryCode" id="countryCode" class="dropdown__typein">
              <option value="us">+1 (US)</option>
              <option value="canana">+1 (CA)</option>
              <option value="aus">+61 AU</option>
              <option value="japan">+81 (JP)</option>
            </select>
          </div>
        </div>
        <Input input_type="tel" id="tel" tag="Mobile Number" class="input__tel"/>
        <Input
          input_type="password"
          id="pwd"
          tag="Password"
          note="<p>at least 8 characters</p>"
          isPwd
          class="input__pwd"
          v-bind:value="passWord"
          v-on:input="checkPassWord($event)"
        />
      </div>
      <div v-else class="main__input">
        <Input input_type="email" id="email" tag="Email" class="input__email"/>
        <Input
          input_type="password"
          id="pwd"
          tag="Password"
          note="<a class='input__note' href='#'>Forgot your password?</a>"
          isPwd
          class="input__pwd"
          v-bind:value="passWord"
          v-on:input="checkPassWord($event)"
        />
      </div>
      <LoginButton
        :text="title"
        icon=""
        link="#"
        class="signup-button--color"
      />
      <div v-if="signup" class="main__instruction">
        By clicking Sign up, Continue with Facebook, Continue with Google or
        Continue with Apple, you agree to our
        <a href="#" class="main__term">Terms and Conditions</a> and
        <a href="#" class="main__term">Privacy Statement</a>.
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Input from "../share/components/Input";
import LoginButton from "../share/components/LoginButton";
import Footer from "../components/Footer";
import LoginHeader from "../components/LoginHeader"
import { required} from 'vuelidate/lib/validators'
export default {
  name: "Login",
  data () {
    return{
      firstName : '',
      lastName : '',
      passWord: '',
    }
  },
  components: {
    Input,
    LoginButton,
    Footer,
    LoginHeader
  },
  props: {
    title: String,
    nonState: String,
    changeState: String,
    signup: Boolean,
    changeTo: String,
  },
  methods: {
    checkFirstName: function (event,action) {
      this.firstName = event
      let curState = this.$v.firstName.required
      if(curState){
        this.$store.dispatch(action,true)
      }  
      else{
        this.$store.dispatch(action,false)
      }    
    },
    checkLastName: function (event,action) {
      this.lastName = event
      let curState = this.$v.lastName.required
      if(curState){
        this.$store.dispatch(action,true)
      }  
      else{
        this.$store.dispatch(action,false)
      }    
    },
    checkPassWord: function(event){
      this.passWord = event
      console.log(event)
    }
  },
  validations: {
    firstName:{
      required,
    },
    lastName:{
      required,
    }
  }
};
</script>
<style scoped>
*{
  font-family: Roboto;
}

/* Start button-color */
.facebook-button--color {
  background-color: rgb(59, 89, 152);
}

.facebook-button--color:hover {
  background-color: rgb(14, 31, 86);
}

.google-button--color {
  background-color: rgb(51, 103, 214);
}

.google-button--color:hover {
  background-color: rgb(66, 133, 246);
}

.apple-button--color {
  background-color: rgb(0, 0, 0);
}

.apple-button--color:hover {
  background-color: rgb(51, 51, 51);
}

.signup-button--color {
  background-color: rgb(235, 23, 0);
}

.signup-button--color:hover {
  background-color: rgb(217, 20, 0);
}
/* End button-color */

a {
  text-decoration: none;
}
.bg {
  background-color: #f6f6f6;
  margin-top: 48px;
}
.main {
  width: 400px;
  text-align: center;
  background-color: white;
  margin: 0 auto;
  padding: 30px 20px 20px;
  box-sizing: border-box;
}
.main__non-member {
  font-size: 16px;
  font-weight: 550;
  padding: 5px 0 10px;
}
.main__state-change {
  color: #e7272d;
}
.main__method-div {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 16px auto;
}
.main__method-div:before {
  content: "";
  border-bottom: 1px solid rgb(214, 214, 214);
  position: absolute;
  left: 0px;
  right: 0px;
  top: 50%;
}
.main__non-member,
.main__method-divtext {
  color: grey;
}
.main__method-divtext {
  z-index: 1;
  padding: 0 10px;
  background-color: white;
  font-size: 14px;
}
.main__input {
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
}
.main__instruction {
  margin: 25px 0 16px;
  font-size: 14px;
  text-align: left;
  line-height: 20px;
  opacity: 90%;
}
.main__term {
  text-decoration: underline red;
  color: red;
}

.input__name {
  width: 49%;
}
.input__name--first {
  margin-right: 2%;
}
.input__tel {
  width: 62%;
}
.input__dropdown {
  margin: 5px 2% 0 0;
  width: 36%;
}
.dropdown__label {
  font-weight: bold;
  display: block;
  text-align: left;
  color: black;
}
.dropdown__field {
  background-color: #f6f6f6;
  border-radius: 7px;
  padding: 0 20px 0 10px;
  box-sizing: border-box;
  margin: 5px 0;
}
.dropdown__typein {
  background: transparent;
  border: none;
  height: 40px;
  width: 100%;
  font-size: 16px;
  margin-right: 5px;
}
.dropdown__field:focus-within {
  box-shadow: rgb(25 25 25) 0px 0px 0px 2px;
}
.dropdown__typein:focus {
  outline: none;
}

</style>