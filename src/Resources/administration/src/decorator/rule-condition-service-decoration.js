import { Application } from 'src/core/shopware';
import '../core/component/swag-lunar-eclipse';

Application.addServiceProviderDecorator('ruleConditionDataProviderService', (ruleConditionService) => {
    ruleConditionService.addCondition('lunar_eclipse', {
        component: 'swag-lunar-eclipse',
        label: 'Is lunar eclipse today',
        scopes: ['global']
    });

    return ruleConditionService;
});
