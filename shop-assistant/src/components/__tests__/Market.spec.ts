import MarketComponent from '../Market.vue';
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
describe('Market Component', () => {
    it('renders the correct text and class', async () => {
        const wrapper = mount(MarketComponent, {
            props: {
                text: 'SampleText',
            },
        });
        expect(wrapper.text()).toContain('SampleText');
        expect(wrapper.classes()).toContain('sampletext');
    });

    it('updates the class when the text prop changes', async () => {
        const wrapper = mount(MarketComponent, {
            props: {
                text: 'FirstText',
            },
        });
        expect(wrapper.classes()).toContain('firsttext');

        await wrapper.setProps({ text: 'UpdatedText' });
        expect(wrapper.classes()).toContain('updatedtext');
    });
});
