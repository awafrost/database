import { GuildVerificationLevel } from 'discord-api-types/v10';
import { Schema } from 'mongoose';
import type { z } from 'zod';
import { AutoChangeVerifyLevelConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId } from './util';
const zodSchema = BaseConfigSchema.and(AutoChangeVerifyLevelConfig);

const autoChangeVerifyLevelSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId,
  enabled: { type: Schema.Types.Boolean },
  startHour: { type: Schema.Types.Number },
  endHour: { type: Schema.Types.Number },
  level: { type: Schema.Types.Number, enum: GuildVerificationLevel },
  log: {
    enabled: Schema.Types.Boolean,
    channel: Schema.Types.String,
  },
});

export default createModel(
  'autoChangeVerifyLevelConfig',
  autoChangeVerifyLevelSchema,
);
