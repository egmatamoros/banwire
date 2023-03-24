<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
    <img :src="imageUrl" :alt="title" />
    <a
      :href="imageUrl"
      :download="title"
      target="_blank"
    >Download</a>
  </div>
</template>

<script src="./Card.js" />
<style src="./Card.scss" lang="scss" scoped/>
