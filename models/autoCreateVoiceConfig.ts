import { Schema } from 'mongoose';
import type { z } from 'zod';
import { AutoCreateVoiceConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId } from './util';

const zodSchema = BaseConfigSchema.and(AutoCreateVoiceConfig);

const autoCreateVoiceSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId,
  lobby: Schema.Types.String,
  category: Schema.Types.String,
  enabled: Schema.Types.Boolean,
});

export default createModel('autoCreateVoiceConfig', autoCreateVoiceSchema);
