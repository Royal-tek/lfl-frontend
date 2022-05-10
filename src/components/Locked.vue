<template>
  <div class="qrcode-page flex-center" v-if="show">
    <div class="modal-content" id="modal-content">
      
      <div class="flex-center body">
          <h1>Team selection is not available at the moment</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  components: {
    Button
  },
  data(){
    return {
      show: true
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
    .qrcode-page {
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      height: 100%;
      overflow: auto;
      width: 100%;
      background: rgba(0,0,0,0.3);
      padding: 20px 0px;
    }
    .modal-content {
      height: 630px;
      width: 40%;
      background: #fff;
      color: #262626;
      border-radius: 30px;
      padding: 20px;
      box-shadow: 0 0 6px 2px #00000035;
      /* margin-top: 10rem; */
    }
    .btns {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
        width: 300px;
    }
    .body {
        flex-direction: column;
        font-size: 30px;
    }
    
    .scroll::-webkit-scrollbar {
        width: 0.2em;
    }
    
    .scroll::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
    outline: none;
    }
</style>