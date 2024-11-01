import { Schema } from 'mongoose';
import type { z } from 'zod';
import { ReportConfig } from '../zod';
import { BaseConfigSchema } from '../zod/util';
import { createModel, guildId } from './util';

const zodSchema = BaseConfigSchema.and(ReportConfig);

const reportSchema = new Schema<z.infer<typeof zodSchema>>({
  guildId,
  channel: Schema.Types.String,
  includeModerator: Schema.Types.Boolean,
  progressButton: Schema.Types.Boolean,
  mention: {
    enabled: Schema.Types.Boolean,
    roles: [Schema.Types.String],
  },
});

export default createModel('reportConfig', reportSchema);
