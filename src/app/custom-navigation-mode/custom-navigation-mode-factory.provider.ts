import { BaseNavigationModeFactory, WizardComponent, NavigationMode } from 'angular-archwizard';
import { CustomNavigationMode } from './custom-navigation-mode';

export class CustomNavigationModeFactory extends BaseNavigationModeFactory {

  protected createUnknown(wizard: WizardComponent, navigationModeInput: string): NavigationMode {
    if (navigationModeInput === 'custom') {
      return new CustomNavigationMode(wizard.model);
    }
    return super.createUnknown(wizard, navigationModeInput);
  }

}
