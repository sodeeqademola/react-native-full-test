"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "10mb" }));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ limit: "10mb" }));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./connect"));
const route_1 = __importDefault(require("./route"));
dotenv_1.default.config();
(0, connect_1.default)();
app.use("/api", route_1.default);
app.get("/", (req, res) => {
    res.status(201).send("alhamdulilah");
});
app.listen(4000, () => {
    console.log("connected to port " + 4000);
});
