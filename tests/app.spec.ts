import { mount } from '@vue/test-utils'

import app from '~/app.vue'

describe('app', async () => {
 
  const wrapper = mount(app)
  await wrapper.get('button').trigger('click')

  it('should exist', () => {
    expect(app).toBeTruthy()
  })
 
})
