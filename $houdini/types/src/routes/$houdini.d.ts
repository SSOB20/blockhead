import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/apps" | "/apps/[web3AppSlug=isWeb3AppSlug]" | "/apps/[web3AppSlug=isWeb3AppSlug]/address/[addressOrEnsName]" | "/apps/audius" | "/apps/audius/playlist/[audiusPlaylistId]" | "/apps/audius/search/[audiusQuery]" | "/apps/audius/track/[audiusTrackId]" | "/apps/audius/user/[audiusUserId]" | "/apps/ens/address/[addressOrEnsName]" | "/explorer" | "/explorer/[networkSlug=isNetworkSlug]" | "/explorer/[networkSlug=isNetworkSlug]/[query=isBlockNumber]" | "/explorer/[networkSlug=isNetworkSlug]/[query=isEnsName]" | "/explorer/[networkSlug=isNetworkSlug]/[query=isEthereumAddress]" | "/explorer/[networkSlug=isNetworkSlug]/[query=isEthereumTransaction]" | "/explorer/bitcoin" | "/explorer/bitcoin/[query]" | "/portfolio" | "/transfer" | null
type LayoutParams = RouteParams & { web3AppSlug?: string,addressOrEnsName?: string,audiusPlaylistId?: string,audiusQuery?: string,audiusTrackId?: string,audiusUserId?: string,networkSlug?: string,query?: string }
type LayoutServerParentData = EnsureDefined<{}>;
type LayoutParentData = EnsureDefined<{}>;
						type MakeOptional<Target, Keys extends keyof Target> = Omit<Target, Keys> & {
							[Key in Keys]?: Target[Key] | undefined | null
						}
					

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Expand<Omit<PageParentData, keyof PageParentData & EnsureDefined<PageServerData>> & OptionalUnion<EnsureDefined<PageParentData & EnsureDefined<PageServerData>>>> & {  }>;
export type LayoutServerLoad<OutputData extends Partial<App.PageData> & Record<string, any> | void = Partial<App.PageData> & Record<string, any> | void> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Expand<Omit<LayoutParentData, keyof LayoutParentData & EnsureDefined<LayoutServerData>> & OptionalUnion<EnsureDefined<LayoutParentData & EnsureDefined<LayoutServerData>>>> & {  }>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;