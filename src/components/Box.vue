<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Box",
});
</script>

<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<style scoped>
.box {
  background: #35495e;
}
</style>
