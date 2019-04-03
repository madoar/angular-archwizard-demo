import { BaseNavigationModeFactory, WizardComponent, NavigationMode } from 'angular-archwizard';
import { CustomNavigationMode } from './custom-navigation-mode';

/**
 * A custom NavigationModeFactory
 *
 * This class is registered in [[CustomNavigationModeModule]] and allows to use `navigationMode="custom"`
 * for any wizard component inside this module in addition to build-in navigation modes like `"strict"`.
 * For `navigationMode="custom"`, this factory returns an instance of [[CustomNavigationMode]].
 */
export class CustomNavigationModeFactory extends BaseNavigationModeFactory {

  protected createByName(wizard: WizardComponent, navigationModeInput: string): NavigationMode {
    if (navigationModeInput === 'custom') {
      return new CustomNavigationMode(wizard.model);
    }
    return super.createByName(wizard, navigationModeInput);
  }

}
