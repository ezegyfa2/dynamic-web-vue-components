<template lang="pug">
  include Template
</template>

<script>
  export default {
      props: {
          title_section: {
            type: Object
          },
          images: {
            type: Array
          }
      }
  }
</script>

<style lang="scss" scoped>
  @import "Style";
</style>