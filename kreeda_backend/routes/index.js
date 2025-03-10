import app from '../index.js'  // assuming your current code is in index.js

// Vercel serverless functions prefer CommonJS exports
module.exports = app

// If you want to keep the ES module syntax, you can use:
// export default app