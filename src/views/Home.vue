<template>
<div class="home" ref="scrollSections">
  <section data-scroll-section id="section1">
      <h1 data-scroll data-scroll-speed="2">Welcome home</h1>
  </section>
  <section data-scroll-section id="section2">
    <h1>Our Products</h1>
    <div class="product-preview-container">
      <ul class="product-preview-list">
        <li class="item-preview-container">
          <div class="preview-item-img"></div>
          <div class="preview-item-text">
            <div class="preview-item-text-inner">
              <h3>Item 1</h3>
              <p>This is a description of the product. It should be like, relatively long but not like... too long. dig?</p>
            </div>
            <div class="cart-button">Add to Cart</div>
          </div>
        </li>
        <li class="item-preview-container"></li>
        <li class="item-preview-container"></li>
      </ul>
    </div>
    <div class="all-products-button">View all</div>
  </section>
  <section data-scroll-section id="section3">
    <h1>section3</h1>
  </section>
</div>
</template>

<script>
import locomotiveScroll from "locomotive-scroll";

export default {
  name: 'Home',
  data() {
    return {
      scrollIns: null
    };
  },
  created() {

  },
  mounted() {
    const _self = this;
    this.$nextTick(function() {
      _self.initLocoScroll();
    });
  },
  computed: {

  },
  methods: {
    initLocoScroll() {
      const _self = this;
      this.scroll = new locomotiveScroll({
        el: _self.$refs['scrollSections'],
        smooth: true,
        smoothMobile: true,
        getDirection: true
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

h1 {
  margin-top: 42px;
}

.all-products-button {
  margin-bottom: 42px;
  margin-top: 22px;
  background: black;
  border-radius: 24px;
  height: 40px;
  width: 200px;
  color: white;
  line-height: 40px;
  cursor: pointer;
  transition: $quick;

  &:hover {
    transform: scale(0.95);
  }
}

.cart-button {
  background: $main;
  height: 40px;
  color: white;
  border-radius: 12px;
  text-align: center;
  line-height: 40px;
  transition: $quick;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    transform: scale(0.95);
  }
}

.preview-item-img {
  width: 100%;
  height: 50%;
  background: gray;
  border-radius: 12px 12px 0px 0px;
}

.preview-item-text-inner {

}

.preview-item-text {
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(50% - 24px);

  h3 {
    margin: 0px;
  }
}

.item-preview-container {
  background: white;
  border-radius: 12px;
  height: 90%;
  width: 360px;
  margin-left: 12px;
  margin-right: 12px;
}

.product-preview-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  height: 100%;
}

.product-preview-container {
  //background: red;
  height: 100%;
  width: 80%;
}

section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#section2 {
  background: #eee;
  height: 75vh;
}

</style>