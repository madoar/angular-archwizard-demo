import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DemoComponent} from './demo/demo.component';
import {BasicModule} from './basic/basic.module';
import {SmallModule} from './small/small.module';
import {LargeFilledModule} from './large-filled/large-filled.module';
import {LargeEmptyModule} from './large-empty/large-empty.module';
import {LargeFilledSymbolsModule} from './large-filled-symbols/large-filled-symbols.module';
import {LargeEmptySymbolsModule} from './large-empty-symbols/large-empty-symbols.module';
import {BasicStepSymbolModule} from './basic-step-symbol/basic-step-symbol.module';
import {CustomStepSymbolModule} from './custom-step-symbol/custom-step-symbol.module';
import {CustomStepSymbolTemplateModule} from './custom-step-symbol-template/custom-step-symbol-template.module';
import {LocationTopModule} from './location-top/location-top.module';
import {LocationBottomModule} from './location-bottom/location-bottom.module';
import {LocationLeftModule} from './location-left/location-left.module';
import {LocationRightModule} from './location-right/location-right.module';
import {CompletionStepBasicModule} from './completion-step-basic/completion-step-basic.module';
import {CompletionStepBackNavigationModule} from './completion-step-back-navigation/completion-step-back-navigation.module';
import {StepEnterEventModule} from './step-enter-event/step-enter-event.module';
import {StepExitEventModule} from './step-exit-event/step-exit-event.module';
import {CustomStepTitlesModule} from './custom-step-titles/custom-step-titles.module';
import {OptionalStepsModule} from './optional-steps/optional-steps.module';
import {ArbitraryStepNavigationModule} from './arbitrary-step-navigation/arbitrary-step-navigation.module';
import {WizardStepDirectivesModule} from './wizard-step-directives/wizard-step-directives.module';
import {ResetWizardModule} from './reset-wizard/reset-wizard.module';
import {AppRoutingModule} from './app-routing.module';
import {CanExitEventModule} from './can-exit-event/can-exit-event.module';
import {DefaultNavigationModeModule} from './default-navigation-mode/default-navigation-mode.module';
import {ConfigurableNavigationModeModule} from './configurable-navigation-mode/configurable-navigation-mode.module';
import {CanEnterEventModule} from './can-enter-event/can-enter-event.module';
import {DefaultWizardStepModule} from './default-wizard-step/default-wizard-step.module';
import {ReversedNavigationBarModule} from './reversed-navigation-bar/reversed-navigation-bar.module';
import {WizardStepNgForModule} from './wizard-step-ngfor/wizard-step-ngfor.module';
import {CustomGlobalCssModule} from './custom-global-css/custom-global-css.module';
import {CustomStepCssModule} from './custom-step-css/custom-step-css.module';
import {CustomNavigationModeModule} from './custom-navigation-mode/custom-navigation-mode.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BasicModule,
    SmallModule,
    LargeFilledModule,
    LargeEmptyModule,
    LargeFilledSymbolsModule,
    LargeEmptySymbolsModule,
    BasicStepSymbolModule,
    CustomStepSymbolModule,
    CustomStepSymbolTemplateModule,
    LocationTopModule,
    LocationBottomModule,
    LocationLeftModule,
    LocationRightModule,
    CompletionStepBasicModule,
    CompletionStepBackNavigationModule,
    StepEnterEventModule,
    StepExitEventModule,
    CanExitEventModule,
    CustomStepTitlesModule,
    OptionalStepsModule,
    ArbitraryStepNavigationModule,
    WizardStepDirectivesModule,
    ResetWizardModule,
    DefaultNavigationModeModule,
    ConfigurableNavigationModeModule,
    CanEnterEventModule,
    DefaultWizardStepModule,
    ReversedNavigationBarModule,
    WizardStepNgForModule,
    CustomGlobalCssModule,
    CustomStepCssModule,
    CustomNavigationModeModule,
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule {
}
