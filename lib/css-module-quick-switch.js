'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'css-module-quick-switch:toggle': () => this.toggle()
    }));
  },

  toggle() {
    const editor = atom.workspace.getActivePaneItem();
    const file = editor.buffer.file;

    const extension = file.path.split('.').pop();
    if (/jsx/.test(extension)) {
      atom.workspace.open(file.path.replace('jsx', 'scss'))
    } else if (/scss/.test(extension)) {
      atom.workspace.open(file.path.replace('scss', 'jsx'))
    }
  }
};
