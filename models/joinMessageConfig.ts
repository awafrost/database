import { Schema } from 'mongoose';
import type { z } from 'zod';
import { JoinMessageConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId, messageOptionSchema } from './util';

const zodSchema = BaseConfigSchema.and(JoinMessageConfig);

const joinMessageSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId,
  channel: Schema.Types.String,
  enabled: Schema.Types.Boolean,
  ignoreBot: Schema.Types.Boolean,
  message: messageOptionSchema,
});

export default createModel('joinMessageConfig', joinMessageSchema);
