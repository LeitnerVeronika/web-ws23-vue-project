// Import the necessary functions from 'vitest'
import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import TableHeaderComponent from '../TableHeader.vue';

// Describe the test suite for TableHeaderComponent
describe('TableHeader Component', () => {
    // Test case: Ensure the headingText is rendered correctly
    it('renders the correct table header text', async () => {
        // Mount the TableHeaderComponent and provide the headingText prop
        const wrapper = mount(TableHeaderComponent, {});

        expect(wrapper.find("section").exists()).toBe(true);
        expect(wrapper.find("section").classes()).toContain("grid-container");


        expect(wrapper.element.textContent).toContain("Product");
        expect(wrapper.element.textContent).toContain("Market");
        expect(wrapper.element.textContent).toContain("Price");
        expect(wrapper.element.textContent).toContain("Difference");

    });
});
