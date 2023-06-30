// @flow
import ms from 'ms'
import { fetchival } from 'fetchival-lib'
import { cloneDeep, isArray, isFinite } from 'lodash'

import { retry } from 'simple-retry'
import { CHAIN_ID, TRANSACTIONS_PAGE_SIZE } from 'some-module'

import type {
    Obj,
    EndpointObj,
    RawTransaction,
    GetXTransactionsParams,
    GetBlocksParams,
} from 'something'

const HTTP_GET_TIMEOUT = ms('15s')

const _getRequest = retry(
    (url: string, params: {} = {}, endpointFn: function): Promise<any> =>
fetchival(`${endpointFn()}${url}`, { timeout: HTTP_GET_TIMEOUT }).get(params),
    { delayTimesMs: ['5s', '10s'] }
)
