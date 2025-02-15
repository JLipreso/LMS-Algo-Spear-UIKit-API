<template>
  <div>
    <div class="d-flex jl-toolbar-container">
      <select v-model="text_font" class="jl-elem-reset p-2">
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
      <div class="jl-toolbar-container-divider"></div>
      <div class="jl-tool-wrapper d-flex" title="Text color">
        <div class="jl-tool-label d-block px-1"></div>
        <span class="jl-tool-label">Text</span>
        <input class="jl-elem-reset p-2" type="color" v-model="color_text"/>
      </div>
      <div class="jl-toolbar-container-divider"></div>
      <div class="jl-tool-wrapper d-flex" title="Background color">
        <div class="jl-tool-label d-block px-1"></div>
        <span class="jl-tool-label">BG</span>
        <input class="jl-elem-reset p-2" type="color" v-model="color_background"/>
      </div>
      <div class="jl-toolbar-container-divider"></div>
      <button class="jl-elem-reset p-2" @click="onAppendParagraph()" >Paragraph</button>
      <div class="jl-toolbar-container-divider"></div>
      <select class="jl-elem-reset p-2" value="0" @change="onAppendHeader">
        <option value="0">Header</option>
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
        <option value="h4">H4</option>
        <option value="h5">H5</option>
        <option value="h6">H6</option>
      </select>
      <div class="jl-toolbar-container-divider"></div>
      <button class="jl-elem-reset p-2" @click="onAddImage">Image</button>
    </div>
    <div :id="editor_id" class="form-control" v-html="editor.div" :contenteditable="true" style="height: 400px;overflow: auto;"></div>
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import { addImage, applyBackgroundColor, applyTextFontFamily, appendHeader, appendParagraph, applyTextColor } from '../index';
  import Swal from 'sweetalert2';
  import "../assets/css/style.css";

  export default defineComponent({
    name: "Toolbar",
    emits: ['input'],
    props: {
      editor_id: {
        default: "jl-html-editor",
        type: String
      },
      reset: {
        default: 0,
        type: Number
      },
      value: {
        default: "",
        type: String
      }
    },
    data() {
      return {
        editor: {
          div: ""
        },
        text_font: 'Arial',
        color_text: 'black',
        color_background: 'white',
      }
    },
    methods: {
      async releaseInput() {
        var content = document.getElementById(this.editor_id) as HTMLElement;
        this.$emit('input', {
          content: content?.innerHTML
        });
      },
      onAppendHeader(event: any) {
        appendHeader({ id: this.editor_id, tag: event?.target.value, text: "Hi! It's your header." });
        this.releaseInput();
      },
      onAppendParagraph() {
        appendParagraph({id: this.editor_id, text: "Hi your paragraph start here." });
        this.releaseInput();
      },
      onAddImage() {
        Swal.fire({
          title: "Add Image",
          text: "Enter image full path below",
          input: "text",
          inputAttributes: {
            autocapitalize: "off"
          },
          showCancelButton: true,
          confirmButtonText: "Add Image",
        }).then( async (result) => {
          if ((result.isConfirmed) && (result.value !== '')) {
            addImage({ id: this.editor_id, path: result.value });
            this.releaseInput();
          }
        });
      },
    },
    watch: {
      reset: function () {
        if(this.reset > 0) {
          this.editor.div         = '';
        }
      },
      value: function () {
        this.editor.div           = this.value;
      },
      color_text: function () {
        applyTextColor({ color: this.color_text });
      },
      text_font: function () {
        applyTextFontFamily({ font: this.text_font });
      },
      color_background: function () {
        applyBackgroundColor({ color: this.color_text });
      }
    }
  });

</script>