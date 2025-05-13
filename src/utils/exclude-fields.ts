export function excludeFields<T, Key extends keyof T>(
  entity: T,
  ...keys: Key[]
): Omit<T, Key> {
  const newEntity = { ...entity };
  keys.forEach((key) => delete newEntity[key]);
  return newEntity;
}
