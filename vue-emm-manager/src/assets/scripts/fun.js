exports.install = function (Vue, options) {
  Vue.prototype.trim = function (str) { // 去掉字符串首尾字符串
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }

  Vue.prototype.trimLen = function (str) { // 去掉字符串首尾字符串的长度
    return str.replace(/(^\s*)|(\s*$)/g, '').length
  }

  Vue.prototype.validateFormData = function () {

  }

  Vue.prototype.post = function (options) {
  }
}
