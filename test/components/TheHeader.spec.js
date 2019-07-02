import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import TheHeader from '~/app/components/TheHeader.vue'

const localVue = createLocalVue()

describe('components/TheHeader.vue', () => {
  test('TopPageへのリンクが存在する', () => {
    const wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  })
})
