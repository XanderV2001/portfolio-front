<template>
  <div>
    <span class="typed-text" :style="{ color: tColor }">{{ typeValue }}</span>
    <span
      class="cursor"
      :class="{
        typing: typeStatus,
        cursor: !$vuetify.theme.isDark,
        'cursor-dark': $vuetify.theme.isDark,
      }"
      v-html="'&nbsp;'"
    ></span>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  props: {
    textColor: String,
    textArray: Array,
  },

  computed: {
    tColor: function () {
      return this.textColor || "var(--v-accent-base)";
    },
  },

  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [],
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },

  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    this.typeArray = this.textArray || ["No", "text", "given"];
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #000;
  animation: cursorBlink 1s infinite;
}

span.cursor-dark {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fffcf2;
  animation: cursorBlink-dark 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink-dark {
  49% {
    background-color: #fffcf2;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

@keyframes cursorBlink {
  49% {
    background-color: #000;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>