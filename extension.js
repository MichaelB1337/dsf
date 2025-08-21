const vscode = require('vscode');

function activate(context) {
  const selector = { language: 'dsf', scheme: 'file' };

  context.subscriptions.push(
    vscode.languages.registerFoldingRangeProvider(selector, {
      provideFoldingRanges(document) {
        const ranges = [];
        const stack = [];
        const startTag = /<([A-Za-z_:][\w.\-:]*)\b(?![^>]*\/>)/g;
        const endTag = /<\/\s*([A-Za-z_:][\w.\-:]*)\s*>/g;

        for (let line = 0; line < document.lineCount; line++) {
          const text = document.lineAt(line).text;

          // reset regex state per line
          startTag.lastIndex = 0;
          endTag.lastIndex = 0;

          let m;
          while ((m = startTag.exec(text))) {
            stack.push({ tag: m[1], start: line });
          }
          while ((m = endTag.exec(text))) {
            for (let i = stack.length - 1; i >= 0; i--) {
              if (stack[i].tag === m[1]) {
                const open = stack[i];
                stack.splice(i, 1);
                if (line > open.start) {
                  ranges.push(
                    new vscode.FoldingRange(open.start, line, vscode.FoldingRangeKind.Region)
                  );
                }
                break;
              }
            }
          }
        }
        return ranges;
      }
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };