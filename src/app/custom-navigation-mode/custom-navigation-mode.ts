import {WizardComponent, ConfigurableNavigationMode} from 'angular-archwizard';

/**
 * A custom NavigationMode which allows to navigate backward to any step and forward to steps the user has already visited before.
 */
// Extend ConfigurableNavigationMode for its implementation of canTransitionToStep
export class CustomNavigationMode extends ConfigurableNavigationMode {

  constructor() {
    super('allow', 'allow');
  }

  // @override
  public isNavigable(wizard: WizardComponent, destinationIndex: number): boolean {
    // Allow returning to previous steps
    if (destinationIndex < wizard.currentStepIndex) {
      return true;
    }

    // Allow returning to any previously visited ("completed" steps)
    const step = wizard.getStepAtIndex(destinationIndex);
    if (step && step.completed) {
      return true;
    }

    return false;
  }

}
