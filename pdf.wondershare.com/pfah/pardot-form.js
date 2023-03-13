/****************************************************
*  project: pardot form ajax handler                *
*  description: main script                         *
*  author: horans@gmail.com                         *
*  url: github.com/horans/pardot-form-ajax-handler  *
*  update: 190911                                   *
****************************************************/

/* global $ grecaptcha */

// namespace
var pfah = {}

// get script path
pfah.gcp = function (name) {
  var cs = document.currentScript
  var cl
  if (cs) {
    cl = cs.src
  } else {
    var ss = document.querySelectorAll('script[src' + (name ? ('*="' + name + '"') : '') + ']')
    cs = ss[ss.length - 1]
    cl = cs.getAttribute.length === undefined ? cs.getAttribute('src', -1) : cs.src
  }
  return cl.substring(0, cl.lastIndexOf('../../index.html') + 1)
}
pfah.path = pfah.gcp('pardot-form.html')

// load asset
pfah.asset = function (type, asset) {
  if (type !== 'vendor') type = 'style'
  if ($('head #' + type + '-' + asset).length === 0) {
    var a = document.createElement(type === 'vendor' ? 'script' : 'link')
    a.id = type + '-' + asset
    if (type === 'vendor') {
      a.src = pfah.path + 'vendor/' + asset + '.js'
    } else {
      a.rel = 'stylesheet'
      a.href = pfah.path + 'pardot-form' + (asset === 'pfah' ? '' : ('-' + asset)) + '.css'
    }
    document.getElementsByTagName('head')[0].appendChild(a)
    if (type === 'vendor') {
      $('body').trigger('pfah.vendor', asset)
    }
  }
}

// set value
pfah.remember = function () {
  $('.pfah-input').each(function () {
    if ($(this).closest('.pfah-wrapper').data('remember') !== 'no') {
      $(this).val(window.localStorage.getItem('pfah-' + $(this).attr('name')))
    }
  })
}

// recaptcha
pfah.recaptcha = {
  active: false,
  load: false,
  check: ''
}

// initialize
pfah.init = function () {
  if ($('.pfah-wrapper').length > 0) {
    var n = $('.pfah-wrapper:last').data('style') === 'no'
    // default style
    if (!n) pfah.asset('style', 'pfah')
    // all forms
    $('.pfah-wrapper').each(function () {
      // customize theme
      if (!n) {
        var t = $(this).data('theme')
        if (t) pfah.asset('style', t.toLowerCase())
      }
      // check form link
      var p = $(this).find('.pfah-form').attr('action')
      if (p.indexOf('go.pardot.com') < 0 && p.indexOf('go.pardot.wondershare.com') < 0) {
        $(this).trigger('pfah.notpardot')
          .find('[type="submit"]').attr('disabled', 'disabled')
        window.console.log('[pfah] not a pardot form')
      } else {
        // add source track
        var s = $(this).data('source')
        if (s && $(this).find('.pfah-form').find('[name="' + s + '"]').length === 0) {
          $(this).find('.pfah-form').prepend('<input type="hidden" name="' + s + '" value="' + window.location.href + '" />')
        }
        // add id
        var i = p.substring(p.lastIndexOf('../../index.html') + 1)
        $(this).attr('data-id', 'pfah-' + i)
        // load state
        var l = window.localStorage.getItem('pfah-' + i)
        if (l) $(this).addClass('pfah-result-' + l)
        $(this).trigger('pfah.ready', $(this).attr('data-id'))
      }
      // add recaptcha
      if ($(this).data('recaptcha')) {
        $(this).find('[type="submit"]').before('<div class="g-recaptcha" data-sitekey="' + $(this).data('recaptcha') + '"></div>')
        pfah.recaptcha.active = true
      }
    })
    // load recaptcha
    if (pfah.recaptcha.active && !pfah.recaptcha.load) {
      $.getScript('../../../www.google.com/recaptcha/api.js')
      pfah.recaptcha.load = true
    }
  }
  // popup
  if ($('.pfah-popup').length > 0) pfah.asset('vendor', 'jquery.bpopup.min')
  // debounce
  if ($('.pfah-wrapper[data-remember="no"]').length < $('.pfah-wrapper').length) pfah.asset('vendor', 'jquery.ba-throttle-debounce.min')
  // set value
  pfah.remember()
  

  // set country
  if(document.querySelectorAll('[js-addform="form_country_list"]').length > 0){
		pfah.form_country('[js-addform="form_country_list"]')
  }else{
    pfah.setCountry()
  }
  
}

// form state
pfah.form = {
  id: '',
  load: false
}

// callback
pfah.callback = function (res) {
  $('[data-id="' + pfah.form.id + '"]:first').trigger('pfah.callback', [pfah.form.id, res.result])
  window.console.log('[pfah] callback ' + res.result)
}

// popup
pfah.popup = function (tar) {
  tar.trigger('pfah.callpopup')
}

// country list
pfah.countryObj= {
  AF: "Afghanistan",
  AX: "Åland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua & Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia & Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  VG: "British Virgin Islands",
  BN: "Brunei",
  BG: "Bulgaria",
  BF: "Burkina",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  BQ: "Caribbean Netherlands",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Côte d'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  CD: "Democratic Republic of the Congo",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands",
  FO: "Faroe Islands",
  FM: "Federated States of Micronesia",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GB: "Great Britain (United Kingdom; England)",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GW: "Guinea-Bissau",
  GN: "Guinea",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  HN: "Honduras",
  HK: "Hong Kong S.A.R.",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Laos",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macau S.A.R.",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar (Burma)",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  KP: "North Korea",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian territories",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PN: "Pitcairn Islands",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  MK: "Republic of Macedonia (FYROM)",
  CG: "Republic of the Congo",
  RE: "Réunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthélemy",
  MF: "Saint Martin (France)",
  PM: "Saint-Pierre and Miquelon",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome & Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  KR: "South Korea",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SH: "St. Helena & Dependencies",
  KN: "St. Kitts & Nevis",
  LC: "St. Lucia",
  VC: "St. Vincent & the Grenadines",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen Islands",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  BS: "The Bahamas",
  KM: "The Comoros",
  PH: "The Philippines",
  TL: "Timor-Leste (East Timor)",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad & Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks & Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  UM: "United States Minor Outlying Islands",
  US: "United States of America (USA)",
  VI: "United States Virgin Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VA: "Vatican City (The Holy See)",
  VE: "Venezuela",
  VN: "Vietnam",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
}
pfah.form_country_list = [
  "Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua And Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas The","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo The Democratic Republic Of The","Cook Islands","Costa Rica","Cote D'Ivoire (Ivory Coast)","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji Islands","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia The","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey and Alderney","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and McDonald Islands","Honduras","Hong Kong S.A.R.","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea North\n","Korea South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau S.A.R.","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Man (Isle of)","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands Antilles","Netherlands The","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory Occupied","Panama","Papua new Guinea","Paraguay","Peru","Philippines","Pitcairn Island","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Helena","Saint Kitts And Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent And The Grenadines","Saint-Barthelemy","Saint-Martin (French part)","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard And Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad And Tobago","Tunisia","Turkey","Turkmenistan","Turks And Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City State (Holy See)","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (US)","Wallis And Futuna Islands","Western Sahara","Yemen","Zambia","Zimbabwe"
]

// set country list
pfah.form_country = function(idclass){
  var $this = $(idclass);
	pfah.form_country_list.map(function(item,index){
    $this.append('<option class="city-option" value="'+item+'">'+item+'</option>')
    if(index == pfah.form_country_list.length - 1){
      pfah.setCountry()
    }
	})
}

// set target country
pfah.setCountry = function(){
  if(localStorage.getItem('pdCountry')){
    target = localStorage.getItem('pdCountry')
    pfah.selectCountry(target)
  }else{
    $.getJSON('https://common-info.wondershare.com/api/v1/checkeu',function(res){
      localStorage.setItem('pdCountry',res.country_code)
      target = res.country_code
      pfah.selectCountry(target)
    }.bind(this))
  }
}
pfah.selectCountry = function(target){
  var pdCountry = pfah.countryObj[target]
  console.log(pdCountry);
  $('input[name="country"]').val(pdCountry)
  $('select[name="country"] option:contains("' + pdCountry + '")').attr("selected", true)
}


// document ready
$(function () {
  // initialize
  pfah.init()

  // submit form
  $('body').on('submit', '.pfah-wrapper', function (e) {
    e.preventDefault()
    if ($(this).data('recaptcha')) {
      pfah.recaptcha.check = grecaptcha.getResponse()
    }
    if (!pfah.form.load && ($(this).data('recaptcha') ? pfah.recaptcha.check : true)) {
      pfah.recaptcha.check = ''
      pfah.form.id = $(this).data('id')
      // check required checkbox
      var c = $(this).find('.pfah-check-required')
      if (c.length > 0 && c.length !== c.filter(':checked').length) {
        pfah.callback({ result: 'error' })
      } else {
        pfah.form.load = true
        var f = $(this).find('.pfah-form')
        f.find('[type="submit"]').attr('disabled', 'disabled')
        window.console.log('[pfah] form submit')
        $(this).trigger('pfah.submit', pfah.form.id)
        // stackoverflow.com/questions/47047487/
        $.ajax({
          url: f.attr('action'),
          method: 'POST',
          data: f.serialize(),
          dataType: 'jsonp'
        })
      }
    }
  })

  // callback handler
  $('body').on('pfah.callback', function (e, id, result) {
    var s = $('[data-id="' + id + '"]').data('state')
    if (s && (s.toLowerCase() === result || s.toLowerCase() === 'all')) window.localStorage.setItem(pfah.form.id, result)
    $('[data-id="' + pfah.form.id + '"]').removeClass('pfah-result-error pfah-result-done').addClass('pfah-result-' + result)
      .find('[type="submit"]').removeAttr('disabled')
    pfah.form.id = ''
    pfah.form.load = false
  })

  // close error message
  $('body').on('click', '.pfah-error', function () {
    var f = $(this).closest('.pfah-wrapper')
    f.removeClass('pfah-result-error')
    window.localStorage.removeItem(f.data('id'))
  })

  // open popup
  $('body').on('click pfah.callpopup', '[data-toggle="pfah-popup"]', function () {
    var t = $(this).data('target')
    if (t) {
      var f = $(t).find('.pfah-wrapper')
      if (f.length > 0) {
        $(t).bPopup({
          closeClass: 'pfah-close',
          onOpen: function () {
            f.trigger('pfah.popup', [f.attr('data-id'), 'open'])
          },
          onClose: function () {
            f.trigger('pfah.popup', [f.attr('data-id'), 'close'])
          }
        })
      }
    }
  })

  // close popup with delay
  $('body').on('click', '.pfah-close-delay', function () {
    var t = $(this)
    setTimeout(function () {
      t.closest('.pfah-popup').find('.pfah-close').click()
    }, 200)
  })
})

// remeber inputs
$('body').on('pfah.vendor', function (e, asset) {
  if (asset === 'jquery.ba-throttle-debounce') {
    var cb = setInterval(function () {
      if (typeof $.debounce === 'function') {
        clearInterval(cb)
        $('body').on('change paste keyup', '.pfah-input', $.debounce(700, function () {
          if ($(this).closest('.pfah-wrapper').data('remember') !== 'no') {
            window.localStorage.setItem('pfah-' + $(this).attr('name'), $(this).val())
            pfah.remember()
          }
        }))
      }
    }, 100)
  }
})




