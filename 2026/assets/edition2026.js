/* ArcheoFOSS 2026 · animazione della copertina: la stessa dello screensaver (Media kit).
   Venti strati vengono scavati verso l'alto; quando spariscono restano solo gli 11 punti numerati, che lampeggiano
   insieme; poi gli strati si depositano dal basso e ogni punto si accende con il suo strato. Ciclo di 48 s.
   Senza dipendenze. Con "riduci movimento" attivo resta il disegno fermo, con tutti gli strati. */
(function () {
  'use strict';
  var svg = document.getElementById('af26-anim');
  if (!svg) return;
  var NS = 'http://www.w3.org/2000/svg', CYCLE = 48000, TAU = Math.PI * 2;
  // fascia più sottile dello screensaver: linee più vicine (GAP), onda più bassa (AMP), salita più corta (LIFT)
  var BASE = 760, GAP = 11, AMP = 72, LIFT = 170;
  var stations = [[.110, 3], [.266, 9], [.211, 13], [.422, 5], [.519, 7], [.685, 11],
                  [.350, 18], [.602, 1], [.779, 5], [.889, 11], [.680, 15]];
  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    parent.appendChild(n); return n;
  }
  var threads = el('g', {}, svg), nodesG = el('g', {}, svg), paths = [], nodes = [];
  for (var i = 0; i < 20; i++) paths.push(el('path', {'class': 'thread', 'stroke-width': i % 5 === 0 ? 1.6 : .9}, threads));
  stations.forEach(function (s, n) {
    var g = el('g', {}, nodesG);
    var c = el('circle', {'class': 'node-dot', r: 6.5}, g);
    var t = el('text', {'class': 'node-label', x: 13, y: -12}, g);
    t.textContent = (n + 1 < 10 ? '0' : '') + (n + 1);
    nodes.push({g: g, c: c});
  });
  var xFor = function (u) { return -36 + 1992 * u; };
  function yFor(i, u, ph) {
    var sp = TAU * u - .25;
    return BASE + i * GAP + (AMP + i * .42) * Math.sin(sp + .018 * Math.sin(ph))
      + 6 * Math.sin(sp + ph + i * .14) + 2.4 * Math.sin(2 * sp - 2 * ph + i * .09);
  }
  var smooth = function (t) { var v = Math.min(1, Math.max(0, t)); return v * v * (3 - 2 * v); };
  function layerState(i, t) {                     // 1 = strato al suo posto, 0 = scavato
    var rs = .055 + i * .0168, ds = .525 + (19 - i) * .0168, tr = .073;
    if (t < rs) return 1;
    if (t < rs + tr) return 1 - smooth((t - rs) / tr);
    if (t < ds) return 0;
    if (t < ds + tr) return smooth((t - ds) / tr);
    return 1;
  }
  function draw(ms, still) {
    var t = still ? 0 : (((ms % CYCLE) + CYCLE) % CYCLE) / CYCLE, ph = t * TAU, st = [];
    for (var i = 0; i < 20; i++) {
      var s = layerState(i, t); st.push(s);
      var lift = (1 - s) * LIFT, d = '';
      for (var k = 0; k <= 92; k++) { var u = k / 92; d += (k ? 'L' : 'M') + xFor(u).toFixed(1) + ',' + (yFor(i, u, ph) - lift).toFixed(1); }
      paths[i].setAttribute('d', d);
      paths[i].setAttribute('opacity', ((i % 5 === 0 ? .76 : .47) * smooth(s)).toFixed(3));
    }
    var only = t >= .452 && t < .525;
    var blink = only ? Math.pow(Math.sin(Math.PI * Math.min(1, Math.max(0, (t - .452) / (.525 - .452)))), 2) : 0;
    stations.forEach(function (sn, n) {
      var u = sn[0] + .009 * Math.sin(ph + n * .67), lit = smooth((st[sn[1]] - .72) / .28);
      nodes[n].g.setAttribute('transform', 'translate(' + xFor(u).toFixed(1) + ' ' + yFor(sn[1], u, ph).toFixed(1) + ')');
      nodes[n].g.setAttribute('opacity', (only ? blink : lit).toFixed(3));
      nodes[n].c.setAttribute('r', (6.5 + (only ? 1.8 * blink : 2.5 * lit * (1 - lit))).toFixed(2));
    });
  }
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { draw(0, true); return; }
  (function loop(ms) { draw(ms); requestAnimationFrame(loop); })(0);
})();
