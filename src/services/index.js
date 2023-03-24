import axios from 'axios'

export const getMemes = (
) => axios.get(
  ' https://api.imgflip.com/get_memes'
)
  .then(response => {
    return response.data.data.memes
  })
  .catch(e => {
    console.error(e)
    const error = [{
      id: 0,
      name: 'Error',
      width: 512,
      height: 341,
      url: 'https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png'
    }]
    return error
  })
