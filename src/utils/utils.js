
export const utils = {
  formatNumber: function (number, defaultText = '') {
    var arr = `${parseFloat(number || 0) || defaultText}`.split('.')
    return `${arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${arr.length > 1 ? `.${arr[1]}` : ''}`
  },
  isNullOrUndefined: function (value) {
    return typeof (value) === 'undefined' || value == null
  },
  capitalizeString: function (str, regex) {
    return str.split(regex).map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  }
}
