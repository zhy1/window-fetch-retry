/**
 * Created by zy on 2017/11/23.
 */
const fetch = require('../fetch')


fetch.fetch('baidu.com')
    .then(function (response) {
        return response.text()
    }).then(function (body) {
    document.body.innerHTML = body
})