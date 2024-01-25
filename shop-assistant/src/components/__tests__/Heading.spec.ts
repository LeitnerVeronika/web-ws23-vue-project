import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeadingComponent from '../Heading.vue';

describe('Heading Component', () => {
    it('renders the correct heading text', async () => {
        const wrapper = mount(HeadingComponent, {
            props: {
                headingText: 'Hello, Vitest!',
            },
        });
        expect(wrapper.element.textContent).toContain('Hello, Vitest!');
    });
});
