import { mount } from '@vue/test-utils'
import Products from '@/components/Products.vue';
import { describe, it, expect } from 'vitest'
import {createPinia} from "pinia";
import {createApp} from "vue";

const pinia = createPinia();
const app = createApp(Products);
app.use(pinia);

describe('Product Component', () => {
    it('renders cart correctly', () => {
        const wrapper = mount(Products, {
            props: {
                // Provide your props here
                name: 'ExampleProduct',
                market: 'Spar',
                priceNew: 20.99,
                priceOld: 25.99,
                difference: '5%',
                type: 2, // Example ProductTypes enum value
                diffColor: 'green',
                isChecked: false,
            },
        });

        expect(wrapper.text()).to.include('ExampleProduct');
        expect(wrapper.find('.grid-container').exists()).toBe(true);
        expect(wrapper.find('.product-link').text()).toBe('ExampleProduct');
        expect(wrapper.text()).to.include('20.99€ | 25.99€');
        expect(wrapper.text()).to.include('Spar');
        expect(wrapper.find('.red').exists()).toBe(false);
        expect(wrapper.find('.green').exists()).toBe(true);
        expect(wrapper.text()).to.include('5%');
        expect(wrapper.find('[data-testid="cart-item"]').exists()).toBe(true)
        expect(wrapper.find('[data-testid="fav-item"]').exists()).toBe(false)
    });

    it('renders favorites correctly', () => {
        const wrapper = mount(Products, {
            props: {
                // Provide your props here
                name: 'ExampleProduct',
                market: 'Spar',
                priceNew: 20.99,
                priceOld: 25.99,
                difference: '5%',
                type: 1, // Example ProductTypes enum value
                diffColor: 'red',
                isChecked: false,
            },
        });

        expect(wrapper.text()).to.include('ExampleProduct');
        expect(wrapper.find('.grid-container').exists()).toBe(true);
        expect(wrapper.find('.product-link').text()).toBe('ExampleProduct');
        expect(wrapper.text()).to.include('20.99€ | 25.99€');
        expect(wrapper.text()).to.include('Spar');
        expect(wrapper.find('.red').exists()).toBe(true);
        expect(wrapper.find('.green').exists()).toBe(false);
        expect(wrapper.text()).to.include('5%');
        expect(wrapper.find('[data-testid="cart-item"]').exists()).toBe(false)
        expect(wrapper.find('[data-testid="fav-item"]').exists()).toBe(true)
    });

    it('renders home/search correctly', () => {
        const wrapper = mount(Products, {
            props: {
                // Provide your props here
                name: 'ExampleProduct',
                market: 'Spar',
                priceNew: 20.99,
                priceOld: 25.99,
                difference: '5%',
                type: 0, // Example ProductTypes enum value
                diffColor: 'red',
                isChecked: false,
            },
        });

        expect(wrapper.text()).to.include('ExampleProduct');
        expect(wrapper.find('.grid-container').exists()).toBe(true);
        expect(wrapper.find('.product-link').text()).toBe('ExampleProduct');
        expect(wrapper.text()).to.include('20.99€ | 25.99€');
        expect(wrapper.text()).to.include('Spar');
        expect(wrapper.find('.red').exists()).toBe(true);
        expect(wrapper.find('.green').exists()).toBe(false);
        expect(wrapper.text()).to.include('5%');
        expect(wrapper.find('[data-testid="add-cart-item"]').exists()).toBe(true)
        expect(wrapper.find('[data-testid="add-fav-item"]').exists()).toBe(true)
        expect(wrapper.find('[data-testid="cart-item"]').exists()).toBe(false)
        expect(wrapper.find('[data-testid="fav-item"]').exists()).toBe(false)
    });
});
