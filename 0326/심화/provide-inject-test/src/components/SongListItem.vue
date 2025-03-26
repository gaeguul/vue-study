<template>
  <div @click="$emit('toggle-done', song.id)" class="pointer">
    <i :class="song.done ? icons.checked : icons.unchecked"></i>
    {{ song.title }}
  </div>
</template>

<script>
export default {
  name: 'SongListItem',
  props: ['song'],
  inject: ['icons'],
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
