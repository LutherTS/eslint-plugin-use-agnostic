/** @typedef {import("../../../comments.config.mjs").ResolvedConfigData} ResolvedConfigData */

import { resolvedConfigData } from "../../../comments.config.mjs";

/** @type {ResolvedConfigData} `resolvedConfigData` can be imported as is but I've noticed that for some reason the type-safety is more advanced when it is re-typed and re-exported, here as `commentVariablesData`. */
export const commentVariablesData = resolvedConfigData;

export const directive21Data = commentVariablesData.directive21;
