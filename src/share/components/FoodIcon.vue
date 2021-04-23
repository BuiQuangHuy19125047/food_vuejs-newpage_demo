<template>
  <a class="food-icon" href="#">
    <div>
      <img class="food-icon__img" v-bind:src="img_src"/>
      <p class="food-icon__name">{{food_type}}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "FoodIcon",
  props: {
    img_src: String,
    food_type: String
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

.food-icon {
    width: fit-content;
    text-align: center;
    width: 96px;
    overflow-wrap: break-word;
    margin: 5px 0;
}
.food-icon__name {
    margin: 5px 0 0 0;
    font-size: 12px;
}
.food-icon__img {
    width: 50px;
    height: 50px;
}
</style>
