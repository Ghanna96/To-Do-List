!(function (t) { const e = {}; function n(r) { if (e[r]) return e[r].exports; const a = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports; }n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }); }, n.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const a in t)n.d(r, a, ((e) => t[e]).bind(null, a)); return r; }, n.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return n.d(e, 'a', e), e; }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, n.p = '', n(n.s = 0); }([function (t, e, n) {
  n.r(e); const r = (t, e) => { const n = document.createElement('a'); return n.textContent = t, e && (n.id = e), n.classList.add('button'), n; }; const a = (t) => { const e = document.createElement('div'); return e.classList.add(t), e; }; const i = (t) => { for (;t.firstChild;)t.removeChild(t.firstChild); }; const o = (t) => { const e = document.createElement('span'); return e.textContent = t, e; }; const u = (t) => { t.classList.toggle('hidden'); }; const d = (function () { const t = JSON.parse(localStorage.getItem('listArray')); return t === null ? [] : t; }()); function s() { localStorage.setItem('listArray', JSON.stringify(d)); } function c(t, e) { if (e.length < t) throw new TypeError(`${t} argument${t}` > 1 ? 's' : ` required, but only ${e.length} present`); } function l(t) { c(1, arguments); const e = Object.prototype.toString.call(t); return t instanceof Date || typeof t === 'object' && e === '[object Date]' ? new Date(t.getTime()) : typeof t === 'number' || e === '[object Number]' ? new Date(t) : (typeof t !== 'string' && e !== '[object String]' || typeof console === 'undefined' || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error()).stack)), new Date(NaN)); } function h(t) { c(1, arguments); const e = l(t); return !isNaN(e); } const m = {
    lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' }, xSeconds: { one: '1 second', other: '{{count}} seconds' }, halfAMinute: 'half a minute', lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' }, xMinutes: { one: '1 minute', other: '{{count}} minutes' }, aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' }, xHours: { one: '1 hour', other: '{{count}} hours' }, xDays: { one: '1 day', other: '{{count}} days' }, aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' }, xMonths: { one: '1 month', other: '{{count}} months' }, aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' }, xYears: { one: '1 year', other: '{{count}} years' }, overXYears: { one: 'over 1 year', other: 'over {{count}} years' }, almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  }; function f(t) { return function (e) { const n = e || {}; const r = n.width ? String(n.width) : t.defaultWidth; return t.formats[r] || t.formats[t.defaultWidth]; }; } const g = {
    date: f({
      formats: {
        full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy',
      },
      defaultWidth: 'full',
    }),
    time: f({
      formats: {
        full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a',
      },
      defaultWidth: 'full',
    }),
    dateTime: f({
      formats: {
        full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: '{{date}}, {{time}}', short: '{{date}}, {{time}}',
      },
      defaultWidth: 'full',
    }),
  }; const p = {
    lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: 'P',
  }; function v(t) { return function (e, n) { let r; const a = n || {}; if ((a.context ? String(a.context) : 'standalone') === 'formatting' && t.formattingValues) { const i = t.defaultFormattingWidth || t.defaultWidth; const o = a.width ? String(a.width) : i; r = t.formattingValues[o] || t.formattingValues[i]; } else { const u = t.defaultWidth; const d = a.width ? String(a.width) : t.defaultWidth; r = t.values[d] || t.values[u]; } return r[t.argumentCallback ? t.argumentCallback(e) : e]; }; } function w(t) { return function (e, n) { const r = String(e); const a = n || {}; const i = a.width; const o = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth]; const u = r.match(o); if (!u) return null; let d; const s = u[0]; const c = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth]; return d = Object.prototype.toString.call(c) === '[object Array]' ? (function (t, e) { for (let n = 0; n < t.length; n++) if (e(t[n])) return n; }(c, ((t) => t.test(r)))) : (function (t, e) { for (const n in t) if (t.hasOwnProperty(n) && e(t[n])) return n; }(c, ((t) => t.test(r)))), d = t.valueCallback ? t.valueCallback(d) : d, { value: d = a.valueCallback ? a.valueCallback(d) : d, rest: r.slice(s.length) }; }; } let y; const b = {
    code: 'en-US',
    formatDistance(t, e, n) { let r; return n = n || {}, r = typeof m[t] === 'string' ? m[t] : e === 1 ? m[t].one : m[t].other.replace('{{count}}', e), n.addSuffix ? n.comparison > 0 ? `in ${r}` : `${r} ago` : r; },
    formatLong: g,
    formatRelative(t, e, n, r) { return p[t]; },
    localize: {
      ordinalNumber(t, e) { const n = Number(t); const r = n % 100; if (r > 20 || r < 10) switch (r % 10) { case 1: return `${n}st`; case 2: return `${n}nd`; case 3: return `${n}rd`; } return `${n}th`; },
      era: v({ values: { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] }, defaultWidth: 'wide' }),
      quarter: v({ values: { narrow: ['1', '2', '3', '4'], abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'], wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] }, defaultWidth: 'wide', argumentCallback(t) { return Number(t) - 1; } }),
      month: v({ values: { narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] }, defaultWidth: 'wide' }),
      day: v({
        values: {
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        defaultWidth: 'wide',
      }),
      dayPeriod: v({
        values: {
          narrow: {
            am: 'a', pm: 'p', midnight: 'mi', noon: 'n', morning: 'morning', afternoon: 'afternoon', evening: 'evening', night: 'night',
          },
          abbreviated: {
            am: 'AM', pm: 'PM', midnight: 'midnight', noon: 'noon', morning: 'morning', afternoon: 'afternoon', evening: 'evening', night: 'night',
          },
          wide: {
            am: 'a.m.', pm: 'p.m.', midnight: 'midnight', noon: 'noon', morning: 'morning', afternoon: 'afternoon', evening: 'evening', night: 'night',
          },
        },
        defaultWidth: 'wide',
        formattingValues: {
          narrow: {
            am: 'a', pm: 'p', midnight: 'mi', noon: 'n', morning: 'in the morning', afternoon: 'in the afternoon', evening: 'in the evening', night: 'at night',
          },
          abbreviated: {
            am: 'AM', pm: 'PM', midnight: 'midnight', noon: 'noon', morning: 'in the morning', afternoon: 'in the afternoon', evening: 'in the evening', night: 'at night',
          },
          wide: {
            am: 'a.m.', pm: 'p.m.', midnight: 'midnight', noon: 'noon', morning: 'in the morning', afternoon: 'in the afternoon', evening: 'in the evening', night: 'at night',
          },
        },
        defaultFormattingWidth: 'wide',
      }),
    },
    match: {
      ordinalNumber: (y = { matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback(t) { return parseInt(t, 10); } }, function (t, e) { const n = String(t); const r = e || {}; const a = n.match(y.matchPattern); if (!a) return null; const i = a[0]; const o = n.match(y.parsePattern); if (!o) return null; let u = y.valueCallback ? y.valueCallback(o[0]) : o[0]; return { value: u = r.valueCallback ? r.valueCallback(u) : u, rest: n.slice(i.length) }; }),
      era: w({
        matchPatterns: { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i }, defaultMatchWidth: 'wide', parsePatterns: { any: [/^b/i, /^(a|c)/i] }, defaultParseWidth: 'any',
      }),
      quarter: w({
        matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i }, defaultMatchWidth: 'wide', parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: 'any', valueCallback(t) { return t + 1; },
      }),
      month: w({
        matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i }, defaultMatchWidth: 'wide', parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] }, defaultParseWidth: 'any',
      }),
      day: w({
        matchPatterns: {
          narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] },
        defaultParseWidth: 'any',
      }),
      dayPeriod: w({
        matchPatterns: { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i },
        defaultMatchWidth: 'any',
        parsePatterns: {
          any: {
            am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i,
          },
        },
        defaultParseWidth: 'any',
      }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  }; function C(t) { if (t === null || !0 === t || !1 === t) return NaN; const e = Number(t); return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e); } function T(t, e) { c(2, arguments); const n = l(t).getTime(); const r = C(e); return new Date(n + r); } function M(t, e) { c(2, arguments); const n = C(e); return T(t, -n); } function x(t, e) { for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e;)r = `0${r}`; return n + r; } const E = {
    y(t, e) { const n = t.getUTCFullYear(); const r = n > 0 ? n : 1 - n; return x(e === 'yy' ? r % 100 : r, e.length); }, M(t, e) { const n = t.getUTCMonth(); return e === 'M' ? String(n + 1) : x(n + 1, 2); }, d(t, e) { return x(t.getUTCDate(), e.length); }, a(t, e) { const n = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am'; switch (e) { case 'a': case 'aa': case 'aaa': return n.toUpperCase(); case 'aaaaa': return n[0]; case 'aaaa': default: return n === 'am' ? 'a.m.' : 'p.m.'; } }, h(t, e) { return x(t.getUTCHours() % 12 || 12, e.length); }, H(t, e) { return x(t.getUTCHours(), e.length); }, m(t, e) { return x(t.getUTCMinutes(), e.length); }, s(t, e) { return x(t.getUTCSeconds(), e.length); }, S(t, e) { const n = e.length; const r = t.getUTCMilliseconds(); return x(Math.floor(r * Math.pow(10, n - 3)), e.length); },
  }; function D(t) { c(1, arguments); const e = 1; const n = l(t); const r = n.getUTCDay(); const a = (r < e ? 7 : 0) + r - e; return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n; } function S(t) { c(1, arguments); const e = l(t); const n = e.getUTCFullYear(); const r = new Date(0); r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0); const a = D(r); const i = new Date(0); i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0); const o = D(i); return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1; } function P(t) { c(1, arguments); const e = S(t); const n = new Date(0); n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0); const r = D(n); return r; } function k(t, e) { c(1, arguments); const n = e || {}; const r = n.locale; const a = r && r.options && r.options.weekStartsOn; const i = a == null ? 0 : C(a); const o = n.weekStartsOn == null ? i : C(n.weekStartsOn); if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively'); const u = l(t); const d = u.getUTCDay(); const s = (d < o ? 7 : 0) + d - o; return u.setUTCDate(u.getUTCDate() - s), u.setUTCHours(0, 0, 0, 0), u; } function U(t, e) { c(1, arguments); const n = l(t, e); const r = n.getUTCFullYear(); const a = e || {}; const i = a.locale; const o = i && i.options && i.options.firstWeekContainsDate; const u = o == null ? 1 : C(o); const d = a.firstWeekContainsDate == null ? u : C(a.firstWeekContainsDate); if (!(d >= 1 && d <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively'); const s = new Date(0); s.setUTCFullYear(r + 1, 0, d), s.setUTCHours(0, 0, 0, 0); const h = k(s, e); const m = new Date(0); m.setUTCFullYear(r, 0, d), m.setUTCHours(0, 0, 0, 0); const f = k(m, e); return n.getTime() >= h.getTime() ? r + 1 : n.getTime() >= f.getTime() ? r : r - 1; } function L(t, e) { c(1, arguments); const n = e || {}; const r = n.locale; const a = r && r.options && r.options.firstWeekContainsDate; const i = a == null ? 1 : C(a); const o = n.firstWeekContainsDate == null ? i : C(n.firstWeekContainsDate); const u = U(t, e); const d = new Date(0); d.setUTCFullYear(u, 0, o), d.setUTCHours(0, 0, 0, 0); const s = k(d, e); return s; } const q = 'midnight'; const O = 'noon'; const W = 'morning'; const N = 'afternoon'; const Y = 'evening'; const I = 'night'; function j(t, e) { const n = t > 0 ? '-' : '+'; const r = Math.abs(t); const a = Math.floor(r / 60); const i = r % 60; if (i === 0) return n + String(a); const o = e || ''; return n + String(a) + o + x(i, 2); } function A(t, e) { return t % 60 == 0 ? (t > 0 ? '-' : '+') + x(Math.abs(t) / 60, 2) : B(t, e); } function B(t, e) { const n = e || ''; const r = t > 0 ? '-' : '+'; const a = Math.abs(t); return r + x(Math.floor(a / 60), 2) + n + x(a % 60, 2); } const H = {
    G(t, e, n) { const r = t.getUTCFullYear() > 0 ? 1 : 0; switch (e) { case 'G': case 'GG': case 'GGG': return n.era(r, { width: 'abbreviated' }); case 'GGGGG': return n.era(r, { width: 'narrow' }); case 'GGGG': default: return n.era(r, { width: 'wide' }); } }, y(t, e, n) { if (e === 'yo') { const r = t.getUTCFullYear(); const a = r > 0 ? r : 1 - r; return n.ordinalNumber(a, { unit: 'year' }); } return E.y(t, e); }, Y(t, e, n, r) { const a = U(t, r); const i = a > 0 ? a : 1 - a; return e === 'YY' ? x(i % 100, 2) : e === 'Yo' ? n.ordinalNumber(i, { unit: 'year' }) : x(i, e.length); }, R(t, e) { return x(S(t), e.length); }, u(t, e) { return x(t.getUTCFullYear(), e.length); }, Q(t, e, n) { const r = Math.ceil((t.getUTCMonth() + 1) / 3); switch (e) { case 'Q': return String(r); case 'QQ': return x(r, 2); case 'Qo': return n.ordinalNumber(r, { unit: 'quarter' }); case 'QQQ': return n.quarter(r, { width: 'abbreviated', context: 'formatting' }); case 'QQQQQ': return n.quarter(r, { width: 'narrow', context: 'formatting' }); case 'QQQQ': default: return n.quarter(r, { width: 'wide', context: 'formatting' }); } }, q(t, e, n) { const r = Math.ceil((t.getUTCMonth() + 1) / 3); switch (e) { case 'q': return String(r); case 'qq': return x(r, 2); case 'qo': return n.ordinalNumber(r, { unit: 'quarter' }); case 'qqq': return n.quarter(r, { width: 'abbreviated', context: 'standalone' }); case 'qqqqq': return n.quarter(r, { width: 'narrow', context: 'standalone' }); case 'qqqq': default: return n.quarter(r, { width: 'wide', context: 'standalone' }); } }, M(t, e, n) { const r = t.getUTCMonth(); switch (e) { case 'M': case 'MM': return E.M(t, e); case 'Mo': return n.ordinalNumber(r + 1, { unit: 'month' }); case 'MMM': return n.month(r, { width: 'abbreviated', context: 'formatting' }); case 'MMMMM': return n.month(r, { width: 'narrow', context: 'formatting' }); case 'MMMM': default: return n.month(r, { width: 'wide', context: 'formatting' }); } }, L(t, e, n) { const r = t.getUTCMonth(); switch (e) { case 'L': return String(r + 1); case 'LL': return x(r + 1, 2); case 'Lo': return n.ordinalNumber(r + 1, { unit: 'month' }); case 'LLL': return n.month(r, { width: 'abbreviated', context: 'standalone' }); case 'LLLLL': return n.month(r, { width: 'narrow', context: 'standalone' }); case 'LLLL': default: return n.month(r, { width: 'wide', context: 'standalone' }); } }, w(t, e, n, r) { const a = (function (t, e) { c(1, arguments); const n = l(t); const r = k(n, e).getTime() - L(n, e).getTime(); return Math.round(r / 6048e5) + 1; }(t, r)); return e === 'wo' ? n.ordinalNumber(a, { unit: 'week' }) : x(a, e.length); }, I(t, e, n) { const r = (function (t) { c(1, arguments); const e = l(t); const n = D(e).getTime() - P(e).getTime(); return Math.round(n / 6048e5) + 1; }(t)); return e === 'Io' ? n.ordinalNumber(r, { unit: 'week' }) : x(r, e.length); }, d(t, e, n) { return e === 'do' ? n.ordinalNumber(t.getUTCDate(), { unit: 'date' }) : E.d(t, e); }, D(t, e, n) { const r = (function (t) { c(1, arguments); const e = l(t); const n = e.getTime(); e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0); const r = e.getTime(); const a = n - r; return Math.floor(a / 864e5) + 1; }(t)); return e === 'Do' ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : x(r, e.length); }, E(t, e, n) { const r = t.getUTCDay(); switch (e) { case 'E': case 'EE': case 'EEE': return n.day(r, { width: 'abbreviated', context: 'formatting' }); case 'EEEEE': return n.day(r, { width: 'narrow', context: 'formatting' }); case 'EEEEEE': return n.day(r, { width: 'short', context: 'formatting' }); case 'EEEE': default: return n.day(r, { width: 'wide', context: 'formatting' }); } }, e(t, e, n, r) { const a = t.getUTCDay(); const i = (a - r.weekStartsOn + 8) % 7 || 7; switch (e) { case 'e': return String(i); case 'ee': return x(i, 2); case 'eo': return n.ordinalNumber(i, { unit: 'day' }); case 'eee': return n.day(a, { width: 'abbreviated', context: 'formatting' }); case 'eeeee': return n.day(a, { width: 'narrow', context: 'formatting' }); case 'eeeeee': return n.day(a, { width: 'short', context: 'formatting' }); case 'eeee': default: return n.day(a, { width: 'wide', context: 'formatting' }); } }, c(t, e, n, r) { const a = t.getUTCDay(); const i = (a - r.weekStartsOn + 8) % 7 || 7; switch (e) { case 'c': return String(i); case 'cc': return x(i, e.length); case 'co': return n.ordinalNumber(i, { unit: 'day' }); case 'ccc': return n.day(a, { width: 'abbreviated', context: 'standalone' }); case 'ccccc': return n.day(a, { width: 'narrow', context: 'standalone' }); case 'cccccc': return n.day(a, { width: 'short', context: 'standalone' }); case 'cccc': default: return n.day(a, { width: 'wide', context: 'standalone' }); } }, i(t, e, n) { const r = t.getUTCDay(); const a = r === 0 ? 7 : r; switch (e) { case 'i': return String(a); case 'ii': return x(a, e.length); case 'io': return n.ordinalNumber(a, { unit: 'day' }); case 'iii': return n.day(r, { width: 'abbreviated', context: 'formatting' }); case 'iiiii': return n.day(r, { width: 'narrow', context: 'formatting' }); case 'iiiiii': return n.day(r, { width: 'short', context: 'formatting' }); case 'iiii': default: return n.day(r, { width: 'wide', context: 'formatting' }); } }, a(t, e, n) { const r = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am'; switch (e) { case 'a': case 'aa': case 'aaa': return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }); case 'aaaaa': return n.dayPeriod(r, { width: 'narrow', context: 'formatting' }); case 'aaaa': default: return n.dayPeriod(r, { width: 'wide', context: 'formatting' }); } }, b(t, e, n) { let r; const a = t.getUTCHours(); switch (r = a === 12 ? O : a === 0 ? q : a / 12 >= 1 ? 'pm' : 'am', e) { case 'b': case 'bb': case 'bbb': return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }); case 'bbbbb': return n.dayPeriod(r, { width: 'narrow', context: 'formatting' }); case 'bbbb': default: return n.dayPeriod(r, { width: 'wide', context: 'formatting' }); } }, B(t, e, n) { let r; const a = t.getUTCHours(); switch (r = a >= 17 ? Y : a >= 12 ? N : a >= 4 ? W : I, e) { case 'B': case 'BB': case 'BBB': return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }); case 'BBBBB': return n.dayPeriod(r, { width: 'narrow', context: 'formatting' }); case 'BBBB': default: return n.dayPeriod(r, { width: 'wide', context: 'formatting' }); } }, h(t, e, n) { if (e === 'ho') { let r = t.getUTCHours() % 12; return r === 0 && (r = 12), n.ordinalNumber(r, { unit: 'hour' }); } return E.h(t, e); }, H(t, e, n) { return e === 'Ho' ? n.ordinalNumber(t.getUTCHours(), { unit: 'hour' }) : E.H(t, e); }, K(t, e, n) { const r = t.getUTCHours() % 12; return e === 'Ko' ? n.ordinalNumber(r, { unit: 'hour' }) : x(r, e.length); }, k(t, e, n) { let r = t.getUTCHours(); return r === 0 && (r = 24), e === 'ko' ? n.ordinalNumber(r, { unit: 'hour' }) : x(r, e.length); }, m(t, e, n) { return e === 'mo' ? n.ordinalNumber(t.getUTCMinutes(), { unit: 'minute' }) : E.m(t, e); }, s(t, e, n) { return e === 'so' ? n.ordinalNumber(t.getUTCSeconds(), { unit: 'second' }) : E.s(t, e); }, S(t, e) { return E.S(t, e); }, X(t, e, n, r) { const a = (r._originalDate || t).getTimezoneOffset(); if (a === 0) return 'Z'; switch (e) { case 'X': return A(a); case 'XXXX': case 'XX': return B(a); case 'XXXXX': case 'XXX': default: return B(a, ':'); } }, x(t, e, n, r) { const a = (r._originalDate || t).getTimezoneOffset(); switch (e) { case 'x': return A(a); case 'xxxx': case 'xx': return B(a); case 'xxxxx': case 'xxx': default: return B(a, ':'); } }, O(t, e, n, r) { const a = (r._originalDate || t).getTimezoneOffset(); switch (e) { case 'O': case 'OO': case 'OOO': return `GMT${j(a, ':')}`; case 'OOOO': default: return `GMT${B(a, ':')}`; } }, z(t, e, n, r) { const a = (r._originalDate || t).getTimezoneOffset(); switch (e) { case 'z': case 'zz': case 'zzz': return `GMT${j(a, ':')}`; case 'zzzz': default: return `GMT${B(a, ':')}`; } }, t(t, e, n, r) { const a = r._originalDate || t; return x(Math.floor(a.getTime() / 1e3), e.length); }, T(t, e, n, r) { return x((r._originalDate || t).getTime(), e.length); },
  }; function z(t, e) { switch (t) { case 'P': return e.date({ width: 'short' }); case 'PP': return e.date({ width: 'medium' }); case 'PPP': return e.date({ width: 'long' }); case 'PPPP': default: return e.date({ width: 'full' }); } } function X(t, e) { switch (t) { case 'p': return e.time({ width: 'short' }); case 'pp': return e.time({ width: 'medium' }); case 'ppp': return e.time({ width: 'long' }); case 'pppp': default: return e.time({ width: 'full' }); } } const F = { p: X, P(t, e) { let n; const r = t.match(/(P+)(p+)?/); const a = r[1]; const i = r[2]; if (!i) return z(t, e); switch (a) { case 'P': n = e.dateTime({ width: 'short' }); break; case 'PP': n = e.dateTime({ width: 'medium' }); break; case 'PPP': n = e.dateTime({ width: 'long' }); break; case 'PPPP': default: n = e.dateTime({ width: 'full' }); } return n.replace('{{date}}', z(a, e)).replace('{{time}}', X(i, e)); } }; function Q(t) { const e = new Date(t.getTime()); const n = Math.ceil(e.getTimezoneOffset()); return e.setSeconds(0, 0), 6e4 * n + e.getTime() % 6e4; } const G = ['D', 'DD']; const _ = ['YY', 'YYYY']; function R(t) { return G.indexOf(t) !== -1; } function J(t) { return _.indexOf(t) !== -1; } function $(t) { if (t === 'YYYY') throw new RangeError('Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr'); if (t === 'YY') throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr'); if (t === 'D') throw new RangeError('Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr'); if (t === 'DD') throw new RangeError('Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr'); } const V = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; const K = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g; const Z = /^'([^]*?)'?$/; const tt = /''/g; const et = /[a-zA-Z]/; function nt(t) { return t.match(Z)[1].replace(tt, "'"); } class rt {constructor(t, e, n, r) { this.title = t, this.description = e || '', this.duedate = n, this.priority = r; }} class at {
    constructor(t, e) {
      this.title = t || 'New List', this.description = e || 'none', this.creationDate = (function (t, e, n) {
        c(2, arguments); const r = String(e); const a = n || {}; const i = a.locale || b; const o = i.options && i.options.firstWeekContainsDate; const u = o == null ? 1 : C(o); const d = a.firstWeekContainsDate == null ? u : C(a.firstWeekContainsDate); if (!(d >= 1 && d <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively'); const s = i.options && i.options.weekStartsOn; const m = s == null ? 0 : C(s); const f = a.weekStartsOn == null ? m : C(a.weekStartsOn); if (!(f >= 0 && f <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively'); if (!i.localize) throw new RangeError('locale must contain localize property'); if (!i.formatLong) throw new RangeError('locale must contain formatLong property'); const g = l(t); if (!h(g)) throw new RangeError('Invalid time value'); const p = Q(g); const v = M(g, p); const w = {
          firstWeekContainsDate: d, weekStartsOn: f, locale: i, _originalDate: g,
        }; const y = r.match(K).map(((t) => { const e = t[0]; return e === 'p' || e === 'P' ? (0, F[e])(t, i.formatLong, w) : t; })).join('').match(V)
          .map(((t) => { if (t === "''") return "'"; const e = t[0]; if (e === "'") return nt(t); const n = H[e]; if (n) return !a.useAdditionalWeekYearTokens && J(t) && $(t), !a.useAdditionalDayOfYearTokens && R(t) && $(t), n(v, t, i.localize, w); if (e.match(et)) throw new RangeError(`Format string contains an unescaped latin alphabet character \`${e}\``); return t; }))
          .join(''); return y;
      }(new Date(), 'dd-MM-yyyy')), this.toDo = [];
    }

    get _title() { return `${this.title} ( ${this.creationDate} )`; }

    get _description() { if (this.description !== 'none') return `Description: ${this.description}`; }
  } const it = (t, e) => {
    const n = a('todo-form'); const i = {
      h4: document.createElement('h4'), titleInput: document.createElement('input'), descInput: document.createElement('input'), dateInput: document.createElement('input'), prioInput: document.createElement('select'), buttons: a('buttons'),
    }; const o = {
      None: document.createElement('option'), Casual: document.createElement('option'), Important: document.createElement('option'), Urgent: document.createElement('option'),
    }; for (const t in o)i.prioInput.appendChild(o[t]), o[t].textContent = `${t}`, o[t].setAttribute('value', `${t}`); const d = r('Add'); const c = r('Cancel'); i.h4.textContent = 'Add a New Todo:', i.dateInput.setAttribute('type', 'date'), i.titleInput.setAttribute('type', 'text'), i.titleInput.setAttribute('placeholder', 'Title'), i.descInput.setAttribute('type', 'text'), i.descInput.setAttribute('placeholder', 'Description'), i.titleInput.id = 'todo-title', i.descInput.id = 'todo-desc', i.dateInput.id = 'todo-date', i.prioInput.id = 'priority', i.buttons.appendChild(d), i.buttons.appendChild(c); for (const t in i)n.appendChild(i[t]), i[t].style.padding = '1em', i[t].style.lineHeight = '21px'; if (typeof e === 'number') { const n = t.toDo[e]; i.h4.textContent = 'Edit To-Do:', i.titleInput.value = n.title, i.descInput.value = n.description, i.dateInput.value = n.duedate, i.prioInput.value = n.priority; } return d.addEventListener('click', () => { typeof e === 'number' ? ((t, e, n) => { t.toDo[e] = n, s(); })(t, e, dt()) : (u(document.querySelector('#add-todo')), ((t, e) => { e.toDo.push(t), s(); })(dt(), t)), n.remove(), ht(t); }), c.addEventListener('click', () => { typeof e !== 'number' && u(document.querySelector('#add-todo')), n.remove(); }), n;
  }; const ot = (t, e) => {
    const n = {
      h4: document.createElement('h4'), titleInput: document.createElement('input'), desc: document.createElement('h4'), descInput: document.createElement('input'), buttons: a('buttons'),
    }; const i = r('Add', 'submit'); const o = r('Cancel', 'cancel'); n.buttons.appendChild(i), n.buttons.appendChild(o), n.h4.textContent = 'List Title', n.desc.textContent = 'Description(optional)', n.titleInput.id = 'title', n.descInput.id = 'description'; const u = a('popUp'); const d = a('popUpContent'); for (const t in n)d.appendChild(n[t]); if (u.appendChild(d), document.querySelector('#content').appendChild(u), t) return n.titleInput.value = e.title, n.descInput.value = e.description, document.querySelector('#cancel').addEventListener('click', () => { u.remove(); }), void document.querySelector('#submit').addEventListener('click', () => { ((t) => { const e = { title: document.getElementById('title').value, description: document.getElementById('description').value }; t.title = e.title, t.description = e.description, s(); })(e), u.remove(), st(); }); document.querySelector('#cancel').addEventListener('click', () => { u.remove(); }), document.querySelector('#submit').addEventListener('click', () => { ut(), u.remove(); });
  }; const ut = () => { const t = { title: document.getElementById('title').value, description: document.getElementById('description').value }; const e = new at(t.title, t.description); let n; n = e, d.push(n), s(), st(); }; const dt = () => {
    const t = {
      title: document.getElementById('todo-title').value, description: document.getElementById('todo-desc').value, date: document.getElementById('todo-date').value, prio: document.getElementById('priority').value,
    }; return new rt(t.title, t.description, t.date, t.prio);
  }; const st = () => { const t = document.querySelector('.my-lists'); const e = d.map((t, e) => { const n = a('list'); return n.textContent = t.title, n.id = e, n; }); i(t); for (const n in e)t.appendChild(e[n]); document.querySelectorAll('.list').forEach((t) => { t.addEventListener('click', () => { ct(t.id), lt(t.id); }); }); }; const ct = (t) => {
    const e = {
      h3: document.createElement('h3'), remove: r('Remove list', 'rmv-list'), edit: r('Edit', 'edit-list'), desc: document.createElement('p'), title: document.createElement('h2'),
    }; e.remove.classList.add('hvr-bounce-out'), e.edit.classList.add('hvr-bounce-out'); const n = document.querySelector('.list-inf'); if (i(n), d[t]) { for (const t in e)n.appendChild(e[t]); e.title.textContent = 'My todos', e.h3.textContent = d[t]._title, e.desc.textContent = d[t]._description, e.remove.addEventListener('click', () => { let e; e = t, d.splice(e, 1), s(), st(), ct(0), lt(0); }), e.edit.addEventListener('click', () => { ot(!0, d[t]); }); }
  }; const lt = (t) => { const e = { head: a('my-todos'), add: a('add') }; const n = r('New to-do', 'add-todo'); n.classList.add('hvr-rectangle-out'), e.add.appendChild(n); const o = document.querySelector('.todo-list'); if (i(o), d[t]) { for (const t in e)o.appendChild(e[t]); n.addEventListener('click', (n) => { u(n.target), e.add.appendChild(it(d[t], !1)); }), ht(d[t]); } }; const ht = (t) => { const e = t.toDo.map((e, n) => { const r = a('card'); const d = a('info1'); const c = a('info2'); const l = o(e.title); const h = o(`Due: ${e.duedate}`); const m = o(`Description: ${e.description}`); const f = a('close'); const g = a('form'); const p = `${e.priority}`; return d.classList.add(p), d.appendChild(l), d.appendChild(f), r.appendChild(d), c.appendChild(m), c.appendChild(h), r.appendChild(c), f.textContent = '+', r.setAttribute('data-id', n), u(c), f.addEventListener('click', () => { ((t, e) => { e.toDo.splice(t, 1), s(); })(n, t), r.remove(); }), d.addEventListener('click', (() => { u(c); })), c.addEventListener('click', (() => { i(g), g.appendChild(it(t, n)), r.appendChild(g); })), r; }); const n = document.querySelector('.my-todos'); i(n), e.forEach((t) => { n.appendChild(t); }); }; d.length == 0 && (() => { d.push(new at('Welcome', 'This app saves your lists on your browser locally, you can exit the app anytime and your todos will be saved')); const t = new rt('This is the title of the todo click here to see the details', 'This is the description, click here to edit', '', 'Casual'); d[0].toDo.push(t); })(), (() => {
    const t = document.querySelector('#content'); const e = { header: document.createElement('header'), main: a('main') }; const n = { lists: a('projects'), todos: a('todo') }; const i = {
      title: document.createElement('section'), div: a('my-lists'), listButton: r('add new list', 'add-list'), formList: a('add-list'),
    }; const o = { info: a('list-inf'), div: a('todo-list') }; const u = document.createElement('h1'); const d = document.createElement('h3'); u.textContent = 'To-Do List App', d.textContent = 'My Lists', e.header.appendChild(u), i.title.appendChild(d), i.listButton.classList.add('hvr-bounce-to-bottom'); for (const n in e)t.appendChild(e[n]); for (const t in n)e.main.appendChild(n[t]); for (const t in i)n.lists.appendChild(i[t]); for (const t in o)n.todos.appendChild(o[t]); i.listButton.addEventListener('click', () => { ot(); }), st(), document.querySelectorAll('.list').forEach((t) => { t.addEventListener('click', () => { ct(t.id), lt(t.id); }); });
  })();
}]));
