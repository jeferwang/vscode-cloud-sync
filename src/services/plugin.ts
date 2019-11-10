"use strict";
import * as vscode from 'vscode';
export class PluginManager {
    /**
     * getExtensionList
     */
    public async getExtensionList(withBuiltin: boolean = false) {
        let all = vscode.extensions.all;
        if (!withBuiltin) {
            all = all.filter(ext => !ext.packageJSON.isBuiltin);
        }
        vscode.window.showInformationMessage("获取Ext成功");
        return all;
    }

    public async installExtension() {
        const name = 'codezombiech.gitignore';
        await vscode.commands.executeCommand(
            'workbench.extensions.installExtension',
            name
        );
    }
}
