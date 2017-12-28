/**
 * @file: ssr
 * @author: Cuttle Cong
 * @date: 2017/12/28
 * @description: 
 */

var DocumentTitle = require('react-document-title')

module.exports = function () {
  var title = DocumentTitle.rewind()
  return {
    title: title
  }
}