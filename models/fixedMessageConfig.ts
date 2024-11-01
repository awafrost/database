import { Schema } from 'mongoose';
import type { z } from 'zod';
import { FixedMessageConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId, messageOptionSchema } from './util';

const zodSchema = BaseConfigSchema.and(FixedMessageConfig);

const fixedMessageSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId: { ...guildId, index: true },
  channel: Schema.Types.String,
  enabled: Schema.Types.Boolean,
  message: messageOptionSchema,
  last: Schema.Types.String,
});

fixedMessageSchema.index({ guildId: 1, channel: 1 }, { unique: true });

export default createModel('fixedMessageConfig', fixedMessageSchema);
