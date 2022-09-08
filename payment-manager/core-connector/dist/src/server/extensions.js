"use strict";
// Copyright 2022 Digital Convergence Initiative
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const onPreHandler_1 = tslib_1.__importDefault(require("./handlers/onPreHandler"));
async function register(server) {
    await server.ext([
        {
            type: 'onPreHandler',
            method: onPreHandler_1.default
        }
    ]);
    return server;
}
exports.default = {
    register
};
//# sourceMappingURL=extensions.js.map