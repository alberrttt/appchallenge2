import {
	createConfig,
	config as defaultConfig,
} from "@gluestack-ui/themed";
export const config = createConfig({
	...defaultConfig,

	tokens: {
		...defaultConfig.theme.tokens,
		colors: {
			...defaultConfig.theme.tokens.colors,
		},
	},
	aliases: {
		...defaultConfig.theme.aliases,
	},
});
type ConfigType = typeof config;

// Extend the internal ui config
declare module "@gluestack-ui/themed" {
	interface UIConfig extends ConfigType {}
}
