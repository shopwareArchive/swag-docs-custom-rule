<?php declare(strict_types=1);

namespace Swag\CustomRule\Core\Rule;

use Shopware\Core\Framework\Rule\Rule;
use Shopware\Core\Framework\Rule\RuleScope;
use Symfony\Component\Validator\Constraints\Type;

class LunarEclipseRule extends Rule
{
    /**
     * @var bool
     */
    protected $isLunarEclipse;

    public function __construct()
    {
        parent::__construct();

        // Will be overwritten at runtime. Reflects the expected value.
        $this->isLunarEclipse = false;
    }

    public function getName(): string
    {
        return 'lunar_eclipse';
    }

    public function match(RuleScope $scope): bool
    {
        // Not implemented in this example
        $isCurrentlyLunarEclipse = $this->isCurrentlyLunarEclipse();

        // Checks if the shop administrator set the rule to "Lunar eclipse => Yes"
        if ($this->isLunarEclipse) {
            // Shop administrator wants the rule to match if there's currently a lunar eclipse.
            return $isCurrentlyLunarEclipse;
        }

        // Shop administrator wants the rule to match if there's currently NOT a lunar eclipse.
        return !$isCurrentlyLunarEclipse;
    }

    public function getConstraints(): array
    {
        return [
            'isLunarEclipse' => [ new Type('bool') ]
        ];
    }
}