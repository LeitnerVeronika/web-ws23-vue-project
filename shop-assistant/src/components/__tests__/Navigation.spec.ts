import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import NavigationComponent from '../Navigation.vue';

describe('Navigation Component', () => {
    it('renders the correct navigation text', async () => {
        const wrapper = mount(NavigationComponent, {});

        expect(wrapper.find("nav").exists()).toBe(true);

        expect(wrapper.element.textContent).toContain("Shop Assistant");
        expect(wrapper.element.textContent).toContain("Product Search");
        expect(wrapper.element.textContent).toContain("Favorites");
        expect(wrapper.element.textContent).toContain("Shopping Cart");

    });

    it('has valid links', async () => {
        it('check links', async () => {

            const wrapper = mount(NavigationComponent);

            await wrapper.getComponent({ ref: 'productSearchLink' }).trigger('click');
            expect(wrapper.getComponent({ ref: 'productSearchLink' }).classes()).to.include('active');

            await wrapper.getComponent({ ref: 'favoritesLink' }).trigger('click');
            expect(wrapper.getComponent({ ref: 'favoritesLink' }).classes()).to.include('active');

            await wrapper.getComponent({ ref: 'cartLink' }).trigger('click');
            expect(wrapper.getComponent({ ref: 'cartLink' }).classes()).to.include('active');

        })
    });
});
