<template>
  <div class="card">
    <div class="card-header">
      {{ticket.number}} {{ticket.title}}
    </div>
    <div class="card-body">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['ticket']
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
