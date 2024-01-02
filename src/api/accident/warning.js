import { request } from '../request.js'

export const enterpriseList = (params) =>
    request({
        url: `/api/enterprise/enterprise/list`,
        method: 'GET',
        data: params,
        requestBodyType: 'String',
        responseBodyType: 'JSON',
        needToken: false
    })
/* 登录 */
export const login = (params) =>
    request({
        url: `/api/login`,
        method: 'POST',
        data: params,
        requestBodyType: 'String',
        responseBodyType: 'JSON',
        needToken: false
    })