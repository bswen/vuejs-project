<template>
  <div class="row">
    <div class="rounded-top border position-relative" v-if="showImage">
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
    <div class="m-3">
      <Message class="m-2" />
      <button
        type="button"
        class="btn btn-primary m-2"
        @click="showMessage('success')"
      >
        Success Message Component
      </button>
      <button
        type="button"
        class="btn btn-primary m-2"
        @click="showMessage('warning')"
      >
        Warning Message Component
      </button>
      <button
        type="button"
        class="btn btn-primary m-2"
        @click="showMessage('failure')"
      >
        Failure Message Component
      </button>
    </div>
  </div>
</template>
<script>
import Message from "@/components/Message.vue";

export default {
  name: "Card",
  data() {
    return {
      showImage: false,
    };
  },
  props: {},
  methods: {
    showMessage(theType) {
      this.emitter.emit("notify", {
        type: theType,
        message: "Here is the message!",
      });
    },
  },
  components: {
    Message,
  },
};
</script>
