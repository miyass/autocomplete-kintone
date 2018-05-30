'use babel';

import { Range } from 'atom';

export default class kintoneProvider {

  constructor(selector, displayText, snippet) {
    this.selector = '.source.js';
    this.displayText = displayText;
    this.snippet = snippet;
  }

  getTextFromRange(editor) {
    let endPosition = editor.getCursorScreenPosition();
    let startRow = endPosition.row;
    let getTextRange = new Range([startRow, 0], endPosition);
    let rangeText = editor.getTextInBufferRange(getTextRange);
    return rangeText;
  }

  findKintoneFunction(displayText, snippet, description, rightLabelHTML) {
    let kintonefunction = [
      {
        displayText: displayText,
        snippet: snippet,
        iconHTML: '<i class="icon-move-right"></i>',
        type: 'function',
        description: description,
        rightLabelHTML: '<span class="aab-right-label">' + rightLabelHTML + '</span>'
      }
    ]
    return kintonefunction;
  }

  findKintoneList(prefix, lists) {
    let matchingList =  lists.map((obj) => {
      return {
        text: obj.text,
        iconHTML: '<i class="icon-move-right"></i>',
        description: obj.description,
      }
    });
    let filteringList = matchingList.filter((obj) => {
      if(obj.text.indexOf(prefix) !== -1) {
        return obj;
      } else {
        return;
      }
    });
    return filteringList;
  }


}
