import { mount } from "@vue/test-utils"
import Test from "./Test.vue"

test("Test.vue", () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain("This is Test.vue!")
})
