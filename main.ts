import { Editor, Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
  onload() {
    this.addCommand({
      id: 'test-live-preview-multiselect',
      name: 'Test Live Preview multi-select',
      editorCallback: (editor: Editor) => {
        /**
         * 1. Populate the following document content:
         *    ```
         *    ### Test 1
         *    ### Test 2
         *    ### Test 3
         *    ```
         * 2. Programmatically select all occurrences of '###'
         * 3. Only the first occurrence is fully selected; the other lines only
         *    get a cursor at the beginning
         *
         * If you toggle Source mode ON and run the same command, it works fine
         */
        editor.setValue('### Test 1\n### Test 2\n### Test 3');
        editor.setSelections([
          {
            anchor: {
              line: 0,
              ch: 0,
            },
            head: {
              line: 0,
              ch: 3,
            },
          },
          {
            anchor: {
              line: 1,
              ch: 0,
            },
            head: {
              line: 1,
              ch: 3,
            },
          },
          {
            anchor: {
              line: 2,
              ch: 0,
            },
            head: {
              line: 2,
              ch: 3,
            },
          },
        ]);
      },
    });
  }
}
