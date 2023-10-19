var cursoreffects = (function (e) {
  "use strict";
  return (
    (e.rainbowCursor = function (e) {
      let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = window.innerWidth,
        c = window.innerHeight,
        l = { x: h / 2, y: h / 2 },
        r = [];
      const d = e?.length || 20,
        a = e?.colors || [
          "#FE0000",
          "#FD8C00",
          "#FFE500",
          "#119F0B",
          "#0644B3",
          "#C22EDC",
        ],
        A = e?.size || 5;
      let u = !1;
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      function g() {
        if (m.matches)
          return (
            console.log(
              "This browser has prefers reduced motion turned on, so the cursor did not init"
            ),
            !1
          );
        (t = document.createElement("canvas")),
          (i = t.getContext("2d")),
          (t.style.top = "0px"),
          (t.style.left = "0px"),
          (t.style.pointerEvents = "none"),
          o
            ? ((t.style.position = "absolute"),
              s.appendChild(t),
              (t.width = s.clientWidth),
              (t.height = s.clientHeight))
            : ((t.style.position = "fixed"),
              document.body.appendChild(t),
              (t.width = h),
              (t.height = c)),
          s.addEventListener("mousemove", p),
          window.addEventListener("resize", f),
          y();
      }
      function f(e) {
        (h = window.innerWidth),
          (c = window.innerHeight),
          o
            ? ((t.width = s.clientWidth), (t.height = s.clientHeight))
            : ((t.width = h), (t.height = c));
      }
      function p(e) {
        if (o) {
          const t = s.getBoundingClientRect();
          (l.x = e.clientX - t.left), (l.y = e.clientY - t.top);
        } else (l.x = e.clientX), (l.y = e.clientY);
        if (!1 === u) {
          u = !0;
          for (let e = 0; e < d; e++)
            (t = l.x), (i = l.y), void 0, r.push(new v(t, i));
        }
        var t, i;
      }
      function y() {
        !(function () {
          i.clearRect(0, 0, h, c), (i.lineJoin = "round");
          let e = [],
            t = l.x,
            n = l.y;
          r.forEach(function (i, o, s) {
            let h = s[o + 1] || s[0];
            (i.position.x = t),
              (i.position.y = n),
              e.push({ x: t, y: n }),
              (t += 0.44 * (h.position.x - i.position.x)),
              (n += 0.44 * (h.position.y - i.position.y));
          }),
            a.forEach((t, n) => {
              i.beginPath(),
                (i.strokeStyle = t),
                e.length && i.moveTo(e[0].x, e[0].y + n * (A - 1)),
                e.forEach((e, t) => {
                  0 !== t && i.lineTo(e.x, e.y + n * A);
                }),
                (i.lineWidth = A),
                (i.lineCap = "round"),
                i.stroke();
            });
        })(),
          (n = requestAnimationFrame(y));
      }
      function w() {
        t.remove(),
          cancelAnimationFrame(n),
          s.removeEventListener("mousemove", p),
          window.addEventListener("resize", f);
      }
      function v(e, t) {
        this.position = { x: e, y: t };
      }
      return (
        (m.onchange = () => {
          m.matches ? w() : g();
        }),
        g(),
        { destroy: w }
      );
    }),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    e
  );
})({});
