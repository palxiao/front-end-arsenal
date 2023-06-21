<template>
  <div style="display: flex">
    <div style="flex: 1">
      <h3>HTML</h3>
      <div id="htmlEditor" ref="htmlEditor" style="height: 200px"></div>
      <h3>CSS</h3>
      <div id="cssEditor" ref="cssEditor" style="height: 200px"></div>
      <h3>JavaScript</h3>
      <div id="jsEditor" ref="jsEditor" style="height: 200px"></div>
    </div>
    <div style="flex: 1">
      <h3>预览</h3>
      <!-- 测试的一个 -->
      <iframe ref="preview" style="width: 100%; height: 600px"></iframe>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, toRaw } from 'vue'
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
// import { emmetHTML } from 'emmet-monaco-es'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  },
}
export default {
  props: {
    // 测试参数
    test: {},
  },
  setup() {
    const htmlEditor = ref(null)
    const cssEditor = ref(null)
    const jsEditor = ref(null)
    const preview = ref(null)

    const updatePreview = () => {
      // const html = htmlEditor.value.getValue();
      // const css = cssEditor.value.getValue();
      // const js = jsEditor.value.getValue();

      let cssCode = toRaw(cssEditor.value).getValue()
      let htmlCode = toRaw(htmlEditor.value).getValue()
      let jsCode = toRaw(jsEditor.value).getValue()

      const script = document.createElement('script')
      script.textContent = jsCode

      preview.value.srcdoc = `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>Vite + Vue + TS</title>
            <style>${cssCode}</style>
          </head>
          <body>
              ${htmlCode}
              ${script.outerHTML}
          </body>
        </html>

      `
    }

    const formatCode = (code, editor) => {
      const lineCount = editor.value.getModel().getLineCount()
      for (let i = 1; i <= lineCount; i++) {
        code += editor.value.getModel().getLineContent(i) + '\n'
      }
      return code
    }

    onMounted(() => {
      cssEditor.value = monaco.editor.create(document.getElementById('cssEditor'), {
        value: '',
        language: 'css',
      })

      jsEditor.value = monaco.editor.create(document.getElementById('jsEditor'), {
        value: '',
        language: 'javascript',
      })

      htmlEditor.value = monaco.editor.create(document.getElementById('htmlEditor'), {
        value: '',
        language: 'html',
      })

      // emmetHTML(monaco)
      console.log(1111, monaco)

      monaco.languages.html.htmlDefaults.setOptions({
        autoClosingTags: true,
        suggest: {
          // Set to `true` to turn on Emmet completion
          useNewEmmet: true,
        },
      })

      monaco.languages.register({ id: 'html' })
      monaco.languages.onLanguage('html', () => {
        monaco.languages.setLanguageConfiguration('html', {
          autoClosingPairs: [
            { open: '<', close: '>' },
            { open: "'", close: "'", notIn: ['string'] },
            { open: '"', close: '"', notIn: ['string', 'comment'] },
          ],
        })
      })

      updatePreview()

      htmlEditor.value.onDidChangeModelContent(updatePreview)
      cssEditor.value.onDidChangeModelContent(updatePreview)
      jsEditor.value.onDidChangeModelContent(updatePreview)
    })

    return { htmlEditor, cssEditor, jsEditor, preview }
  },
}
</script>
