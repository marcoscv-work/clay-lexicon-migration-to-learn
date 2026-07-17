import DefaultTheme from 'vitepress/theme';
import {h} from 'vue';
import PocBanner from './PocBanner.vue';
import './custom.css';

// Extend the default theme so we keep its accessible baseline (skip link,
// keyboard-operable nav, focus management) and only add the PoC banner plus
// minimal WCAG 2.2 AA overrides in custom.css.
export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'layout-top': () => h(PocBanner),
		});
	},
};
