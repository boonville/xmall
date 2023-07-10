/*
 * @Author: pengwei.sun
 * @Date: 2023-06-24 16:58:15
 * @LastEditors: pengwei.sun
 * @LastEditTime: 2023-07-10 23:25:37
 * @FilePath: /xmall/xmall-admin-web/config/dev.env.js
 * @Description: 
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://112.74.180.73:8081"'
})
