import { Schema } from 'mongoose';
import type { z } from 'zod';
import { FixedMessageConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId, messageOptionSchema } from './util';

const zodSchema = BaseConfigSchema.and(FixedMessageConfig);

const fixedMessageSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId,
  channel: Schema.Types.String,
  enabled: Schema.Types.Boolean,
  message: messageOptionSchema,
  last: Schema.Types.String,
});

export default createModel('joinMessageConfig', fixedMessageSchema);
