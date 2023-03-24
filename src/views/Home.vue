<template>
  <div class="home">
    <div class="topnav">
      <span>
        <img :src="require('@/assets/logo.png')" width="40px">
        Memes
      </span>
      <input type="text" placeholder="Search" v-model="keywords" @keyup="search()">
    </div>
    <pagination
      :listMemes="listShowMemes"
    />
  </div>
</template>

<script>
import { getMemes } from '@/services'
import Pagination from '@/components/pagination/Pagination.vue'

export default {
  scrollBehavior: 'top',
  name: 'Home',
  components: {
    Pagination
  },
  data: () => ({
    listAllMemes: [],
    listShowMemes: [],
    keywords: '',
    error: [{
      id: 0,
      name: 'No results match your search',
      width: 512,
      height: 341,
      url: 'https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png'
    }]
  }),
  methods: {
    search () {
      const array = this.listAllMemes
      if (this.keywords === '') {
        this.listShowMemes = this.listAllMemes
      } else {
        this.listShowMemes = array.filter(obj => obj.name.toLowerCase().includes(this.keywords.toLowerCase()))
        if (this.listShowMemes.length === 0) {
          this.listShowMemes = this.error
        }
      }
    }
  },
  async created () {
    this.listShowMemes = await getMemes()
    this.listAllMemes = await getMemes()
  }
}
</script>
<style lang="scss" scoped>
.home{
  background-color: #F5F5F5;
}
.topnav {
  overflow: hidden;
  background-color: purple;
  height: 60px;
  margin:0;
  display: flex;
  justify-content: space-between;
  span{
    color: white;
    font-size: 20pt;
    text-align: start;
    font-weight: bold ;
    margin: 10px;
  }
}
.topnav input[type=text] {
  float: right;
  padding: 6px;
  border: none;
  margin: 10px;
  font-size: 17px;
}
</style>
