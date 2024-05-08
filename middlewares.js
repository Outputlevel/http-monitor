import express from 'express';
import {removeFunctions} from './utils.js';

// Define your middleware functions
export function sanitizeRequestBody(req, res, next) {
    req.body = removeFunctions(req.body);
    next();
}

