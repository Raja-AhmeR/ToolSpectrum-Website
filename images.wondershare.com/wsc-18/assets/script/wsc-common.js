/****************************************************
*  project: wondershare frontend codex 2018         *
*  description: common functions                    *
*  author: mazq@wondershare.cn                      *
*  update: 190216                                   *
****************************************************/
/* global $ gcp cssVars */

/** namespace **/
var wsc = {}

/** preparation **/
// config override
// stackoverflow.com/questions/858181/
/* eslint-disable no-use-before-define */
if (typeof wscConf === 'undefined') var wscConf = {}
/* eslint-enable no-use-before-define */

/** state management **/
wsc.store = {
  path: {
    base: wscConf.path_base || gcp('wsc-common.html').replace('script/index.html', '') || './assets/'
  },
  state: {
    init: false,
    wait: 0,
    ready: true,
    icon: [],
    id: []
  },
  setting: {
    detect: ['win', 'mac', 'ios', 'android'],
    load: ['plugin', 'vendor'],
    wait: wscConf.setting_wait || 10,
    scroll: wscConf.setting_scroll || 1.5,
    response: wscConf.setting_response || 0.3,
    style: {
      font: {
        family: wscConf.setting_style_font_family || ['Montserrat:700', 'Rubik:400,500'],
        // family: wscConf.setting_style_font_family || ['Muli:200,300,400,700,800'],
        custom: wscConf.setting_style_font_custom || { families: [], urls: [] }
      }
    }
  },
  plugin: {
    pool: ['youtube', 'video', 'alert', 'slideshow', 'seasonal', 'gotop', 'float', 'geoip', 'background', 'expired', 'calendar'],
    need: [],
    current: [],
    dependency: []
  },
  vendor: {
    pool: ['swiper', 'lodash', 'vue', 'url', 'showdown', 'holder', 'lottie', 'moment', 'tinymce', 'jquery.countdown', 'highlight', 'flatpickr', 'md5', 'uuid', 'basicScroll', 'clipboard'],
    need: [],
    current: [],
    folder: ['tinymce'],
    css: ['swiper', 'highlight', 'flatpickr']
  }
}
// path
wsc.store.path.icon = wsc.store.path.base + 'icon/'
wsc.store.path.image = wsc.store.path.base + 'image/'
wsc.store.path.script = wsc.store.path.base + 'script/'
wsc.store.path.style = wsc.store.path.base + 'style/'
wsc.store.path.plugin = wsc.store.path.base + 'plugin/'
wsc.store.path.vendor = wsc.store.path.base + 'vendor/'

/** common states and functions **/
wsc.common = {}
// initialize
wsc.common.init = function () {
  wsc.store.state.init = true
}
// client info
wsc.common.client = {
  width: function () { return document.documentElement.clientWidth },
  height: function () { return document.documentElement.clientHeight },
  agent: navigator.userAgent.toLowerCase(),
  // stackoverflow.com/questions/19877924/
  platform: navigator.platform.match(/mac/i) ? 'mac' : (navigator.platform.match(/win/i) ? 'win' : (navigator.platform.match(/ip/i) ? 'ios' : (navigator.platform.match(/android/i) || navigator.platform.match(/linux/i) ? 'android' : 'other'))),
  // stackoverflow.com/questions/9847580/
  browser: navigator.userAgent.match(/edge/i) ? 'edge' : (navigator.userAgent.match(/firefox/i) ? 'firefox' : (navigator.userAgent.match(/chrome/i) ? 'chrome' : (navigator.userAgent.match(/safari/i) ? 'safari' : (navigator.userAgent.match(/trident/i) ? 'ie' : 'other'))))
}
// generate id
wsc.common.id = function () {
  // stackoverflow.com/questions/10726909/
  var id = Math.random().toString(36).substr(2, 4)
  var fs = id.charAt(0)
  if (parseInt(fs) || fs === '0') id = (parseInt(fs) + 10).toString(36) + id.substr(1)
  wsc.store.state.id.push(id)
  return id
}
// log to console
wsc.common.log = function (string, color, bg, bold) {
  if (window.location.hash.indexOf('#wsc-debug') === 0) {
    var b = $(':root').css('--' + bg)
    var c = $(':root').css('--' + color) || $(':root').css('--primary') || '#333'
    var e = navigator.userAgent.match(/trident/i)
    console.log((e ? '' : '%c') + '[wsc]' + string, (e ? '' : 'color: ' + c) + (e || !bg ? '' : '; background-color: ' + b) + (e || !bold ? '' : '; font-weight: bold'))
  }
}
// need plugin/vendor
wsc.common.need = function (type) {
  $.each(wsc.store[type].pool, function (needI, need) {
    if ($('[data-toggle="' + need + '"]').length > 0 && $.inArray(need, wsc.store[type].need) < 0) wsc.store[type].need.push(need)
  })
  $('body').trigger('wsc.event.' + type + '.need')
}
// check plugin/vendor
wsc.common.check = function (type, name, dependency) {
  var pl = name ? [name] : (dependency ? wsc[dependency].file.vendor : wsc.store[type].need)
  var ct = true
  $.each(pl, function (itemI, item) {
    if ($.inArray(item, wsc.store[type].current) < 0) ct = false
  })
  return ct
}
// load plugin/vendor
wsc.common.load = function (type, name) {
  var pl = []
  $.each(name ? [name] : wsc.store[type].need, function (needI, need) {
    if (!wsc.common.check(type, need)) pl.push(need)
  })
  if (pl.length === 0) {
    if (type === 'vendor') {
      $('body').trigger('wsc.event.vendor.none')
    } else {
      $('body').trigger('wsc.event.dependency.check')
    }
  } else {
    $.each(pl, function (itemI, item) {
      $.getScript(wsc.store.path[type] + (type === 'vendor' && $.inArray(item, wsc.store[type].folder) > -1 ? (item + '/') : '') + (type === 'vendor' ? '' : 'wsc-') + item + (type === 'vendor' ? '.min' : '') + '.js', function () {
        if (type === 'vendor' && $.inArray(item, wsc.store.vendor.css) > -1) {
          // stackoverflow.com/questions/12093509/
          var cp = '<link id="vendor-' + item + '-css" rel="stylesheet" href="' + wsc.store.path.vendor + ($.inArray(item, wsc.store[type].folder) > -1 ? (item + '/') : '') + item + '.min.css' + '">'
          $('head link[rel="stylesheet"]').length > 0 ? $('head link[rel="stylesheet"]:eq(0)').before(cp) : $('head').append(cp)
        }
        wsc.store[type].current.push(item)
        wsc.common.log('load ' + type + ': ' + item, 'success')
        $('body').trigger('wsc.event.' + type + '.load')
        $('body').trigger('wsc.event.' + item + '.load')
        if (type === 'vendor') {
          // check dependency for all
          $.each(wsc.store.plugin.need, function (o1I, o1) {
            if (!wsc[o1].state.init) {
              var vv = true
              $.each(wsc[o1].file.vendor, function (o2I, o2) {
                if ($.inArray(o2, wsc.store.vendor.current) < 0) vv = false
              })
              if (vv) {
                $('body').trigger('wsc.event.' + o1 + '.init')
                wsc[o1].state.init = true
              }
            }
          })
        } else {
          // check dependency for individual
          if (wsc[item].file.vendor.length === 0) {
            $('body').trigger('wsc.event.' + item + '.init')
            wsc[item].state.init = true
          } else {
            $.each(wsc[item].file.vendor, function (oI, o3) {
              if ($('#wsc-load [data-toggle="' + o3 + '"]').length === 0) $('#wsc-load').append('<div data-toggle="' + o3 + '"></div>')
            })
          }
          wsc.store.plugin.dependency.push(item)
          $('body').trigger('wsc.event.dependency.check')
        }
      }).fail(function () {
        wsc.common.log('fail to load ' + type + ': ' + item, 'danger')
      })
    })
  }
}
// load template of plugin
wsc.common.template = function (plugin, target, element, event) {
  if (!wsc[plugin].state.ready) {
    if (wsc[plugin].file.template) {
      $.get(wsc.store.path.plugin + wsc[plugin].file.template, function (res) {
        $(target || 'body').append(res)
        wsc[plugin].state.ready = true
        $(target || 'body').trigger('wsc.event.' + plugin + '.ready')
        if (element) element.trigger(event)
      }).fail(function () {
        wsc.common.log('fail to load ' + plugin + ' template', 'danger')
      })
    }
  }
}
// icon related
wsc.common.icon = {
  check: function (icon) {
    return wsc.store.state.icon.indexOf(icon) > -1
  },
  init: function (force) {
    $('.wsc-icon').filter('[data-icon], [data-path]').not('.wsc-icon-loaded, .wsc-icon-noload' + (force ? '' : ', .wsc-icon-loading')).each(function (index, el) {
      var b = $(this).is('.wsc-icon-img, .wsc-icon-bg')
      var c = $(this).attr('data-icon')
      var p = $(this).attr('data-path')
      if (b) {
        wsc.common.icon.load(c, null, true)
        $(this).addClass('wsc-icon-loading')
      } else if (p) {
        wsc.common.icon.load('', p)
        $(this).addClass('wsc-icon-loading')
      } else {
        // fix old version
        c = wsc.common.icon.fixOld(c, null, true)
        // end of fix
        if (!wsc.common.icon.check(c)) wsc.store.state.icon.push(c)
      }
    })
    for (var i = 0; i < wsc.store.state.icon.length; i++) {
      var ic = wsc.store.state.icon[i]
      var id = '.wsc-icon[data-icon="' + ic + '"]'
      // fix old version
      id = wsc.common.icon.fixOld(ic, id)
      // end of fix
      if ($(id).length > 0 && $(id).not('.wsc-icon-loaded, .wsc-icon-loading, .wsc-icon-noload').length > 0) wsc.common.icon.load(ic)
      $(id).not('.wsc-icon-loaded, .wsc-icon-loading, .wsc-icon-noload').addClass('wsc-icon-loading')
    }
  },
  load: function (icon, path, img) {
    var df = '.svg'
    var di = 'symbol/close'
    var dd = icon.indexOf('-') || ''
    var dt = icon.substr(0, dd) || ''
    var dn = icon.substr(dd + 1) || ''
    var dp = path || wsc.store.path.icon + dt + '/' + dn + df
    if (img) {
      var dc = $('.wsc-icon[data-icon="' + icon + '"]:not(.wsc-icon-loaded)').filter('.wsc-icon-img, .wsc-icon-bg')
      if (dc.hasClass('wsc-icon-img')) {
        dc.empty().append('<img src="' + dp + '" alt="' + icon + '">')
      } else {
        dc.css('backgroundImage', 'url(' + dp + ')')
      }
    } else {
      // stackoverflow.com/questions/8866448/
      $.get(dp, function (res) {
        if (path) {
          wsc.common.icon.show(null, res, path)
        } else {
          $('body').trigger('wsc.event.icon.load', icon)
          wsc.common.icon.show(icon, res)
        }
      }, 'text').fail(function () {
        wsc.common.log('fail to load icon: ' + icon, 'warning')
        $.get(wsc.store.path.icon + di + df, function (res) {
          if (path) {
            $('.wsc-icon[data-path="' + path + '"]').addClass('wsc-icon-default')
            wsc.common.icon.show(icon, res, path)
          } else {
            $('.wsc-icon[data-icon="' + icon + '"]').addClass('wsc-icon-default')
            $('body').trigger('wsc.event.icon.load', di)
            wsc.common.icon.show(icon, res)
          }
        }, 'text')
      }, 'text')
    }
  },
  show: function (icon, svg, path) {
    var id = '.wsc-icon[data-icon="' + icon + '"]'
    if (path) {
      id = '.wsc-icon[data-path="' + path + '"]'
    } else {
      // fix old version
      id = wsc.common.icon.fixOld(icon, id)
      // end of fix
    }
    $(id).filter('.wsc-icon-loading').not('.wsc-icon-loaded').empty().removeClass('wsc-icon-loading').addClass('wsc-icon-loaded').append(svg)
    // www.w3.org/TR/CSS2/visudet.html#inline-replaced-width
    if (wsc.is.ie) {
      $(id).filter('.wsc-icon-loaded').children('svg').css('width', function () {
        var vb = $(this).attr('viewBox').split(' ') || [0, 0, 1, 1]
        return ($(this).height() || $(this).parent().height()) * (vb[2] - vb[0]) / (vb[3] - vb[1]) || 'auto'
      })
    }
  },
  replace: function (el, icon, noInit) {
    var io = el.attr('data-icon')
    el.removeClass('wsc-icon-loaded wsc-icon-default')
    if ($('.wsc-icon[data-icon="' + io + '"].wsc-icon-loaded').length === 0) wsc.store.state.icon.splice(wsc.store.state.icon.indexOf(io), 1)
    el.attr('data-icon', icon)
    if (!noInit) wsc.common.icon.init()
  },
  fixOld: function (iNew, iOld, input) {
    if (input) {
      if (iNew.indexOf('3p') === 0) {
        iNew = iNew.replace('3p-', 'brand-')
      } else if (iNew.indexOf('brand-') !== 0 && iNew.indexOf('logo-') !== 0 && iNew.indexOf('flag-') !== 0 && iNew.indexOf('symbol-') !== 0 && iNew.indexOf('extra-') !== 0) {
        iNew = 'symbol-' + iNew
      }
      return iNew
    } else {
      if (iNew.indexOf('brand-') === 0) {
        iOld = iOld + ', .wsc-icon[data-icon="' + iNew.replace('brand-', '3p-') + '"]'
      } else if (iNew.indexOf('symbol-' === 0)) {
        iOld = iOld + ', .wsc-icon[data-icon="' + iNew.replace('symbol-', '') + '"]'
      }
      return iOld
    }
  }
}

// box
wsc.common.box = {
  init: function () {
    var df = '.png'
    var db = 'wondershare'
    $('.wsc-box[data-box]').not('.wsc-box-loaded').each(function () {
      var img = $(this)
      var url = wsc.store.path.image + 'box/' + $(this).data('box') + df
      $.get(url, function () {
        img.css('backgroundImage', 'url(' + url + ')')
      }).fail(function () {
        img.css('backgroundImage', 'url(' + wsc.store.path.image + 'box/' + db + df + ')').addClass('wsc-box-default')
        wsc.common.log('fail to load box: ' + $(this).data('box'), 'warning')
      }).always(function () {
        img.addClass('wsc-box-loaded')
      })
    })
  }
}

// shortcut
wsc.is = {
  init: function () { return wsc.store.state.init },
  ready: function () { return wsc.store.state.ready },
  mac: wsc.common.client.platform === 'mac',
  win: wsc.common.client.platform === 'win',
  ios: wsc.common.client.platform === 'ios',
  android: wsc.common.client.platform === 'android',
  desktop: !!(wsc.common.client.platform === 'mac' || wsc.common.client.platform === 'win'),
  mobile: !!(wsc.common.client.platform === 'ios' || wsc.common.client.platform === 'android'),
  chrome: wsc.common.client.browser === 'chrome',
  firefox: wsc.common.client.browser === 'firefox',
  safari: wsc.common.client.browser === 'safari',
  ie: wsc.common.client.browser === 'ie',
  edge: wsc.common.client.browser === 'edge'
}

// show client info
wsc.common.log('client: ' + wsc.common.client.platform + ' + ' + wsc.common.client.browser, 'coral', 'smoke', true)

/* platform handle */
// auto switch platform base on client
if ($('[data-dev="auto"]').length > 0 || $('[data-sys="auto"]').length > 0) {
  $('[data-dev="auto"]').attr('data-dev', wsc.is.mobile ? 'mobile' : 'desktop')
  $('[data-sys="auto"] [data-platform="' + wsc.common.client.platform + '"]').addClass('active').prop('checked', true)
  $('[data-sys="auto"]').attr('data-sys', wsc.common.client.platform)
  wsc.common.log('auto platform: ' + wsc.common.client.platform, 'info')
}

// manual switch platform
$('body').on('click', '[data-toggle="platform"]', function () {
  var p = $(this).data('platform')
  if (wsc.store.setting.detect.indexOf(p) > -1) {
    $('[data-sys]').attr('data-sys', p)
    $('[data-sys]').attr('data-dev', p === 'ios' || p === 'android' ? 'mobile' : 'desktop')
    $('[data-toggle="platform"]').removeClass('active').prop('checked', false)
    $('[data-toggle="platform"][data-platform="' + p + '"]').addClass('active').prop('checked', true)
    wsc.common.log('switch platform: ' + p, 'info')
  } else {
    wsc.common.log('fail to switch platform: ' + p, 'warning')
  }
})

/** iefix **/
if (wsc.is.ie) {
  $('body').addClass('iefix')
  $.getScript(wsc.store.path.vendor + 'css-vars-ponyfill.min.js', function () { cssVars() })
}

/** font **/
/* global WebFont */
WebFont.load({
  google: { families: wsc.store.setting.style.font.family },
  custom: wsc.store.setting.style.font.custom,
  timeout: 2000,
  active: function () {
    $('body').trigger('wsc.event.font.ready')
    wsc.common.log('all fonts loaded', 'success')
  },
  inactive: function () {
    $('body').trigger('wsc.event.font.fail')
    wsc.common.log('all fonts failed to load', 'warning')
  },
  fontactive: function (familyName, fvd) {
    wsc.common.log('load font: ' + familyName + ' ' + fvd, 'info')
  },
  fontinactive: function (familyName, fvd) {
    wsc.common.log('fail to load font: ' + familyName + ' ' + fvd, 'warning')
  }
})

/** load plugins and vendors **/
if ($('#wsc-load').length === 0) $('body').append('<aside class="parameter" id="wsc-load"></aside>')
// wait for page initialize
wsc.check = setInterval(function () {
  wsc.store.state.wait++
  if (wsc.store.state.init || wsc.store.state.wait === wsc.store.setting.wait) {
    clearInterval(wsc.check)
    $('body').trigger('wsc.event.page.init')
    // check needed plugins
    wsc.common.need('plugin')
  }
}, wsc.store.setting.response * 1000)

// check dependencies
$('body').on('wsc.event.dependency.check', function () {
  if (wsc.store.plugin.need.sort().toString() === wsc.store.plugin.dependency.sort().toString()) $('body').trigger('wsc.event.dependency.ready')
})

// check needed vendors
$('body').on('wsc.event.dependency.ready', function () {
  wsc.common.need('vendor')
})

// for both plugins and vendors
$.each(wsc.store.setting.load, function (typeI, type) {
  // start loading when meet all needs
  $('body').on('wsc.event.' + type + '.need', function () {
    wsc.common.load(type)
  })

  // check loading states
  $('body').on('wsc.event.' + type + '.load wsc.event.vendor.none', function () {
    if (wsc.common.check(type)) {
      $('body').trigger('wsc.event.' + type + '.ready')
      if (type === 'vendor') {
        // page ready
        wsc.common.log('page ready', 'coral', 'smoke', true)
        $('body').trigger('wsc.event.page.ready')
      }
    }
  })
})

/** icons **/
// initialize
$('body').on('wsc.event.page.ready', function () {
  wsc.common.icon.init()
  wsc.common.box.init()
})
// ready
$('body').on('wsc.event.icon.load', $.debounce(wsc.store.setting.response * 1000, function () {
  if ($('.wsc-icon:not(.wsc-icon-loaded)').length === 0) {
    $('body').trigger('wsc.event.icon.ready')
    wsc.common.log('load icons', 'success')
  }
}))

/** utilities **/
$('body').on('wsc.event.page.init', function () {
  // initialize tooltip and popover
  $('[data-toggle="tooltip"]').tooltip({})
  $('[data-toggle="popover"]').popover({})
})

// add support for lazy load background image
document.addEventListener('lazybeforeunveil', function (e) {
  var el = e.target
  var bg = e.target.getAttribute('data-src')
  if (bg && e.target.tagName !== 'IMG') {
    setTimeout(function () {
      el.style.backgroundImage = 'url(' + bg + ')'
    }, wsc.store.setting.response * 1000)
  }
})

// scroll to hash/in page navigation
$('body').on('click', 'a', function (e) {
  var hash = $(this).attr('href')
  if (hash && hash.indexOf('#') === 0) {
    if (hash === '#') {
      e.preventDefault()
    } else {
      if (hash.length > 1 && !$(this).data('toggle') && hash.charAt(1) !== '../../../index.html') {
        var anch = $(hash)
        if ($(hash).length === 0) anch = $('[name="' + hash.substr(1) + '"]')
        if (anch.length === 1 && anch.css('display') !== 'none') {
          e.preventDefault()
          e.stopPropagation()
          $('html, body').animate({ scrollTop: anch.offset().top })
        }
      }
    }
  }
})

// toggle class
$('body').on('click', '[data-toggle="class"]', function () {
  $($(this).data('target')).toggleClass($(this).data('class'))
})

// ajax form submit
$('body').on('submit', '.wsc-form-ajax', function (e) {
  var tf = $(this)
  e.preventDefault()
  $.ajax({
    url: tf.attr('action'),
    method: tf.attr('method'),
    data: tf.serialize(),
    success: function () {
      wsc.alert.add('success', tf.find('.wsc-form-success').text())
    },
    error: function () {
      wsc.alert.add('danger', tf.find('.wsc-form-error').text())
    }
  })
})

/** header **/
// fix ios hover
$('body').on('wsc.event.page.init', function () {
  if (wsc.is.ios) {
    // fofwebdesign.co.uk/template/_testing/ios-sticky-hover-fix.htm
    (function (l) {
      var i
      var s = { touchend: function () {} }
      for (i in s)l.addEventListener(i, s)
    })(document)
  }
})

/** footer **/
// copyright year
$('body').on('wsc.event.page.ready', function () {
  $('.wsc-footer-year span').html(new Date().getFullYear())
})

/** form **/
// show file name
$('body').on('change', '.custom-file-input', function () {
  $(this).closest('.custom-file').find('.custom-file-label').text($(this)[0].files[0].name)
})
