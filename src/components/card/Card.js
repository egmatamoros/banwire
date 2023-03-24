export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
}
