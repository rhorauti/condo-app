import { dbSchema } from './db-schema';

describe('dbSchema', () => {
  it('should work', () => {
    expect(dbSchema()).toEqual('db-schema');
  });
});
