<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <a class="fa-solid fa-house"></a>
        {{ config.title }}</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            v-for="(menu, index) in config.menus"
            :key="index"
            class="nav-item"
          >
            <a class="nav-link" aria-current="page" :href="menu.url">
              {{ menu.title }}</a
            >
          </li>
        </ul>
      </div>
      <button class="btn d-none d-lg-block">로그아웃</button>
    </div>
  </nav>
</template>

<script setup>
import config from '@/config';
</script>

<style></style>
