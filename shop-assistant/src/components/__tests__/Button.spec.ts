
import { mount } from '@vue/test-utils'
import CustomButton from '../Button.vue';
import { describe, it, expect } from 'vitest'
const { assert } = require('chai');



describe('Button Component', () => {
    it('renders button', async () => {
        const wrapper = mount(CustomButton, {
            props: {
                iconPrefix: 'fas',
                iconName: 'fa-star',
            },
        });

        expect(wrapper.find('.custom-button').exists()).toBe(true);

    });

    it('renders button with font-awesome-icon', async () => {
        const wrapper = mount(CustomButton, {
            props: {
                iconPrefix: 'fas',
                iconName: 'fa-star',
            },
        });

        expect(wrapper.find(".fa-icon").attributes().icon.includes('fas'))
        expect(wrapper.find(".fa-icon").attributes().icon.includes('fa-star'))
    });

    it('button contains function', async () => {
        let clickHandlerCalled = false;

        const wrapper = mount(CustomButton, {
            props: {
                iconPrefix: 'fas',
                iconName: 'fa-star',
                clickHandler: () => {
                    clickHandlerCalled = true;
                },
            },
        });
        await wrapper.find('button').trigger('click');

        assert.isTrue(clickHandlerCalled, 'clickHandler should be called');
    });
});
