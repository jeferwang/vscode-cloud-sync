import * as vscode from 'vscode';
import { PluginManager } from './services/plugin'


export function activate(context: vscode.ExtensionContext) {
	console.log("vscode-cloud-sync已激活");

	const pluginManager = new PluginManager();

	const commandUploadSetting = vscode.commands.registerCommand(
		'extension.uploadSetting',
		pluginManager.getExtensionList.bind(pluginManager)
	);

	context.subscriptions.push(commandUploadSetting);
}

export function deactivate() { }
