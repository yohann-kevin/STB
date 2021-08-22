import { mount, shallowMount } from "@vue/test-utils";
import Trend from "@/components/home/section/Trend.vue";
import axios from 'axios';

// describe("Trend.vue", () => {
  // const wrapper = shallowMount(Trend,  { mocks: { $axios: axios } });
  
  // it("check title of page", () => {
  //   expect(wrapper.text()).toMatch("Tendance");
  // });

  // it("check trend data is not empty for trend section", () => {
    // console.log(wrapper.vm._data.num)
    // console.log(wrapper.vm.findData())
    // console.log(wrapper.vm._data.sneakers)
    // console.log(wrapper.findAll('.last-trend').contains("article"))
    // console.log(wrapper.findAll('.sneakerTrend').exists())
    // expect(wrapper.find(".sneakerTrend")).not.toBeUndefined();
  // });
// });
