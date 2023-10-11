"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
const port = config_1.default.port;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World! Tiffin-Bati Server Working Perfectly.");
});
app.listen(port, () => {
    console.log(`Tiffin-Bati Server on port ${port}`);
});
