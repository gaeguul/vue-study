<template>
  <div>
    <SongListItem
      v-for="song in songs"
      :key="song.id"
      :song="song"
      @toggle-done="(id) => $emit('toggle-done', id)"
    />
    <div>체크된 곡 수: {{ doneCount }}</div>
  </div>
</template>

<script>
import SongListItem from './SongListItem.vue';

export default {
  name: 'SongList',
  components: {
    SongListItem,
  },
  props: ['songs'],
  inject: ['doneCount'],
};
</script>
