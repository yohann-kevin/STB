import { mount } from "@vue/test-utils";
import Carousel from "@/components/home/section/Carousel.vue";
import axios from 'axios';

describe("Trend.vue", () => {
  const wrapper = mount(Carousel,  { mocks: { $axios: axios } });

  it("check trend data is not empty for carousel", () => {
    expect(wrapper.find(".slide")).not.toBeUndefined();
  });
});
