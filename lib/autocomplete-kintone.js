'use babel';

import kintoneEvents from '../jsons/kintoneEvents';
import kintone from '../jsons/kintone';
import { Range } from 'atom';

class kintoneProvider {
  constructor() {
    this.selector = '.source.js';
  }



  getSuggestions(options) {
    const { prefix, editor } = options;

    // https://qiita.com/choripon/items/6ebfdedaf284abd4a6cb
    let endPosition = editor.getCursorScreenPosition();
    let startRow = endPosition.row;
    let getTextRange = new Range([startRow, 0], endPosition);

    let rangeText = editor.getTextInBufferRange(getTextRange);

    if(prefix.startsWith('ke')) {
      return this.findMatchingKintoneFunction(prefix);
    }

    if(rangeText.indexOf('kintone.events.on') !== -1) {
      return this.findMatchingKintoneEvents(prefix);
    }
  }

  findMatchingKintoneFunction(prefix) {
    let kintones = kintone.map((obj) => {
      return {
        displayText: obj.displaytext,
        snippet: obj.snippet,
      	iconHTML: '<i class="icon-move-right"></i>',
      	type: 'function',
        description: 'testttt',
      	rightLabelHTML: '<span class="aab-right-label" style="color:#ff0">kintoneEvents</span>'
      }
    });
    return kintones;
  }

  findMatchingKintoneEvents(prefix) {
    let matchingKintoneEvents = kintoneEvents.map((obj) => {
      return {
        text: obj.text,
        iconHTML: '<i class="icon-move-right"></i>',
        description: obj.description,
      }
    });
    return matchingKintoneEvents;
  }
};


export default new kintoneProvider();
