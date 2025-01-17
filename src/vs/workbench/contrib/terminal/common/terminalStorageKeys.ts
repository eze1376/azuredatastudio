/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export const enum TerminalStorageKeys {
	NeverMeasureRenderTime = 'terminal.integrated.neverMeasureRenderTime',
	SuggestedRendererType = 'terminal.integrated.suggestedRendererType',
	TabsListWidthHorizontal = 'tabs-list-width-horizontal',
	TabsListWidthVertical = 'tabs-list-width-vertical',
	DeprecatedEnvironmentVariableCollections = 'terminal.integrated.environmentVariableCollections',
	EnvironmentVariableCollections = 'terminal.integrated.environmentVariableCollectionsV2',
	TerminalBufferState = 'terminal.integrated.bufferState',
	TerminalLayoutInfo = 'terminal.integrated.layoutInfo',
	PinnedRecentCommandsPrefix = 'terminal.pinnedRecentCommands',
	TerminalSuggestSize = 'terminal.integrated.suggestSize'
}
