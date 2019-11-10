"use strict";
import * as vscode from 'vscode';
import { PluginManager } from './services/plugin'
import { Environment } from './environment'
import { state } from './state'


export async function activate(context: vscode.ExtensionContext) {
	state.context = context;
	console.log(`vscode-cloud-sync已激活,state=${state.instanceID}`);


	const pluginManager = new PluginManager();

	const commandUploadSetting = vscode.commands.registerCommand(
		'extension.uploadSetting',
		() => {
			console.log("H");
			let cfg = vscode.workspace.getConfiguration('global');
			console.log(cfg.get('editor'));
		}
	);

	context.subscriptions.push(commandUploadSetting);
}

// export function deactivate() { }
