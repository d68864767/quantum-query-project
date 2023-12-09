const QueryBuilder = require('../src/queryBuilder');

describe('QueryBuilder', () => {
  let queryBuilder;

  beforeEach(() => {
    // Reset the query builder before each test
    queryBuilder = new QueryBuilder();
    queryBuilder.reset();
  });

  test('should initialize with an empty query object', () => {
    expect(queryBuilder.query).toEqual({});
  });

  test('reset() should clear the query object', () => {
    queryBuilder.setType('filter');
    queryBuilder.reset();
    expect(queryBuilder.query).toEqual({});
  });

  test('setType() should set the type of the query', () => {
    const type = 'filter';
    queryBuilder.setType(type);
    expect(queryBuilder.query.type).toBe(type);
  });

  test('setConditions() should set the conditions if type is "filter"', () => {
    const conditions = { field: 'value' };
    queryBuilder.setType('filter').setConditions(conditions);
    expect(queryBuilder.query.conditions).toEqual(conditions);
  });

  test('setConditions() should not set conditions if type is not "filter"', () => {
    const conditions = { field: 'value' };
    queryBuilder.setType('sort').setConditions(conditions);
    expect(queryBuilder.query.conditions).toBeUndefined();
  });

  test('setSortOrder() should set the order if type is "sort"', () => {
    const order = 'asc';
    queryBuilder.setType('sort').setSortOrder(order);
    expect(queryBuilder.query.order).toBe(order);
  });

  test('setSortOrder() should not set the order if type is not "sort"', () => {
    const order = 'asc';
    queryBuilder.setType('filter').setSortOrder(order);
    expect(queryBuilder.query.order).toBeUndefined();
  });

  test('setAggregate() should set the fields if type is "aggregate"', () => {
    const fields = ['field1', 'field2'];
    queryBuilder.setType('aggregate').setAggregate(fields);
    expect(queryBuilder.query.fields).toEqual(fields);
  });

  test('setAggregate() should not set the fields if type is not "aggregate"', () => {
    const fields = ['field1', 'field2'];
    queryBuilder.setType('filter').setAggregate(fields);
    expect(queryBuilder.query.fields).toBeUndefined();
  });

  test('build() should throw an error if query type is not specified', () => {
    expect(() => {
      queryBuilder.build();
    }).toThrow('Query type must be specified');
  });

  test('build() should return the query object if type is specified', () => {
    const type = 'filter';
    const conditions = { field: 'value' };
    queryBuilder.setType(type).setConditions(conditions);
    const query = queryBuilder.build();
    expect(query).toEqual({ type, conditions });
  });
});
