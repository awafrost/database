import { z } from 'zod';
import { Snowflake } from './util';

const AutoCreateThreadConfig = z
  .object({
    enabled: z.boolean(),
    lobby: Snowflake.nullable(),
    category: Snowflake.nullable(),
  })
  .superRefine((v, ctx) => {
    if (v.enabled) {
      if (!v.lobby)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'チャンネルが設定されていません',
          path: ['lobby'],
        });
      if (!v.category)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'チャンネルが設定されていません',
          path: ['category'],
        });
    }
  });

export default AutoCreateThreadConfig;
