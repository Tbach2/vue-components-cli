<template>
  <div class="book">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">{{item.artist}}</p>
    <p class="card-text">Runtime: {{item.runtime}}</p>
  </div>
</template>

<script>
import {Album} from "@/models/LibraryItems";

export default {
  name: "AlbumDetails",
  props: {item: Album},
}
</script>

<style scoped>

</style>