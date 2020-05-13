/**
 * @description 数组去重
 * @param {Array} arr 数组
 * @returns {Array} uniqueArray 去重后的数组
 * */

const uniqueArray = (arr) => [...new Set(arr)];

/**
 * @description 查找数组最大
 * @param {Array} arr 数组
 * @returns {Number} max 最大值
 * */

const maxValue = (arr) => Math.max(...arr);

/**
 * @description 查找数组最小
 * @param {Array} arr 数组
 * @returns {Number} max 最小值
 * */

const minValue = (arr) => Math.min(...arr);

/**
 * @description
 * @param {Array} arr 数组
 * @param {Number | String} value 元素
 * @returns {Number} number 出现次数
 * */

const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);

/**
 * @description 对比两个数组并且返回其中不同的元素
 * @param {Array} arr1 数组
 * @param {Array} arr2 数组
 * @returns {String | Number} unique 不同的元素
 * */

const different = (arr1, arr2) => arr2.filter((v) => arr1.includes(v));

/**
 * @description 从右删除 n 个元素
 * @param {Array} arr 数组
 * @param {Number} n 数值
 * @returns {Array} 数组
 * */

const dropRight = (arr, n) =>
  n < arr.length ? arr.slice(0, arr.length - n) : [];

/**
 * @description 返回数组中下标间隔 nth 的元素
 * @param {Array} arr 数组
 * @param {Number} nth 间隔
 * @returns {Array} nthArray 间隔相同的数组
 * */

const nthArray = (arr, nth) => arr.filter((v, i) => i % nth === nth - 1);

/**
 * @description 获取 url 中的参数
 * @param {String} url 地址栏URL
 * @returns {Array} result 参数
 */

const getURLParameters = (url) => {
    return url.match(/()/g)..reduce(
        (a, v) => (
          (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
        ),
        {}
      )
};
