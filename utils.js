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
    return url.match(/()/g).reduce(
        (a, v) => (
            (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
        ),
        {}
    )
};

/**
 * @description 页面跳转，是否记录在 history 中
 * @param {String} url 地址栏URL
 * @param {Boolean} asLink 
 * */
const redirect(url, asLink = true) => {
    asLink ? (window.loaction.href = url) : window.loactionrouter.replace(url);
};


/**
 * @description scrollToTop
 * */

const scrollToTop = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
    } else {
        window.cancelAnimationFrame(scrollToTop);
    }
}

/**
 * @description copy 有些浏览器支持的不好，详见can i use
 * @param {String} str 将要复制的内容
 * */

const copy = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.style.top = "-9999px";
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
}

/**
 * @description 检测设备类型
 * */

const detectDeviceType = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
        ? "Mobile"
        : "Desktop";
}

/**
 * @description Cookies
 * */

const setCookie = (key, value, expiredays) => {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie =
        key +
        "=" +
        escape(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}

const delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

getCookie(name) {
    let arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return arr[2];
    } else {
        return null;
    }
}

/**
 * @description 时间戳转换为时间
 * @param {Number} 
 * @param {Boolean} isMs 默认为当前时间转换结果 isMs为时间戳是否为毫秒
 * @returns {String} time 转换过的时间
 * */

const imestampToTime = (timestamp = Date.parse(new Date()), isMs = true) => {
    const date = new Date(timestamp * (isMs ? 1 : 1000));
    return `${date.getFullYear()}-${
        date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
        }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

/**
 * @description 判断元素是否在可视范围内
 * 
 * */

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();

    return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
            (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

// 获取元素 css 样式
const getStyle = (el, ruleName) => {
    return getComputedStyle(el, null).getPropertyValue(ruleName);
}

// 进入全屏

const launchFullscreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
}

launchFullscreen(document.documentElement);
launchFullscreen(document.getElementById("id")); //某个元素进入全屏

// 退出全屏
const exitFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

exitFullscreen();

// 全屏事件
document.addEventListener("fullscreenchange", function (e) {
    if (document.fullscreenElement) {
        console.log("进入全屏");
    } else {
        console.log("退出全屏");
    }
});

// 数字的千位分隔符

const commafy = (num) => {
    return num.toString().indexOf(".") !== -1
        ? num.toLocaleString()
        : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}