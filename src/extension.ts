import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscdoe-cloud-sync" is now active!');

	const commandHelloWorld = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	const commandFuck=vscode.commands.registerCommand('extension.fuck',()=>{
		vscode.window.showWarningMessage("Fuck");
	})

	context.subscriptions.push(commandHelloWorld);
	context.subscriptions.push(commandFuck);
}

// this method is called when your extension is deactivated
export function deactivate() {}
