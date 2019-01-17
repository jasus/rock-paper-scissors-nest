import * as mongoose from 'mongoose';

export const PlaySchema = mongoose.Schema({
    message:  String,
    date: { type: Date, default: Date.now },
    handPlayer: String,
    handRival: String,
  });
