import { Options } from './';
import { DereferencedPaths } from './resolver';
import { LinkedJSONSchema, NormalizedJSONSchema } from './types/JSONSchema';
export declare function normalize(rootSchema: LinkedJSONSchema, dereferencedPaths: DereferencedPaths, filename: string, options: Options): NormalizedJSONSchema;
