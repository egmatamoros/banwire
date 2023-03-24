import Card from '@/components/card/Card.vue'

export default {
  scrollBehavior: 'top',
  name: 'Pagination',
  components: {
    Card
  },
  props: {
    listMemes: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    currentPage: 1
  }),
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  },
  watch: {
    currentPage () {
      this.scrollToTop()
    }
  },
  computed: {
    paginatedList () {
      const startIndex = (this.currentPage - 1) * 10
      const endIndex = startIndex + 10
      return this.listMemes.slice(startIndex, endIndex)
    },
    totalPages () {
      return Math.ceil(this.listMemes.length / 10)
    }
  }
}
