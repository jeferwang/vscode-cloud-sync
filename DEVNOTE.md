[TOC]

# 前言

先留空吧。。。

# 迈开第一步

## 安装CommandLine Tools

项目的搭建采用微软官方提供的脚手架，插件一个初始的项目结构，包含基本的Vscode插件调试配置。

本次项目开发采用Yarn作为包管理器，使用TypeScript项目模板进行开发

```shell
# 安装Yarn
npm install -g yarn

# 安装项目生成器，以及vscode插件项目模板
yarn global add yo generator-code

# 创建项目
cd /xxx/workspace
yo code // 使用yo工具和code模板创建一个空白项目

# 安装依赖（不知道为啥我创建的项目没有自动安装node_modules依赖）
yarn
```

按照上述步骤，创建一个空项目。

## 项目概览

首先打开`package.json`，了解一些基础的配置项：

```json
{
    // 这几个就不介绍了，一看就懂
	"name": "vscdoe-cloud-sync",
	"displayName": "Vscode Setting Cloud Sync",
	"description": "同步Vscode配置信息到自定义的服务器，需要配合指定后端使用",
	"keywords": ["setting","sync","cloud","vscode","tool"],
	"publisher": "jeferwang@qq.com",
	"version": "0.0.1",
	"engines": {
        // 指定支持的vscode最低版本
		"vscode": "^1.39.0"
    },
    // 插件分类，可选：[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]
	"categories": [
		"Other"
    ],
    // 扩展的激活事件数组，可以被哪些事件激活扩展（现在可以理解为事件的声明）
	"activationEvents": [
		"onCommand:extension.helloWorld"
    ],
    // 入口脚本
    "main": "./out/extension.js",
    // 和Vscode插件开发息息相关的配置信息
	"contributes": {
        // 声明命令，即Ctrl+Shift+P时打开的命令面板中的Item
		"commands": [
			{
				"command": "extension.helloWorld",
				"title": "Hello World"
			}
        ]
    },
    // 脚手架预置的几个npm script
	"scripts": {
		"vscode:prepublish": "yarn run compile",
		"compile": "tsc -p ./",
		"watch": "tsc -watch -p ./",
		"pretest": "yarn run compile",
		"test": "node ./out/test/runTest.js"
	},
	"devDependencies": {
		"@types/glob": "^7.1.1",
		"@types/mocha": "^5.2.6",
		"@types/node": "^10.12.21",
		"@types/vscode": "^1.39.0",
		"glob": "^7.1.4",
		"mocha": "^6.1.4",
		"typescript": "^3.3.1",
		"tslint": "^5.12.1",
		"vscode-test": "^1.2.0"
	}
}
```


然后打开`src/extension.ts`，熟悉一下入口文件：

```typescript
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

    // 这条console.log会显示在进行插件开发和调试的vscode窗口的【调试工具台】Tab，并且在插件被激活之后才会自动运行（package.json中的activationEvents）
	console.log('Congratulations, your extension "vscdoe-cloud-sync" is now active!');

    // 实现一个command
	const commandHelloWorld = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
    
    // 注册该command
    context.subscriptions.push(commandHelloWorld);
    
}

// 插件取消激活的生命周期钩子
export function deactivate() {}

```

熟悉了基本的项目结构之后，让我们开始第一个插件功能的开发吧~~！

# 运行调试

在我们使用脚手架创建了项目指挥，已经为我们自动生成了插件项目的调试配置，我们只需要打开Vscode左侧的Debug Tab，选择`Run Extension`，即可打开一个vscode新窗口，在里面进行插件的功能调试。

# 自己实现一个Demo功能

## 声明事件

我们在`package.json`的`activationEvents`中新增一个事件：`extension.demo`:

```json
"activationEvents": [
	"onCommand:extension.helloWorld",
	"onCommand:extension.demo"
],
```

即声明了事件的处理方式为`onCommand`，并且注册了一个插件激活事件。

## 功能实现

```typescript
const commandDemo=vscode.commands.registerCommand('extension.demo',()=>{
	vscode.window.showWarningMessage("Demo");
})

context.subscriptions.push(commandDemo);
```

即可实现当运行`extension.demo`命令时，弹出一个Warning类型的提示框的功能。（但是现在在命令Panel中并没有添加这个命令的执行操作）

## 绑定Vscode操作

为了让用户能执行我们添加的command，需要增加几个用户可操作的入口，我们修改`package.json`如下：

```json
"contributes": {
		"commands": [
			{
				"command": "extension.demo",
				"title": "Demo"
			}
		],
		"keybindings":[
			{
				"command": "extension.demo",
				"key": "ctrl+f10",
				"mac": "cmd+f10",
				"when": "editorTextFocus"
			}
		],
		"menus": {
			"editor/context": [
				{
					"when": "editorTextFocus",
					"command": "extension.demo",
					"group": "navigation"
				}
			]
		}
	},
```

添加了命令、快捷键、右键菜单三个入口。


# 清理Demo代码

在完成入门和环境测试之后，我们就进入了插件的正式开发环节，清理一下之前写的Demo代码，开始规划插件的功能吧~

# 添加配置项

```json
"contributes": {
		"configuration":[
			{
				"title": "Server Config",
				"properties": {
					"vscodeCloudSync.serverAddr":{
						"type":"string",
						"default":"",
						"description": "云同步服务端地址"
					}
				}
			}
		]
	},
```

