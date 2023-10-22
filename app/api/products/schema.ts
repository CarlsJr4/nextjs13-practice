import { z } from 'zod';

const schema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});

export default schema;
