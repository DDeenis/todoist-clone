export const isNullOrWhiteSpace = (source: string): boolean => !(source.length > 0 && source.replace(/\s/g, '').length && source);
