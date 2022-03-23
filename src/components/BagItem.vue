<template>
  <div class="card" :class="{'border-success': item.isAvailable()}">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button class="btn btn-danger">Remove</button>
    </div>
  </div>
</template>

<script>
import BookDetails from "@/components/BookDetails";
import MovieDetails from "@/components/MovieDetails";
import AlbumDetails from "@/components/AlbumDetails";
export default {
  name: "BagItem",
  components: {BookDetails, MovieDetails, AlbumDetails},
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeMethod: {
      type: Function,
    }
  },
  computed: {
    typeOfItem() {
      return this.item.constructor.name + 'Details';
    }
  },
}
</script>

<style scoped>
</style>