import { Plugin, ButtonView } from "ckeditor5";

export class MonacoSourceEditor extends Plugin {
  static get pluginName() {
    return "MonacoSourceEditor";
  }

  init() {
    const editor = this.editor;

    // Add the button to toolbar
    editor.ui.componentFactory.add("monacoSourceEditor", (locale) => {
      const button = new ButtonView(locale);

      button.set({
        label: "Edit Source",
        tooltip: true,
        withText: true,
      });

      button.on("execute", () => {
        this._showMonacoEditor();
        editor.enableReadOnlyMode("code-editor-open");
      });

      return button;
    });
  }

  _showMonacoEditor() {
    const wrapper = document.getElementById("monaco-editor-wrapper");

    if (!wrapper) return;

    wrapper.style.display = "block";
  }
}
