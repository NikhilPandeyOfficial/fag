(this.webpackJsonpfag = this.webpackJsonpfag || []).push([
  [0],
  {
    118: function (e, a, t) {
      e.exports = {
        filterHead: "FilterCard_filterHead__3x1CQ",
        filterName: "FilterCard_filterName__7Osvc",
        collapseIconContainer: "FilterCard_collapseIconContainer__3Oa4F",
        collapseIcon: "FilterCard_collapseIcon__3PCL_",
        filterContainer: "FilterCard_filterContainer__ZkmM8",
        filterCapsule: "FilterCard_filterCapsule__pXM1P",
      };
    },
    160: function (e, a, t) {
      e.exports = {
        imageContainer: "CompareFaces_imageContainer__32rSE",
        btnContainer: "CompareFaces_btnContainer__2OBYK",
        btn: "CompareFaces_btn__A9P_R",
      };
    },
    161: function (e, a, t) {
      e.exports = {
        imageUpload: "ExtractFacialFeatures_imageUpload__2QPuP",
        btnContainer: "ExtractFacialFeatures_btnContainer__3MXPQ",
        btn: "ExtractFacialFeatures_btn__IDFpK",
        extractionResults: "ExtractFacialFeatures_extractionResults__8HlW2",
      };
    },
    276: function (e, a, t) {
      e.exports = { uploadContainer: "UploadedImage_uploadContainer__3uU7f" };
    },
    305: function (e, a, t) {},
    307: function (e, a, t) {},
    320: function (e, a) {},
    321: function (e, a) {},
    329: function (e, a) {},
    332: function (e, a) {},
    333: function (e, a) {},
    334: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(17),
        c = t(21),
        s = t.n(c),
        r = t(256),
        i = t.n(r),
        o = t(59),
        l = (t(305), t(48)),
        j = (t(306), t(307), t(5)),
        b = t(46),
        u = t.n(b),
        d = t(347),
        m = t(346),
        x = function (e) {
          var a = Object(c.useState)(u.a.navMobileHide),
            t = Object(j.a)(a, 2),
            s = t[0],
            r = t[1],
            i = function () {
              s == u.a.navMobileHide
                ? r(u.a.navMobileShow)
                : r(u.a.navMobileHide);
            };
          return Object(n.jsxs)("header", {
            className: u.a.mainHeader,
            children: [
              Object(n.jsxs)(m.a, {
                className: u.a.cont,
                children: [
                  Object(n.jsx)(o.c, {
                    to: "/",
                    className: u.a.logo,
                    exact: !0,
                    children: "F A G",
                  }),
                  Object(n.jsx)(o.c, {
                    className: u.a.navItem,
                    activeClassName: u.a.active,
                    to: "/generate-faces-using-facial-features",
                    children: "Generate Faces",
                  }),
                  Object(n.jsx)(o.c, {
                    className: u.a.navItem,
                    activeClassName: u.a.active,
                    to: "/compare-faces",
                    children: "Compare Faces",
                  }),
                  Object(n.jsx)(o.c, {
                    className: u.a.navItem,
                    activeClassName: u.a.active,
                    to: "/extract-facial-features",
                    children: "Extract Facial Features",
                  }),
                  Object(n.jsx)("div", {
                    className: u.a.navMobileBtn,
                    onClick: i,
                    children: Object(n.jsx)(d.a, {
                      className: u.a.navMobileIcon,
                    }),
                  }),
                ],
              }),
              Object(n.jsx)("div", {
                className: s,
                children: Object(n.jsxs)(m.a, {
                  className: u.a.navMobileCont,
                  children: [
                    Object(n.jsx)(o.c, {
                      onClick: i,
                      className: u.a.navItemMobile,
                      activeClassName: u.a.activeMobile,
                      to: "/generate-faces-using-facial-features",
                      children: "Generate Faces",
                    }),
                    Object(n.jsx)(o.c, {
                      onClick: i,
                      className: u.a.navItemMobile,
                      activeClassName: u.a.activeMobile,
                      to: "/compare-faces",
                      children: "Compare Faces",
                    }),
                    Object(n.jsx)(o.c, {
                      onClick: i,
                      className: u.a.navItemMobile,
                      activeClassName: u.a.activeMobile,
                      to: "/extract-facial-features",
                      children: "Extract Facial Features",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        h = t(4),
        O = t.n(h),
        _ = t(11),
        f = t(351),
        p = t(352),
        v = t(353),
        g = t(118),
        F = t.n(g),
        C = t(348),
        N = function (e) {
          var a = Object(c.useState)(""),
            t = Object(j.a)(a, 2),
            r = t[0],
            i = t[1];
          Object(c.useEffect)(
            function () {
              e.onChange(r);
            },
            [r]
          );
          var o = e.options.map(function (a, t) {
            var c = "".concat(a, " ").concat(e.name).split(" ").join("_"),
              r = "".concat(e.name, " Radio").split(" ").join("_");
            return Object(n.jsxs)(
              s.a.Fragment,
              {
                children: [
                  Object(n.jsx)(
                    "input",
                    {
                      type: "radio",
                      id: c,
                      name: r,
                      onChange: function () {
                        i(a);
                      },
                    },
                    "input".concat(e.name).concat(t)
                  ),
                  Object(n.jsx)(
                    "label",
                    { htmlFor: c, className: F.a.filterCapsule, children: a },
                    "label".concat(e.name).concat(t)
                  ),
                ],
              },
              "".concat(e.name).concat(t)
            );
          });
          return Object(n.jsxs)("details", {
            children: [
              Object(n.jsx)("summary", {
                onClick: e.close,
                children: Object(n.jsxs)("div", {
                  className: F.a.filterHead,
                  children: [
                    Object(n.jsx)("div", {
                      className: F.a.filterName,
                      children: e.name,
                    }),
                    Object(n.jsx)("div", {
                      className: F.a.collapseIconContainer,
                      children: Object(n.jsx)(C.a, {
                        className: F.a.collapseIcon,
                      }),
                    }),
                  ],
                }),
              }),
              Object(n.jsx)("div", {
                className: F.a.filterContainer,
                children: o,
              }),
            ],
          });
        },
        w = t(58),
        I = t.n(w),
        k = t(103),
        y = {
          0: "1-2yrs",
          1: "1-9yrs",
          2: "10-20yrs",
          3: "21-27yrs",
          4: "28-45yrs",
          5: "45-65yrs",
          6: "65yrs and above",
        },
        M = { 0: "Male", 1: "Female" },
        S = { 0: "White", 1: "Black", 2: "Asian", 3: "Indian", 4: "Others" },
        B = { 0: "Blue", 1: "Brown", 2: "Green" },
        H = { 0: "Black", 1: "Blonde", 2: "Brown", 3: "Gray" },
        E = { 0: "Present", 1: "Absent" },
        G = (function () {
          var e = Object(_.a)(
            O.a.mark(function e(a, t, n, c, s) {
              var r, i, o, l, j;
              return O.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), k.d(a);
                      case 3:
                        return (
                          (r = e.sent),
                          ((i = new Image()).src = t),
                          (e.next = 8),
                          k.a.fromPixels(i)
                        );
                      case 8:
                        return (
                          (o = e.sent),
                          (e.next = 11),
                          k.c.resizeBilinear(o, [n, c])
                        );
                      case 11:
                        return (
                          (o = e.sent), (e.next = 14), o.reshape([1, c, n, 3])
                        );
                      case 14:
                        return (
                          (o = e.sent), (e.next = 17), r.predict(o).array()
                        );
                      case 17:
                        return (l = e.sent), (e.next = 20), l[0].indexOf(1);
                      case 20:
                        return (j = e.sent), e.abrupt("return", s[j]);
                      case 24:
                        throw (
                          ((e.prev = 24),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          e.t0)
                        );
                      case 28:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 24]]
              );
            })
          );
          return function (a, t, n, c, s) {
            return e.apply(this, arguments);
          };
        })(),
        U = (function () {
          var e = Object(_.a)(
            O.a.mark(function e(a) {
              var t, n, c, s, r, i, o, l, j, b;
              return O.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/age/model.json",
                          (t =
                            "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/gender/model.json"),
                          (n =
                            "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/race/model.json"),
                          (c =
                            "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/eye_color/model.json"),
                          (s =
                            "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/hair_color/model.json"),
                          (r =
                            "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/beard/model.json"),
                          (i = 200),
                          (o = 300),
                          (l = 178),
                          (j = 218),
                          (b = {}),
                          (e.next = 11),
                          G(
                            "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/age/model.json",
                            a,
                            i,
                            i,
                            y
                          )
                        );
                      case 11:
                        return (
                          (b.age = e.sent), (e.next = 14), G(t, a, i, i, M)
                        );
                      case 14:
                        return (
                          (b.gender = e.sent), (e.next = 17), G(n, a, i, i, S)
                        );
                      case 17:
                        return (
                          (b.race = e.sent), (e.next = 20), G(c, a, o, o, B)
                        );
                      case 20:
                        return (
                          (b.eyeColor = e.sent), (e.next = 23), G(s, a, l, j, H)
                        );
                      case 23:
                        return (
                          (b.hairColor = e.sent),
                          (e.next = 26),
                          G(r, a, l, j, E)
                        );
                      case 26:
                        return (b.beard = e.sent), e.abrupt("return", b);
                      case 30:
                        throw (
                          ((e.prev = 30),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          e.t0)
                        );
                      case 34:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 30]]
              );
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        R = (function () {
          var e = Object(_.a)(
            O.a.mark(function e(a) {
              var t, n, c;
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        k.d(
                          "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/model.json"
                        )
                      );
                    case 2:
                      return (t = e.sent), (e.next = 5), k.e(a);
                    case 5:
                      return (n = e.sent), (e.next = 8), k.b(n, 0);
                    case 8:
                      return (n = e.sent), (e.next = 11), t.predict(n);
                    case 11:
                      return (
                        (c = e.sent), (e.next = 14), c.reshape([200, 200, 3])
                      );
                    case 14:
                      return (c = e.sent), (e.next = 17), k.a.toPixels(c);
                    case 17:
                      return (c = e.sent), e.abrupt("return", c);
                    case 19:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        P = t(349),
        z = t(350),
        A = function (e) {
          var a = e.prediction,
            t = Object(c.useRef)(null);
          return (
            Object(c.useEffect)(function () {
              var e = t.current.getContext("2d"),
                n = new ImageData(a, 400);
              e.putImageData(n, 0, 0, 0, 0, 200, 200);
            }, []),
            Object(n.jsx)("canvas", { ref: t })
          );
        },
        Q = function (e, a) {
          return Number.parseInt(
            Object.keys(e).find(function (t) {
              return e[t] === a;
            })
          );
        },
        D = function (e) {
          var a = Object(c.useState)(null),
            t = Object(j.a)(a, 2),
            r = t[0],
            i = t[1],
            o = Object(c.useState)(null),
            l = Object(j.a)(o, 2),
            b = l[0],
            u = l[1],
            d = Object(c.useState)(null),
            x = Object(j.a)(d, 2),
            h = x[0],
            g = x[1],
            F = Object(c.useState)(null),
            C = Object(j.a)(F, 2),
            w = C[0],
            k = C[1],
            G = Object(c.useState)(null),
            U = Object(j.a)(G, 2),
            D = U[0],
            L = U[1],
            Y = Object(c.useState)(null),
            K = Object(j.a)(Y, 2),
            X = K[0],
            J = K[1],
            W = Object(c.useState)(null),
            Z = Object(j.a)(W, 2),
            q = Z[0],
            V = Z[1],
            T = Object(c.useState)(""),
            $ = Object(j.a)(T, 2),
            ee = ($[0], $[1]),
            ae = Object(c.useState)(!0),
            te = Object(j.a)(ae, 2),
            ne = te[0],
            ce = te[1],
            se = Object(c.useState)(I.a.hideFilters),
            re = Object(j.a)(se, 2),
            ie = re[0],
            oe = re[1],
            le = (function () {
              var e = Object(_.a)(
                O.a.mark(function e() {
                  var a, t;
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              ee(""),
                              console.log("In submit handler"),
                              (a = {
                                age: Q(y, r),
                                gender: Q(M, b),
                                race: Q(S, h),
                                eyeColor: Q(B, w),
                                hairColor: Q(H, D),
                                facialHair: Q(E, X),
                              }),
                              console.log(Object.values(a)),
                              (e.next = 7),
                              R(Object.values(a))
                            );
                          case 7:
                            (t = e.sent), V(t), (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              ee("Something went wrong!");
                          case 15:
                            ce(!1);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            je = function (e) {
              var a = document.querySelectorAll("details"),
                t = e.target.parentElement;
              a.forEach(function (e) {
                e != t && e.removeAttribute("open");
              });
            },
            be = function () {
              ie == I.a.hideFilters ? oe(I.a.showFilters) : oe(I.a.hideFilters);
            };
          return Object(n.jsx)("div", {
            className: I.a.cont,
            children: Object(n.jsx)(m.a, {
              fluid: !0,
              children: Object(n.jsxs)(P.a, {
                children: [
                  Object(n.jsx)(z.a, {
                    sm: 12,
                    className: I.a.col_filterResponsive,
                    children: Object(n.jsxs)("div", {
                      className: I.a.filterBtn,
                      onClick: be,
                      children: [
                        Object(n.jsx)(f.a, {
                          id: "filters",
                          className: I.a.filterIcon,
                        }),
                        Object(n.jsx)("label", {
                          htmlFor: "filters",
                          children: "Filters",
                        }),
                      ],
                    }),
                  }),
                  Object(n.jsxs)(z.a, {
                    sm: 6,
                    md: 4,
                    lg: 3,
                    className: ie,
                    children: [
                      Object(n.jsx)("div", {
                        className: I.a.closeBtn,
                        children: Object(n.jsx)(p.a, {
                          className: I.a.closeIcon,
                          onClick: be,
                        }),
                      }),
                      Object(n.jsxs)(m.a, {
                        children: [
                          Object(n.jsxs)(s.a.Fragment, {
                            children: [
                              Object(n.jsx)(N, {
                                close: je,
                                name: "gender",
                                options: Object.values(M),
                                onChange: function (e) {
                                  u(e);
                                },
                              }),
                              Object(n.jsx)(N, {
                                close: je,
                                name: "age",
                                options: Object.values(y),
                                onChange: function (e) {
                                  i(e);
                                },
                              }),
                              Object(n.jsx)(N, {
                                close: je,
                                name: "race",
                                options: Object.values(S),
                                onChange: function (e) {
                                  g(e);
                                },
                              }),
                              Object(n.jsx)(N, {
                                close: je,
                                name: "hair color",
                                options: Object.values(H),
                                onChange: function (e) {
                                  L(e);
                                },
                              }),
                              Object(n.jsx)(N, {
                                close: je,
                                name: "eye color",
                                options: Object.values(B),
                                onChange: function (e) {
                                  k(e);
                                },
                              }),
                              Object(n.jsx)(N, {
                                close: je,
                                name: "facial hair",
                                options: Object.values(E),
                                onChange: function (e) {
                                  J(e);
                                },
                              }),
                            ],
                          }),
                          Object(n.jsx)("div", {
                            className: I.a.btnContainer,
                            children: Object(n.jsx)("div", {
                              className: I.a.btn,
                              onClick: le,
                              children: ne ? "Generate" : "Modify Faces",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsx)(z.a, {
                    className: I.a.col_results,
                    children: Object(n.jsxs)(m.a, {
                      children: [
                        !q &&
                          Object(n.jsxs)("div", {
                            className: I.a.centered,
                            children: [
                              Object(n.jsx)(v.a, { className: I.a.faceIcon }),
                              Object(n.jsx)("div", {
                                className: I.a.msg,
                                children: "Let's Make Some Faces!",
                              }),
                            ],
                          }),
                        q && Object(n.jsx)(A, { prediction: q }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        L = t(160),
        Y = t.n(L),
        K = t(276),
        X = t.n(K),
        J = function (e) {
          var a = Object(c.useState)(null),
            t = Object(j.a)(a, 2),
            s = t[0],
            r = t[1];
          return (
            Object(c.useEffect)(
              function () {
                e.setImage(s);
              },
              [s]
            ),
            Object(n.jsxs)("div", {
              children: [
                Object(n.jsx)("label", {
                  className: X.a.uploadContainer,
                  htmlFor: e.name,
                  children: Object(n.jsx)("img", { src: s }),
                }),
                Object(n.jsx)("input", {
                  name: e.name,
                  id: e.name,
                  type: "file",
                  onChange: function (e) {
                    r(URL.createObjectURL(e.target.files[0]));
                  },
                  accept: "image/png,image/jpg,image/jpeg",
                }),
              ],
            })
          );
        },
        W = function (e) {
          var a = Object(c.useState)(null),
            t = Object(j.a)(a, 2),
            s = t[0],
            r = (t[1], Object(c.useState)(null)),
            i = Object(j.a)(r, 2),
            o = i[0],
            l = (i[1], Object(c.useState)(null)),
            b = Object(j.a)(l, 2),
            u = (b[0], b[1], Object(c.useState)(null)),
            d = Object(j.a)(u, 2),
            x = (d[0], d[1], Object(c.useState)("")),
            h = Object(j.a)(x, 2),
            f = (h[0], h[1]),
            p = (function () {
              var e = Object(_.a)(
                O.a.mark(function e() {
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), f(""), s && o)) {
                              e.next = 5;
                              break;
                            }
                            return (
                              f("Please select both pictures!"),
                              e.abrupt("return")
                            );
                          case 5:
                            e.next = 11;
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              f("Something went wrong!");
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(n.jsxs)(m.a, {
            children: [
              Object(n.jsxs)(P.a, {
                children: [
                  Object(n.jsx)(z.a, {
                    className: Y.a.imageContainer,
                    children: Object(n.jsx)(J, { name: "image1" }),
                  }),
                  Object(n.jsx)(z.a, {
                    className: Y.a.imageContainer,
                    children: Object(n.jsx)(J, { name: "image2" }),
                  }),
                ],
              }),
              Object(n.jsx)(P.a, {
                children: Object(n.jsx)(z.a, {
                  className: Y.a.btnContainer,
                  children: Object(n.jsx)("div", {
                    className: Y.a.btn,
                    onClick: p,
                    children: "Compare",
                  }),
                }),
              }),
            ],
          });
        },
        Z = t(161),
        q = t.n(Z),
        V = function (e) {
          var a = Object(c.useState)(null),
            t = Object(j.a)(a, 2),
            s = t[0],
            r = t[1],
            i = Object(c.useState)(""),
            o = Object(j.a)(i, 2),
            l = (o[0], o[1]),
            b = Object(c.useState)(null),
            u = Object(j.a)(b, 2),
            d = u[0],
            x = u[1],
            h = (function () {
              var e = Object(_.a)(
                O.a.mark(function e() {
                  var a;
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), l(""), x(null), s)) {
                              e.next = 7;
                              break;
                            }
                            return (
                              l("Please select picture!"),
                              console.log(" image not selected "),
                              e.abrupt("return")
                            );
                          case 7:
                            return (e.next = 9), U(s);
                          case 9:
                            (a = e.sent), x(a), (e.next = 17);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              l("Something went wrong!");
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(n.jsx)(m.a, {
            children: Object(n.jsxs)(P.a, {
              children: [
                Object(n.jsxs)(z.a, {
                  sm: 6,
                  className: q.a.imageUpload,
                  children: [
                    Object(n.jsx)(J, {
                      setImage: function (e) {
                        r(e);
                      },
                      name: "image",
                    }),
                    Object(n.jsx)("div", {
                      className: q.a.btnContainer,
                      children: Object(n.jsx)("div", {
                        onClick: function () {
                          return h();
                        },
                        className: q.a.btn,
                        children: "Extract",
                      }),
                    }),
                  ],
                }),
                Object(n.jsx)(z.a, {
                  className: q.a.extractionResults,
                  children: Object(n.jsx)("table", {
                    children: Object(n.jsxs)("thead", {
                      children: [
                        Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "Feature" }),
                            Object(n.jsx)("th", { children: "Value" }),
                          ],
                        }),
                        Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "Age" }),
                            Object(n.jsx)("td", { children: d && d.age }),
                          ],
                        }),
                        Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "Gender" }),
                            Object(n.jsx)("td", { children: d && d.gender }),
                          ],
                        }),
                        Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "Race" }),
                            Object(n.jsx)("td", { children: d && d.race }),
                          ],
                        }),
                        Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "Hair Color" }),
                            Object(n.jsx)("td", { children: d && d.hairColor }),
                          ],
                        }),
                        Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "Eye Color" }),
                            Object(n.jsx)("td", { children: d && d.eyeColor }),
                          ],
                        }),
                        Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "Beard" }),
                            Object(n.jsx)("td", { children: d && d.beard }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        T = t(68),
        $ = t.n(T),
        ee = function (e) {
          return Object(n.jsx)(m.a, {
            children: Object(n.jsx)("div", {
              className: $.a.container,
              children: Object(n.jsxs)(P.a, {
                className: $.a.row,
                children: [
                  Object(n.jsxs)(z.a, {
                    children: [
                      Object(n.jsxs)("h1", {
                        children: [
                          "Face Analyzer ",
                          Object(n.jsx)("br", {}),
                          " and ",
                          Object(n.jsx)("br", {}),
                          " Generator",
                        ],
                      }),
                      Object(n.jsx)("p", {
                        children: "We use AI to generate faces you describe.",
                      }),
                    ],
                  }),
                  Object(n.jsxs)(z.a, {
                    children: [
                      Object(n.jsxs)(P.a, {
                        className: $.a.row,
                        children: [
                          Object(n.jsx)(z.a, {
                            className: $.a.col,
                            children: Object(n.jsx)(o.b, {
                              className: $.a.link,
                              to: "/generate-faces-using-facial-features",
                              children: Object(n.jsxs)("div", {
                                className: $.a.box1,
                                children: [
                                  "Generate ",
                                  Object(n.jsx)("br", {}),
                                  " Faces",
                                ],
                              }),
                            }),
                          }),
                          Object(n.jsx)(z.a, {
                            className: $.a.col,
                            children: Object(n.jsx)(o.b, {
                              to: "/compare-faces",
                              children: Object(n.jsxs)("div", {
                                className: $.a.box2,
                                children: [
                                  "Compare ",
                                  Object(n.jsx)("br", {}),
                                  " Faces",
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsxs)(P.a, {
                        className: $.a.row,
                        children: [
                          Object(n.jsx)(z.a, {
                            className: $.a.col,
                            children: Object(n.jsx)(o.b, {
                              to: "/extract-facial-features",
                              children: Object(n.jsxs)("div", {
                                className: $.a.box3,
                                children: [
                                  "Extract",
                                  Object(n.jsx)("br", {}),
                                  " Features",
                                ],
                              }),
                            }),
                          }),
                          Object(n.jsx)(z.a, {
                            className: $.a.col,
                            children: Object(n.jsx)(o.b, {
                              href: "#",
                              children: Object(n.jsxs)("div", {
                                className: $.a.box4,
                                children: [
                                  "Extract ",
                                  Object(n.jsx)("br", {}),
                                  " Features",
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ae = function (e) {
          return Object(n.jsxs)(s.a.Fragment, {
            children: [
              Object(n.jsx)(x, {}),
              Object(n.jsxs)("main", {
                children: [
                  Object(n.jsx)(l.a, { path: "/", component: ee, exact: !0 }),
                  Object(n.jsx)(l.a, {
                    path: "/generate-faces-using-facial-features",
                    component: D,
                  }),
                  Object(n.jsx)(l.a, { path: "/compare-faces", component: W }),
                  Object(n.jsx)(l.a, {
                    path: "/extract-facial-features",
                    component: V,
                  }),
                ],
              }),
            ],
          });
        };
      i.a.render(
        Object(n.jsx)(o.a, { children: Object(n.jsx)(ae, {}) }),
        document.getElementById("root")
      );
    },
    46: function (e, a, t) {
      e.exports = {
        cont: "Navigation_cont__1Yzix",
        mainHeader: "Navigation_mainHeader__2eEhl",
        logo: "Navigation_logo__2SUv_",
        active: "Navigation_active__3KUX0",
        navMobileShow: "Navigation_navMobileShow__101D6",
        navMobileHide: "Navigation_navMobileHide__1pl8_",
        navMobileCont: "Navigation_navMobileCont__1zEhP",
        navItemMobile: "Navigation_navItemMobile__1eQB3",
        closeBtn: "Navigation_closeBtn__1nfH6",
        closeIcon: "Navigation_closeIcon__3prcY",
        activeMobile: "Navigation_activeMobile__3mvhP",
        navMobileBtn: "Navigation_navMobileBtn__11wcd",
        navMobileIcon: "Navigation_navMobileIcon__2YmPc",
        navItem: "Navigation_navItem__RKr7V",
      };
    },
    58: function (e, a, t) {
      e.exports = {
        cont: "GenerateFacesUsingFacialFeatures_cont__3RbfQ",
        btnContainer: "GenerateFacesUsingFacialFeatures_btnContainer__RYd68",
        btn: "GenerateFacesUsingFacialFeatures_btn__2uh7v",
        msg: "GenerateFacesUsingFacialFeatures_msg__2pXlb",
        col_filterResponsive:
          "GenerateFacesUsingFacialFeatures_col_filterResponsive__3sw8m",
        filterBtn: "GenerateFacesUsingFacialFeatures_filterBtn__1h-C-",
        filterIcon: "GenerateFacesUsingFacialFeatures_filterIcon__1nqjb",
        showFilters: "GenerateFacesUsingFacialFeatures_showFilters__LiMx-",
        closeBtn: "GenerateFacesUsingFacialFeatures_closeBtn__1vAoz",
        closeIcon: "GenerateFacesUsingFacialFeatures_closeIcon__2RRFR",
        hideFilters: "GenerateFacesUsingFacialFeatures_hideFilters__3Z9Ij",
        col_results: "GenerateFacesUsingFacialFeatures_col_results__10PQS",
      };
    },
    68: function (e, a, t) {
      e.exports = {
        container: "Homepage_container__3D_R2",
        row: "Homepage_row__37_ho",
        box1: "Homepage_box1__1v3ok",
        box2: "Homepage_box2__3A9b1",
        box3: "Homepage_box3__25Efy",
        box4: "Homepage_box4__2cd-7",
        col: "Homepage_col__1Jw_Q",
        link: "Homepage_link__2f5j0",
        animBox1: "Homepage_animBox1__x12SD",
        animBox2: "Homepage_animBox2__AwB1z",
        animBox3: "Homepage_animBox3__1CuCB",
        animBox4: "Homepage_animBox4__1ZrCb",
      };
    },
  },
  [[334, 1, 2]],
]);
//# sourceMappingURL=main.3a0cb3e9.chunk.js.map
