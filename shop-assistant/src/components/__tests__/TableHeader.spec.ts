import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import TableHeaderComponent from '../TableHeader.vue';

describe('TableHeader Component', () => {
    it('renders the correct table header text', async () => {
        const wrapper = mount(TableHeaderComponent, {});

        expect(wrapper.find("section").exists()).toBe(true);
        expect(wrapper.find("section").classes()).toContain("grid-container");

        expect(wrapper.element.textContent).toContain("Product");
        expect(wrapper.element.textContent).toContain("Market");
        expect(wrapper.element.textContent).toContain("Price");
        expect(wrapper.element.textContent).toContain("Difference");
    });
});
