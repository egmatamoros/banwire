<template>
  <div class="">
    <card
      v-for="(item, key) in paginatedList"
      :key="key"
      :title="item.name"
      :subtitle="`${item.width}x${item.height}`"
      :image-url="item.url"
    />
    <div class="pagination">
      <a @click="currentPage === 1 ? null : currentPage = 1" :class="{ disabled: currentPage === 1 }"> &laquo; </a>
      <a @click=" currentPage === 1 ? null : currentPage--" :class="{ disabled: currentPage === 1 }"> &lt; </a>
      <div class="numbers">
        <a
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </a>
      </div>
      <a @click="currentPage === totalPages ? null : currentPage++" :class="{ disabled: currentPage === totalPages }">
        &gt;
      </a>
      <a
        @click="currentPage === totalPages ? null : currentPage = totalPages" :class="{ disabled: currentPage === totalPages }"
      >
        &raquo;
      </a>
    </div>
  </div>
</template>

<script src="./Pagination.js"/>

<style src="./Pagination.scss" lang="scss" scoped/>
