import mongoose from "mongoose";
import { config } from "../config";

mongoose.connect(`${config.mongoURL}/${config.mongoDB}`);

const db = mongoose.connection

export { db };
