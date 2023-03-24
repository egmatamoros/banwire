/* eslint-disable no-undef */
import axios from 'axios'
import { getMemes } from '.'

jest.mock('axios')

describe('getMemes', () => {
  it('should return an array of memes', async () => {
    const mockMemes = [
      {
        id: '61579',
        name: 'One Does Not Simply',
        url: 'https://i.imgflip.com/1bij.jpg',
        width: 568,
        height: 335,
        box_count: 2
      },
      {
        id: '101470',
        name: 'Ancient Aliens',
        url: 'https://i.imgflip.com/26am.jpg',
        width: 500,
        height: 437,
        box_count: 2
      }
      // probably a lot more memes here..
    ]
    axios.get.mockResolvedValue({ data: { data: { memes: mockMemes } } })

    const memes = await getMemes()

    expect(memes).toEqual(mockMemes)
  })

  it('should return an error meme if the API call fails', async () => {
    const mockError = new Error('Network Error')
    axios.get.mockRejectedValue(mockError)

    const error = await getMemes()

    expect(error).toEqual([
      {
        id: 0,
        name: 'Error',
        width: 512,
        height: 341,
        url:
          'https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png'
      }
    ])
  })
})
