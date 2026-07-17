import DefaultTheme from 'vitepress/theme';
import {useRoute} from 'vitepress';
import {h, nextTick, onMounted, watch} from 'vue';
import PocBanner from './PocBanner.vue';
import {addColorChips} from './color-chips';
import {embedStorybookLinks} from './storybook-embeds';
import './custom.css';

// Extend the default theme so we keep its accessible baseline (skip link,
// keyboard-operable nav, focus management) and only add the PoC banner plus
// minimal WCAG 2.2 AA overrides in custom.css. Storybook links in the content
// are progressively enhanced into live embeds (viewer layer only; the Markdown
// stays plain links).
export default {
	extends: DefaultTheme,
	Layout: {
		setup() {
			const route = useRoute();

			// Enhance after the page content renders. Retries cover the async
			// page-chunk load on client-side navigation; the enhancement itself
			// is idempotent.
			const enhanceAll = () => {
				embedStorybookLinks();
				addColorChips();
			};
			const enhance = () => {
				nextTick(() => {
					enhanceAll();
					setTimeout(enhanceAll, 150);
					setTimeout(enhanceAll, 500);
				});
			};

			onMounted(enhance);
			watch(() => route.path, enhance);

			return () =>
				h(DefaultTheme.Layout, null, {
					'layout-top': () => h(PocBanner),
				});
		},
	},
};
