/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare const RunSchematicName = "run-schematic";
export interface RunSchematicTaskOptions<T> {
    collection: string | null;
    name: string;
    options: T;
}
