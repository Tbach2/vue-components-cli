<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in library" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie, Album} from "@/models/LibraryItems";

export default {
  name: "LibraryList",
  components: {LibraryItem},
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 234))
          .addItem(new Book('Learn Vue', 345))
          .addItem(new Movie('The Muppets', 107))
          .addItem(new Movie('Strange Brew', 97))
          .addItem(new Album('Legend', 'Bob Marley', 120)),
      page: 1
    }
  },
}
</script>

<style scoped>

</style>