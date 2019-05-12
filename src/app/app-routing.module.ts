import {BasicComponent} from './basic/basic.component';
import {SmallComponent} from './small/small.component';
import {LargeFilledComponent} from './large-filled/large-filled.component';
import {LargeEmptyComponent} from './large-empty/large-empty.component';
import {LargeEmptySymbolsComponent} from './large-empty-symbols/large-empty-symbols.component';
import {LargeFilledSymbolsComponent} from './large-filled-symbols/large-filled-symbols.component';
import {BasicStepSymbolComponent} from './basic-step-symbol/basic-step-symbol.component';
import {CustomStepSymbolComponent} from './custom-step-symbol/custom-step-symbol.component';
import {CustomStepSymbolTemplateComponent} from './custom-step-symbol-template/custom-step-symbol-template.component';
import {LocationBottomComponent} from './location-bottom/location-bottom.component';
import {LocationRightComponent} from './location-right/location-right.component';
import {LocationLeftComponent} from './location-left/location-left.component';
import {LocationTopComponent} from './location-top/location-top.component';
import {CompletionStepBasicComponent} from './completion-step-basic/completion-step-basic.component';
import {CompletionStepBackNavigationComponent} from './completion-step-back-navigation/completion-step-back-navigation.component';
import {StepEnterEventComponent} from './step-enter-event/step-enter-event.component';
import {StepExitEventComponent} from './step-exit-event/step-exit-event.component';
import {CustomStepTitlesComponent} from './custom-step-titles/custom-step-titles.component';
import {OptionalStepsComponent} from './optional-steps/optional-steps.component';
import {ArbitraryStepNavigationComponent} from './arbitrary-step-navigation/arbitrary-step-navigation.component';
import {WizardStepDirectivesComponent} from './wizard-step-directives/wizard-step-directives.component';
import {ResetWizardComponent} from './reset-wizard/reset-wizard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CanExitEventComponent} from './can-exit-event/can-exit-event.component';
import {DefaultNavigationModeComponent} from './default-navigation-mode/default-navigation-mode.component';
import {ConfigurableNavigationModeComponent} from './configurable-navigation-mode/configurable-navigation-mode.component';
import {CanEnterEventComponent} from './can-enter-event/can-enter-event.component';
import {DefaultWizardStepComponent} from './default-wizard-step/default-wizard-step.component';
import {ReversedNavigationBarComponent} from './reversed-navigation-bar/reversed-navigation-bar.component';
import {WizardStepNgForComponent} from './wizard-step-ngfor/wizard-step-ngfor.component';
import {CustomGlobalCssComponent} from './custom-global-css/custom-global-css.component';
import {CustomStepCssComponent} from './custom-step-css/custom-step-css.component';
import { CustomNavigationModeComponent } from './custom-navigation-mode/custom-navigation-mode.component';

/**
 * Created by marc on 09.07.17.
 */
const appRoutes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'layout/small', component: SmallComponent },
  { path: 'layout/large-filled', component: LargeFilledComponent },
  { path: 'layout/large-empty', component: LargeEmptyComponent },
  { path: 'layout/large-filled-symbols', component: LargeFilledSymbolsComponent },
  { path: 'layout/large-empty-symbols', component: LargeEmptySymbolsComponent },
  { path: 'navigation-symbol/basic', component: BasicStepSymbolComponent },
  { path: 'navigation-symbol/custom', component: CustomStepSymbolComponent },
  { path: 'navigation-symbol/custom-template', component: CustomStepSymbolTemplateComponent },
  { path: 'navigation-location/top', component: LocationTopComponent },
  { path: 'navigation-location/left', component: LocationLeftComponent },
  { path: 'navigation-location/right', component: LocationRightComponent },
  { path: 'navigation-location/bottom', component: LocationBottomComponent },
  { path: 'completion-step/basic', component: CompletionStepBasicComponent },
  { path: 'completion-step/back-links', component: CompletionStepBackNavigationComponent },
  { path: 'step-event/step-enter', component: StepEnterEventComponent },
  { path: 'step-event/step-exit', component: StepExitEventComponent },
  { path: 'step-event/can-enter', component: CanEnterEventComponent },
  { path: 'step-event/can-exit', component: CanExitEventComponent },
  { path: 'navigation-mode/default', component: DefaultNavigationModeComponent },
  { path: 'navigation-mode/configurable', component: ConfigurableNavigationModeComponent },
  { path: 'navigation-mode/custom', component: CustomNavigationModeComponent },
  { path: 'custom-css/global', component: CustomGlobalCssComponent },
  { path: 'custom-css/step', component: CustomStepCssComponent },
  { path: 'custom-step-titles', component: CustomStepTitlesComponent },
  { path: 'optional-steps', component: OptionalStepsComponent },
  { path: 'default-step-index', component: DefaultWizardStepComponent },
  { path: 'arbitrary-step-navigation', component: ArbitraryStepNavigationComponent },
  { path: 'wizard-step-directives', component: WizardStepDirectivesComponent },
  { path: 'reset-wizard', component: ResetWizardComponent },
  { path: 'reversed-navigation-bar', component: ReversedNavigationBarComponent },
  { path: 'wizard-step-ngfor', component: WizardStepNgForComponent },
  { path: '', redirectTo: '/basic', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
