import { ButtonView, Command, Plugin } from "ckeditor5";

class InsertPromocodePlaceholderCommand extends Command {
  refresh() {
    this.isEnabled = true; // Add conditional logic here based on creative type
  }

  execute() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const cursorPosition = selection.getFirstPosition();

    if (!cursorPosition) return;

    model.change((writer) => {
      writer.insertText("#PROMOCODE#", cursorPosition);
    });
  }
}

export class InsertPromocodePlaceholder extends Plugin {
  init() {
    const editor = this.editor;

    editor.commands.add(
      "insertPromocodePlaceholder",
      new InsertPromocodePlaceholderCommand(editor)
    );
    editor.ui.componentFactory.add("insertPromocodePlaceholder", (locale) => {
      const button = new ButtonView(locale);
      const command = editor.commands.get("insertPromocodePlaceholder");

      if (!command) return;

      const t = editor.t;

      button.set({
        label: t("P"),
        withText: true,
        tooltip: true,
      });

      button.on("execute", () => {
        editor.execute("insertPromocodePlaceholder");
        editor.editing.view.focus();
      });

      // button.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      return button;
    });
  }
}
