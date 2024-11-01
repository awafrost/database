import { z } from 'zod';
import { MessageOptions, Snowflake } from './util';

const JoinMessageConfig = z.object({
  enabled: z.boolean(),
  channel: Snowflake,
  message: MessageOptions,
  // NOTE: 内部的に使用
  last: Snowflake.nullable(),
});

export default JoinMessageConfig;
