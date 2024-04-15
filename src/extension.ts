// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('extension "xcpctraintool" is now active!');

	let copyButton  = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
	copyButton.text = "$(clippy)";
	copyButton.tooltip = "Copy all text from current file";
	copyButton.command = 'xcpctraintool.copyAllText';

	copyButton.show();

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('xcpctraintool.copyAllText', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const editor = vscode.window.activeTextEditor;
		if(editor){
			const text = editor.document.getText();
			vscode.env.clipboard.writeText(text);
			vscode.window.showInformationMessage("All text copied to clipboard!");
		}else{
			vscode.window.showWarningMessage("No active text editor!");
		}
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(copyButton);
}

// This method is called when your extension is deactivated
export function deactivate() {}
