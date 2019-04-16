import { Component } from 'src/core/shopware';
import LocalStore from 'src/core/data/LocalStore';
import template from './swag-lunar-eclipse.html.twig';

Component.extend('swag-lunar-eclipse', 'sw-condition-base', {
    template,

    computed: {
        fieldNames() {
            return ['isLunarEclipse'];
        },
        defaultValues() {
            return {
                isLunarEclipse: true
            };
        },
        selectValues() {
            const values = [
                {
                    label: this.$tc('global.sw-condition.condition.yes'),
                    value: 'true'
                },
                {
                    label: this.$tc('global.sw-condition.condition.no'),
                    value: 'false'
                }
            ];

            return new LocalStore(values, 'value');
        },
    },

    data() {
        return {
            isLunarEclipse: this.condition.value.isLunarEclipse !== 'undefined' ? String(this.condition.value.isLunarEclipse) : String(true)
        };
    },

    watch: {
        isLunarEclipse: {
            handler(newValue) {
                this.condition.value.isLunarEclipse = newValue === String(true);
            }
        }
    },
});