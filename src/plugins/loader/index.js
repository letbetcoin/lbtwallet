
const v = 2.1
const a = 3.5
let tp = 0
let tr = 0

/**
 * Loader class for loading animation
 *
 * @class Loader
 */
class Loader {
  constructor () {
    this.loading = false
  }

  /**
   * Alias to load
   *
   * @param {boolean} [hideBackground=false]
   * @memberof Loader
   */
  start (hideBackground = false) {
    this.load(hideBackground)
  }

  /**
   * Start run animation loading bar
   *
   * @param {boolean} [hideBackground=false]
   * @memberof Loader
   */
  load (hideBackground = false) {
    if (!this.loading) {
      clearTimeout(tp)
      clearTimeout(tr)
      this.loading = true
      this.container.css('display', 'block')
      if (!hideBackground) {
        this.background.css('display', 'block')
      }
      this.process.css('display', 'block')
      this.processing(0, 0)
    }
  }

  processing (t, x) {
    if (x <= $(window).width() * 0.8) {
      this.process.width(x + 'px')
      tp = setTimeout(() => {
        this.processing(t++, x + v * t + 0.5 * a * t * t)
      }, 10)
    }
  }

  run (x0, v0, a, t, deltaT) {
    if (x0 <= $(window).width()) {
      this.process.width(x0 + 'px')
      tr = setTimeout(() => {
        this.run(x0 + v0 * t + 0.5 * a * t * t, v0, a, t += deltaT, deltaT)
      }, 10)
    } else {
      this.container.css('display', 'none')
      this.background.css('display', 'none')
      this.process.css('display', 'none')
      this.process.css('width', '0')
      this.loading = false
    }
  }

  /**
   * End and remove loading process bar
   *
   * @memberof Loader
   */
  end () {
    this.run($(window).width(), v, a, 1, 1)
  }

  init () {
    this.container = $('<div class="this-container" style="display:none"></div>')
    this.process = $('<div style="height:3px;position:fixed;top:0;left:0;background:#f6a821;display:none;z-index:999998"></div>')
    this.background = $('<div style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;display:none;opacity:0.4;background:#fff;"></div>')

    this.container.append(this.process)
    this.container.append(this.background)
    $('body').append(this.container)
  }
}

/**
 * Vue Plugin
 */
const LoaderPlugin = {
  install: (Vue) => {
    const loader = new Loader()
    loader.init()
    Vue.prototype.$loader = loader
    Vue.$loader = loader
  }
}

export default LoaderPlugin
