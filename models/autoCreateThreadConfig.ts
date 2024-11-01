import { Schema } from 'mongoose';
import type { z } from 'zod';
import { AutoCreateThreadConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId } from './util';

const zodSchema = BaseConfigSchema.and(AutoCreateThreadConfig);

const autoCreateThreadSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId,
  channels: [Schema.Types.String],
  enabled: Schema.Types.Boolean,
});

export default createModel('autoCreateThreadConfig', autoCreateThreadSchema);
