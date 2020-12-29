<template>
  <div>
    <div class="pay-done-box">
      <img src="static/img/payok.png">
      <router-link to="/"><Button type="success" size="large" long class="btn-success">支付成功</Button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayDone',
  components: {
  }
};
</script>

<style scoped>
.pay-done-box {
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
