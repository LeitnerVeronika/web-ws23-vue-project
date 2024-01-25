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

        // Check if the text is rendered correctly
        expect(wrapper.text()).toContain('SampleText');

        // Check if the class is set correctly
        expect(wrapper.classes()).toContain('sampletext');
    });

    it('updates the class when the text prop changes', async () => {
        const wrapper = mount(MarketComponent, {
            props: {
                text: 'FirstText',
            },
        });

        // Check if the class is set correctly initially
        expect(wrapper.classes()).toContain('firsttext');

        // Update the prop
        await wrapper.setProps({ text: 'UpdatedText' });

        // Check if the class is updated
        expect(wrapper.classes()).toContain('updatedtext');
    });
});
