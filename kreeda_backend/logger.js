const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return stack
      ? `${timestamp} [${level.toUpperCase()}]: ${message} \nStack: ${stack}`
      : `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
    format: combine(
      errors({ stack: true }), // Capture stack trace
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
    transports: [
        new transports.File({ filename: 'logs/info.log', level: 'info', handleExceptions: true }),
        new transports.File({ filename: 'logs/error.log', level: 'error', handleExceptions: true })
    ],
    exitOnError: false, // Do not exit on handled exceptions
});

// In development, also log to the console
// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new transports.Console({
//         format: format.simple(),
//     }));
// }

module.exports = logger;
