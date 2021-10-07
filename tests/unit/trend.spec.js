import { mount } from "@vue/test-utils";
import Trend from "@/components/home/section/Trend.vue";
// import axios from 'axios';

describe("Trend.vue", () => {
  const wrapper = mount(Trend,  { mocks: { $axios: axios } });
  
  it("check title of page", () => {
    expect(wrapper.text()).toMatch("Tendance");
  });

  it("check trend data is not empty for trend section", () => {
    expect(wrapper.find(".sneakerTrend")).not.toBeUndefined();
  });
});
