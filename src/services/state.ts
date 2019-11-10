import { ExtensionContext } from "vscode";

export interface IState {
    instanceID: string;
    context?: ExtensionContext;
}
