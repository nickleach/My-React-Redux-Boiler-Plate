
let getRouter = null;

if (process.env.NODE_ENV === 'production') {
  getRouter = require('./routes.prod').default;
} else {
  getRouter = require('./routes.dev').default;
}

export {
  getRouter,
};
