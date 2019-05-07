import {SemiStrictNavigationMode} from 'angular-archwizard';

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
  protected canTransitionToStep(destinationIndex: number) {

    // Use the base implementation of `isNavigable` from `SemiStrictNavigationMode`
    return super.isNavigable(destinationIndex);
  }

  // @override
  public isNavigable(destinationIndex: number): boolean {

    // Allow returning to previous steps
    if (destinationIndex < this.wizardState.currentStepIndex) {
      return true;
    }

    // Allow returning to any previously visited ("completed" steps)
    const step = this.wizardState.getStepAtIndex(destinationIndex);
    if (step && step.completed) {
      return true;
    }

    return false;
  }
}
