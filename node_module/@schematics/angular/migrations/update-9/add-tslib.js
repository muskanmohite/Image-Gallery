"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTsLib = void 0;
const dependencies_1 = require("../../utility/dependencies");
const latest_versions_1 = require("../../utility/latest-versions");
function addTsLib() {
    return (host) => {
        const tslibDep = dependencies_1.getPackageJsonDependency(host, 'tslib');
        if (tslibDep && tslibDep.type !== dependencies_1.NodeDependencyType.Default) {
            dependencies_1.removePackageJsonDependency(host, 'tslib');
        }
        dependencies_1.addPackageJsonDependency(host, {
            name: 'tslib',
            version: latest_versions_1.latestVersions['tslib'],
            type: dependencies_1.NodeDependencyType.Default,
            overwrite: true,
        });
    };
}
exports.addTsLib = addTsLib;
