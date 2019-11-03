import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscdoe-cloud-sync" is now active!');

	const commandHelloWorld = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	const commandDemo=vscode.commands.registerCommand('extension.demo',()=>{
		vscode.window.showWarningMessage("Demo");
	})

	context.subscriptions.push(commandHelloWorld);
	context.subscriptions.push(commandDemo);
}

// this method is called when your extension is deactivated
export function deactivate() {}
