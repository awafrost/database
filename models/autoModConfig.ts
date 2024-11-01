import { Schema } from 'mongoose';
import type { z } from 'zod';
import { AutoModConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId } from './util';

const zodSchema = BaseConfigSchema.and(AutoModConfig);

const autoModSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId,
  enabled: Schema.Types.Boolean,
  filter: {
    domain: {
      enabled: Schema.Types.Boolean,
      list: [Schema.Types.String],
    },
    inviteUrl: Schema.Types.Boolean,
    token: Schema.Types.Boolean,
  },
  ignore: {
    channels: [Schema.Types.String],
    roles: [Schema.Types.String],
  },
  log: {
    enabled: Schema.Types.Boolean,
    channel: Schema.Types.String,
  },
});

export default createModel('autoModConfig', autoModSchema);
