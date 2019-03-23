import {SemiStrictNavigationMode} from 'angular-archwizard';

/**
 * A custom NavigationMode
 *
 * Allows to navigate backward to any step (like `StrictNavigationMode`)
 * and forward to steps the user has already visited before.
 *
 * Next and Previous buttons work as in `StrictNavigationMode`.
 */
export class CustomNavigationMode extends SemiStrictNavigationMode {

  canTransitionToStep(destinationIndex: number) {
    // Works as in strict mode
    return this.wizardState.wizardSteps
        .filter((step, index) => index < destinationIndex && index !== this.wizardState.currentStepIndex)
        .every(step => step.completed || step.optional);
  }

  // @override
  isNavigable(destinationIndex: number): boolean {

    // allow returning to previous steps
    if (destinationIndex < this.wizardState.currentStepIndex) {
      return true;
    }

    // allow returning to any previously visited ("completed" steps)
    const step = this.wizardState.wizardSteps[destinationIndex];
    if (step && step.completed) {
      return true;
    }

    return false;
  }
}
