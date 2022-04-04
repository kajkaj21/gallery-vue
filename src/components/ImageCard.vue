<script setup>
const props = defineProps({
  imageData: Object,
});

const emit = defineEmits(["imgURL"]);

function sendImgURL() {
  emit("imgURL", props.imageData.urls.regular);
}
</script>

<template>
  <li>
    <div @click="sendImgURL" class="container">
      <img :src="imageData.urls.regular" :alt="imageData.alt_description" />
      <p>{{ imageData.alt_description }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  // padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    cursor: pointer;
    border: solid 3px #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    background-color: #fff;
    box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.4);
    transition: 0.3s ease-out all;

    &:hover {
      transform: rotateZ(-1deg);
      box-shadow: 3px 6px 15px 4px rgba(0, 0, 0, 0.4);
    }

    p {
      color: #000;
      font-size: 1.8rem;
      margin-bottom: 2rem;
      width: 30rem;
    }

    img {
      display: block;
      width: 30rem;
      height: 25rem;
      object-fit: cover;
    }
  }
}
</style>
