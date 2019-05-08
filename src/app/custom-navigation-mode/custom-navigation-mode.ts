import {SemiStrictNavigationMode, WizardComponent} from 'angular-archwizard';

/**
 * A custom NavigationMode
 *
 * Allows to navigate backward to any step (like [[StrictNavigationMode]])
 * and forward to steps the user has already visited before.
 *
 * Next and Previous buttons work as in [[StrictNavigationMode]] and [[SemiStrictNavigationMode]].
 */
export class CustomNavigationMode extends SemiStrictNavigationMode {

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

  // @override
  protected canTransitionToStep(wizard: WizardComponent, destinationIndex: number) {
    // Use the base implementation of `isNavigable` from `SemiStrictNavigationMode`
    return super.isNavigable(wizard, destinationIndex);
  }

}
