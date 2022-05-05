<template>
  <div class="payment">
      <div class="close-btn">
          <span @click="$store.state.showPaymentGateway = false">
              &times;
          </span>
      </div>
      <div class="trans">
          <h1>Make payment to complete team selection process</h1>
        <paystack
        buttonClass="'button-class btn btn-primary'"
        buttonText="Make Payment"
        :publicKey="publicKey"
        :email="email"
        :amount="amount"
        :reference="reference"
        :onSuccess="callback"
        :onCancel="onCancel">Make Payment
    </paystack>
    </div>
    <!-- <button></button> -->
   </div>
</template>

<script>
import axios from 'axios';
import paystack from "vue3-paystack";

export default {
    props: ['captain'],
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
        const email = localStorage.getItem("email")
        return {
          publicKey: "pk_live_f7ddf73d9978d268bdfcde7e999899a640c71063",
          testKey: "pk_test_e91ae16de3027ab64fdeea3ee576634b03519de8", //paystack public key
          email: email, // Customer email
          amount: 1000 * 100, // in kobo
          closedMessage: ''
        }
    },
    methods: {
      callback(){
        axios.get(`https://lfl-app.herokuapp.com/api/verify/payment/${this.reference}/`)
        .then(res => {
            if(res.data.status){
              this.$store.state.showPaymentGateway = false
              this.$store.state.paymentSuccessfulMessage = "Payment of 1,000 was successful"
              axios.put(`https://lfl-app.herokuapp.com/api/userstatus/${localStorage.getItem("id")}`, {
                status: true
              })
              .then((res) => {
                console.log(res.data)
                this.$emit('save-user-team', this.captain)
              })
              .catch(err => console.log(`Error: ${err}`))
            }
        })
        .catch(err => {
          console.log(err)
        })
      },
      onCancel(){
          this.$store.state.showPaymentGateway = false
      },
      closeAlert() {
          
      }
    }
}
</script>

<style scoped>
 .payment {
    position: fixed;
    overflow: hidden;
    padding: 20px;
    z-index: 1000;
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
     font-size: 28px;
     font-family: inherit;
 }

 p {
     font-family: inherit;
 }

 .btn {
    padding: 10px 20px;
    border-radius: 3px;
    border: none;
    outline: none;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;
    background-color: #00b173;
    color: #fff;
 }

 .trans {
     display: flex;
     justify-content: center;
     align-items:center;
     height: 100%;
     flex-direction: column;
 }

 .close-btn {
     font-size: 35px;
     color: #fff;
     text-align: right;
     position: absolute;
     right: 30px;
     top: 0;
 }

 .close-btn span {
     cursor: pointer;
 }
</style>