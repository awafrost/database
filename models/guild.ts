import { GuildVerificationLevel } from 'discord-api-types/v10';
import { Schema } from 'mongoose';
import type { z } from 'zod';
import type { Guild } from '../zod';
import { createModel, guildId } from './util';

const guildSchema = new Schema<z.infer<typeof Guild>>({
  guildId,
  beforeVerifyLevel: {
    type: Schema.Types.Number,
    enum: GuildVerificationLevel,
  },
  createAt: { type: Schema.Types.Date, default: Date.now },
});

export default createModel('guild', guildSchema);
