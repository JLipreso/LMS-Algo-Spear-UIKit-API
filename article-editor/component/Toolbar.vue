<template>
  <div class="d-flex">
    <button @click="onApplyTextColor()">Add Color</button>
    <button class="jl-elem-reset" @click="onAppendParagraph()" >Paragraph</button>
    <select class="jl-elem-reset" value="0" @change="onAppendHeader">
      <option value="0">Header</option>
      <option value="h1">H1</option>
      <option value="h2">H2</option>
      <option value="h3">H3</option>
      <option value="h4">H4</option>
      <option value="h5">H5</option>
      <option value="h6">H6</option>
    </select>
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import { appendHeader, appendParagraph, ApplyTextColor } from '../index';
  import "../assets/css/style.css";

  export default defineComponent({
    name: "Toolbar",
    props: {
      editor_id: {
        default: "jl-html-editor",
        type: String
      },
    },
    methods: {
      onAppendHeader(event: any) {
        appendHeader({ id: this.editor_id, tag: event?.target.value, text: "Hi! It's your header." });
      },
      onAppendParagraph() {
        appendParagraph({id: this.editor_id, text: "Hi your paragraph start here." });
      },
      onApplyTextColor() {
        ApplyTextColor({ color: "red" });
      }
    }
  });

</script>