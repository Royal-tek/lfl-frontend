<template>
  <div class="payment">
      <div class="trans">
          <h1>Click on the button below to continue</h1>
        <paystack
        buttonClass="'button-class btn btn-primary'"
        buttonText="Make Payment"
        :publicKey="publicKey"
        :email="email"
        :amount="amount"
        :reference="reference"
        :onSuccess="callback"
        :onCanel="close">Make Payment
    </paystack>
    </div>
    <!-- <button></button> -->
   </div>
</template>

<script>
// import axios from 'axios';
import paystack from "vue3-paystack";

export default {
    components: {
        paystack
    },
    computed: {
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
 
        return text;
      },
    },
    data(){
        // const user = JSON.parse(localStorage.getItem("user"))
        return {
          publicKey: "pk_live_f7ddf73d9978d268bdfcde7e999899a640c71063", //paystack public key
          email: "patrickjoseph2121@gmail.com", // Customer email
          amount: 1000 * 100, // in kobo
          closedMessage: ''
        }
    },
    methods: {
      callback(){
        // const user = JSON.parse(localStorage.getItem("user")) // getting user from localStorage
        // const totalPrice = this.$store.getters.cartTotal
        axios.post('/api/transaction/save', {})
        .then(res => {
            
        })
      },
      close(){
          this.closedMessage = "Transaction ended"
      },
      closeAlert() {
          
      }
    }
}
</script>

<style scoped>
 .payment {
     position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      height: 100%;
      overflow: auto;
      width: 100%;
      background: rgba(0,0,0,0.7);
      padding: 10px 0px;
      /* display: grid;
     place-items: center; */
 }

 h1 {
     color: #fff;
     margin-bottom: 20px;
 }

 .btn {
    padding: 7px;
    border-radius: 3px;
    border: none;
    outline: none;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;
    background-color: green;
    color: #fff;
 }

 .trans {
     display: flex;
     justify-content: center;
     align-items:center;
     height: 100%;
     flex-direction: column;
 }
</style>