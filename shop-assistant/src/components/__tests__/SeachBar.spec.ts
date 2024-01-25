import SearchBarComponent from '../SearchBar.vue';
import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'


describe('SearchBar Component', () => {
    it('renders component', async () => {
        const wrapper = mount(SearchBarComponent, {
            props: {
                homepage: false,
            },
        });
        expect(wrapper.find("input").exists()).toBe(true);
        expect(wrapper.find("input").classes()).toContain('search');
        expect(wrapper.find("button").exists()).toBe(true);
    });

    it('emit search event', async () => {
        const wrapper = mount(SearchBarComponent, {
            props: {
                homepage: false,
            },
        });
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted().search).toBeTruthy();
    });
});
