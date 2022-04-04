<script setup>
const imgPath =
  "https://unsplash.com/photos/TRXSkmJb40c/download?ixid=MnwzMDk1NDN8MHwxfHNlYXJjaHwxfHxtb29ufGVufDB8fHx8MTY0NzI3Mzc1OQ";

const props = defineProps({
  imgUrl: String,
});

function closeWindow() {
  emit("closeWindow");
}

const emit = defineEmits(["closeWindow"]);
</script>

<template>
  <Teleport to="body">
    <div class="container">
      <div class="wrapper">
        <div @click="closeWindow" class="close">X</div>
        <div class="img-container">
          <img :src="props.imgUrl" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.93);

  .wrapper {
    max-height: 60%;
    max-width: 90%;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    @media screen and (min-width: 800px) {
      max-height: 80%;
    }

    .close {
      position: absolute;
      cursor: pointer;
      align-self: flex-end;
      color: #fff;
      background-color: red;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 2rem;
    }

    .img-container {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
