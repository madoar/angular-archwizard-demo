import { BaseNavigationModeFactory, WizardComponent, NavigationMode } from 'angular-archwizard';
import { CustomNavigationMode } from './custom-navigation-mode';

export class CustomNavigationModeFactory extends BaseNavigationModeFactory {

  createUnknown(wizard: WizardComponent, navigationMode: string): NavigationMode {
    if (navigationMode === 'custom') {
      return new CustomNavigationMode(wizard.model);
    }
    return super.createUnknown(wizard, navigationMode);
  }

}
