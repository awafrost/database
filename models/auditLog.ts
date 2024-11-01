import { Schema } from 'mongoose';
import type { z } from 'zod';
import type { AuditLog } from '../zod';
import { createModel } from './util';

const AuditLogSchema = new Schema<z.infer<typeof AuditLog>>({
  guildId: {
    required: true,
    type: Schema.Types.String,
  },
  after: Schema.Types.Mixed,
  authorId: Schema.Types.String,
  before: Schema.Types.Mixed,
  reason: Schema.Types.String,
  createAt: { type: Schema.Types.Date, default: Date.now },
});

export default createModel('auditLog', AuditLogSchema);
