import { Component } from 'src/core/shopware';
import template from './swag-lunar-eclipse.html.twig';

Component.extend('swag-lunar-eclipse', 'sw-condition-base', {
    template,

    computed: {
        selectValues() {
            return [
                {
                    label: this.$tc('global.sw-condition.condition.yes'),
                    value: true
                },
                {
                    label: this.$tc('global.sw-condition.condition.no'),
                    value: false
                }
            ];
        },

        isLunarEclipse: {
            get() {
                this.ensureValueExist();

                // Define a standard value
                if (this.condition.value.isLunarEclipse == null) {
                    this.condition.value.isLunarEclipse = false;
                }

                return this.condition.value.isLunarEclipse;
            },
            set(isLunarEclipse) {
                this.ensureValueExist();
                this.condition.value = { ...this.condition.value, isLunarEclipse };
            }
        }
    }
});
