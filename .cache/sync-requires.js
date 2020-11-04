const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jdeanw/coding/learning/Gatsby/slick-slices-front-end/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/jdeanw/coding/learning/Gatsby/slick-slices-front-end/src/pages/404.jsx"))),
  "component---src-pages-beers-jsx": hot(preferDefault(require("/Users/jdeanw/coding/learning/Gatsby/slick-slices-front-end/src/pages/beers.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/jdeanw/coding/learning/Gatsby/slick-slices-front-end/src/pages/index.jsx"))),
  "component---src-pages-order-jsx": hot(preferDefault(require("/Users/jdeanw/coding/learning/Gatsby/slick-slices-front-end/src/pages/order.jsx"))),
  "component---src-pages-pizzas-jsx": hot(preferDefault(require("/Users/jdeanw/coding/learning/Gatsby/slick-slices-front-end/src/pages/pizzas.jsx"))),
  "component---src-pages-slicemasters-jsx": hot(preferDefault(require("/Users/jdeanw/coding/learning/Gatsby/slick-slices-front-end/src/pages/slicemasters.jsx")))
}

