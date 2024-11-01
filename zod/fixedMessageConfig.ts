import { z } from 'zod';
import { MessageOptions, Snowflake } from './util';

const JoinMessageConfig = z
  .object({
    enabled: z.boolean(),
    channel: Snowflake.nullable(),
    message: MessageOptions,
    // NOTE: 内部的に使用
    last: Snowflake.nullable(),
  })
  .superRefine((v, ctx) => {
    if (v.enabled && !v.channel) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'チャンネルが設定されていません',
        path: ['channel'],
      });
    }
  });

export default JoinMessageConfig;
