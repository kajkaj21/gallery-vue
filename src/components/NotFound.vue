<script setup></script>

<template>
  <div class="container">
    <p>Couldn't find your request, try again!</p>
    <router-link :to="{ name: 'MainPage' }">
      <button>Try Again</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 13px;

  @media screen and (min-width: 1000px) {
    width: 60rem;
  }

  p {
    color: #000;
    font-size: 2rem;
    text-align: center;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: 2rem;
    padding: 1rem 2rem;
    border: 0;
    background-color: #000;
    color: #fff;
    border-radius: 7px;
    transition: 0.1s ease transform;

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
