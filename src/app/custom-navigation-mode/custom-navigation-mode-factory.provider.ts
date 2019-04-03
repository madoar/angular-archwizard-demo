import { BaseNavigationModeFactory, WizardComponent, NavigationMode } from 'angular-archwizard';
import { CustomNavigationMode } from './custom-navigation-mode';

export class CustomNavigationModeFactory extends BaseNavigationModeFactory {

  protected createByName(wizard: WizardComponent, navigationModeInput: string): NavigationMode {
    if (navigationModeInput === 'custom') {
      return new CustomNavigationMode(wizard.model);
    }
    return super.createByName(wizard, navigationModeInput);
  }

}
