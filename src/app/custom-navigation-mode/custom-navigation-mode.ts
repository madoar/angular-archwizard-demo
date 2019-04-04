import {SemiStrictNavigationMode, WizardState} from 'angular-archwizard';

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
  protected canTransitionToStep(wizardState: WizardState, destinationIndex: number) {

    // Use the base implementation of `isNavigable` from `SemiStrictNavigationMode`
    return super.isNavigable(wizardState, destinationIndex);
  }

  // @override
  public isNavigable(wizardState: WizardState, destinationIndex: number): boolean {

    // Allow returning to previous steps
    if (destinationIndex < wizardState.currentStepIndex) {
      return true;
    }

    // Allow returning to any previously visited ("completed" steps)
    const step = wizardState.getStepAtIndex(destinationIndex);
    if (step && step.completed) {
      return true;
    }

    return false;
  }
}
