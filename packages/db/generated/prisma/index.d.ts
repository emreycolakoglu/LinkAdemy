
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ConsultantProfile
 * 
 */
export type ConsultantProfile = $Result.DefaultSelection<Prisma.$ConsultantProfilePayload>
/**
 * Model InstitutionProfile
 * 
 */
export type InstitutionProfile = $Result.DefaultSelection<Prisma.$InstitutionProfilePayload>
/**
 * Model TrainingRequest
 * 
 */
export type TrainingRequest = $Result.DefaultSelection<Prisma.$TrainingRequestPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CONSULTANT: 'CONSULTANT',
  INSTITUTION: 'INSTITUTION',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TrainingFormat: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  HYBRID: 'HYBRID'
};

export type TrainingFormat = (typeof TrainingFormat)[keyof typeof TrainingFormat]


export const RequestStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  CANCELLED: 'CANCELLED',
  MATCHED: 'MATCHED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TrainingFormat = $Enums.TrainingFormat

export const TrainingFormat: typeof $Enums.TrainingFormat

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.consultantProfile`: Exposes CRUD operations for the **ConsultantProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultantProfiles
    * const consultantProfiles = await prisma.consultantProfile.findMany()
    * ```
    */
  get consultantProfile(): Prisma.ConsultantProfileDelegate<ExtArgs>;

  /**
   * `prisma.institutionProfile`: Exposes CRUD operations for the **InstitutionProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstitutionProfiles
    * const institutionProfiles = await prisma.institutionProfile.findMany()
    * ```
    */
  get institutionProfile(): Prisma.InstitutionProfileDelegate<ExtArgs>;

  /**
   * `prisma.trainingRequest`: Exposes CRUD operations for the **TrainingRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingRequests
    * const trainingRequests = await prisma.trainingRequest.findMany()
    * ```
    */
  get trainingRequest(): Prisma.TrainingRequestDelegate<ExtArgs>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ConsultantProfile: 'ConsultantProfile',
    InstitutionProfile: 'InstitutionProfile',
    TrainingRequest: 'TrainingRequest',
    Offer: 'Offer',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "consultantProfile" | "institutionProfile" | "trainingRequest" | "offer" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ConsultantProfile: {
        payload: Prisma.$ConsultantProfilePayload<ExtArgs>
        fields: Prisma.ConsultantProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultantProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultantProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>
          }
          findFirst: {
            args: Prisma.ConsultantProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultantProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>
          }
          findMany: {
            args: Prisma.ConsultantProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>[]
          }
          create: {
            args: Prisma.ConsultantProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>
          }
          createMany: {
            args: Prisma.ConsultantProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultantProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>[]
          }
          delete: {
            args: Prisma.ConsultantProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>
          }
          update: {
            args: Prisma.ConsultantProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>
          }
          deleteMany: {
            args: Prisma.ConsultantProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultantProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultantProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantProfilePayload>
          }
          aggregate: {
            args: Prisma.ConsultantProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultantProfile>
          }
          groupBy: {
            args: Prisma.ConsultantProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultantProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultantProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultantProfileCountAggregateOutputType> | number
          }
        }
      }
      InstitutionProfile: {
        payload: Prisma.$InstitutionProfilePayload<ExtArgs>
        fields: Prisma.InstitutionProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          findFirst: {
            args: Prisma.InstitutionProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          findMany: {
            args: Prisma.InstitutionProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>[]
          }
          create: {
            args: Prisma.InstitutionProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          createMany: {
            args: Prisma.InstitutionProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>[]
          }
          delete: {
            args: Prisma.InstitutionProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          update: {
            args: Prisma.InstitutionProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          deleteMany: {
            args: Prisma.InstitutionProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InstitutionProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          aggregate: {
            args: Prisma.InstitutionProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitutionProfile>
          }
          groupBy: {
            args: Prisma.InstitutionProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionProfileCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionProfileCountAggregateOutputType> | number
          }
        }
      }
      TrainingRequest: {
        payload: Prisma.$TrainingRequestPayload<ExtArgs>
        fields: Prisma.TrainingRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>
          }
          findFirst: {
            args: Prisma.TrainingRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>
          }
          findMany: {
            args: Prisma.TrainingRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>[]
          }
          create: {
            args: Prisma.TrainingRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>
          }
          createMany: {
            args: Prisma.TrainingRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>[]
          }
          delete: {
            args: Prisma.TrainingRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>
          }
          update: {
            args: Prisma.TrainingRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>
          }
          deleteMany: {
            args: Prisma.TrainingRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrainingRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRequestPayload>
          }
          aggregate: {
            args: Prisma.TrainingRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingRequest>
          }
          groupBy: {
            args: Prisma.TrainingRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingRequestCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingRequestCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    messages: number
    offers: number
    trainingRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    offers?: boolean | UserCountOutputTypeCountOffersArgs
    trainingRequests?: boolean | UserCountOutputTypeCountTrainingRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrainingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRequestWhereInput
  }


  /**
   * Count Type ConsultantProfileCountOutputType
   */

  export type ConsultantProfileCountOutputType = {
    offers: number
  }

  export type ConsultantProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | ConsultantProfileCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * ConsultantProfileCountOutputType without action
   */
  export type ConsultantProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfileCountOutputType
     */
    select?: ConsultantProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultantProfileCountOutputType without action
   */
  export type ConsultantProfileCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Count Type InstitutionProfileCountOutputType
   */

  export type InstitutionProfileCountOutputType = {
    trainingRequests: number
  }

  export type InstitutionProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingRequests?: boolean | InstitutionProfileCountOutputTypeCountTrainingRequestsArgs
  }

  // Custom InputTypes
  /**
   * InstitutionProfileCountOutputType without action
   */
  export type InstitutionProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfileCountOutputType
     */
    select?: InstitutionProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionProfileCountOutputType without action
   */
  export type InstitutionProfileCountOutputTypeCountTrainingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRequestWhereInput
  }


  /**
   * Count Type TrainingRequestCountOutputType
   */

  export type TrainingRequestCountOutputType = {
    offers: number
  }

  export type TrainingRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | TrainingRequestCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * TrainingRequestCountOutputType without action
   */
  export type TrainingRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequestCountOutputType
     */
    select?: TrainingRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainingRequestCountOutputType without action
   */
  export type TrainingRequestCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Count Type OfferCountOutputType
   */

  export type OfferCountOutputType = {
    messages: number
  }

  export type OfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | OfferCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferCountOutputType
     */
    select?: OfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    password: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consultant?: boolean | User$consultantArgs<ExtArgs>
    institution?: boolean | User$institutionArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    trainingRequests?: boolean | User$trainingRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultant?: boolean | User$consultantArgs<ExtArgs>
    institution?: boolean | User$institutionArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    trainingRequests?: boolean | User$trainingRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      consultant: Prisma.$ConsultantProfilePayload<ExtArgs> | null
      institution: Prisma.$InstitutionProfilePayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
      offers: Prisma.$OfferPayload<ExtArgs>[]
      trainingRequests: Prisma.$TrainingRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      password: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultant<T extends User$consultantArgs<ExtArgs> = {}>(args?: Subset<T, User$consultantArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    institution<T extends User$institutionArgs<ExtArgs> = {}>(args?: Subset<T, User$institutionArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    offers<T extends User$offersArgs<ExtArgs> = {}>(args?: Subset<T, User$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany"> | Null>
    trainingRequests<T extends User$trainingRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$trainingRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.consultant
   */
  export type User$consultantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    where?: ConsultantProfileWhereInput
  }

  /**
   * User.institution
   */
  export type User$institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    where?: InstitutionProfileWhereInput
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.offers
   */
  export type User$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * User.trainingRequests
   */
  export type User$trainingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    where?: TrainingRequestWhereInput
    orderBy?: TrainingRequestOrderByWithRelationInput | TrainingRequestOrderByWithRelationInput[]
    cursor?: TrainingRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingRequestScalarFieldEnum | TrainingRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ConsultantProfile
   */

  export type AggregateConsultantProfile = {
    _count: ConsultantProfileCountAggregateOutputType | null
    _min: ConsultantProfileMinAggregateOutputType | null
    _max: ConsultantProfileMaxAggregateOutputType | null
  }

  export type ConsultantProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    title: string | null
    bio: string | null
    location: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultantProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    title: string | null
    bio: string | null
    location: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultantProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    title: number
    bio: number
    location: number
    languages: number
    skills: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultantProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    title?: true
    bio?: true
    location?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultantProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    title?: true
    bio?: true
    location?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultantProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    title?: true
    bio?: true
    location?: true
    languages?: true
    skills?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultantProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultantProfile to aggregate.
     */
    where?: ConsultantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultantProfiles to fetch.
     */
    orderBy?: ConsultantProfileOrderByWithRelationInput | ConsultantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultantProfiles
    **/
    _count?: true | ConsultantProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultantProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultantProfileMaxAggregateInputType
  }

  export type GetConsultantProfileAggregateType<T extends ConsultantProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultantProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultantProfile[P]>
      : GetScalarType<T[P], AggregateConsultantProfile[P]>
  }




  export type ConsultantProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultantProfileWhereInput
    orderBy?: ConsultantProfileOrderByWithAggregationInput | ConsultantProfileOrderByWithAggregationInput[]
    by: ConsultantProfileScalarFieldEnum[] | ConsultantProfileScalarFieldEnum
    having?: ConsultantProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultantProfileCountAggregateInputType | true
    _min?: ConsultantProfileMinAggregateInputType
    _max?: ConsultantProfileMaxAggregateInputType
  }

  export type ConsultantProfileGroupByOutputType = {
    id: string
    userId: string
    fullName: string
    title: string | null
    bio: string | null
    location: string | null
    languages: string[]
    skills: string[]
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConsultantProfileCountAggregateOutputType | null
    _min: ConsultantProfileMinAggregateOutputType | null
    _max: ConsultantProfileMaxAggregateOutputType | null
  }

  type GetConsultantProfileGroupByPayload<T extends ConsultantProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultantProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultantProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultantProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultantProfileGroupByOutputType[P]>
        }
      >
    >


  export type ConsultantProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    title?: boolean
    bio?: boolean
    location?: boolean
    languages?: boolean
    skills?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    offers?: boolean | ConsultantProfile$offersArgs<ExtArgs>
    _count?: boolean | ConsultantProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultantProfile"]>

  export type ConsultantProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    title?: boolean
    bio?: boolean
    location?: boolean
    languages?: boolean
    skills?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultantProfile"]>

  export type ConsultantProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    title?: boolean
    bio?: boolean
    location?: boolean
    languages?: boolean
    skills?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConsultantProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    offers?: boolean | ConsultantProfile$offersArgs<ExtArgs>
    _count?: boolean | ConsultantProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultantProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsultantProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultantProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      offers: Prisma.$OfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string
      title: string | null
      bio: string | null
      location: string | null
      languages: string[]
      skills: string[]
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consultantProfile"]>
    composites: {}
  }

  type ConsultantProfileGetPayload<S extends boolean | null | undefined | ConsultantProfileDefaultArgs> = $Result.GetResult<Prisma.$ConsultantProfilePayload, S>

  type ConsultantProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConsultantProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConsultantProfileCountAggregateInputType | true
    }

  export interface ConsultantProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultantProfile'], meta: { name: 'ConsultantProfile' } }
    /**
     * Find zero or one ConsultantProfile that matches the filter.
     * @param {ConsultantProfileFindUniqueArgs} args - Arguments to find a ConsultantProfile
     * @example
     * // Get one ConsultantProfile
     * const consultantProfile = await prisma.consultantProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultantProfileFindUniqueArgs>(args: SelectSubset<T, ConsultantProfileFindUniqueArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ConsultantProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConsultantProfileFindUniqueOrThrowArgs} args - Arguments to find a ConsultantProfile
     * @example
     * // Get one ConsultantProfile
     * const consultantProfile = await prisma.consultantProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultantProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ConsultantProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantProfileFindFirstArgs} args - Arguments to find a ConsultantProfile
     * @example
     * // Get one ConsultantProfile
     * const consultantProfile = await prisma.consultantProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultantProfileFindFirstArgs>(args?: SelectSubset<T, ConsultantProfileFindFirstArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ConsultantProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantProfileFindFirstOrThrowArgs} args - Arguments to find a ConsultantProfile
     * @example
     * // Get one ConsultantProfile
     * const consultantProfile = await prisma.consultantProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultantProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ConsultantProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultantProfiles
     * const consultantProfiles = await prisma.consultantProfile.findMany()
     * 
     * // Get first 10 ConsultantProfiles
     * const consultantProfiles = await prisma.consultantProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultantProfileWithIdOnly = await prisma.consultantProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultantProfileFindManyArgs>(args?: SelectSubset<T, ConsultantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ConsultantProfile.
     * @param {ConsultantProfileCreateArgs} args - Arguments to create a ConsultantProfile.
     * @example
     * // Create one ConsultantProfile
     * const ConsultantProfile = await prisma.consultantProfile.create({
     *   data: {
     *     // ... data to create a ConsultantProfile
     *   }
     * })
     * 
     */
    create<T extends ConsultantProfileCreateArgs>(args: SelectSubset<T, ConsultantProfileCreateArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ConsultantProfiles.
     * @param {ConsultantProfileCreateManyArgs} args - Arguments to create many ConsultantProfiles.
     * @example
     * // Create many ConsultantProfiles
     * const consultantProfile = await prisma.consultantProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultantProfileCreateManyArgs>(args?: SelectSubset<T, ConsultantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultantProfiles and returns the data saved in the database.
     * @param {ConsultantProfileCreateManyAndReturnArgs} args - Arguments to create many ConsultantProfiles.
     * @example
     * // Create many ConsultantProfiles
     * const consultantProfile = await prisma.consultantProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultantProfiles and only return the `id`
     * const consultantProfileWithIdOnly = await prisma.consultantProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultantProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultantProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ConsultantProfile.
     * @param {ConsultantProfileDeleteArgs} args - Arguments to delete one ConsultantProfile.
     * @example
     * // Delete one ConsultantProfile
     * const ConsultantProfile = await prisma.consultantProfile.delete({
     *   where: {
     *     // ... filter to delete one ConsultantProfile
     *   }
     * })
     * 
     */
    delete<T extends ConsultantProfileDeleteArgs>(args: SelectSubset<T, ConsultantProfileDeleteArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ConsultantProfile.
     * @param {ConsultantProfileUpdateArgs} args - Arguments to update one ConsultantProfile.
     * @example
     * // Update one ConsultantProfile
     * const consultantProfile = await prisma.consultantProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultantProfileUpdateArgs>(args: SelectSubset<T, ConsultantProfileUpdateArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ConsultantProfiles.
     * @param {ConsultantProfileDeleteManyArgs} args - Arguments to filter ConsultantProfiles to delete.
     * @example
     * // Delete a few ConsultantProfiles
     * const { count } = await prisma.consultantProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultantProfileDeleteManyArgs>(args?: SelectSubset<T, ConsultantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultantProfiles
     * const consultantProfile = await prisma.consultantProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultantProfileUpdateManyArgs>(args: SelectSubset<T, ConsultantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConsultantProfile.
     * @param {ConsultantProfileUpsertArgs} args - Arguments to update or create a ConsultantProfile.
     * @example
     * // Update or create a ConsultantProfile
     * const consultantProfile = await prisma.consultantProfile.upsert({
     *   create: {
     *     // ... data to create a ConsultantProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultantProfile we want to update
     *   }
     * })
     */
    upsert<T extends ConsultantProfileUpsertArgs>(args: SelectSubset<T, ConsultantProfileUpsertArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ConsultantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantProfileCountArgs} args - Arguments to filter ConsultantProfiles to count.
     * @example
     * // Count the number of ConsultantProfiles
     * const count = await prisma.consultantProfile.count({
     *   where: {
     *     // ... the filter for the ConsultantProfiles we want to count
     *   }
     * })
    **/
    count<T extends ConsultantProfileCountArgs>(
      args?: Subset<T, ConsultantProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultantProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultantProfileAggregateArgs>(args: Subset<T, ConsultantProfileAggregateArgs>): Prisma.PrismaPromise<GetConsultantProfileAggregateType<T>>

    /**
     * Group by ConsultantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultantProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultantProfileGroupByArgs['orderBy'] }
        : { orderBy?: ConsultantProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultantProfile model
   */
  readonly fields: ConsultantProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultantProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultantProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    offers<T extends ConsultantProfile$offersArgs<ExtArgs> = {}>(args?: Subset<T, ConsultantProfile$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultantProfile model
   */ 
  interface ConsultantProfileFieldRefs {
    readonly id: FieldRef<"ConsultantProfile", 'String'>
    readonly userId: FieldRef<"ConsultantProfile", 'String'>
    readonly fullName: FieldRef<"ConsultantProfile", 'String'>
    readonly title: FieldRef<"ConsultantProfile", 'String'>
    readonly bio: FieldRef<"ConsultantProfile", 'String'>
    readonly location: FieldRef<"ConsultantProfile", 'String'>
    readonly languages: FieldRef<"ConsultantProfile", 'String[]'>
    readonly skills: FieldRef<"ConsultantProfile", 'String[]'>
    readonly isPublic: FieldRef<"ConsultantProfile", 'Boolean'>
    readonly createdAt: FieldRef<"ConsultantProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ConsultantProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultantProfile findUnique
   */
  export type ConsultantProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ConsultantProfile to fetch.
     */
    where: ConsultantProfileWhereUniqueInput
  }

  /**
   * ConsultantProfile findUniqueOrThrow
   */
  export type ConsultantProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ConsultantProfile to fetch.
     */
    where: ConsultantProfileWhereUniqueInput
  }

  /**
   * ConsultantProfile findFirst
   */
  export type ConsultantProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ConsultantProfile to fetch.
     */
    where?: ConsultantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultantProfiles to fetch.
     */
    orderBy?: ConsultantProfileOrderByWithRelationInput | ConsultantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultantProfiles.
     */
    cursor?: ConsultantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultantProfiles.
     */
    distinct?: ConsultantProfileScalarFieldEnum | ConsultantProfileScalarFieldEnum[]
  }

  /**
   * ConsultantProfile findFirstOrThrow
   */
  export type ConsultantProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ConsultantProfile to fetch.
     */
    where?: ConsultantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultantProfiles to fetch.
     */
    orderBy?: ConsultantProfileOrderByWithRelationInput | ConsultantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultantProfiles.
     */
    cursor?: ConsultantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultantProfiles.
     */
    distinct?: ConsultantProfileScalarFieldEnum | ConsultantProfileScalarFieldEnum[]
  }

  /**
   * ConsultantProfile findMany
   */
  export type ConsultantProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ConsultantProfiles to fetch.
     */
    where?: ConsultantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultantProfiles to fetch.
     */
    orderBy?: ConsultantProfileOrderByWithRelationInput | ConsultantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultantProfiles.
     */
    cursor?: ConsultantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultantProfiles.
     */
    skip?: number
    distinct?: ConsultantProfileScalarFieldEnum | ConsultantProfileScalarFieldEnum[]
  }

  /**
   * ConsultantProfile create
   */
  export type ConsultantProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultantProfile.
     */
    data: XOR<ConsultantProfileCreateInput, ConsultantProfileUncheckedCreateInput>
  }

  /**
   * ConsultantProfile createMany
   */
  export type ConsultantProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultantProfiles.
     */
    data: ConsultantProfileCreateManyInput | ConsultantProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultantProfile createManyAndReturn
   */
  export type ConsultantProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ConsultantProfiles.
     */
    data: ConsultantProfileCreateManyInput | ConsultantProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultantProfile update
   */
  export type ConsultantProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultantProfile.
     */
    data: XOR<ConsultantProfileUpdateInput, ConsultantProfileUncheckedUpdateInput>
    /**
     * Choose, which ConsultantProfile to update.
     */
    where: ConsultantProfileWhereUniqueInput
  }

  /**
   * ConsultantProfile updateMany
   */
  export type ConsultantProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultantProfiles.
     */
    data: XOR<ConsultantProfileUpdateManyMutationInput, ConsultantProfileUncheckedUpdateManyInput>
    /**
     * Filter which ConsultantProfiles to update
     */
    where?: ConsultantProfileWhereInput
  }

  /**
   * ConsultantProfile upsert
   */
  export type ConsultantProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultantProfile to update in case it exists.
     */
    where: ConsultantProfileWhereUniqueInput
    /**
     * In case the ConsultantProfile found by the `where` argument doesn't exist, create a new ConsultantProfile with this data.
     */
    create: XOR<ConsultantProfileCreateInput, ConsultantProfileUncheckedCreateInput>
    /**
     * In case the ConsultantProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultantProfileUpdateInput, ConsultantProfileUncheckedUpdateInput>
  }

  /**
   * ConsultantProfile delete
   */
  export type ConsultantProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
    /**
     * Filter which ConsultantProfile to delete.
     */
    where: ConsultantProfileWhereUniqueInput
  }

  /**
   * ConsultantProfile deleteMany
   */
  export type ConsultantProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultantProfiles to delete
     */
    where?: ConsultantProfileWhereInput
  }

  /**
   * ConsultantProfile.offers
   */
  export type ConsultantProfile$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * ConsultantProfile without action
   */
  export type ConsultantProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantProfile
     */
    select?: ConsultantProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantProfileInclude<ExtArgs> | null
  }


  /**
   * Model InstitutionProfile
   */

  export type AggregateInstitutionProfile = {
    _count: InstitutionProfileCountAggregateOutputType | null
    _min: InstitutionProfileMinAggregateOutputType | null
    _max: InstitutionProfileMaxAggregateOutputType | null
  }

  export type InstitutionProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    sector: string | null
    website: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    sector: string | null
    website: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    sector: number
    website: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstitutionProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    sector?: true
    website?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    sector?: true
    website?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    sector?: true
    website?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstitutionProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionProfile to aggregate.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstitutionProfiles
    **/
    _count?: true | InstitutionProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionProfileMaxAggregateInputType
  }

  export type GetInstitutionProfileAggregateType<T extends InstitutionProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitutionProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitutionProfile[P]>
      : GetScalarType<T[P], AggregateInstitutionProfile[P]>
  }




  export type InstitutionProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionProfileWhereInput
    orderBy?: InstitutionProfileOrderByWithAggregationInput | InstitutionProfileOrderByWithAggregationInput[]
    by: InstitutionProfileScalarFieldEnum[] | InstitutionProfileScalarFieldEnum
    having?: InstitutionProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionProfileCountAggregateInputType | true
    _min?: InstitutionProfileMinAggregateInputType
    _max?: InstitutionProfileMaxAggregateInputType
  }

  export type InstitutionProfileGroupByOutputType = {
    id: string
    userId: string
    companyName: string
    sector: string | null
    website: string | null
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: InstitutionProfileCountAggregateOutputType | null
    _min: InstitutionProfileMinAggregateOutputType | null
    _max: InstitutionProfileMaxAggregateOutputType | null
  }

  type GetInstitutionProfileGroupByPayload<T extends InstitutionProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionProfileGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionProfileGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    sector?: boolean
    website?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trainingRequests?: boolean | InstitutionProfile$trainingRequestsArgs<ExtArgs>
    _count?: boolean | InstitutionProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionProfile"]>

  export type InstitutionProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    sector?: boolean
    website?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionProfile"]>

  export type InstitutionProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    sector?: boolean
    website?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstitutionProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trainingRequests?: boolean | InstitutionProfile$trainingRequestsArgs<ExtArgs>
    _count?: boolean | InstitutionProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstitutionProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstitutionProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trainingRequests: Prisma.$TrainingRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string
      sector: string | null
      website: string | null
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["institutionProfile"]>
    composites: {}
  }

  type InstitutionProfileGetPayload<S extends boolean | null | undefined | InstitutionProfileDefaultArgs> = $Result.GetResult<Prisma.$InstitutionProfilePayload, S>

  type InstitutionProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InstitutionProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InstitutionProfileCountAggregateInputType | true
    }

  export interface InstitutionProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstitutionProfile'], meta: { name: 'InstitutionProfile' } }
    /**
     * Find zero or one InstitutionProfile that matches the filter.
     * @param {InstitutionProfileFindUniqueArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionProfileFindUniqueArgs>(args: SelectSubset<T, InstitutionProfileFindUniqueArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InstitutionProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InstitutionProfileFindUniqueOrThrowArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InstitutionProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileFindFirstArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionProfileFindFirstArgs>(args?: SelectSubset<T, InstitutionProfileFindFirstArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InstitutionProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileFindFirstOrThrowArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InstitutionProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstitutionProfiles
     * const institutionProfiles = await prisma.institutionProfile.findMany()
     * 
     * // Get first 10 InstitutionProfiles
     * const institutionProfiles = await prisma.institutionProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionProfileWithIdOnly = await prisma.institutionProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionProfileFindManyArgs>(args?: SelectSubset<T, InstitutionProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InstitutionProfile.
     * @param {InstitutionProfileCreateArgs} args - Arguments to create a InstitutionProfile.
     * @example
     * // Create one InstitutionProfile
     * const InstitutionProfile = await prisma.institutionProfile.create({
     *   data: {
     *     // ... data to create a InstitutionProfile
     *   }
     * })
     * 
     */
    create<T extends InstitutionProfileCreateArgs>(args: SelectSubset<T, InstitutionProfileCreateArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InstitutionProfiles.
     * @param {InstitutionProfileCreateManyArgs} args - Arguments to create many InstitutionProfiles.
     * @example
     * // Create many InstitutionProfiles
     * const institutionProfile = await prisma.institutionProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionProfileCreateManyArgs>(args?: SelectSubset<T, InstitutionProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstitutionProfiles and returns the data saved in the database.
     * @param {InstitutionProfileCreateManyAndReturnArgs} args - Arguments to create many InstitutionProfiles.
     * @example
     * // Create many InstitutionProfiles
     * const institutionProfile = await prisma.institutionProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstitutionProfiles and only return the `id`
     * const institutionProfileWithIdOnly = await prisma.institutionProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InstitutionProfile.
     * @param {InstitutionProfileDeleteArgs} args - Arguments to delete one InstitutionProfile.
     * @example
     * // Delete one InstitutionProfile
     * const InstitutionProfile = await prisma.institutionProfile.delete({
     *   where: {
     *     // ... filter to delete one InstitutionProfile
     *   }
     * })
     * 
     */
    delete<T extends InstitutionProfileDeleteArgs>(args: SelectSubset<T, InstitutionProfileDeleteArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InstitutionProfile.
     * @param {InstitutionProfileUpdateArgs} args - Arguments to update one InstitutionProfile.
     * @example
     * // Update one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionProfileUpdateArgs>(args: SelectSubset<T, InstitutionProfileUpdateArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InstitutionProfiles.
     * @param {InstitutionProfileDeleteManyArgs} args - Arguments to filter InstitutionProfiles to delete.
     * @example
     * // Delete a few InstitutionProfiles
     * const { count } = await prisma.institutionProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionProfileDeleteManyArgs>(args?: SelectSubset<T, InstitutionProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstitutionProfiles
     * const institutionProfile = await prisma.institutionProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionProfileUpdateManyArgs>(args: SelectSubset<T, InstitutionProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InstitutionProfile.
     * @param {InstitutionProfileUpsertArgs} args - Arguments to update or create a InstitutionProfile.
     * @example
     * // Update or create a InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.upsert({
     *   create: {
     *     // ... data to create a InstitutionProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstitutionProfile we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionProfileUpsertArgs>(args: SelectSubset<T, InstitutionProfileUpsertArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InstitutionProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileCountArgs} args - Arguments to filter InstitutionProfiles to count.
     * @example
     * // Count the number of InstitutionProfiles
     * const count = await prisma.institutionProfile.count({
     *   where: {
     *     // ... the filter for the InstitutionProfiles we want to count
     *   }
     * })
    **/
    count<T extends InstitutionProfileCountArgs>(
      args?: Subset<T, InstitutionProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstitutionProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionProfileAggregateArgs>(args: Subset<T, InstitutionProfileAggregateArgs>): Prisma.PrismaPromise<GetInstitutionProfileAggregateType<T>>

    /**
     * Group by InstitutionProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionProfileGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstitutionProfile model
   */
  readonly fields: InstitutionProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstitutionProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    trainingRequests<T extends InstitutionProfile$trainingRequestsArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionProfile$trainingRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InstitutionProfile model
   */ 
  interface InstitutionProfileFieldRefs {
    readonly id: FieldRef<"InstitutionProfile", 'String'>
    readonly userId: FieldRef<"InstitutionProfile", 'String'>
    readonly companyName: FieldRef<"InstitutionProfile", 'String'>
    readonly sector: FieldRef<"InstitutionProfile", 'String'>
    readonly website: FieldRef<"InstitutionProfile", 'String'>
    readonly location: FieldRef<"InstitutionProfile", 'String'>
    readonly createdAt: FieldRef<"InstitutionProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"InstitutionProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstitutionProfile findUnique
   */
  export type InstitutionProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where: InstitutionProfileWhereUniqueInput
  }

  /**
   * InstitutionProfile findUniqueOrThrow
   */
  export type InstitutionProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where: InstitutionProfileWhereUniqueInput
  }

  /**
   * InstitutionProfile findFirst
   */
  export type InstitutionProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionProfiles.
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionProfiles.
     */
    distinct?: InstitutionProfileScalarFieldEnum | InstitutionProfileScalarFieldEnum[]
  }

  /**
   * InstitutionProfile findFirstOrThrow
   */
  export type InstitutionProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionProfiles.
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionProfiles.
     */
    distinct?: InstitutionProfileScalarFieldEnum | InstitutionProfileScalarFieldEnum[]
  }

  /**
   * InstitutionProfile findMany
   */
  export type InstitutionProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionProfiles to fetch.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstitutionProfiles.
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    distinct?: InstitutionProfileScalarFieldEnum | InstitutionProfileScalarFieldEnum[]
  }

  /**
   * InstitutionProfile create
   */
  export type InstitutionProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a InstitutionProfile.
     */
    data: XOR<InstitutionProfileCreateInput, InstitutionProfileUncheckedCreateInput>
  }

  /**
   * InstitutionProfile createMany
   */
  export type InstitutionProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstitutionProfiles.
     */
    data: InstitutionProfileCreateManyInput | InstitutionProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstitutionProfile createManyAndReturn
   */
  export type InstitutionProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InstitutionProfiles.
     */
    data: InstitutionProfileCreateManyInput | InstitutionProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstitutionProfile update
   */
  export type InstitutionProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a InstitutionProfile.
     */
    data: XOR<InstitutionProfileUpdateInput, InstitutionProfileUncheckedUpdateInput>
    /**
     * Choose, which InstitutionProfile to update.
     */
    where: InstitutionProfileWhereUniqueInput
  }

  /**
   * InstitutionProfile updateMany
   */
  export type InstitutionProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstitutionProfiles.
     */
    data: XOR<InstitutionProfileUpdateManyMutationInput, InstitutionProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionProfiles to update
     */
    where?: InstitutionProfileWhereInput
  }

  /**
   * InstitutionProfile upsert
   */
  export type InstitutionProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the InstitutionProfile to update in case it exists.
     */
    where: InstitutionProfileWhereUniqueInput
    /**
     * In case the InstitutionProfile found by the `where` argument doesn't exist, create a new InstitutionProfile with this data.
     */
    create: XOR<InstitutionProfileCreateInput, InstitutionProfileUncheckedCreateInput>
    /**
     * In case the InstitutionProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionProfileUpdateInput, InstitutionProfileUncheckedUpdateInput>
  }

  /**
   * InstitutionProfile delete
   */
  export type InstitutionProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    /**
     * Filter which InstitutionProfile to delete.
     */
    where: InstitutionProfileWhereUniqueInput
  }

  /**
   * InstitutionProfile deleteMany
   */
  export type InstitutionProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionProfiles to delete
     */
    where?: InstitutionProfileWhereInput
  }

  /**
   * InstitutionProfile.trainingRequests
   */
  export type InstitutionProfile$trainingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    where?: TrainingRequestWhereInput
    orderBy?: TrainingRequestOrderByWithRelationInput | TrainingRequestOrderByWithRelationInput[]
    cursor?: TrainingRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingRequestScalarFieldEnum | TrainingRequestScalarFieldEnum[]
  }

  /**
   * InstitutionProfile without action
   */
  export type InstitutionProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
  }


  /**
   * Model TrainingRequest
   */

  export type AggregateTrainingRequest = {
    _count: TrainingRequestCountAggregateOutputType | null
    _avg: TrainingRequestAvgAggregateOutputType | null
    _sum: TrainingRequestSumAggregateOutputType | null
    _min: TrainingRequestMinAggregateOutputType | null
    _max: TrainingRequestMaxAggregateOutputType | null
  }

  export type TrainingRequestAvgAggregateOutputType = {
    budget: number | null
  }

  export type TrainingRequestSumAggregateOutputType = {
    budget: number | null
  }

  export type TrainingRequestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    format: $Enums.TrainingFormat | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    budget: number | null
    currency: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    institutionId: string | null
  }

  export type TrainingRequestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    format: $Enums.TrainingFormat | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    budget: number | null
    currency: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    institutionId: string | null
  }

  export type TrainingRequestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    format: number
    location: number
    startDate: number
    endDate: number
    budget: number
    currency: number
    status: number
    createdAt: number
    updatedAt: number
    createdById: number
    institutionId: number
    _all: number
  }


  export type TrainingRequestAvgAggregateInputType = {
    budget?: true
  }

  export type TrainingRequestSumAggregateInputType = {
    budget?: true
  }

  export type TrainingRequestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    format?: true
    location?: true
    startDate?: true
    endDate?: true
    budget?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    institutionId?: true
  }

  export type TrainingRequestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    format?: true
    location?: true
    startDate?: true
    endDate?: true
    budget?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    institutionId?: true
  }

  export type TrainingRequestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    format?: true
    location?: true
    startDate?: true
    endDate?: true
    budget?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    institutionId?: true
    _all?: true
  }

  export type TrainingRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRequest to aggregate.
     */
    where?: TrainingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRequests to fetch.
     */
    orderBy?: TrainingRequestOrderByWithRelationInput | TrainingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingRequests
    **/
    _count?: true | TrainingRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingRequestMaxAggregateInputType
  }

  export type GetTrainingRequestAggregateType<T extends TrainingRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingRequest[P]>
      : GetScalarType<T[P], AggregateTrainingRequest[P]>
  }




  export type TrainingRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRequestWhereInput
    orderBy?: TrainingRequestOrderByWithAggregationInput | TrainingRequestOrderByWithAggregationInput[]
    by: TrainingRequestScalarFieldEnum[] | TrainingRequestScalarFieldEnum
    having?: TrainingRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingRequestCountAggregateInputType | true
    _avg?: TrainingRequestAvgAggregateInputType
    _sum?: TrainingRequestSumAggregateInputType
    _min?: TrainingRequestMinAggregateInputType
    _max?: TrainingRequestMaxAggregateInputType
  }

  export type TrainingRequestGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location: string | null
    startDate: Date | null
    endDate: Date | null
    budget: number | null
    currency: string
    status: $Enums.RequestStatus
    createdAt: Date
    updatedAt: Date
    createdById: string
    institutionId: string | null
    _count: TrainingRequestCountAggregateOutputType | null
    _avg: TrainingRequestAvgAggregateOutputType | null
    _sum: TrainingRequestSumAggregateOutputType | null
    _min: TrainingRequestMinAggregateOutputType | null
    _max: TrainingRequestMaxAggregateOutputType | null
  }

  type GetTrainingRequestGroupByPayload<T extends TrainingRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingRequestGroupByOutputType[P]>
        }
      >
    >


  export type TrainingRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    format?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    institutionId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | TrainingRequest$institutionArgs<ExtArgs>
    offers?: boolean | TrainingRequest$offersArgs<ExtArgs>
    _count?: boolean | TrainingRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingRequest"]>

  export type TrainingRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    format?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    institutionId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | TrainingRequest$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["trainingRequest"]>

  export type TrainingRequestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    format?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    institutionId?: boolean
  }

  export type TrainingRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | TrainingRequest$institutionArgs<ExtArgs>
    offers?: boolean | TrainingRequest$offersArgs<ExtArgs>
    _count?: boolean | TrainingRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainingRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | TrainingRequest$institutionArgs<ExtArgs>
  }

  export type $TrainingRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingRequest"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      institution: Prisma.$InstitutionProfilePayload<ExtArgs> | null
      offers: Prisma.$OfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      format: $Enums.TrainingFormat
      location: string | null
      startDate: Date | null
      endDate: Date | null
      budget: number | null
      currency: string
      status: $Enums.RequestStatus
      createdAt: Date
      updatedAt: Date
      createdById: string
      institutionId: string | null
    }, ExtArgs["result"]["trainingRequest"]>
    composites: {}
  }

  type TrainingRequestGetPayload<S extends boolean | null | undefined | TrainingRequestDefaultArgs> = $Result.GetResult<Prisma.$TrainingRequestPayload, S>

  type TrainingRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainingRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrainingRequestCountAggregateInputType | true
    }

  export interface TrainingRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingRequest'], meta: { name: 'TrainingRequest' } }
    /**
     * Find zero or one TrainingRequest that matches the filter.
     * @param {TrainingRequestFindUniqueArgs} args - Arguments to find a TrainingRequest
     * @example
     * // Get one TrainingRequest
     * const trainingRequest = await prisma.trainingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingRequestFindUniqueArgs>(args: SelectSubset<T, TrainingRequestFindUniqueArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TrainingRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrainingRequestFindUniqueOrThrowArgs} args - Arguments to find a TrainingRequest
     * @example
     * // Get one TrainingRequest
     * const trainingRequest = await prisma.trainingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TrainingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRequestFindFirstArgs} args - Arguments to find a TrainingRequest
     * @example
     * // Get one TrainingRequest
     * const trainingRequest = await prisma.trainingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingRequestFindFirstArgs>(args?: SelectSubset<T, TrainingRequestFindFirstArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TrainingRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRequestFindFirstOrThrowArgs} args - Arguments to find a TrainingRequest
     * @example
     * // Get one TrainingRequest
     * const trainingRequest = await prisma.trainingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TrainingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingRequests
     * const trainingRequests = await prisma.trainingRequest.findMany()
     * 
     * // Get first 10 TrainingRequests
     * const trainingRequests = await prisma.trainingRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingRequestWithIdOnly = await prisma.trainingRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingRequestFindManyArgs>(args?: SelectSubset<T, TrainingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TrainingRequest.
     * @param {TrainingRequestCreateArgs} args - Arguments to create a TrainingRequest.
     * @example
     * // Create one TrainingRequest
     * const TrainingRequest = await prisma.trainingRequest.create({
     *   data: {
     *     // ... data to create a TrainingRequest
     *   }
     * })
     * 
     */
    create<T extends TrainingRequestCreateArgs>(args: SelectSubset<T, TrainingRequestCreateArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TrainingRequests.
     * @param {TrainingRequestCreateManyArgs} args - Arguments to create many TrainingRequests.
     * @example
     * // Create many TrainingRequests
     * const trainingRequest = await prisma.trainingRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingRequestCreateManyArgs>(args?: SelectSubset<T, TrainingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingRequests and returns the data saved in the database.
     * @param {TrainingRequestCreateManyAndReturnArgs} args - Arguments to create many TrainingRequests.
     * @example
     * // Create many TrainingRequests
     * const trainingRequest = await prisma.trainingRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingRequests and only return the `id`
     * const trainingRequestWithIdOnly = await prisma.trainingRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TrainingRequest.
     * @param {TrainingRequestDeleteArgs} args - Arguments to delete one TrainingRequest.
     * @example
     * // Delete one TrainingRequest
     * const TrainingRequest = await prisma.trainingRequest.delete({
     *   where: {
     *     // ... filter to delete one TrainingRequest
     *   }
     * })
     * 
     */
    delete<T extends TrainingRequestDeleteArgs>(args: SelectSubset<T, TrainingRequestDeleteArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TrainingRequest.
     * @param {TrainingRequestUpdateArgs} args - Arguments to update one TrainingRequest.
     * @example
     * // Update one TrainingRequest
     * const trainingRequest = await prisma.trainingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingRequestUpdateArgs>(args: SelectSubset<T, TrainingRequestUpdateArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TrainingRequests.
     * @param {TrainingRequestDeleteManyArgs} args - Arguments to filter TrainingRequests to delete.
     * @example
     * // Delete a few TrainingRequests
     * const { count } = await prisma.trainingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingRequestDeleteManyArgs>(args?: SelectSubset<T, TrainingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingRequests
     * const trainingRequest = await prisma.trainingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingRequestUpdateManyArgs>(args: SelectSubset<T, TrainingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainingRequest.
     * @param {TrainingRequestUpsertArgs} args - Arguments to update or create a TrainingRequest.
     * @example
     * // Update or create a TrainingRequest
     * const trainingRequest = await prisma.trainingRequest.upsert({
     *   create: {
     *     // ... data to create a TrainingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingRequest we want to update
     *   }
     * })
     */
    upsert<T extends TrainingRequestUpsertArgs>(args: SelectSubset<T, TrainingRequestUpsertArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TrainingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRequestCountArgs} args - Arguments to filter TrainingRequests to count.
     * @example
     * // Count the number of TrainingRequests
     * const count = await prisma.trainingRequest.count({
     *   where: {
     *     // ... the filter for the TrainingRequests we want to count
     *   }
     * })
    **/
    count<T extends TrainingRequestCountArgs>(
      args?: Subset<T, TrainingRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingRequestAggregateArgs>(args: Subset<T, TrainingRequestAggregateArgs>): Prisma.PrismaPromise<GetTrainingRequestAggregateType<T>>

    /**
     * Group by TrainingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingRequestGroupByArgs['orderBy'] }
        : { orderBy?: TrainingRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingRequest model
   */
  readonly fields: TrainingRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    institution<T extends TrainingRequest$institutionArgs<ExtArgs> = {}>(args?: Subset<T, TrainingRequest$institutionArgs<ExtArgs>>): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    offers<T extends TrainingRequest$offersArgs<ExtArgs> = {}>(args?: Subset<T, TrainingRequest$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingRequest model
   */ 
  interface TrainingRequestFieldRefs {
    readonly id: FieldRef<"TrainingRequest", 'String'>
    readonly title: FieldRef<"TrainingRequest", 'String'>
    readonly description: FieldRef<"TrainingRequest", 'String'>
    readonly category: FieldRef<"TrainingRequest", 'String'>
    readonly format: FieldRef<"TrainingRequest", 'TrainingFormat'>
    readonly location: FieldRef<"TrainingRequest", 'String'>
    readonly startDate: FieldRef<"TrainingRequest", 'DateTime'>
    readonly endDate: FieldRef<"TrainingRequest", 'DateTime'>
    readonly budget: FieldRef<"TrainingRequest", 'Int'>
    readonly currency: FieldRef<"TrainingRequest", 'String'>
    readonly status: FieldRef<"TrainingRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"TrainingRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainingRequest", 'DateTime'>
    readonly createdById: FieldRef<"TrainingRequest", 'String'>
    readonly institutionId: FieldRef<"TrainingRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrainingRequest findUnique
   */
  export type TrainingRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRequest to fetch.
     */
    where: TrainingRequestWhereUniqueInput
  }

  /**
   * TrainingRequest findUniqueOrThrow
   */
  export type TrainingRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRequest to fetch.
     */
    where: TrainingRequestWhereUniqueInput
  }

  /**
   * TrainingRequest findFirst
   */
  export type TrainingRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRequest to fetch.
     */
    where?: TrainingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRequests to fetch.
     */
    orderBy?: TrainingRequestOrderByWithRelationInput | TrainingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingRequests.
     */
    cursor?: TrainingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingRequests.
     */
    distinct?: TrainingRequestScalarFieldEnum | TrainingRequestScalarFieldEnum[]
  }

  /**
   * TrainingRequest findFirstOrThrow
   */
  export type TrainingRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRequest to fetch.
     */
    where?: TrainingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRequests to fetch.
     */
    orderBy?: TrainingRequestOrderByWithRelationInput | TrainingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingRequests.
     */
    cursor?: TrainingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingRequests.
     */
    distinct?: TrainingRequestScalarFieldEnum | TrainingRequestScalarFieldEnum[]
  }

  /**
   * TrainingRequest findMany
   */
  export type TrainingRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRequests to fetch.
     */
    where?: TrainingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRequests to fetch.
     */
    orderBy?: TrainingRequestOrderByWithRelationInput | TrainingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingRequests.
     */
    cursor?: TrainingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRequests.
     */
    skip?: number
    distinct?: TrainingRequestScalarFieldEnum | TrainingRequestScalarFieldEnum[]
  }

  /**
   * TrainingRequest create
   */
  export type TrainingRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingRequest.
     */
    data: XOR<TrainingRequestCreateInput, TrainingRequestUncheckedCreateInput>
  }

  /**
   * TrainingRequest createMany
   */
  export type TrainingRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingRequests.
     */
    data: TrainingRequestCreateManyInput | TrainingRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingRequest createManyAndReturn
   */
  export type TrainingRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TrainingRequests.
     */
    data: TrainingRequestCreateManyInput | TrainingRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingRequest update
   */
  export type TrainingRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingRequest.
     */
    data: XOR<TrainingRequestUpdateInput, TrainingRequestUncheckedUpdateInput>
    /**
     * Choose, which TrainingRequest to update.
     */
    where: TrainingRequestWhereUniqueInput
  }

  /**
   * TrainingRequest updateMany
   */
  export type TrainingRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingRequests.
     */
    data: XOR<TrainingRequestUpdateManyMutationInput, TrainingRequestUncheckedUpdateManyInput>
    /**
     * Filter which TrainingRequests to update
     */
    where?: TrainingRequestWhereInput
  }

  /**
   * TrainingRequest upsert
   */
  export type TrainingRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingRequest to update in case it exists.
     */
    where: TrainingRequestWhereUniqueInput
    /**
     * In case the TrainingRequest found by the `where` argument doesn't exist, create a new TrainingRequest with this data.
     */
    create: XOR<TrainingRequestCreateInput, TrainingRequestUncheckedCreateInput>
    /**
     * In case the TrainingRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingRequestUpdateInput, TrainingRequestUncheckedUpdateInput>
  }

  /**
   * TrainingRequest delete
   */
  export type TrainingRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
    /**
     * Filter which TrainingRequest to delete.
     */
    where: TrainingRequestWhereUniqueInput
  }

  /**
   * TrainingRequest deleteMany
   */
  export type TrainingRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRequests to delete
     */
    where?: TrainingRequestWhereInput
  }

  /**
   * TrainingRequest.institution
   */
  export type TrainingRequest$institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionProfileInclude<ExtArgs> | null
    where?: InstitutionProfileWhereInput
  }

  /**
   * TrainingRequest.offers
   */
  export type TrainingRequest$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * TrainingRequest without action
   */
  export type TrainingRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRequest
     */
    select?: TrainingRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRequestInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    price: number | null
  }

  export type OfferSumAggregateOutputType = {
    price: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    consultantId: string | null
    requestId: string | null
    message: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    consultantId: string | null
    requestId: string | null
    message: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    consultantId: number
    requestId: number
    message: number
    price: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    price?: true
  }

  export type OfferSumAggregateInputType = {
    price?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    consultantId?: true
    requestId?: true
    message?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    consultantId?: true
    requestId?: true
    message?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    consultantId?: true
    requestId?: true
    message?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    consultantId: string
    requestId: string
    message: string
    price: number
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultantId?: boolean
    requestId?: boolean
    message?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    consultant?: boolean | ConsultantProfileDefaultArgs<ExtArgs>
    request?: boolean | TrainingRequestDefaultArgs<ExtArgs>
    messages?: boolean | Offer$messagesArgs<ExtArgs>
    User?: boolean | Offer$UserArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultantId?: boolean
    requestId?: boolean
    message?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    consultant?: boolean | ConsultantProfileDefaultArgs<ExtArgs>
    request?: boolean | TrainingRequestDefaultArgs<ExtArgs>
    User?: boolean | Offer$UserArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    consultantId?: boolean
    requestId?: boolean
    message?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultant?: boolean | ConsultantProfileDefaultArgs<ExtArgs>
    request?: boolean | TrainingRequestDefaultArgs<ExtArgs>
    messages?: boolean | Offer$messagesArgs<ExtArgs>
    User?: boolean | Offer$UserArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultant?: boolean | ConsultantProfileDefaultArgs<ExtArgs>
    request?: boolean | TrainingRequestDefaultArgs<ExtArgs>
    User?: boolean | Offer$UserArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      consultant: Prisma.$ConsultantProfilePayload<ExtArgs>
      request: Prisma.$TrainingRequestPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      consultantId: string
      requestId: string
      message: string
      price: number
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultant<T extends ConsultantProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultantProfileDefaultArgs<ExtArgs>>): Prisma__ConsultantProfileClient<$Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    request<T extends TrainingRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingRequestDefaultArgs<ExtArgs>>): Prisma__TrainingRequestClient<$Result.GetResult<Prisma.$TrainingRequestPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    messages<T extends Offer$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Offer$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Offer$UserArgs<ExtArgs> = {}>(args?: Subset<T, Offer$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */ 
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly consultantId: FieldRef<"Offer", 'String'>
    readonly requestId: FieldRef<"Offer", 'String'>
    readonly message: FieldRef<"Offer", 'String'>
    readonly price: FieldRef<"Offer", 'Int'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
    readonly updatedAt: FieldRef<"Offer", 'DateTime'>
    readonly userId: FieldRef<"Offer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
  }

  /**
   * Offer.messages
   */
  export type Offer$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Offer.User
   */
  export type Offer$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    offerId: string | null
    content: string | null
    sentAt: Date | null
    readAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    offerId: string | null
    content: string | null
    sentAt: Date | null
    readAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    offerId: number
    content: number
    sentAt: number
    readAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    offerId?: true
    content?: true
    sentAt?: true
    readAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    offerId?: true
    content?: true
    sentAt?: true
    readAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    offerId?: true
    content?: true
    sentAt?: true
    readAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string
    offerId: string
    content: string
    sentAt: Date
    readAt: Date | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    offerId?: boolean
    content?: boolean
    sentAt?: boolean
    readAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    offerId?: boolean
    content?: boolean
    sentAt?: boolean
    readAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    offerId?: boolean
    content?: boolean
    sentAt?: boolean
    readAt?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      offer: Prisma.$OfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      offerId: string
      content: string
      sentAt: Date
      readAt: Date | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly offerId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
    readonly readAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConsultantProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    title: 'title',
    bio: 'bio',
    location: 'location',
    languages: 'languages',
    skills: 'skills',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultantProfileScalarFieldEnum = (typeof ConsultantProfileScalarFieldEnum)[keyof typeof ConsultantProfileScalarFieldEnum]


  export const InstitutionProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    sector: 'sector',
    website: 'website',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstitutionProfileScalarFieldEnum = (typeof InstitutionProfileScalarFieldEnum)[keyof typeof InstitutionProfileScalarFieldEnum]


  export const TrainingRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    format: 'format',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    budget: 'budget',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    institutionId: 'institutionId'
  };

  export type TrainingRequestScalarFieldEnum = (typeof TrainingRequestScalarFieldEnum)[keyof typeof TrainingRequestScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    consultantId: 'consultantId',
    requestId: 'requestId',
    message: 'message',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    offerId: 'offerId',
    content: 'content',
    sentAt: 'sentAt',
    readAt: 'readAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TrainingFormat'
   */
  export type EnumTrainingFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingFormat'>
    


  /**
   * Reference to a field of type 'TrainingFormat[]'
   */
  export type ListEnumTrainingFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingFormat[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    consultant?: XOR<ConsultantProfileNullableRelationFilter, ConsultantProfileWhereInput> | null
    institution?: XOR<InstitutionProfileNullableRelationFilter, InstitutionProfileWhereInput> | null
    messages?: MessageListRelationFilter
    offers?: OfferListRelationFilter
    trainingRequests?: TrainingRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consultant?: ConsultantProfileOrderByWithRelationInput
    institution?: InstitutionProfileOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    offers?: OfferOrderByRelationAggregateInput
    trainingRequests?: TrainingRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    consultant?: XOR<ConsultantProfileNullableRelationFilter, ConsultantProfileWhereInput> | null
    institution?: XOR<InstitutionProfileNullableRelationFilter, InstitutionProfileWhereInput> | null
    messages?: MessageListRelationFilter
    offers?: OfferListRelationFilter
    trainingRequests?: TrainingRequestListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ConsultantProfileWhereInput = {
    AND?: ConsultantProfileWhereInput | ConsultantProfileWhereInput[]
    OR?: ConsultantProfileWhereInput[]
    NOT?: ConsultantProfileWhereInput | ConsultantProfileWhereInput[]
    id?: StringFilter<"ConsultantProfile"> | string
    userId?: StringFilter<"ConsultantProfile"> | string
    fullName?: StringFilter<"ConsultantProfile"> | string
    title?: StringNullableFilter<"ConsultantProfile"> | string | null
    bio?: StringNullableFilter<"ConsultantProfile"> | string | null
    location?: StringNullableFilter<"ConsultantProfile"> | string | null
    languages?: StringNullableListFilter<"ConsultantProfile">
    skills?: StringNullableListFilter<"ConsultantProfile">
    isPublic?: BoolFilter<"ConsultantProfile"> | boolean
    createdAt?: DateTimeFilter<"ConsultantProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultantProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    offers?: OfferListRelationFilter
  }

  export type ConsultantProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    title?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    languages?: SortOrder
    skills?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    offers?: OfferOrderByRelationAggregateInput
  }

  export type ConsultantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ConsultantProfileWhereInput | ConsultantProfileWhereInput[]
    OR?: ConsultantProfileWhereInput[]
    NOT?: ConsultantProfileWhereInput | ConsultantProfileWhereInput[]
    fullName?: StringFilter<"ConsultantProfile"> | string
    title?: StringNullableFilter<"ConsultantProfile"> | string | null
    bio?: StringNullableFilter<"ConsultantProfile"> | string | null
    location?: StringNullableFilter<"ConsultantProfile"> | string | null
    languages?: StringNullableListFilter<"ConsultantProfile">
    skills?: StringNullableListFilter<"ConsultantProfile">
    isPublic?: BoolFilter<"ConsultantProfile"> | boolean
    createdAt?: DateTimeFilter<"ConsultantProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultantProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    offers?: OfferListRelationFilter
  }, "id" | "userId">

  export type ConsultantProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    title?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    languages?: SortOrder
    skills?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsultantProfileCountOrderByAggregateInput
    _max?: ConsultantProfileMaxOrderByAggregateInput
    _min?: ConsultantProfileMinOrderByAggregateInput
  }

  export type ConsultantProfileScalarWhereWithAggregatesInput = {
    AND?: ConsultantProfileScalarWhereWithAggregatesInput | ConsultantProfileScalarWhereWithAggregatesInput[]
    OR?: ConsultantProfileScalarWhereWithAggregatesInput[]
    NOT?: ConsultantProfileScalarWhereWithAggregatesInput | ConsultantProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultantProfile"> | string
    userId?: StringWithAggregatesFilter<"ConsultantProfile"> | string
    fullName?: StringWithAggregatesFilter<"ConsultantProfile"> | string
    title?: StringNullableWithAggregatesFilter<"ConsultantProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"ConsultantProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"ConsultantProfile"> | string | null
    languages?: StringNullableListFilter<"ConsultantProfile">
    skills?: StringNullableListFilter<"ConsultantProfile">
    isPublic?: BoolWithAggregatesFilter<"ConsultantProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ConsultantProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConsultantProfile"> | Date | string
  }

  export type InstitutionProfileWhereInput = {
    AND?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    OR?: InstitutionProfileWhereInput[]
    NOT?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    id?: StringFilter<"InstitutionProfile"> | string
    userId?: StringFilter<"InstitutionProfile"> | string
    companyName?: StringFilter<"InstitutionProfile"> | string
    sector?: StringNullableFilter<"InstitutionProfile"> | string | null
    website?: StringNullableFilter<"InstitutionProfile"> | string | null
    location?: StringNullableFilter<"InstitutionProfile"> | string | null
    createdAt?: DateTimeFilter<"InstitutionProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstitutionProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trainingRequests?: TrainingRequestListRelationFilter
  }

  export type InstitutionProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    sector?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trainingRequests?: TrainingRequestOrderByRelationAggregateInput
  }

  export type InstitutionProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    OR?: InstitutionProfileWhereInput[]
    NOT?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    companyName?: StringFilter<"InstitutionProfile"> | string
    sector?: StringNullableFilter<"InstitutionProfile"> | string | null
    website?: StringNullableFilter<"InstitutionProfile"> | string | null
    location?: StringNullableFilter<"InstitutionProfile"> | string | null
    createdAt?: DateTimeFilter<"InstitutionProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstitutionProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trainingRequests?: TrainingRequestListRelationFilter
  }, "id" | "userId">

  export type InstitutionProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    sector?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstitutionProfileCountOrderByAggregateInput
    _max?: InstitutionProfileMaxOrderByAggregateInput
    _min?: InstitutionProfileMinOrderByAggregateInput
  }

  export type InstitutionProfileScalarWhereWithAggregatesInput = {
    AND?: InstitutionProfileScalarWhereWithAggregatesInput | InstitutionProfileScalarWhereWithAggregatesInput[]
    OR?: InstitutionProfileScalarWhereWithAggregatesInput[]
    NOT?: InstitutionProfileScalarWhereWithAggregatesInput | InstitutionProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    userId?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    companyName?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    sector?: StringNullableWithAggregatesFilter<"InstitutionProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"InstitutionProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"InstitutionProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InstitutionProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstitutionProfile"> | Date | string
  }

  export type TrainingRequestWhereInput = {
    AND?: TrainingRequestWhereInput | TrainingRequestWhereInput[]
    OR?: TrainingRequestWhereInput[]
    NOT?: TrainingRequestWhereInput | TrainingRequestWhereInput[]
    id?: StringFilter<"TrainingRequest"> | string
    title?: StringFilter<"TrainingRequest"> | string
    description?: StringFilter<"TrainingRequest"> | string
    category?: StringFilter<"TrainingRequest"> | string
    format?: EnumTrainingFormatFilter<"TrainingRequest"> | $Enums.TrainingFormat
    location?: StringNullableFilter<"TrainingRequest"> | string | null
    startDate?: DateTimeNullableFilter<"TrainingRequest"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingRequest"> | Date | string | null
    budget?: IntNullableFilter<"TrainingRequest"> | number | null
    currency?: StringFilter<"TrainingRequest"> | string
    status?: EnumRequestStatusFilter<"TrainingRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"TrainingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingRequest"> | Date | string
    createdById?: StringFilter<"TrainingRequest"> | string
    institutionId?: StringNullableFilter<"TrainingRequest"> | string | null
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    institution?: XOR<InstitutionProfileNullableRelationFilter, InstitutionProfileWhereInput> | null
    offers?: OfferListRelationFilter
  }

  export type TrainingRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    format?: SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    institution?: InstitutionProfileOrderByWithRelationInput
    offers?: OfferOrderByRelationAggregateInput
  }

  export type TrainingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingRequestWhereInput | TrainingRequestWhereInput[]
    OR?: TrainingRequestWhereInput[]
    NOT?: TrainingRequestWhereInput | TrainingRequestWhereInput[]
    title?: StringFilter<"TrainingRequest"> | string
    description?: StringFilter<"TrainingRequest"> | string
    category?: StringFilter<"TrainingRequest"> | string
    format?: EnumTrainingFormatFilter<"TrainingRequest"> | $Enums.TrainingFormat
    location?: StringNullableFilter<"TrainingRequest"> | string | null
    startDate?: DateTimeNullableFilter<"TrainingRequest"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingRequest"> | Date | string | null
    budget?: IntNullableFilter<"TrainingRequest"> | number | null
    currency?: StringFilter<"TrainingRequest"> | string
    status?: EnumRequestStatusFilter<"TrainingRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"TrainingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingRequest"> | Date | string
    createdById?: StringFilter<"TrainingRequest"> | string
    institutionId?: StringNullableFilter<"TrainingRequest"> | string | null
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    institution?: XOR<InstitutionProfileNullableRelationFilter, InstitutionProfileWhereInput> | null
    offers?: OfferListRelationFilter
  }, "id">

  export type TrainingRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    format?: SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    _count?: TrainingRequestCountOrderByAggregateInput
    _avg?: TrainingRequestAvgOrderByAggregateInput
    _max?: TrainingRequestMaxOrderByAggregateInput
    _min?: TrainingRequestMinOrderByAggregateInput
    _sum?: TrainingRequestSumOrderByAggregateInput
  }

  export type TrainingRequestScalarWhereWithAggregatesInput = {
    AND?: TrainingRequestScalarWhereWithAggregatesInput | TrainingRequestScalarWhereWithAggregatesInput[]
    OR?: TrainingRequestScalarWhereWithAggregatesInput[]
    NOT?: TrainingRequestScalarWhereWithAggregatesInput | TrainingRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingRequest"> | string
    title?: StringWithAggregatesFilter<"TrainingRequest"> | string
    description?: StringWithAggregatesFilter<"TrainingRequest"> | string
    category?: StringWithAggregatesFilter<"TrainingRequest"> | string
    format?: EnumTrainingFormatWithAggregatesFilter<"TrainingRequest"> | $Enums.TrainingFormat
    location?: StringNullableWithAggregatesFilter<"TrainingRequest"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"TrainingRequest"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"TrainingRequest"> | Date | string | null
    budget?: IntNullableWithAggregatesFilter<"TrainingRequest"> | number | null
    currency?: StringWithAggregatesFilter<"TrainingRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"TrainingRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"TrainingRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainingRequest"> | Date | string
    createdById?: StringWithAggregatesFilter<"TrainingRequest"> | string
    institutionId?: StringNullableWithAggregatesFilter<"TrainingRequest"> | string | null
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    consultantId?: StringFilter<"Offer"> | string
    requestId?: StringFilter<"Offer"> | string
    message?: StringFilter<"Offer"> | string
    price?: IntFilter<"Offer"> | number
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    userId?: StringNullableFilter<"Offer"> | string | null
    consultant?: XOR<ConsultantProfileRelationFilter, ConsultantProfileWhereInput>
    request?: XOR<TrainingRequestRelationFilter, TrainingRequestWhereInput>
    messages?: MessageListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    consultantId?: SortOrder
    requestId?: SortOrder
    message?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    consultant?: ConsultantProfileOrderByWithRelationInput
    request?: TrainingRequestOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    consultantId?: StringFilter<"Offer"> | string
    requestId?: StringFilter<"Offer"> | string
    message?: StringFilter<"Offer"> | string
    price?: IntFilter<"Offer"> | number
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    userId?: StringNullableFilter<"Offer"> | string | null
    consultant?: XOR<ConsultantProfileRelationFilter, ConsultantProfileWhereInput>
    request?: XOR<TrainingRequestRelationFilter, TrainingRequestWhereInput>
    messages?: MessageListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    consultantId?: SortOrder
    requestId?: SortOrder
    message?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    consultantId?: StringWithAggregatesFilter<"Offer"> | string
    requestId?: StringWithAggregatesFilter<"Offer"> | string
    message?: StringWithAggregatesFilter<"Offer"> | string
    price?: IntWithAggregatesFilter<"Offer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Offer"> | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    offerId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    sender?: XOR<UserRelationFilter, UserWhereInput>
    offer?: XOR<OfferRelationFilter, OfferWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    offerId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    sender?: UserOrderByWithRelationInput
    offer?: OfferOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: StringFilter<"Message"> | string
    offerId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    sender?: XOR<UserRelationFilter, UserWhereInput>
    offer?: XOR<OfferRelationFilter, OfferWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    offerId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    offerId?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileCreateNestedOneWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    offers?: OfferCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileUncheckedCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileUncheckedCreateNestedOneWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    offers?: OfferUncheckedCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUpdateOneWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    offers?: OfferUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUncheckedUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUncheckedUpdateOneWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    offers?: OfferUncheckedUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultantProfileCreateInput = {
    id?: string
    fullName: string
    title?: string | null
    bio?: string | null
    location?: string | null
    languages?: ConsultantProfileCreatelanguagesInput | string[]
    skills?: ConsultantProfileCreateskillsInput | string[]
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConsultantInput
    offers?: OfferCreateNestedManyWithoutConsultantInput
  }

  export type ConsultantProfileUncheckedCreateInput = {
    id?: string
    userId: string
    fullName: string
    title?: string | null
    bio?: string | null
    location?: string | null
    languages?: ConsultantProfileCreatelanguagesInput | string[]
    skills?: ConsultantProfileCreateskillsInput | string[]
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutConsultantInput
  }

  export type ConsultantProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsultantNestedInput
    offers?: OfferUpdateManyWithoutConsultantNestedInput
  }

  export type ConsultantProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutConsultantNestedInput
  }

  export type ConsultantProfileCreateManyInput = {
    id?: string
    userId: string
    fullName: string
    title?: string | null
    bio?: string | null
    location?: string | null
    languages?: ConsultantProfileCreatelanguagesInput | string[]
    skills?: ConsultantProfileCreateskillsInput | string[]
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultantProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultantProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionProfileCreateInput = {
    id?: string
    companyName: string
    sector?: string | null
    website?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInstitutionInput
    trainingRequests?: TrainingRequestCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionProfileUncheckedCreateInput = {
    id?: string
    userId: string
    companyName: string
    sector?: string | null
    website?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingRequests?: TrainingRequestUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInstitutionNestedInput
    trainingRequests?: TrainingRequestUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingRequests?: TrainingRequestUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionProfileCreateManyInput = {
    id?: string
    userId: string
    companyName: string
    sector?: string | null
    website?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRequestCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTrainingRequestsInput
    institution?: InstitutionProfileCreateNestedOneWithoutTrainingRequestsInput
    offers?: OfferCreateNestedManyWithoutRequestInput
  }

  export type TrainingRequestUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    institutionId?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutRequestInput
  }

  export type TrainingRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTrainingRequestsNestedInput
    institution?: InstitutionProfileUpdateOneWithoutTrainingRequestsNestedInput
    offers?: OfferUpdateManyWithoutRequestNestedInput
  }

  export type TrainingRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type TrainingRequestCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    institutionId?: string | null
  }

  export type TrainingRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfferCreateInput = {
    id?: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant: ConsultantProfileCreateNestedOneWithoutOffersInput
    request: TrainingRequestCreateNestedOneWithoutOffersInput
    messages?: MessageCreateNestedManyWithoutOfferInput
    User?: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    consultantId: string
    requestId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneRequiredWithoutOffersNestedInput
    request?: TrainingRequestUpdateOneRequiredWithoutOffersNestedInput
    messages?: MessageUpdateManyWithoutOfferNestedInput
    User?: UserUpdateOneWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: string
    consultantId: string
    requestId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
    sender: UserCreateNestedOneWithoutMessagesInput
    offer: OfferCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId: string
    offerId: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    offer?: OfferUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId: string
    offerId: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConsultantProfileNullableRelationFilter = {
    is?: ConsultantProfileWhereInput | null
    isNot?: ConsultantProfileWhereInput | null
  }

  export type InstitutionProfileNullableRelationFilter = {
    is?: InstitutionProfileWhereInput | null
    isNot?: InstitutionProfileWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type TrainingRequestListRelationFilter = {
    every?: TrainingRequestWhereInput
    some?: TrainingRequestWhereInput
    none?: TrainingRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConsultantProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    languages?: SortOrder
    skills?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultantProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultantProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InstitutionProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    sector?: SortOrder
    website?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    sector?: SortOrder
    website?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    sector?: SortOrder
    website?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTrainingFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingFormat | EnumTrainingFormatFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingFormatFilter<$PrismaModel> | $Enums.TrainingFormat
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type TrainingRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    format?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    institutionId?: SortOrder
  }

  export type TrainingRequestAvgOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type TrainingRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    format?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    institutionId?: SortOrder
  }

  export type TrainingRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    format?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    institutionId?: SortOrder
  }

  export type TrainingRequestSumOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type EnumTrainingFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingFormat | EnumTrainingFormatFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingFormatWithAggregatesFilter<$PrismaModel> | $Enums.TrainingFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingFormatFilter<$PrismaModel>
    _max?: NestedEnumTrainingFormatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ConsultantProfileRelationFilter = {
    is?: ConsultantProfileWhereInput
    isNot?: ConsultantProfileWhereInput
  }

  export type TrainingRequestRelationFilter = {
    is?: TrainingRequestWhereInput
    isNot?: TrainingRequestWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    consultantId?: SortOrder
    requestId?: SortOrder
    message?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    consultantId?: SortOrder
    requestId?: SortOrder
    message?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    consultantId?: SortOrder
    requestId?: SortOrder
    message?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OfferRelationFilter = {
    is?: OfferWhereInput
    isNot?: OfferWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    offerId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    offerId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    offerId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type ConsultantProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ConsultantProfileCreateWithoutUserInput, ConsultantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsultantProfileCreateOrConnectWithoutUserInput
    connect?: ConsultantProfileWhereUniqueInput
  }

  export type InstitutionProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<InstitutionProfileCreateWithoutUserInput, InstitutionProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstitutionProfileCreateOrConnectWithoutUserInput
    connect?: InstitutionProfileWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OfferCreateNestedManyWithoutUserInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type TrainingRequestCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TrainingRequestCreateWithoutCreatedByInput, TrainingRequestUncheckedCreateWithoutCreatedByInput> | TrainingRequestCreateWithoutCreatedByInput[] | TrainingRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutCreatedByInput | TrainingRequestCreateOrConnectWithoutCreatedByInput[]
    createMany?: TrainingRequestCreateManyCreatedByInputEnvelope
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
  }

  export type ConsultantProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ConsultantProfileCreateWithoutUserInput, ConsultantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsultantProfileCreateOrConnectWithoutUserInput
    connect?: ConsultantProfileWhereUniqueInput
  }

  export type InstitutionProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InstitutionProfileCreateWithoutUserInput, InstitutionProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstitutionProfileCreateOrConnectWithoutUserInput
    connect?: InstitutionProfileWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type TrainingRequestUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TrainingRequestCreateWithoutCreatedByInput, TrainingRequestUncheckedCreateWithoutCreatedByInput> | TrainingRequestCreateWithoutCreatedByInput[] | TrainingRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutCreatedByInput | TrainingRequestCreateOrConnectWithoutCreatedByInput[]
    createMany?: TrainingRequestCreateManyCreatedByInputEnvelope
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConsultantProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConsultantProfileCreateWithoutUserInput, ConsultantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsultantProfileCreateOrConnectWithoutUserInput
    upsert?: ConsultantProfileUpsertWithoutUserInput
    disconnect?: ConsultantProfileWhereInput | boolean
    delete?: ConsultantProfileWhereInput | boolean
    connect?: ConsultantProfileWhereUniqueInput
    update?: XOR<XOR<ConsultantProfileUpdateToOneWithWhereWithoutUserInput, ConsultantProfileUpdateWithoutUserInput>, ConsultantProfileUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstitutionProfileCreateWithoutUserInput, InstitutionProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstitutionProfileCreateOrConnectWithoutUserInput
    upsert?: InstitutionProfileUpsertWithoutUserInput
    disconnect?: InstitutionProfileWhereInput | boolean
    delete?: InstitutionProfileWhereInput | boolean
    connect?: InstitutionProfileWhereUniqueInput
    update?: XOR<XOR<InstitutionProfileUpdateToOneWithWhereWithoutUserInput, InstitutionProfileUpdateWithoutUserInput>, InstitutionProfileUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OfferUpdateManyWithoutUserNestedInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutUserInput | OfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutUserInput | OfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutUserInput | OfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type TrainingRequestUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TrainingRequestCreateWithoutCreatedByInput, TrainingRequestUncheckedCreateWithoutCreatedByInput> | TrainingRequestCreateWithoutCreatedByInput[] | TrainingRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutCreatedByInput | TrainingRequestCreateOrConnectWithoutCreatedByInput[]
    upsert?: TrainingRequestUpsertWithWhereUniqueWithoutCreatedByInput | TrainingRequestUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TrainingRequestCreateManyCreatedByInputEnvelope
    set?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    disconnect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    delete?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    update?: TrainingRequestUpdateWithWhereUniqueWithoutCreatedByInput | TrainingRequestUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TrainingRequestUpdateManyWithWhereWithoutCreatedByInput | TrainingRequestUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TrainingRequestScalarWhereInput | TrainingRequestScalarWhereInput[]
  }

  export type ConsultantProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConsultantProfileCreateWithoutUserInput, ConsultantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsultantProfileCreateOrConnectWithoutUserInput
    upsert?: ConsultantProfileUpsertWithoutUserInput
    disconnect?: ConsultantProfileWhereInput | boolean
    delete?: ConsultantProfileWhereInput | boolean
    connect?: ConsultantProfileWhereUniqueInput
    update?: XOR<XOR<ConsultantProfileUpdateToOneWithWhereWithoutUserInput, ConsultantProfileUpdateWithoutUserInput>, ConsultantProfileUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstitutionProfileCreateWithoutUserInput, InstitutionProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstitutionProfileCreateOrConnectWithoutUserInput
    upsert?: InstitutionProfileUpsertWithoutUserInput
    disconnect?: InstitutionProfileWhereInput | boolean
    delete?: InstitutionProfileWhereInput | boolean
    connect?: InstitutionProfileWhereUniqueInput
    update?: XOR<XOR<InstitutionProfileUpdateToOneWithWhereWithoutUserInput, InstitutionProfileUpdateWithoutUserInput>, InstitutionProfileUncheckedUpdateWithoutUserInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutUserInput | OfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutUserInput | OfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutUserInput | OfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type TrainingRequestUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TrainingRequestCreateWithoutCreatedByInput, TrainingRequestUncheckedCreateWithoutCreatedByInput> | TrainingRequestCreateWithoutCreatedByInput[] | TrainingRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutCreatedByInput | TrainingRequestCreateOrConnectWithoutCreatedByInput[]
    upsert?: TrainingRequestUpsertWithWhereUniqueWithoutCreatedByInput | TrainingRequestUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TrainingRequestCreateManyCreatedByInputEnvelope
    set?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    disconnect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    delete?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    update?: TrainingRequestUpdateWithWhereUniqueWithoutCreatedByInput | TrainingRequestUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TrainingRequestUpdateManyWithWhereWithoutCreatedByInput | TrainingRequestUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TrainingRequestScalarWhereInput | TrainingRequestScalarWhereInput[]
  }

  export type ConsultantProfileCreatelanguagesInput = {
    set: string[]
  }

  export type ConsultantProfileCreateskillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutConsultantInput = {
    create?: XOR<UserCreateWithoutConsultantInput, UserUncheckedCreateWithoutConsultantInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultantInput
    connect?: UserWhereUniqueInput
  }

  export type OfferCreateNestedManyWithoutConsultantInput = {
    create?: XOR<OfferCreateWithoutConsultantInput, OfferUncheckedCreateWithoutConsultantInput> | OfferCreateWithoutConsultantInput[] | OfferUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutConsultantInput | OfferCreateOrConnectWithoutConsultantInput[]
    createMany?: OfferCreateManyConsultantInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutConsultantInput = {
    create?: XOR<OfferCreateWithoutConsultantInput, OfferUncheckedCreateWithoutConsultantInput> | OfferCreateWithoutConsultantInput[] | OfferUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutConsultantInput | OfferCreateOrConnectWithoutConsultantInput[]
    createMany?: OfferCreateManyConsultantInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type ConsultantProfileUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ConsultantProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutConsultantNestedInput = {
    create?: XOR<UserCreateWithoutConsultantInput, UserUncheckedCreateWithoutConsultantInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultantInput
    upsert?: UserUpsertWithoutConsultantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultantInput, UserUpdateWithoutConsultantInput>, UserUncheckedUpdateWithoutConsultantInput>
  }

  export type OfferUpdateManyWithoutConsultantNestedInput = {
    create?: XOR<OfferCreateWithoutConsultantInput, OfferUncheckedCreateWithoutConsultantInput> | OfferCreateWithoutConsultantInput[] | OfferUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutConsultantInput | OfferCreateOrConnectWithoutConsultantInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutConsultantInput | OfferUpsertWithWhereUniqueWithoutConsultantInput[]
    createMany?: OfferCreateManyConsultantInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutConsultantInput | OfferUpdateWithWhereUniqueWithoutConsultantInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutConsultantInput | OfferUpdateManyWithWhereWithoutConsultantInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutConsultantNestedInput = {
    create?: XOR<OfferCreateWithoutConsultantInput, OfferUncheckedCreateWithoutConsultantInput> | OfferCreateWithoutConsultantInput[] | OfferUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutConsultantInput | OfferCreateOrConnectWithoutConsultantInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutConsultantInput | OfferUpsertWithWhereUniqueWithoutConsultantInput[]
    createMany?: OfferCreateManyConsultantInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutConsultantInput | OfferUpdateWithWhereUniqueWithoutConsultantInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutConsultantInput | OfferUpdateManyWithWhereWithoutConsultantInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInstitutionInput = {
    create?: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionInput
    connect?: UserWhereUniqueInput
  }

  export type TrainingRequestCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<TrainingRequestCreateWithoutInstitutionInput, TrainingRequestUncheckedCreateWithoutInstitutionInput> | TrainingRequestCreateWithoutInstitutionInput[] | TrainingRequestUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutInstitutionInput | TrainingRequestCreateOrConnectWithoutInstitutionInput[]
    createMany?: TrainingRequestCreateManyInstitutionInputEnvelope
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
  }

  export type TrainingRequestUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<TrainingRequestCreateWithoutInstitutionInput, TrainingRequestUncheckedCreateWithoutInstitutionInput> | TrainingRequestCreateWithoutInstitutionInput[] | TrainingRequestUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutInstitutionInput | TrainingRequestCreateOrConnectWithoutInstitutionInput[]
    createMany?: TrainingRequestCreateManyInstitutionInputEnvelope
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInstitutionNestedInput = {
    create?: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionInput
    upsert?: UserUpsertWithoutInstitutionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstitutionInput, UserUpdateWithoutInstitutionInput>, UserUncheckedUpdateWithoutInstitutionInput>
  }

  export type TrainingRequestUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<TrainingRequestCreateWithoutInstitutionInput, TrainingRequestUncheckedCreateWithoutInstitutionInput> | TrainingRequestCreateWithoutInstitutionInput[] | TrainingRequestUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutInstitutionInput | TrainingRequestCreateOrConnectWithoutInstitutionInput[]
    upsert?: TrainingRequestUpsertWithWhereUniqueWithoutInstitutionInput | TrainingRequestUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: TrainingRequestCreateManyInstitutionInputEnvelope
    set?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    disconnect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    delete?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    update?: TrainingRequestUpdateWithWhereUniqueWithoutInstitutionInput | TrainingRequestUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: TrainingRequestUpdateManyWithWhereWithoutInstitutionInput | TrainingRequestUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: TrainingRequestScalarWhereInput | TrainingRequestScalarWhereInput[]
  }

  export type TrainingRequestUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<TrainingRequestCreateWithoutInstitutionInput, TrainingRequestUncheckedCreateWithoutInstitutionInput> | TrainingRequestCreateWithoutInstitutionInput[] | TrainingRequestUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutInstitutionInput | TrainingRequestCreateOrConnectWithoutInstitutionInput[]
    upsert?: TrainingRequestUpsertWithWhereUniqueWithoutInstitutionInput | TrainingRequestUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: TrainingRequestCreateManyInstitutionInputEnvelope
    set?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    disconnect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    delete?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    connect?: TrainingRequestWhereUniqueInput | TrainingRequestWhereUniqueInput[]
    update?: TrainingRequestUpdateWithWhereUniqueWithoutInstitutionInput | TrainingRequestUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: TrainingRequestUpdateManyWithWhereWithoutInstitutionInput | TrainingRequestUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: TrainingRequestScalarWhereInput | TrainingRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTrainingRequestsInput = {
    create?: XOR<UserCreateWithoutTrainingRequestsInput, UserUncheckedCreateWithoutTrainingRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainingRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type InstitutionProfileCreateNestedOneWithoutTrainingRequestsInput = {
    create?: XOR<InstitutionProfileCreateWithoutTrainingRequestsInput, InstitutionProfileUncheckedCreateWithoutTrainingRequestsInput>
    connectOrCreate?: InstitutionProfileCreateOrConnectWithoutTrainingRequestsInput
    connect?: InstitutionProfileWhereUniqueInput
  }

  export type OfferCreateNestedManyWithoutRequestInput = {
    create?: XOR<OfferCreateWithoutRequestInput, OfferUncheckedCreateWithoutRequestInput> | OfferCreateWithoutRequestInput[] | OfferUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutRequestInput | OfferCreateOrConnectWithoutRequestInput[]
    createMany?: OfferCreateManyRequestInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<OfferCreateWithoutRequestInput, OfferUncheckedCreateWithoutRequestInput> | OfferCreateWithoutRequestInput[] | OfferUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutRequestInput | OfferCreateOrConnectWithoutRequestInput[]
    createMany?: OfferCreateManyRequestInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type EnumTrainingFormatFieldUpdateOperationsInput = {
    set?: $Enums.TrainingFormat
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutTrainingRequestsNestedInput = {
    create?: XOR<UserCreateWithoutTrainingRequestsInput, UserUncheckedCreateWithoutTrainingRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainingRequestsInput
    upsert?: UserUpsertWithoutTrainingRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrainingRequestsInput, UserUpdateWithoutTrainingRequestsInput>, UserUncheckedUpdateWithoutTrainingRequestsInput>
  }

  export type InstitutionProfileUpdateOneWithoutTrainingRequestsNestedInput = {
    create?: XOR<InstitutionProfileCreateWithoutTrainingRequestsInput, InstitutionProfileUncheckedCreateWithoutTrainingRequestsInput>
    connectOrCreate?: InstitutionProfileCreateOrConnectWithoutTrainingRequestsInput
    upsert?: InstitutionProfileUpsertWithoutTrainingRequestsInput
    disconnect?: InstitutionProfileWhereInput | boolean
    delete?: InstitutionProfileWhereInput | boolean
    connect?: InstitutionProfileWhereUniqueInput
    update?: XOR<XOR<InstitutionProfileUpdateToOneWithWhereWithoutTrainingRequestsInput, InstitutionProfileUpdateWithoutTrainingRequestsInput>, InstitutionProfileUncheckedUpdateWithoutTrainingRequestsInput>
  }

  export type OfferUpdateManyWithoutRequestNestedInput = {
    create?: XOR<OfferCreateWithoutRequestInput, OfferUncheckedCreateWithoutRequestInput> | OfferCreateWithoutRequestInput[] | OfferUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutRequestInput | OfferCreateOrConnectWithoutRequestInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutRequestInput | OfferUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: OfferCreateManyRequestInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutRequestInput | OfferUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutRequestInput | OfferUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<OfferCreateWithoutRequestInput, OfferUncheckedCreateWithoutRequestInput> | OfferCreateWithoutRequestInput[] | OfferUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutRequestInput | OfferCreateOrConnectWithoutRequestInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutRequestInput | OfferUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: OfferCreateManyRequestInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutRequestInput | OfferUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutRequestInput | OfferUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type ConsultantProfileCreateNestedOneWithoutOffersInput = {
    create?: XOR<ConsultantProfileCreateWithoutOffersInput, ConsultantProfileUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ConsultantProfileCreateOrConnectWithoutOffersInput
    connect?: ConsultantProfileWhereUniqueInput
  }

  export type TrainingRequestCreateNestedOneWithoutOffersInput = {
    create?: XOR<TrainingRequestCreateWithoutOffersInput, TrainingRequestUncheckedCreateWithoutOffersInput>
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutOffersInput
    connect?: TrainingRequestWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutOfferInput = {
    create?: XOR<MessageCreateWithoutOfferInput, MessageUncheckedCreateWithoutOfferInput> | MessageCreateWithoutOfferInput[] | MessageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOfferInput | MessageCreateOrConnectWithoutOfferInput[]
    createMany?: MessageCreateManyOfferInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOffersInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<MessageCreateWithoutOfferInput, MessageUncheckedCreateWithoutOfferInput> | MessageCreateWithoutOfferInput[] | MessageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOfferInput | MessageCreateOrConnectWithoutOfferInput[]
    createMany?: MessageCreateManyOfferInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConsultantProfileUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<ConsultantProfileCreateWithoutOffersInput, ConsultantProfileUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ConsultantProfileCreateOrConnectWithoutOffersInput
    upsert?: ConsultantProfileUpsertWithoutOffersInput
    connect?: ConsultantProfileWhereUniqueInput
    update?: XOR<XOR<ConsultantProfileUpdateToOneWithWhereWithoutOffersInput, ConsultantProfileUpdateWithoutOffersInput>, ConsultantProfileUncheckedUpdateWithoutOffersInput>
  }

  export type TrainingRequestUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<TrainingRequestCreateWithoutOffersInput, TrainingRequestUncheckedCreateWithoutOffersInput>
    connectOrCreate?: TrainingRequestCreateOrConnectWithoutOffersInput
    upsert?: TrainingRequestUpsertWithoutOffersInput
    connect?: TrainingRequestWhereUniqueInput
    update?: XOR<XOR<TrainingRequestUpdateToOneWithWhereWithoutOffersInput, TrainingRequestUpdateWithoutOffersInput>, TrainingRequestUncheckedUpdateWithoutOffersInput>
  }

  export type MessageUpdateManyWithoutOfferNestedInput = {
    create?: XOR<MessageCreateWithoutOfferInput, MessageUncheckedCreateWithoutOfferInput> | MessageCreateWithoutOfferInput[] | MessageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOfferInput | MessageCreateOrConnectWithoutOfferInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutOfferInput | MessageUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: MessageCreateManyOfferInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutOfferInput | MessageUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutOfferInput | MessageUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUpdateOneWithoutOffersNestedInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    upsert?: UserUpsertWithoutOffersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffersInput, UserUpdateWithoutOffersInput>, UserUncheckedUpdateWithoutOffersInput>
  }

  export type MessageUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<MessageCreateWithoutOfferInput, MessageUncheckedCreateWithoutOfferInput> | MessageCreateWithoutOfferInput[] | MessageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOfferInput | MessageCreateOrConnectWithoutOfferInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutOfferInput | MessageUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: MessageCreateManyOfferInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutOfferInput | MessageUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutOfferInput | MessageUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type OfferCreateNestedOneWithoutMessagesInput = {
    create?: XOR<OfferCreateWithoutMessagesInput, OfferUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutMessagesInput
    connect?: OfferWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type OfferUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<OfferCreateWithoutMessagesInput, OfferUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutMessagesInput
    upsert?: OfferUpsertWithoutMessagesInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutMessagesInput, OfferUpdateWithoutMessagesInput>, OfferUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTrainingFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingFormat | EnumTrainingFormatFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingFormatFilter<$PrismaModel> | $Enums.TrainingFormat
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumTrainingFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingFormat | EnumTrainingFormatFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingFormat[] | ListEnumTrainingFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingFormatWithAggregatesFilter<$PrismaModel> | $Enums.TrainingFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingFormatFilter<$PrismaModel>
    _max?: NestedEnumTrainingFormatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ConsultantProfileCreateWithoutUserInput = {
    id?: string
    fullName: string
    title?: string | null
    bio?: string | null
    location?: string | null
    languages?: ConsultantProfileCreatelanguagesInput | string[]
    skills?: ConsultantProfileCreateskillsInput | string[]
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferCreateNestedManyWithoutConsultantInput
  }

  export type ConsultantProfileUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    title?: string | null
    bio?: string | null
    location?: string | null
    languages?: ConsultantProfileCreatelanguagesInput | string[]
    skills?: ConsultantProfileCreateskillsInput | string[]
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutConsultantInput
  }

  export type ConsultantProfileCreateOrConnectWithoutUserInput = {
    where: ConsultantProfileWhereUniqueInput
    create: XOR<ConsultantProfileCreateWithoutUserInput, ConsultantProfileUncheckedCreateWithoutUserInput>
  }

  export type InstitutionProfileCreateWithoutUserInput = {
    id?: string
    companyName: string
    sector?: string | null
    website?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingRequests?: TrainingRequestCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionProfileUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    sector?: string | null
    website?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingRequests?: TrainingRequestUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionProfileCreateOrConnectWithoutUserInput = {
    where: InstitutionProfileWhereUniqueInput
    create: XOR<InstitutionProfileCreateWithoutUserInput, InstitutionProfileUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
    offer: OfferCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    offerId: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type OfferCreateWithoutUserInput = {
    id?: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant: ConsultantProfileCreateNestedOneWithoutOffersInput
    request: TrainingRequestCreateNestedOneWithoutOffersInput
    messages?: MessageCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutUserInput = {
    id?: string
    consultantId: string
    requestId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutUserInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput>
  }

  export type OfferCreateManyUserInputEnvelope = {
    data: OfferCreateManyUserInput | OfferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrainingRequestCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    institution?: InstitutionProfileCreateNestedOneWithoutTrainingRequestsInput
    offers?: OfferCreateNestedManyWithoutRequestInput
  }

  export type TrainingRequestUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionId?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutRequestInput
  }

  export type TrainingRequestCreateOrConnectWithoutCreatedByInput = {
    where: TrainingRequestWhereUniqueInput
    create: XOR<TrainingRequestCreateWithoutCreatedByInput, TrainingRequestUncheckedCreateWithoutCreatedByInput>
  }

  export type TrainingRequestCreateManyCreatedByInputEnvelope = {
    data: TrainingRequestCreateManyCreatedByInput | TrainingRequestCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ConsultantProfileUpsertWithoutUserInput = {
    update: XOR<ConsultantProfileUpdateWithoutUserInput, ConsultantProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ConsultantProfileCreateWithoutUserInput, ConsultantProfileUncheckedCreateWithoutUserInput>
    where?: ConsultantProfileWhereInput
  }

  export type ConsultantProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ConsultantProfileWhereInput
    data: XOR<ConsultantProfileUpdateWithoutUserInput, ConsultantProfileUncheckedUpdateWithoutUserInput>
  }

  export type ConsultantProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutConsultantNestedInput
  }

  export type ConsultantProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutConsultantNestedInput
  }

  export type InstitutionProfileUpsertWithoutUserInput = {
    update: XOR<InstitutionProfileUpdateWithoutUserInput, InstitutionProfileUncheckedUpdateWithoutUserInput>
    create: XOR<InstitutionProfileCreateWithoutUserInput, InstitutionProfileUncheckedCreateWithoutUserInput>
    where?: InstitutionProfileWhereInput
  }

  export type InstitutionProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: InstitutionProfileWhereInput
    data: XOR<InstitutionProfileUpdateWithoutUserInput, InstitutionProfileUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingRequests?: TrainingRequestUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingRequests?: TrainingRequestUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    offerId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
  }

  export type OfferUpsertWithWhereUniqueWithoutUserInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutUserInput, OfferUncheckedUpdateWithoutUserInput>
    create: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutUserInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutUserInput, OfferUncheckedUpdateWithoutUserInput>
  }

  export type OfferUpdateManyWithWhereWithoutUserInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutUserInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    consultantId?: StringFilter<"Offer"> | string
    requestId?: StringFilter<"Offer"> | string
    message?: StringFilter<"Offer"> | string
    price?: IntFilter<"Offer"> | number
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    userId?: StringNullableFilter<"Offer"> | string | null
  }

  export type TrainingRequestUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TrainingRequestWhereUniqueInput
    update: XOR<TrainingRequestUpdateWithoutCreatedByInput, TrainingRequestUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TrainingRequestCreateWithoutCreatedByInput, TrainingRequestUncheckedCreateWithoutCreatedByInput>
  }

  export type TrainingRequestUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TrainingRequestWhereUniqueInput
    data: XOR<TrainingRequestUpdateWithoutCreatedByInput, TrainingRequestUncheckedUpdateWithoutCreatedByInput>
  }

  export type TrainingRequestUpdateManyWithWhereWithoutCreatedByInput = {
    where: TrainingRequestScalarWhereInput
    data: XOR<TrainingRequestUpdateManyMutationInput, TrainingRequestUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TrainingRequestScalarWhereInput = {
    AND?: TrainingRequestScalarWhereInput | TrainingRequestScalarWhereInput[]
    OR?: TrainingRequestScalarWhereInput[]
    NOT?: TrainingRequestScalarWhereInput | TrainingRequestScalarWhereInput[]
    id?: StringFilter<"TrainingRequest"> | string
    title?: StringFilter<"TrainingRequest"> | string
    description?: StringFilter<"TrainingRequest"> | string
    category?: StringFilter<"TrainingRequest"> | string
    format?: EnumTrainingFormatFilter<"TrainingRequest"> | $Enums.TrainingFormat
    location?: StringNullableFilter<"TrainingRequest"> | string | null
    startDate?: DateTimeNullableFilter<"TrainingRequest"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingRequest"> | Date | string | null
    budget?: IntNullableFilter<"TrainingRequest"> | number | null
    currency?: StringFilter<"TrainingRequest"> | string
    status?: EnumRequestStatusFilter<"TrainingRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"TrainingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingRequest"> | Date | string
    createdById?: StringFilter<"TrainingRequest"> | string
    institutionId?: StringNullableFilter<"TrainingRequest"> | string | null
  }

  export type UserCreateWithoutConsultantInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    institution?: InstitutionProfileCreateNestedOneWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    offers?: OfferCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutConsultantInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    institution?: InstitutionProfileUncheckedCreateNestedOneWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    offers?: OfferUncheckedCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutConsultantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultantInput, UserUncheckedCreateWithoutConsultantInput>
  }

  export type OfferCreateWithoutConsultantInput = {
    id?: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    request: TrainingRequestCreateNestedOneWithoutOffersInput
    messages?: MessageCreateNestedManyWithoutOfferInput
    User?: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutConsultantInput = {
    id?: string
    requestId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutConsultantInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutConsultantInput, OfferUncheckedCreateWithoutConsultantInput>
  }

  export type OfferCreateManyConsultantInputEnvelope = {
    data: OfferCreateManyConsultantInput | OfferCreateManyConsultantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConsultantInput = {
    update: XOR<UserUpdateWithoutConsultantInput, UserUncheckedUpdateWithoutConsultantInput>
    create: XOR<UserCreateWithoutConsultantInput, UserUncheckedCreateWithoutConsultantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultantInput, UserUncheckedUpdateWithoutConsultantInput>
  }

  export type UserUpdateWithoutConsultantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionProfileUpdateOneWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    offers?: OfferUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionProfileUncheckedUpdateOneWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    offers?: OfferUncheckedUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type OfferUpsertWithWhereUniqueWithoutConsultantInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutConsultantInput, OfferUncheckedUpdateWithoutConsultantInput>
    create: XOR<OfferCreateWithoutConsultantInput, OfferUncheckedCreateWithoutConsultantInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutConsultantInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutConsultantInput, OfferUncheckedUpdateWithoutConsultantInput>
  }

  export type OfferUpdateManyWithWhereWithoutConsultantInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutConsultantInput>
  }

  export type UserCreateWithoutInstitutionInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileCreateNestedOneWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    offers?: OfferCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutInstitutionInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileUncheckedCreateNestedOneWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    offers?: OfferUncheckedCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutInstitutionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput>
  }

  export type TrainingRequestCreateWithoutInstitutionInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTrainingRequestsInput
    offers?: OfferCreateNestedManyWithoutRequestInput
  }

  export type TrainingRequestUncheckedCreateWithoutInstitutionInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    offers?: OfferUncheckedCreateNestedManyWithoutRequestInput
  }

  export type TrainingRequestCreateOrConnectWithoutInstitutionInput = {
    where: TrainingRequestWhereUniqueInput
    create: XOR<TrainingRequestCreateWithoutInstitutionInput, TrainingRequestUncheckedCreateWithoutInstitutionInput>
  }

  export type TrainingRequestCreateManyInstitutionInputEnvelope = {
    data: TrainingRequestCreateManyInstitutionInput | TrainingRequestCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInstitutionInput = {
    update: XOR<UserUpdateWithoutInstitutionInput, UserUncheckedUpdateWithoutInstitutionInput>
    create: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstitutionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstitutionInput, UserUncheckedUpdateWithoutInstitutionInput>
  }

  export type UserUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    offers?: OfferUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUncheckedUpdateOneWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    offers?: OfferUncheckedUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TrainingRequestUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: TrainingRequestWhereUniqueInput
    update: XOR<TrainingRequestUpdateWithoutInstitutionInput, TrainingRequestUncheckedUpdateWithoutInstitutionInput>
    create: XOR<TrainingRequestCreateWithoutInstitutionInput, TrainingRequestUncheckedCreateWithoutInstitutionInput>
  }

  export type TrainingRequestUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: TrainingRequestWhereUniqueInput
    data: XOR<TrainingRequestUpdateWithoutInstitutionInput, TrainingRequestUncheckedUpdateWithoutInstitutionInput>
  }

  export type TrainingRequestUpdateManyWithWhereWithoutInstitutionInput = {
    where: TrainingRequestScalarWhereInput
    data: XOR<TrainingRequestUpdateManyMutationInput, TrainingRequestUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type UserCreateWithoutTrainingRequestsInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileCreateNestedOneWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    offers?: OfferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTrainingRequestsInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileUncheckedCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileUncheckedCreateNestedOneWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    offers?: OfferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTrainingRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrainingRequestsInput, UserUncheckedCreateWithoutTrainingRequestsInput>
  }

  export type InstitutionProfileCreateWithoutTrainingRequestsInput = {
    id?: string
    companyName: string
    sector?: string | null
    website?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInstitutionInput
  }

  export type InstitutionProfileUncheckedCreateWithoutTrainingRequestsInput = {
    id?: string
    userId: string
    companyName: string
    sector?: string | null
    website?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionProfileCreateOrConnectWithoutTrainingRequestsInput = {
    where: InstitutionProfileWhereUniqueInput
    create: XOR<InstitutionProfileCreateWithoutTrainingRequestsInput, InstitutionProfileUncheckedCreateWithoutTrainingRequestsInput>
  }

  export type OfferCreateWithoutRequestInput = {
    id?: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant: ConsultantProfileCreateNestedOneWithoutOffersInput
    messages?: MessageCreateNestedManyWithoutOfferInput
    User?: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutRequestInput = {
    id?: string
    consultantId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutRequestInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutRequestInput, OfferUncheckedCreateWithoutRequestInput>
  }

  export type OfferCreateManyRequestInputEnvelope = {
    data: OfferCreateManyRequestInput | OfferCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTrainingRequestsInput = {
    update: XOR<UserUpdateWithoutTrainingRequestsInput, UserUncheckedUpdateWithoutTrainingRequestsInput>
    create: XOR<UserCreateWithoutTrainingRequestsInput, UserUncheckedCreateWithoutTrainingRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrainingRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrainingRequestsInput, UserUncheckedUpdateWithoutTrainingRequestsInput>
  }

  export type UserUpdateWithoutTrainingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUpdateOneWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    offers?: OfferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTrainingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUncheckedUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUncheckedUpdateOneWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    offers?: OfferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstitutionProfileUpsertWithoutTrainingRequestsInput = {
    update: XOR<InstitutionProfileUpdateWithoutTrainingRequestsInput, InstitutionProfileUncheckedUpdateWithoutTrainingRequestsInput>
    create: XOR<InstitutionProfileCreateWithoutTrainingRequestsInput, InstitutionProfileUncheckedCreateWithoutTrainingRequestsInput>
    where?: InstitutionProfileWhereInput
  }

  export type InstitutionProfileUpdateToOneWithWhereWithoutTrainingRequestsInput = {
    where?: InstitutionProfileWhereInput
    data: XOR<InstitutionProfileUpdateWithoutTrainingRequestsInput, InstitutionProfileUncheckedUpdateWithoutTrainingRequestsInput>
  }

  export type InstitutionProfileUpdateWithoutTrainingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInstitutionNestedInput
  }

  export type InstitutionProfileUncheckedUpdateWithoutTrainingRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUpsertWithWhereUniqueWithoutRequestInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutRequestInput, OfferUncheckedUpdateWithoutRequestInput>
    create: XOR<OfferCreateWithoutRequestInput, OfferUncheckedCreateWithoutRequestInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutRequestInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutRequestInput, OfferUncheckedUpdateWithoutRequestInput>
  }

  export type OfferUpdateManyWithWhereWithoutRequestInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutRequestInput>
  }

  export type ConsultantProfileCreateWithoutOffersInput = {
    id?: string
    fullName: string
    title?: string | null
    bio?: string | null
    location?: string | null
    languages?: ConsultantProfileCreatelanguagesInput | string[]
    skills?: ConsultantProfileCreateskillsInput | string[]
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConsultantInput
  }

  export type ConsultantProfileUncheckedCreateWithoutOffersInput = {
    id?: string
    userId: string
    fullName: string
    title?: string | null
    bio?: string | null
    location?: string | null
    languages?: ConsultantProfileCreatelanguagesInput | string[]
    skills?: ConsultantProfileCreateskillsInput | string[]
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultantProfileCreateOrConnectWithoutOffersInput = {
    where: ConsultantProfileWhereUniqueInput
    create: XOR<ConsultantProfileCreateWithoutOffersInput, ConsultantProfileUncheckedCreateWithoutOffersInput>
  }

  export type TrainingRequestCreateWithoutOffersInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTrainingRequestsInput
    institution?: InstitutionProfileCreateNestedOneWithoutTrainingRequestsInput
  }

  export type TrainingRequestUncheckedCreateWithoutOffersInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    institutionId?: string | null
  }

  export type TrainingRequestCreateOrConnectWithoutOffersInput = {
    where: TrainingRequestWhereUniqueInput
    create: XOR<TrainingRequestCreateWithoutOffersInput, TrainingRequestUncheckedCreateWithoutOffersInput>
  }

  export type MessageCreateWithoutOfferInput = {
    id?: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutOfferInput = {
    id?: string
    senderId: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutOfferInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutOfferInput, MessageUncheckedCreateWithoutOfferInput>
  }

  export type MessageCreateManyOfferInputEnvelope = {
    data: MessageCreateManyOfferInput | MessageCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOffersInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileCreateNestedOneWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    trainingRequests?: TrainingRequestCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutOffersInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileUncheckedCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileUncheckedCreateNestedOneWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    trainingRequests?: TrainingRequestUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
  }

  export type ConsultantProfileUpsertWithoutOffersInput = {
    update: XOR<ConsultantProfileUpdateWithoutOffersInput, ConsultantProfileUncheckedUpdateWithoutOffersInput>
    create: XOR<ConsultantProfileCreateWithoutOffersInput, ConsultantProfileUncheckedCreateWithoutOffersInput>
    where?: ConsultantProfileWhereInput
  }

  export type ConsultantProfileUpdateToOneWithWhereWithoutOffersInput = {
    where?: ConsultantProfileWhereInput
    data: XOR<ConsultantProfileUpdateWithoutOffersInput, ConsultantProfileUncheckedUpdateWithoutOffersInput>
  }

  export type ConsultantProfileUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsultantNestedInput
  }

  export type ConsultantProfileUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: ConsultantProfileUpdatelanguagesInput | string[]
    skills?: ConsultantProfileUpdateskillsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRequestUpsertWithoutOffersInput = {
    update: XOR<TrainingRequestUpdateWithoutOffersInput, TrainingRequestUncheckedUpdateWithoutOffersInput>
    create: XOR<TrainingRequestCreateWithoutOffersInput, TrainingRequestUncheckedCreateWithoutOffersInput>
    where?: TrainingRequestWhereInput
  }

  export type TrainingRequestUpdateToOneWithWhereWithoutOffersInput = {
    where?: TrainingRequestWhereInput
    data: XOR<TrainingRequestUpdateWithoutOffersInput, TrainingRequestUncheckedUpdateWithoutOffersInput>
  }

  export type TrainingRequestUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTrainingRequestsNestedInput
    institution?: InstitutionProfileUpdateOneWithoutTrainingRequestsNestedInput
  }

  export type TrainingRequestUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutOfferInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutOfferInput, MessageUncheckedUpdateWithoutOfferInput>
    create: XOR<MessageCreateWithoutOfferInput, MessageUncheckedCreateWithoutOfferInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutOfferInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutOfferInput, MessageUncheckedUpdateWithoutOfferInput>
  }

  export type MessageUpdateManyWithWhereWithoutOfferInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutOfferInput>
  }

  export type UserUpsertWithoutOffersInput = {
    update: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUpdateOneWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    trainingRequests?: TrainingRequestUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUncheckedUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUncheckedUpdateOneWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    trainingRequests?: TrainingRequestUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileCreateNestedOneWithoutUserInput
    offers?: OfferCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    phone?: string | null
    password?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant?: ConsultantProfileUncheckedCreateNestedOneWithoutUserInput
    institution?: InstitutionProfileUncheckedCreateNestedOneWithoutUserInput
    offers?: OfferUncheckedCreateNestedManyWithoutUserInput
    trainingRequests?: TrainingRequestUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type OfferCreateWithoutMessagesInput = {
    id?: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    consultant: ConsultantProfileCreateNestedOneWithoutOffersInput
    request: TrainingRequestCreateNestedOneWithoutOffersInput
    User?: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutMessagesInput = {
    id?: string
    consultantId: string
    requestId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type OfferCreateOrConnectWithoutMessagesInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutMessagesInput, OfferUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUpdateOneWithoutUserNestedInput
    offers?: OfferUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUncheckedUpdateOneWithoutUserNestedInput
    institution?: InstitutionProfileUncheckedUpdateOneWithoutUserNestedInput
    offers?: OfferUncheckedUpdateManyWithoutUserNestedInput
    trainingRequests?: TrainingRequestUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type OfferUpsertWithoutMessagesInput = {
    update: XOR<OfferUpdateWithoutMessagesInput, OfferUncheckedUpdateWithoutMessagesInput>
    create: XOR<OfferCreateWithoutMessagesInput, OfferUncheckedCreateWithoutMessagesInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutMessagesInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutMessagesInput, OfferUncheckedUpdateWithoutMessagesInput>
  }

  export type OfferUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneRequiredWithoutOffersNestedInput
    request?: TrainingRequestUpdateOneRequiredWithoutOffersNestedInput
    User?: UserUpdateOneWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManySenderInput = {
    id?: string
    offerId: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type OfferCreateManyUserInput = {
    id?: string
    consultantId: string
    requestId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingRequestCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionId?: string | null
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    offer?: OfferUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OfferUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneRequiredWithoutOffersNestedInput
    request?: TrainingRequestUpdateOneRequiredWithoutOffersNestedInput
    messages?: MessageUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRequestUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionProfileUpdateOneWithoutTrainingRequestsNestedInput
    offers?: OfferUpdateManyWithoutRequestNestedInput
  }

  export type TrainingRequestUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type TrainingRequestUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfferCreateManyConsultantInput = {
    id?: string
    requestId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type OfferUpdateWithoutConsultantInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: TrainingRequestUpdateOneRequiredWithoutOffersNestedInput
    messages?: MessageUpdateManyWithoutOfferNestedInput
    User?: UserUpdateOneWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutConsultantInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutConsultantInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainingRequestCreateManyInstitutionInput = {
    id?: string
    title: string
    description: string
    category: string
    format: $Enums.TrainingFormat
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: number | null
    currency?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type TrainingRequestUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTrainingRequestsNestedInput
    offers?: OfferUpdateManyWithoutRequestNestedInput
  }

  export type TrainingRequestUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    offers?: OfferUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type TrainingRequestUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: EnumTrainingFormatFieldUpdateOperationsInput | $Enums.TrainingFormat
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCreateManyRequestInput = {
    id?: string
    consultantId: string
    message: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type OfferUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultant?: ConsultantProfileUpdateOneRequiredWithoutOffersNestedInput
    messages?: MessageUpdateManyWithoutOfferNestedInput
    User?: UserUpdateOneWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyOfferInput = {
    id?: string
    senderId: string
    content: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultantProfileCountOutputTypeDefaultArgs instead
     */
    export type ConsultantProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsultantProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InstitutionProfileCountOutputTypeDefaultArgs instead
     */
    export type InstitutionProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InstitutionProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingRequestCountOutputTypeDefaultArgs instead
     */
    export type TrainingRequestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingRequestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferCountOutputTypeDefaultArgs instead
     */
    export type OfferCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultantProfileDefaultArgs instead
     */
    export type ConsultantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsultantProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InstitutionProfileDefaultArgs instead
     */
    export type InstitutionProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InstitutionProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingRequestDefaultArgs instead
     */
    export type TrainingRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferDefaultArgs instead
     */
    export type OfferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}