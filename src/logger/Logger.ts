import * as winston from "winston";
import * as DailyRotateFile from "winston-daily-rotate-file";
import { join } from "path";

const stringify = require("json-stringify-safe");

const { combine, timestamp, printf, label, colorize } = winston.format;
const LOG_FORMAT = printf(m => `[${m.timestamp}] [${m.level}] [${m.label}] ${m.message}\t${m.data ? stringify(m.data) : ""}`);
const DATE_FORMAT = "HH:mm:ss";
const LOGGER_DIRECTORY_PATH = process.env.LOGGER_DIRECTORY_PATH || "../../logs";
const LOGGER_CONSOLE_LEVEL = process.env.LOGGER_CONSOLE_LEVEL || "debug";
const LOGGER_FILE_DISABLED = process.env.LOGGER_FILE_DISABLED;
const LOGGER_ERROR_LEVEL_IN_SEPARATE_FILE = process.env.LOGGER_ERROR_LEVEL_IN_SEPARATE_FILE;

// type CONSOLE_LEVELS = "silly" | "input" | "verbose" | "prompt" | "debug" | "info" | "data" | "help" | "warn" | "error";

export function getLogger(category: string): winston.Logger {
    const directory: string = join(__dirname, LOGGER_DIRECTORY_PATH);
    let fileLevel: string = "debug";
    let consoleLevel: string = LOGGER_CONSOLE_LEVEL;
    switch(process.env.NODE_ENV) {
        case "production":
            fileLevel = "warn";
            break;
        case "test": 
            fileLevel = "error";
            consoleLevel = "error";
            break;
        case "example":
            fileLevel = "data";
            break;
    }

    const loggerOptions: winston.LoggerOptions = { level: consoleLevel, format: winston.format.json() };
    loggerOptions.transports = [];

    const format = combine(colorize(), timestamp({ format: DATE_FORMAT }), label({ label: category }), LOG_FORMAT);

    loggerOptions.transports.push(new winston.transports.Console({ format }));

    if(!LOGGER_FILE_DISABLED) {
        loggerOptions.transports.push(new DailyRotateFile({
            filename: `${directory}/%DATE%.log`,
            format,
            level: fileLevel
        }));
    
        if(LOGGER_ERROR_LEVEL_IN_SEPARATE_FILE) {
            loggerOptions.transports.push(new DailyRotateFile({
                filename: `${directory}/error-%DATE%.log`,
                format,
                level: "error"
            }));
        }
    }

    return winston.createLogger(loggerOptions);
}