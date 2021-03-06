import * as r from "ramda"

import assertAllHaveKeys from "../../../utils/assertAllHaveKeys"
import constants from "../../../constants"
import store from "../store"
import wrapArray from "../../../utils/wrapArray"
import invariants            from '../invariants'

import { Config, InvariantsBaseArgs, ReducerName } from "../../../types"

var reducerName: ReducerName = constants.REDUCER_NAMES.FETCH_SUCCESS
var invariantArgs: InvariantsBaseArgs = {
	reducerName,
	canBeArray: true,
}

export default function success(config: Config, current: Array<any>, records: any): Array<any> {
	invariants(invariantArgs, config, current, records)

	// wrap array
	records = wrapArray(records)

	// All given records must have a key
	assertAllHaveKeys(config, reducerName, records)
	
	return store.merge(current, records, config.key)
}
