"use strict";
import { resolve } from 'path'
import { state } from './state'
import { strict } from 'assert';

export class Environment {
    // Vscode是否为移动版
    public isPortable: boolean = false;
    //
    // public PATH: string = null;
    // 用户目录路径
    // public USER_FOLDER: string = null;

    constructor() {
        state.context.globalState.update('_', undefined);// 确保globalStateFolder存在
        this.isPortable = !!process.env.VSCODE_PORTABLE;
        if (!this.isPortable) {
            // this.PATH = resolve(state.context.globalStoragePath, '../../..');

        } else {

        }
    }

}
