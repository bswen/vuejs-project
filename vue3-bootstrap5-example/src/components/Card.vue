<template>
  <div class="d-flex">
    <div class="rounded-top border position-relative">
      <img
        src="https://www.gstatic.com/webp/gallery/1.jpg"
        class="img-fluid rounded-top"
      />
      <div class="p-3">
        <a
          href="#"
          class="fs-5 text-dark d-block mb-3 text-decoration-none stretchedlink"
          >My Lesson for photograph</a
        >
        <div class="d-flex justify-content-between align-items-baseline">
          <span class="text-danger">$99.99</span>
          <small class="text-secondary">39 People Learned</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {},
};
</script>
