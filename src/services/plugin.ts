import * as vscode from 'vscode'
export class PluginManager {
    /**
     * getExtensionList
     */
    public getExtensionList(withBuiltin: boolean = false) {
        let all = vscode.extensions.all;
        if (!withBuiltin) {
            all = all.filter(ext => !ext.packageJSON.isBuiltin);
        }
        vscode.window.showInformationMessage("获取Ext成功");
        return all;
    }
}
