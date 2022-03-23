<template>
  <div class="card-columns">
    <bag-item v-for="(item, i) in bag" :key="i" :item="item"></bag-item>
    <button class="btn btn-success">Checkout</button>
  </div>
</template>

<script>
import BagItem from "@/components/BagItem";
import BagCollection from "@/models/BagCollection";

export default {
  name: "BagList",
  components: {BagItem},
  data() {
    return {
      bag: new BagCollection()
    }
  },
}
</script>

<style scoped>

</style>