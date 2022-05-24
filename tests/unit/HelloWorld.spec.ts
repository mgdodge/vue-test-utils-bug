import {
	mount,
} from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
	it('should display message', async () => {
		const msg = 'Test Message';
		const wrapper = await mount(HelloWorld, {
			props: {
				msg,
			},
		});
		expect(wrapper.text()).toEqual(expect.stringContaining(msg));
	});
});
