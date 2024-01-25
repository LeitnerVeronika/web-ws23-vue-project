// Import the necessary functions from 'vitest'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeadingComponent from '../Heading.vue';

// Describe the test suite for HeadingComponent
describe('Heading Component', () => {
    // Test case: Ensure the headingText is rendered correctly
    it('renders the correct heading text', async () => {
        // Mount the HeadingComponent and provide the headingText prop
        const wrapper = mount(HeadingComponent, {
            props: {
                headingText: 'Hello, Vitest!',
            },
        });

        expect(wrapper.element.textContent).toContain('Hello, Vitest!');
    });
});
