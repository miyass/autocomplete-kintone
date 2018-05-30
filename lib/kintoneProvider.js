'use babel';

import { Range } from 'atom';

export default class kintoneProvider {

  constructor(selector) {
    this.selector = '.source.js';
  }

  getTextFromRange(editor) {
    let endPosition = editor.getCursorScreenPosition();
    let startRow = endPosition.row;
    let getTextRange = new Range([startRow, 0], endPosition);
    let rangeText = editor.getTextInBufferRange(getTextRange);

    return rangeText;
  }

}
