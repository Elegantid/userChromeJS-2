rules = [{
    name: "about:haoutil",                  // 规则名称
    from: "about:haoutil",                  // 需要重定向的地址
    to: "https://haoutil.googlecode.com",   // 目标地址
    wildcard: false,                        // 可选，true 表示 from 是通配符
    regex: false,                           // 可选，true 表示 from 是正则表达式
    resp: false,                            // 可选，true 表示替换 response body
    state: false                             // 可选，true 表示该条规则生效
},{
    name: "google链接加密",
    from: /^http:\/\/(([^\.]+\.)?google\..+)/i,
    exclude: /google\.cn/i,                 // 可选，排除例外规则
    to: "https://$1",
    regex: true
},{
    name: "google搜索结果禁止跳转",
    from: /^https?:\/\/www\.google\.com\/url\?.*url=([^&]*).*/i,
    to: "$1",
    regex: true
}];