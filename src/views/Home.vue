<template>
<div class="home" ref="scrollSections">
  <section data-scroll-section id="section1">
      <h1 data-scroll data-scroll-speed="2">Welcome home</h1>
  </section>
  <section data-scroll-section id="section2">
    <h1>Products</h1>
    <div class="product-preview-container">
      <ul class="product-preview-list">
        <li class="item-preview-container">
          <div class="preview-item-img" id="prod-1"></div>
          <div class="preview-item-text">
            <div class="preview-item-text-inner">
              <h3>Item 1</h3>
              <p>This is a description of the product. It should be like, relatively long but not like... too long. dig?</p>
            </div>
            <div class="cart-button">Add to Cart</div>
          </div>
        </li>
        <li class="item-preview-container">
          <div class="preview-item-img" id="prod-2"></div>
          <div class="preview-item-text">
            <div class="preview-item-text-inner">
              <h3>Item 2</h3>
              <p>This is yet another summary of a lovely product to sell. Perhaps a peekaboo t-shirt? Maybe a neat sticker. Who's to know???</p>
            </div>
            <div class="cart-button">Add to Cart</div>
          </div>
        </li>
        <li class="item-preview-container">
          <div class="preview-item-img" id="prod-3"></div>
          <div class="preview-item-text">
            <div class="preview-item-text-inner">
              <h3>Item 3</h3>
              <p>It's one thing to pretend. It's another thing to be. Sometime the line doesn't even exist. Just pour all of yourself into everything you do. You are worthy.</p>
            </div>
            <div class="cart-button">Add to Cart</div>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/products"><div class="all-products-button">View all</div></router-link>
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

#prod-1 {
  background-image: url("../assets/sample-items/peekaboo-shirt.png");
}

#prod-2 {
  background-image: url("../assets/sample-items/hoot-shirt.png");
}

#prod-3 {
  background-image: url("../assets/sample-items/monster-shirt.png");
}

a {
  text-decoration: none;
}

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
  height: 62%;
  background: gray;
  border-radius: 12px 12px 0px 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  height: calc(38% - 24px);

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
  height: 85vh;
}

</style>