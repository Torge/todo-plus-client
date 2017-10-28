<template>
  <div class="card">
    <div class="card-header">
      {{title}}
    </div>
    <div class="card-body">
      Body Text
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
<style>
  .card {
    border: solid 1px;
    background: #fff;
    padding: 10px;
    text-align: left;
  }
</style>
