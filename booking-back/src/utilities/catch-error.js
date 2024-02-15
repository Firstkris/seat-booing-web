exports.catchError = fn => (req, res, next) => fn(req, res, next).catch(next)

// const catchError = (fn) => (req, res, next) => {
//     try {
//         fn(req, res, next)
//     } catch (error) {
//         next(error)
//     }
// }