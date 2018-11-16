'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">Lumeer Web UI documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-b479746bc90db4b32e2b389c6e2a89b9"' : 'data-target="#xs-components-links-module-AppModule-b479746bc90db4b32e2b389c6e2a89b9"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-b479746bc90db4b32e2b389c6e2a89b9"' : 'id="xs-components-links-module-AppModule-b479746bc90db4b32e2b389c6e2a89b9"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AppStoreModule.html" data-type="entity-link">AppStoreModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AuthModule-921a2a7d418738898dcce02fbdb7c3d7"' : 'data-target="#xs-components-links-module-AuthModule-921a2a7d418738898dcce02fbdb7c3d7"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AuthModule-921a2a7d418738898dcce02fbdb7c3d7"' : 'id="xs-components-links-module-AuthModule-921a2a7d418738898dcce02fbdb7c3d7"' }>
                                        <li class="link">
                                            <a href="components/AgreementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgreementComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AuthCallbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthCallbackComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SessionExpiredComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SessionExpiredComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ChartPerspectiveModule.html" data-type="entity-link">ChartPerspectiveModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ChartPerspectiveModule-090271deefc31e4198dddbba992f6100"' : 'data-target="#xs-components-links-module-ChartPerspectiveModule-090271deefc31e4198dddbba992f6100"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ChartPerspectiveModule-090271deefc31e4198dddbba992f6100"' : 'id="xs-components-links-module-ChartPerspectiveModule-090271deefc31e4198dddbba992f6100"' }>
                                        <li class="link">
                                            <a href="components/ChartConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartConfigComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChartPerspectiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartPerspectiveComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChartVisualizationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartVisualizationComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ChartPerspectiveRoutingModule.html" data-type="entity-link">ChartPerspectiveRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ChartPipesModule.html" data-type="entity-link">ChartPipesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-ChartPipesModule-93829267ded89abb3216de586b15b38d"' : 'data-target="#xs-pipes-links-module-ChartPipesModule-93829267ded89abb3216de586b15b38d"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-ChartPipesModule-93829267ded89abb3216de586b15b38d"' : 'id="xs-pipes-links-module-ChartPipesModule-93829267ded89abb3216de586b15b38d"' }>
                                        <li class="link">
                                            <a href="pipes/AttributeNamePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeNamePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/AxisSelectEmptyValuePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AxisSelectEmptyValuePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/AxisSelectItemsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AxisSelectItemsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ChartTypesToSelectPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartTypesToSelectPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ConfigAxisByTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigAxisByTypePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DisplayablePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DisplayablePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ShowAxisSelectPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowAxisSelectPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CollapsibleSidebarModule.html" data-type="entity-link">CollapsibleSidebarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CollapsibleSidebarModule-f536461db21ae98d14f02efed3c976ee"' : 'data-target="#xs-components-links-module-CollapsibleSidebarModule-f536461db21ae98d14f02efed3c976ee"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CollapsibleSidebarModule-f536461db21ae98d14f02efed3c976ee"' : 'id="xs-components-links-module-CollapsibleSidebarModule-f536461db21ae98d14f02efed3c976ee"' }>
                                        <li class="link">
                                            <a href="components/CollapsibleSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapsibleSidebarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CollapsibleSidebarToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapsibleSidebarToggleComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CollectionModule.html" data-type="entity-link">CollectionModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' : 'data-target="#xs-components-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' : 'id="xs-components-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' }>
                                        <li class="link">
                                            <a href="components/CollectionAttributesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollectionAttributesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CollectionLinkTypesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollectionLinkTypesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CollectionSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollectionSettingsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CollectionUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollectionUsersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinkTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkTypeComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' : 'data-target="#xs-pipes-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' : 'id="xs-pipes-links-module-CollectionModule-bc01f963837b6bfec450e28e3ade95e6"' }>
                                        <li class="link">
                                            <a href="pipes/AttributeFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeFilterPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/LinkTypeFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkTypeFilterPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CollectionRoutingModule.html" data-type="entity-link">CollectionRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' : 'data-target="#xs-components-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' : 'id="xs-components-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' }>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' : 'data-target="#xs-injectables-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' : 'id="xs-injectables-links-module-CoreModule-4fc34050fa3dcb38784a6f679bcce9c0"' }>
                                        <li class="link">
                                            <a href="injectables/CollectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CollectionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CollectionValidators.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CollectionValidators</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DocumentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DocumentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>EventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>GroupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ImportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ImportService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LinkInstanceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LinkInstanceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LinkTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LinkTypeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrganizationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>OrganizationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrganizationValidators.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>OrganizationValidators</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProjectService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectValidators.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProjectValidators</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SearchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ViewService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ViewService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DetailPerspectiveModule.html" data-type="entity-link">DetailPerspectiveModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DetailPerspectiveModule-d5ec511bfa529f2e05f6f6597073c2e3"' : 'data-target="#xs-components-links-module-DetailPerspectiveModule-d5ec511bfa529f2e05f6f6597073c2e3"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DetailPerspectiveModule-d5ec511bfa529f2e05f6f6597073c2e3"' : 'id="xs-components-links-module-DetailPerspectiveModule-d5ec511bfa529f2e05f6f6597073c2e3"' }>
                                        <li class="link">
                                            <a href="components/DetailPerspectiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailPerspectiveComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DetailPerspectiveRoutingModule.html" data-type="entity-link">DetailPerspectiveRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DialogModule.html" data-type="entity-link">DialogModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' : 'data-target="#xs-components-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' : 'id="xs-components-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' }>
                                        <li class="link">
                                            <a href="components/CollectionNameInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollectionNameInputComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CreateCollectionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateCollectionDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CreateLinkDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateLinkDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CreateResourceDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateResourceDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DialogBaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogBaseComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FeedbackDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedbackDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinkNameInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkNameInputComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OverwriteViewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverwriteViewDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceCodeInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceCodeInputComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceNameInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceNameInputComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' : 'data-target="#xs-injectables-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' : 'id="xs-injectables-links-module-DialogModule-c269b4efa87d755321223ee42bc3c432"' }>
                                        <li class="link">
                                            <a href="injectables/DialogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DialogService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DialogRoutingModule.html" data-type="entity-link">DialogRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DialogWrapperModule.html" data-type="entity-link">DialogWrapperModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DialogWrapperModule-cab24c7c3f58d671fefb215a23515def"' : 'data-target="#xs-components-links-module-DialogWrapperModule-cab24c7c3f58d671fefb215a23515def"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DialogWrapperModule-cab24c7c3f58d671fefb215a23515def"' : 'id="xs-components-links-module-DialogWrapperModule-cab24c7c3f58d671fefb215a23515def"' }>
                                        <li class="link">
                                            <a href="components/DialogWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogWrapperComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DirectivesModule.html" data-type="entity-link">DirectivesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DirectivesModule-0106731884a154710fc4909fd4fdb4f3"' : 'data-target="#xs-directives-links-module-DirectivesModule-0106731884a154710fc4909fd4fdb4f3"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-0106731884a154710fc4909fd4fdb4f3"' : 'id="xs-directives-links-module-DirectivesModule-0106731884a154710fc4909fd4fdb4f3"' }>
                                        <li class="link">
                                            <a href="directives/NgVarDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgVarDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TrimValueAccessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrimValueAccessor</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DocumentHintsModule.html" data-type="entity-link">DocumentHintsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' : 'data-target="#xs-components-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' : 'id="xs-components-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' }>
                                        <li class="link">
                                            <a href="components/DocumentHintsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentHintsComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' : 'data-target="#xs-pipes-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' : 'id="xs-pipes-links-module-DocumentHintsModule-b04b1795be08b8b51b35adf9228c7727"' }>
                                        <li class="link">
                                            <a href="pipes/DocumentHintColumnOffsetPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentHintColumnOffsetPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DocumentModule.html" data-type="entity-link">DocumentModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DocumentModule-db470e1f93ab3f30e10196e0e9f34d3a"' : 'data-target="#xs-components-links-module-DocumentModule-db470e1f93ab3f30e10196e0e9f34d3a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DocumentModule-db470e1f93ab3f30e10196e0e9f34d3a"' : 'id="xs-components-links-module-DocumentModule-db470e1f93ab3f30e10196e0e9f34d3a"' }>
                                        <li class="link">
                                            <a href="components/DocumentDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/KeyValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeyValueComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DragAndDropModule.html" data-type="entity-link">DragAndDropModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' : 'data-target="#xs-directives-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' : 'id="xs-directives-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' }>
                                        <li class="link">
                                            <a href="directives/DraggableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DropTargetDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropTargetDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' : 'data-target="#xs-injectables-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' : 'id="xs-injectables-links-module-DragAndDropModule-23febab5fb959c1c0de904d4e75f0e8c"' }>
                                        <li class="link">
                                            <a href="injectables/DragService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DragService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/GuardsModule.html" data-type="entity-link">GuardsModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/InputModule.html" data-type="entity-link">InputModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-InputModule-633fe6818bb6325d8cb3835f76c722b0"' : 'data-target="#xs-components-links-module-InputModule-633fe6818bb6325d8cb3835f76c722b0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-InputModule-633fe6818bb6325d8cb3835f76c722b0"' : 'id="xs-components-links-module-InputModule-633fe6818bb6325d8cb3835f76c722b0"' }>
                                        <li class="link">
                                            <a href="components/FilterBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterBoxComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/InputBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputBoxComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LinksModule.html" data-type="entity-link">LinksModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' : 'data-target="#xs-components-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' : 'id="xs-components-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' }>
                                        <li class="link">
                                            <a href="components/LinksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinksComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinksListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinksListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinksListTableBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinksListTableBodyComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinksListTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinksListTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinksListTableHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinksListTableHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinksListTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinksListTabsComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' : 'data-target="#xs-pipes-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' : 'id="xs-pipes-links-module-LinksModule-7394730c6763331aa406f6ee77fa91ae"' }>
                                        <li class="link">
                                            <a href="pipes/LinkRowsDocumentIdsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkRowsDocumentIdsPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MapPerspectiveModule.html" data-type="entity-link">MapPerspectiveModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' : 'data-target="#xs-components-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' : 'id="xs-components-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' }>
                                        <li class="link">
                                            <a href="components/EmptyMapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyMapComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapAttributeGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapAttributeGroupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapAttributeSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapAttributeSelectComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapContentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapPanelComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapPerspectiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapPerspectiveComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapRenderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapRenderComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' : 'data-target="#xs-pipes-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' : 'id="xs-pipes-links-module-MapPerspectiveModule-f475102a4120fbec09d878e81d2931e6"' }>
                                        <li class="link">
                                            <a href="pipes/MapAttributeIdsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapAttributeIdsPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MapPerspectiveRoutingModule.html" data-type="entity-link">MapPerspectiveRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/NotificationsModule.html" data-type="entity-link">NotificationsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' : 'data-target="#xs-components-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' : 'id="xs-components-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' }>
                                        <li class="link">
                                            <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' : 'data-target="#xs-injectables-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' : 'id="xs-injectables-links-module-NotificationsModule-b4b5834c38f9992b4f5cf0115f810003"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NotificationService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PermissionsPipesModule.html" data-type="entity-link">PermissionsPipesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-PermissionsPipesModule-9c7cc808b83934154784141ec41e25b8"' : 'data-target="#xs-pipes-links-module-PermissionsPipesModule-9c7cc808b83934154784141ec41e25b8"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-PermissionsPipesModule-9c7cc808b83934154784141ec41e25b8"' : 'id="xs-pipes-links-module-PermissionsPipesModule-9c7cc808b83934154784141ec41e25b8"' }>
                                        <li class="link">
                                            <a href="pipes/CanManageConfigPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CanManageConfigPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/CollectionPermissionsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollectionPermissionsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DocumentPermissionsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentPermissionsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/LinkInstancePermissionsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkInstancePermissionsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/LinkTypePermissionsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkTypePermissionsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PermissionsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PermissionsPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PickerModule.html" data-type="entity-link">PickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' : 'data-target="#xs-components-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' : 'id="xs-components-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' }>
                                        <li class="link">
                                            <a href="components/ColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorPickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IconPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconPickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IconsPresenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconsPresenterComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' : 'data-target="#xs-pipes-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' : 'id="xs-pipes-links-module-PickerModule-f9049b8949881f2ed99aa503ea740984"' }>
                                        <li class="link">
                                            <a href="pipes/HighlightColorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HighlightColorPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IconIdPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconIdPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-PipesModule-dcc93412875d92457eeb7a613cf9ae41"' : 'data-target="#xs-pipes-links-module-PipesModule-dcc93412875d92457eeb7a613cf9ae41"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-PipesModule-dcc93412875d92457eeb7a613cf9ae41"' : 'id="xs-pipes-links-module-PipesModule-dcc93412875d92457eeb7a613cf9ae41"' }>
                                        <li class="link">
                                            <a href="pipes/CanActivatePagePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CanActivatePagePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ColorsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DefaultAttributePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultAttributePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/EmptyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/EmptyQueryPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyQueryPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/FilterPerspectivesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterPerspectivesPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/HighlightTextPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HighlightTextPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IconsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IncludesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IncludesPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/LengthGreaterThanPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LengthGreaterThanPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/LightenColorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LightenColorPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/LogPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/NativeDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NativeDatePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PageEndIndexPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageEndIndexPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PageSlicePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageSlicePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PerspectiveIconPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerspectiveIconPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PixelPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PixelPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PrefixPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrefixPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/RemoveHtmlCommentsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RemoveHtmlCommentsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ResourceRolesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceRolesPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/RoleIconPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoleIconPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/RoleTitlePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoleTitlePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/SingleCollectionQueryPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SingleCollectionQueryPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/UserRolesInResource.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserRolesInResource</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/WorkspaceSetPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkspaceSetPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PostItCollectionsModule.html" data-type="entity-link">PostItCollectionsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' : 'data-target="#xs-components-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' : 'id="xs-components-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' }>
                                        <li class="link">
                                            <a href="components/EmptyCollectionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyCollectionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItCollectionAddButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItCollectionAddButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItCollectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItCollectionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItCollectionImportButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItCollectionImportButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItCollectionNameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItCollectionNameComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItCollectionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItCollectionsComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' : 'data-target="#xs-directives-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' : 'id="xs-directives-links-module-PostItCollectionsModule-f92753fcdd59ed4fa25dd4e9a62e1a77"' }>
                                        <li class="link">
                                            <a href="directives/LayoutItemDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutItemDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PostItPerspectiveModule.html" data-type="entity-link">PostItPerspectiveModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' : 'data-target="#xs-components-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' : 'id="xs-components-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' }>
                                        <li class="link">
                                            <a href="components/EmptyPostItsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyPostItsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItAddDocumentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItAddDocumentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItDocumentCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItDocumentCellComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItDocumentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItDocumentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItDocumentHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItDocumentHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostItPerspectiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItPerspectiveComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' : 'data-target="#xs-pipes-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' : 'id="xs-pipes-links-module-PostItPerspectiveModule-ed28f834fbbe61a60810c92a419f7f38"' }>
                                        <li class="link">
                                            <a href="pipes/DocumentCollectionPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentCollectionPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PostItColumnStylePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostItColumnStylePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PostItPerspectiveRoutingModule.html" data-type="entity-link">PostItPerspectiveRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PreviewResultsModule.html" data-type="entity-link">PreviewResultsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PreviewResultsModule-e44d6a21cdca50f4c080ae08f7bbc2d1"' : 'data-target="#xs-components-links-module-PreviewResultsModule-e44d6a21cdca50f4c080ae08f7bbc2d1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PreviewResultsModule-e44d6a21cdca50f4c080ae08f7bbc2d1"' : 'id="xs-components-links-module-PreviewResultsModule-e44d6a21cdca50f4c080ae08f7bbc2d1"' }>
                                        <li class="link">
                                            <a href="components/PreviewResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviewResultsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PreviewResultsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviewResultsTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PreviewResultsTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviewResultsTabsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ResourceMenuModule.html" data-type="entity-link">ResourceMenuModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' : 'data-target="#xs-components-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' : 'id="xs-components-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' }>
                                        <li class="link">
                                            <a href="components/ResourceDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceStatusLineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceStatusLineComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' : 'data-target="#xs-pipes-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' : 'id="xs-pipes-links-module-ResourceMenuModule-5608d31fa1942b74a5566e46e4c2251b"' }>
                                        <li class="link">
                                            <a href="pipes/CanCreateResourcePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CanCreateResourcePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsOrganizationTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsOrganizationTypePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SearchBoxModule.html" data-type="entity-link">SearchBoxModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SearchBoxModule-5a0ae61bd3786d1eae307f3327f548cd"' : 'data-target="#xs-components-links-module-SearchBoxModule-5a0ae61bd3786d1eae307f3327f548cd"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SearchBoxModule-5a0ae61bd3786d1eae307f3327f548cd"' : 'id="xs-components-links-module-SearchBoxModule-5a0ae61bd3786d1eae307f3327f548cd"' }>
                                        <li class="link">
                                            <a href="components/AttributeConditionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeConditionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AttributeValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeValueComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ConditionSuggestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConditionSuggestionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/QueryItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QueryItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBoxComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchInputComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchSuggestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchSuggestionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SuggestionItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SuggestionItemComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SearchBoxPipesModule.html" data-type="entity-link">SearchBoxPipesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-SearchBoxPipesModule-92310af8dd18b4f8a133116f9f9ba01b"' : 'data-target="#xs-pipes-links-module-SearchBoxPipesModule-92310af8dd18b4f8a133116f9f9ba01b"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-SearchBoxPipesModule-92310af8dd18b4f8a133116f9f9ba01b"' : 'id="xs-pipes-links-module-SearchBoxPipesModule-92310af8dd18b4f8a133116f9f9ba01b"' }>
                                        <li class="link">
                                            <a href="pipes/ConditionFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConditionFilterPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsAttributeItemPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsAttributeItemPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsCollectionItemPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsCollectionItemPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsDeletedItemPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsDeletedItemPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/QueryItemBackgroundPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QueryItemBackgroundPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/QueryItemBorderPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QueryItemBorderPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/QueryItemTextPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QueryItemTextPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/TruncatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncatePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SearchDocumentsModule.html" data-type="entity-link">SearchDocumentsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' : 'data-target="#xs-components-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' : 'id="xs-components-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' }>
                                        <li class="link">
                                            <a href="components/EmptyDocumentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyDocumentsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchDocumentHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchDocumentHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchDocumentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchDocumentsComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' : 'data-target="#xs-pipes-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' : 'id="xs-pipes-links-module-SearchDocumentsModule-09b3b6db60ef367386ce89b3a8f07500"' }>
                                        <li class="link">
                                            <a href="pipes/IsDocumentOpenedPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsDocumentOpenedPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SearchPerspectiveModule.html" data-type="entity-link">SearchPerspectiveModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' : 'data-target="#xs-components-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' : 'id="xs-components-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' }>
                                        <li class="link">
                                            <a href="components/EmptyDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyDataComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EmptyViewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyViewsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchAllComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchAllComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchCollectionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchCollectionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchLinksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchLinksComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchPerspectiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchPerspectiveComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchViewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchViewsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ViewDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewDetailComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' : 'data-target="#xs-directives-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' : 'id="xs-directives-links-module-SearchPerspectiveModule-efe762b1938265795230def387bce1a2"' }>
                                        <li class="link">
                                            <a href="directives/SearchResultsDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchResultsDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SearchPerspectiveRoutingModule.html" data-type="entity-link">SearchPerspectiveRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SelectModule.html" data-type="entity-link">SelectModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' : 'data-target="#xs-components-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' : 'id="xs-components-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' }>
                                        <li class="link">
                                            <a href="components/SelectItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectItemComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' : 'data-target="#xs-pipes-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' : 'id="xs-pipes-links-module-SelectModule-53db5c6e7a77a59bad3a3088ac49c611"' }>
                                        <li class="link">
                                            <a href="pipes/AreIdsEqualPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AreIdsEqualPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/GetSelectItemPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GetSelectItemPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ShareViewDialogModule.html" data-type="entity-link">ShareViewDialogModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' : 'data-target="#xs-components-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' : 'id="xs-components-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' }>
                                        <li class="link">
                                            <a href="components/ShareUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareUserComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ShareViewCopyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareViewCopyComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ShareViewDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareViewDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ShareViewInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareViewInputComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' : 'data-target="#xs-pipes-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' : 'id="xs-pipes-links-module-ShareViewDialogModule-b460971d23be9c3fe96a6c2e928801c5"' }>
                                        <li class="link">
                                            <a href="pipes/UserRolesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserRolesPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ViewPermissionsChangedPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewPermissionsChangedPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' : 'data-target="#xs-components-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' : 'id="xs-components-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' }>
                                        <li class="link">
                                            <a href="components/CommentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SizeSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SizeSliderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SliderComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' : 'data-target="#xs-directives-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' : 'id="xs-directives-links-module-SharedModule-258ed32c957dd4ffd795d6a4ef3a122d"' }>
                                        <li class="link">
                                            <a href="directives/PerspectiveDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerspectiveDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RemovePlaceholderOnFocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RemovePlaceholderOnFocusDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TablePerspectiveModule.html" data-type="entity-link">TablePerspectiveModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' : 'data-target="#xs-components-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' : 'id="xs-components-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' }>
                                        <li class="link">
                                            <a href="components/TableAttributeSuggestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableAttributeSuggestionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableBodyComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableCaptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableCaptionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableCellGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableCellGroupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableCollapsedCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableCollapsedCellComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableCollapsedCellMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableCollapsedCellMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableColumnContextMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableColumnContextMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableColumnGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableColumnGroupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableDataCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableDataCellComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableDataCellMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableDataCellMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHeaderAddButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHeaderAddButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHeaderCollectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHeaderCollectionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHeaderLinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHeaderLinkComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHiddenColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHiddenColumnComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHierarchyCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHierarchyCellComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHierarchyCellMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHierarchyCellMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableHierarchyColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableHierarchyColumnComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableLinkCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableLinkCellComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableLinkInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableLinkInfoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableLinkedRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableLinkedRowComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableLinkedRowsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableLinkedRowsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TablePerspectiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TablePerspectiveComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TablePrimaryRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TablePrimaryRowComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableRowGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableRowGroupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableRowGroupFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableRowGroupFooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableRowGroupHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableRowGroupHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableRowNumbersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableRowNumbersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableRowsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableRowsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableSingleColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableSingleColumnComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' : 'data-target="#xs-directives-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' : 'id="xs-directives-links-module-TablePerspectiveModule-5a35c5e4f5862d1b06e7ad3081f37775"' }>
                                        <li class="link">
                                            <a href="directives/TableEditableCellDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableEditableCellDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TablePerspectiveRoutingModule.html" data-type="entity-link">TablePerspectiveRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/TablePipesModule.html" data-type="entity-link">TablePipesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-TablePipesModule-b5cf28259120db024c075103f8f05f11"' : 'data-target="#xs-pipes-links-module-TablePipesModule-b5cf28259120db024c075103f8f05f11"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-TablePipesModule-b5cf28259120db024c075103f8f05f11"' : 'id="xs-pipes-links-module-TablePipesModule-b5cf28259120db024c075103f8f05f11"' }>
                                        <li class="link">
                                            <a href="pipes/AffectedCellPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AffectedCellPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/AttributeExistPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeExistPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/AttributeLastNamePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeLastNamePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/AttributeNameChangedPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeNameChangedPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/AttributeNamePipe-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeNamePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/AttributeParentNamePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeParentNamePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/CollapsiblePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapsiblePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ColumnBackgroundPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColumnBackgroundPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ColumnChildCursorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColumnChildCursorPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ColumnCursorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColumnCursorPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ColumnHeightPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColumnHeightPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ColumnWidthPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColumnWidthPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/CursorEqualsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CursorEqualsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DataCellDocumentPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataCellDocumentPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DataPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DisplayablePipe-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DisplayablePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DocumentHintColumnsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentHintColumnsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/DragClassPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DragClassPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/EmbeddedPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmbeddedPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/EntityCreatedPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntityCreatedPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ExpandablePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpandablePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ExtractValuePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExtractValuePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/HeaderHeightPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderHeightPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsCompoundColumnPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsCompoundColumnPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsFirstPartPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsFirstPartPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsFirstRowPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsFirstRowPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsHiddenColumnPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsHiddenColumnPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsLastPartPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsLastPartPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/IsSingleColumnPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsSingleColumnPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/LinkedDocumentIdsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkedDocumentIdsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/MaxPartsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaxPartsPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/NextPartCursorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NextPartCursorPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/NextRowCursorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NextRowCursorPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PartCursorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartCursorPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PartPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PartWidthPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartWidthPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PreviousLinkedRowPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviousLinkedRowPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ResizeEdgesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResizeEdgesPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/ResizeValidatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResizeValidatePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/RowPositionTopPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RowPositionTopPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TagModule.html" data-type="entity-link">TagModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TagModule-6f079629073c1dceb0c9dccdafa21671"' : 'data-target="#xs-components-links-module-TagModule-6f079629073c1dceb0c9dccdafa21671"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TagModule-6f079629073c1dceb0c9dccdafa21671"' : 'id="xs-components-links-module-TagModule-6f079629073c1dceb0c9dccdafa21671"' }>
                                        <li class="link">
                                            <a href="components/TagComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TopPanelModule.html" data-type="entity-link">TopPanelModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' : 'data-target="#xs-components-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' : 'id="xs-components-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' }>
                                        <li class="link">
                                            <a href="components/ControlsToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ControlsToggleComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LumeerLogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LumeerLogoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TopPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopPanelComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TopPanelWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopPanelWrapperComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserPanelComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/WorkspacePanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkspacePanelComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' : 'data-target="#xs-pipes-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' : 'id="xs-pipes-links-module-TopPanelModule-b26acd09582c6041a434417a19da118a"' }>
                                        <li class="link">
                                            <a href="pipes/LanguageLinkPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LanguageLinkPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' : 'data-target="#xs-components-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' : 'id="xs-components-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' }>
                                        <li class="link">
                                            <a href="components/GroupsSuggestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupsSuggestionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NewUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewUserComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserGroupsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserGroupsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' : 'data-target="#xs-pipes-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' : 'id="xs-pipes-links-module-UsersModule-f4b96be5770b3163f49e98f32a3f9294"' }>
                                        <li class="link">
                                            <a href="pipes/UserFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserFilterPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ViewModule.html" data-type="entity-link">ViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' : 'data-target="#xs-components-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' : 'id="xs-components-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' }>
                                        <li class="link">
                                            <a href="components/ViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ViewControlsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewControlsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ViewLoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewLoadingComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' : 'data-target="#xs-pipes-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' : 'id="xs-pipes-links-module-ViewModule-1e542fc96ce1e6edcbac373025950760"' }>
                                        <li class="link">
                                            <a href="pipes/ViewControlsInfoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewControlsInfoPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ViewRoutingModule.html" data-type="entity-link">ViewRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/WarningMessageModule.html" data-type="entity-link">WarningMessageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-WarningMessageModule-c429ad84b3adcdbe300fa49486839337"' : 'data-target="#xs-components-links-module-WarningMessageModule-c429ad84b3adcdbe300fa49486839337"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-WarningMessageModule-c429ad84b3adcdbe300fa49486839337"' : 'id="xs-components-links-module-WarningMessageModule-c429ad84b3adcdbe300fa49486839337"' }>
                                        <li class="link">
                                            <a href="components/EmptyRecordsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyRecordsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EmptySearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptySearchComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EmptyStateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyStateComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/InvalidQueryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvalidQueryComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WorkspaceModule.html" data-type="entity-link">WorkspaceModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' : 'data-target="#xs-components-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' : 'id="xs-components-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' }>
                                        <li class="link">
                                            <a href="components/ContactFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactFormComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrganizationDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrganizationDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrganizationGroupsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrganizationGroupsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrganizationRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrganizationRegistrationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrganizationSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrganizationSettingsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrganizationUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrganizationUsersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentsListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentsOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentsOrderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentsPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentsPanelComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentsStateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentsStateComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProjectSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectSettingsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProjectUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectUsersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceChooserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceChooserComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourcePostItComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourcePostItComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/WorkspaceChooserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkspaceChooserComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' : 'data-target="#xs-injectables-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' : 'id="xs-injectables-links-module-WorkspaceModule-d533c0339bfbe81941f723305ad489e4"' }>
                                        <li class="link">
                                            <a href="injectables/WorkspaceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>WorkspaceService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WorkspaceRoutingModule.html" data-type="entity-link">WorkspaceRoutingModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AddChart.html" data-type="entity-link">AddChart</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddCollectionToQuery.html" data-type="entity-link">AddCollectionToQuery</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddColumn.html" data-type="entity-link">AddColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddFavorite.html" data-type="entity-link">AddFavorite</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddFavorite-1.html" data-type="entity-link">AddFavorite</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddFavoriteFailure.html" data-type="entity-link">AddFavoriteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddFavoriteFailure-1.html" data-type="entity-link">AddFavoriteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddFavoriteSuccess.html" data-type="entity-link">AddFavoriteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddFavoriteSuccess-1.html" data-type="entity-link">AddFavoriteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddLinkToQuery.html" data-type="entity-link">AddLinkToQuery</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddLinkedRows.html" data-type="entity-link">AddLinkedRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddName.html" data-type="entity-link">AddName</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddPart.html" data-type="entity-link">AddPart</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddPrimaryRows.html" data-type="entity-link">AddPrimaryRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddTable.html" data-type="entity-link">AddTable</a>
                    </li>
                    <li class="link">
                        <a href="classes/AttributeHelper.html" data-type="entity-link">AttributeHelper</a>
                    </li>
                    <li class="link">
                        <a href="classes/AttributeQueryItem.html" data-type="entity-link">AttributeQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/AxisDraggablePlotMaker.html" data-type="entity-link">AxisDraggablePlotMaker</a>
                    </li>
                    <li class="link">
                        <a href="classes/Back.html" data-type="entity-link">Back</a>
                    </li>
                    <li class="link">
                        <a href="classes/BarPlotMaker.html" data-type="entity-link">BarPlotMaker</a>
                    </li>
                    <li class="link">
                        <a href="classes/Buffer.html" data-type="entity-link">Buffer</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeAttribute.html" data-type="entity-link">ChangeAttribute</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeAttributeFailure.html" data-type="entity-link">ChangeAttributeFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeAttributeSuccess.html" data-type="entity-link">ChangeAttributeSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeConfig.html" data-type="entity-link">ChangeConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeOrder.html" data-type="entity-link">ChangeOrder</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermission.html" data-type="entity-link">ChangePermission</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermission-1.html" data-type="entity-link">ChangePermission</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermission-2.html" data-type="entity-link">ChangePermission</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermissionFailure.html" data-type="entity-link">ChangePermissionFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermissionFailure-1.html" data-type="entity-link">ChangePermissionFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermissionFailure-2.html" data-type="entity-link">ChangePermissionFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermissionSuccess.html" data-type="entity-link">ChangePermissionSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermissionSuccess-1.html" data-type="entity-link">ChangePermissionSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangePermissionSuccess-2.html" data-type="entity-link">ChangePermissionSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeSearchConfig.html" data-type="entity-link">ChangeSearchConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeSize.html" data-type="entity-link">ChangeSize</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChartVisualizer.html" data-type="entity-link">ChartVisualizer</a>
                    </li>
                    <li class="link">
                        <a href="classes/CleanRows.html" data-type="entity-link">CleanRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-1.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-2.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-3.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-4.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-5.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-6.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-7.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-8.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/Clear-9.html" data-type="entity-link">Clear</a>
                    </li>
                    <li class="link">
                        <a href="classes/ClearByCollection.html" data-type="entity-link">ClearByCollection</a>
                    </li>
                    <li class="link">
                        <a href="classes/ClearWorkspaceData.html" data-type="entity-link">ClearWorkspaceData</a>
                    </li>
                    <li class="link">
                        <a href="classes/CollectionConverter.html" data-type="entity-link">CollectionConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/CollectionQueryItem.html" data-type="entity-link">CollectionQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/ColumnLayout.html" data-type="entity-link">ColumnLayout</a>
                    </li>
                    <li class="link">
                        <a href="classes/Confirm.html" data-type="entity-link">Confirm</a>
                    </li>
                    <li class="link">
                        <a href="classes/ContactConverter.html" data-type="entity-link">ContactConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/CorrelationIdGenerator.html" data-type="entity-link">CorrelationIdGenerator</a>
                    </li>
                    <li class="link">
                        <a href="classes/CountriesData.html" data-type="entity-link">CountriesData</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-1.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-2.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-3.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-4.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-5.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-6.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-7.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/Create-8.html" data-type="entity-link">Create</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateAttributes.html" data-type="entity-link">CreateAttributes</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateAttributesFailure.html" data-type="entity-link">CreateAttributesFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateAttributesSuccess.html" data-type="entity-link">CreateAttributesSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-1.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-2.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-3.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-4.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-5.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-6.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-7.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateFailure-8.html" data-type="entity-link">CreateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateMap.html" data-type="entity-link">CreateMap</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreatePart.html" data-type="entity-link">CreatePart</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreatePayment.html" data-type="entity-link">CreatePayment</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreatePaymentFailure.html" data-type="entity-link">CreatePaymentFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreatePaymentSuccess.html" data-type="entity-link">CreatePaymentSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-1.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-2.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-3.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-4.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-5.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-6.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-7.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateSuccess-8.html" data-type="entity-link">CreateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateTable.html" data-type="entity-link">CreateTable</a>
                    </li>
                    <li class="link">
                        <a href="classes/DefaultWorkspaceConverter.html" data-type="entity-link">DefaultWorkspaceConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-1.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-2.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-3.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-4.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-5.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-6.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-7.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/Delete-8.html" data-type="entity-link">Delete</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteConfirm.html" data-type="entity-link">DeleteConfirm</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteConfirm-1.html" data-type="entity-link">DeleteConfirm</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-1.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-2.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-3.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-4.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-5.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-6.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-7.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteFailure-8.html" data-type="entity-link">DeleteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteName.html" data-type="entity-link">DeleteName</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-1.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-2.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-3.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-4.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-5.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-6.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-7.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteSuccess-8.html" data-type="entity-link">DeleteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeletedQueryItem.html" data-type="entity-link">DeletedQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/DestroyMap.html" data-type="entity-link">DestroyMap</a>
                    </li>
                    <li class="link">
                        <a href="classes/DestroyTable.html" data-type="entity-link">DestroyTable</a>
                    </li>
                    <li class="link">
                        <a href="classes/DocumentQueryItem.html" data-type="entity-link">DocumentQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/DocumentUi.html" data-type="entity-link">DocumentUi</a>
                    </li>
                    <li class="link">
                        <a href="classes/DraggablePlotMaker.html" data-type="entity-link">DraggablePlotMaker</a>
                    </li>
                    <li class="link">
                        <a href="classes/EditSelectedCell.html" data-type="entity-link">EditSelectedCell</a>
                    </li>
                    <li class="link">
                        <a href="classes/Error.html" data-type="entity-link">Error</a>
                    </li>
                    <li class="link">
                        <a href="classes/ExecuteCallback.html" data-type="entity-link">ExecuteCallback</a>
                    </li>
                    <li class="link">
                        <a href="classes/Forward.html" data-type="entity-link">Forward</a>
                    </li>
                    <li class="link">
                        <a href="classes/FulltextQueryItem.html" data-type="entity-link">FulltextQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-1.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-2.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-3.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-4.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-5.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-6.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-7.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/Get-8.html" data-type="entity-link">Get</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetAll.html" data-type="entity-link">GetAll</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetAllFailure.html" data-type="entity-link">GetAllFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetAllSuccess.html" data-type="entity-link">GetAllSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetByCode.html" data-type="entity-link">GetByCode</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCodes.html" data-type="entity-link">GetCodes</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCodes-1.html" data-type="entity-link">GetCodes</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCodesFailure.html" data-type="entity-link">GetCodesFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCodesFailure-1.html" data-type="entity-link">GetCodesFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCodesSuccess.html" data-type="entity-link">GetCodesSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCodesSuccess-1.html" data-type="entity-link">GetCodesSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetContact.html" data-type="entity-link">GetContact</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetContactFailure.html" data-type="entity-link">GetContactFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetContactSuccess.html" data-type="entity-link">GetContactSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCurrentUser.html" data-type="entity-link">GetCurrentUser</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetCurrentUserSuccess.html" data-type="entity-link">GetCurrentUserSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-1.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-2.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-3.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-4.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-5.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-6.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-7.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetFailure-8.html" data-type="entity-link">GetFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetNames.html" data-type="entity-link">GetNames</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetNamesFailure.html" data-type="entity-link">GetNamesFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetNamesSuccess.html" data-type="entity-link">GetNamesSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetOneSuccess.html" data-type="entity-link">GetOneSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetOneSuccess-1.html" data-type="entity-link">GetOneSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetPayment.html" data-type="entity-link">GetPayment</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetPaymentFailure.html" data-type="entity-link">GetPaymentFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetPaymentSuccess.html" data-type="entity-link">GetPaymentSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetPayments.html" data-type="entity-link">GetPayments</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetPaymentsFailure.html" data-type="entity-link">GetPaymentsFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetPaymentsSuccess.html" data-type="entity-link">GetPaymentsSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetServiceLimits.html" data-type="entity-link">GetServiceLimits</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetServiceLimitsFailure.html" data-type="entity-link">GetServiceLimitsFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetServiceLimitsSuccess.html" data-type="entity-link">GetServiceLimitsSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-1.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-2.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-3.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-4.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-5.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-6.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-7.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/GetSuccess-8.html" data-type="entity-link">GetSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/Go.html" data-type="entity-link">Go</a>
                    </li>
                    <li class="link">
                        <a href="classes/GridLayout.html" data-type="entity-link">GridLayout</a>
                    </li>
                    <li class="link">
                        <a href="classes/GroupConverter.html" data-type="entity-link">GroupConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/GroupFilters.html" data-type="entity-link">GroupFilters</a>
                    </li>
                    <li class="link">
                        <a href="classes/HashCodeGenerator.html" data-type="entity-link">HashCodeGenerator</a>
                    </li>
                    <li class="link">
                        <a href="classes/HideColumn.html" data-type="entity-link">HideColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/HtmlModifier.html" data-type="entity-link">HtmlModifier</a>
                    </li>
                    <li class="link">
                        <a href="classes/Import.html" data-type="entity-link">Import</a>
                    </li>
                    <li class="link">
                        <a href="classes/ImportFailure.html" data-type="entity-link">ImportFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/ImportSuccess.html" data-type="entity-link">ImportSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/IndentRow.html" data-type="entity-link">IndentRow</a>
                    </li>
                    <li class="link">
                        <a href="classes/Info.html" data-type="entity-link">Info</a>
                    </li>
                    <li class="link">
                        <a href="classes/InitColumn.html" data-type="entity-link">InitColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/InitRows.html" data-type="entity-link">InitRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinePlotMaker.html" data-type="entity-link">LinePlotMaker</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkHelper.html" data-type="entity-link">LinkHelper</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkInstanceConverter.html" data-type="entity-link">LinkInstanceConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkQueryItem.html" data-type="entity-link">LinkQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkTypeConverter.html" data-type="entity-link">LinkTypeConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkTypeHelper.html" data-type="entity-link">LinkTypeHelper</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkedAttribute.html" data-type="entity-link">LinkedAttribute</a>
                    </li>
                    <li class="link">
                        <a href="classes/LocalStorage.html" data-type="entity-link">LocalStorage</a>
                    </li>
                    <li class="link">
                        <a href="classes/LumeerRouterStateSerializer.html" data-type="entity-link">LumeerRouterStateSerializer</a>
                    </li>
                    <li class="link">
                        <a href="classes/MoveColumn.html" data-type="entity-link">MoveColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/MoveCursor.html" data-type="entity-link">MoveCursor</a>
                    </li>
                    <li class="link">
                        <a href="classes/MoveRowDown.html" data-type="entity-link">MoveRowDown</a>
                    </li>
                    <li class="link">
                        <a href="classes/MoveRowUp.html" data-type="entity-link">MoveRowUp</a>
                    </li>
                    <li class="link">
                        <a href="classes/NavigateToPreviousUrl.html" data-type="entity-link">NavigateToPreviousUrl</a>
                    </li>
                    <li class="link">
                        <a href="classes/OrderPrimaryRows.html" data-type="entity-link">OrderPrimaryRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/OrganizationConverter.html" data-type="entity-link">OrganizationConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/OutdentRow.html" data-type="entity-link">OutdentRow</a>
                    </li>
                    <li class="link">
                        <a href="classes/Patch.html" data-type="entity-link">Patch</a>
                    </li>
                    <li class="link">
                        <a href="classes/PatchCurrentUser.html" data-type="entity-link">PatchCurrentUser</a>
                    </li>
                    <li class="link">
                        <a href="classes/PatchData.html" data-type="entity-link">PatchData</a>
                    </li>
                    <li class="link">
                        <a href="classes/PatchMetaData.html" data-type="entity-link">PatchMetaData</a>
                    </li>
                    <li class="link">
                        <a href="classes/PaymentConverter.html" data-type="entity-link">PaymentConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/PermissionsConverter.html" data-type="entity-link">PermissionsConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/PermissionsHelper.html" data-type="entity-link">PermissionsHelper</a>
                    </li>
                    <li class="link">
                        <a href="classes/PiePlotMaker.html" data-type="entity-link">PiePlotMaker</a>
                    </li>
                    <li class="link">
                        <a href="classes/PlotMaker.html" data-type="entity-link">PlotMaker</a>
                    </li>
                    <li class="link">
                        <a href="classes/PostItDocumentModel.html" data-type="entity-link">PostItDocumentModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/PostItLayout.html" data-type="entity-link">PostItLayout</a>
                    </li>
                    <li class="link">
                        <a href="classes/PostItLayoutConfig.html" data-type="entity-link">PostItLayoutConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/ProjectConverter.html" data-type="entity-link">ProjectConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/QueryConverter.html" data-type="entity-link">QueryConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/QueryItemsConverter.html" data-type="entity-link">QueryItemsConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveAttribute.html" data-type="entity-link">RemoveAttribute</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveAttributeFailure.html" data-type="entity-link">RemoveAttributeFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveAttributeSuccess.html" data-type="entity-link">RemoveAttributeSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveChart.html" data-type="entity-link">RemoveChart</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveCollectionFromQuery.html" data-type="entity-link">RemoveCollectionFromQuery</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveColumn.html" data-type="entity-link">RemoveColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveEmptyColumns.html" data-type="entity-link">RemoveEmptyColumns</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveFavorite.html" data-type="entity-link">RemoveFavorite</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveFavorite-1.html" data-type="entity-link">RemoveFavorite</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveFavoriteFailure.html" data-type="entity-link">RemoveFavoriteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveFavoriteFailure-1.html" data-type="entity-link">RemoveFavoriteFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveFavoriteSuccess.html" data-type="entity-link">RemoveFavoriteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveFavoriteSuccess-1.html" data-type="entity-link">RemoveFavoriteSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemovePart.html" data-type="entity-link">RemovePart</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveRow.html" data-type="entity-link">RemoveRow</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveSelectedCell.html" data-type="entity-link">RemoveSelectedCell</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveTable.html" data-type="entity-link">RemoveTable</a>
                    </li>
                    <li class="link">
                        <a href="classes/RemoveViewFromUrl.html" data-type="entity-link">RemoveViewFromUrl</a>
                    </li>
                    <li class="link">
                        <a href="classes/ReplaceColumns.html" data-type="entity-link">ReplaceColumns</a>
                    </li>
                    <li class="link">
                        <a href="classes/ReplaceRows.html" data-type="entity-link">ReplaceRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/ResizeColumn.html" data-type="entity-link">ResizeColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/RouteFinder.html" data-type="entity-link">RouteFinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/SaveDefaultWorkspace.html" data-type="entity-link">SaveDefaultWorkspace</a>
                    </li>
                    <li class="link">
                        <a href="classes/SaveDefaultWorkspaceFailure.html" data-type="entity-link">SaveDefaultWorkspaceFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/SaveDefaultWorkspaceSuccess.html" data-type="entity-link">SaveDefaultWorkspaceSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/Select.html" data-type="entity-link">Select</a>
                    </li>
                    <li class="link">
                        <a href="classes/Select-1.html" data-type="entity-link">Select</a>
                    </li>
                    <li class="link">
                        <a href="classes/SelectAttribute.html" data-type="entity-link">SelectAttribute</a>
                    </li>
                    <li class="link">
                        <a href="classes/SelectionHelper.html" data-type="entity-link">SelectionHelper</a>
                    </li>
                    <li class="link">
                        <a href="classes/ServiceLimitsConverter.html" data-type="entity-link">ServiceLimitsConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetConfig.html" data-type="entity-link">SetConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetContact.html" data-type="entity-link">SetContact</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetContactFailure.html" data-type="entity-link">SetContactFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetContactSuccess.html" data-type="entity-link">SetContactSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetCursor.html" data-type="entity-link">SetCursor</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetCursor-1.html" data-type="entity-link">SetCursor</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetDefaultAttribute.html" data-type="entity-link">SetDefaultAttribute</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetDefaultAttributeFailure.html" data-type="entity-link">SetDefaultAttributeFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetDefaultAttributeSuccess.html" data-type="entity-link">SetDefaultAttributeSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetEditedAttribute.html" data-type="entity-link">SetEditedAttribute</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetPending.html" data-type="entity-link">SetPending</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetPermissions.html" data-type="entity-link">SetPermissions</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetPermissionsFailure.html" data-type="entity-link">SetPermissionsFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetPermissionsSuccess.html" data-type="entity-link">SetPermissionsSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetQuery.html" data-type="entity-link">SetQuery</a>
                    </li>
                    <li class="link">
                        <a href="classes/ShowColumns.html" data-type="entity-link">ShowColumns</a>
                    </li>
                    <li class="link">
                        <a href="classes/SplitColumn.html" data-type="entity-link">SplitColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/Success.html" data-type="entity-link">Success</a>
                    </li>
                    <li class="link">
                        <a href="classes/SuggestionsConverter.html" data-type="entity-link">SuggestionsConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/SwitchParts.html" data-type="entity-link">SwitchParts</a>
                    </li>
                    <li class="link">
                        <a href="classes/SwitchWorkspace.html" data-type="entity-link">SwitchWorkspace</a>
                    </li>
                    <li class="link">
                        <a href="classes/SyncLinkedRows.html" data-type="entity-link">SyncLinkedRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/SyncPrimaryRows.html" data-type="entity-link">SyncPrimaryRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/TableCompoundColumn.html" data-type="entity-link">TableCompoundColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/TableHiddenColumn.html" data-type="entity-link">TableHiddenColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/TableSingleColumn.html" data-type="entity-link">TableSingleColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/ToggleChildRows.html" data-type="entity-link">ToggleChildRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/ToggleLinkedRows.html" data-type="entity-link">ToggleLinkedRows</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update-1.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update-2.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update-3.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update-4.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update-5.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update-6.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/Update-7.html" data-type="entity-link">Update</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateData.html" data-type="entity-link">UpdateData</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-1.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-2.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-3.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-4.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-5.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-6.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-7.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateFailure-8.html" data-type="entity-link">UpdateFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateMetaData.html" data-type="entity-link">UpdateMetaData</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-1.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-2.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-3.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-4.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-5.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-6.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-7.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateSuccess-8.html" data-type="entity-link">UpdateSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UserConverter.html" data-type="entity-link">UserConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/Validator.html" data-type="entity-link">Validator</a>
                    </li>
                    <li class="link">
                        <a href="classes/ViewConverter.html" data-type="entity-link">ViewConverter</a>
                    </li>
                    <li class="link">
                        <a href="classes/ViewQueryItem.html" data-type="entity-link">ViewQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/Warning.html" data-type="entity-link">Warning</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ClipboardService.html" data-type="entity-link">ClipboardService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CollectionsEffects.html" data-type="entity-link">CollectionsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CommonEffects.html" data-type="entity-link">CommonEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ContactsEffects.html" data-type="entity-link">ContactsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DocumentUiService.html" data-type="entity-link">DocumentUiService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DocumentsEffects.html" data-type="entity-link">DocumentsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/GeocodingApiService.html" data-type="entity-link">GeocodingApiService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/GroupsEffects.html" data-type="entity-link">GroupsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LinkInstancesEffects.html" data-type="entity-link">LinkInstancesEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LinkTypesEffects.html" data-type="entity-link">LinkTypesEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MapQuestGeocodingApiService.html" data-type="entity-link">MapQuestGeocodingApiService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MapQuestWrapperService.html" data-type="entity-link">MapQuestWrapperService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NavigationEffects.html" data-type="entity-link">NavigationEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NotificationsEffects.html" data-type="entity-link">NotificationsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/OrganizationsEffects.html" data-type="entity-link">OrganizationsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PaymentsEffects.html" data-type="entity-link">PaymentsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PermissionService.html" data-type="entity-link">PermissionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PerspectiveService.html" data-type="entity-link">PerspectiveService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProjectsEffects.html" data-type="entity-link">ProjectsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RavenErrorHandler.html" data-type="entity-link">RavenErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RouterEffects.html" data-type="entity-link">RouterEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ServiceLimitsEffects.html" data-type="entity-link">ServiceLimitsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TablesEffects.html" data-type="entity-link">TablesEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserSettingsService.html" data-type="entity-link">UserSettingsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UsersEffects.html" data-type="entity-link">UsersEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ViewsEffects.html" data-type="entity-link">ViewsEffects</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/AuthHttpInterceptor.html" data-type="entity-link">AuthHttpInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/RavenHttpInterceptor.html" data-type="entity-link">RavenHttpInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/SessionHttpInterceptor.html" data-type="entity-link">SessionHttpInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/ViewHttpInterceptor.html" data-type="entity-link">ViewHttpInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
                <li class="link">
                    <a href="guards/CollectionSettingsGuard.html" data-type="entity-link">CollectionSettingsGuard</a>
                </li>
                <li class="link">
                    <a href="guards/CollectionsGuard.html" data-type="entity-link">CollectionsGuard</a>
                </li>
                <li class="link">
                    <a href="guards/CurrentUserGuard.html" data-type="entity-link">CurrentUserGuard</a>
                </li>
                <li class="link">
                    <a href="guards/DocumentsGuard.html" data-type="entity-link">DocumentsGuard</a>
                </li>
                <li class="link">
                    <a href="guards/LinkTypesGuard.html" data-type="entity-link">LinkTypesGuard</a>
                </li>
                <li class="link">
                    <a href="guards/OrganizationSettingsGuard.html" data-type="entity-link">OrganizationSettingsGuard</a>
                </li>
                <li class="link">
                    <a href="guards/PageNotFoundGuard.html" data-type="entity-link">PageNotFoundGuard</a>
                </li>
                <li class="link">
                    <a href="guards/ProjectSettingsGuard.html" data-type="entity-link">ProjectSettingsGuard</a>
                </li>
                <li class="link">
                    <a href="guards/ViewConfigCleanUpGuard.html" data-type="entity-link">ViewConfigCleanUpGuard</a>
                </li>
                <li class="link">
                    <a href="guards/ViewRedirectGuard.html" data-type="entity-link">ViewRedirectGuard</a>
                </li>
                <li class="link">
                    <a href="guards/ViewsGuard.html" data-type="entity-link">ViewsGuard</a>
                </li>
                <li class="link">
                    <a href="guards/WorkspaceGuard.html" data-type="entity-link">WorkspaceGuard</a>
                </li>
                <li class="link">
                    <a href="guards/WorkspaceSelectGuard.html" data-type="entity-link">WorkspaceSelectGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/AddressCoordinatesMap.html" data-type="entity-link">AddressCoordinatesMap</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AllowedPermissions.html" data-type="entity-link">AllowedPermissions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Attribute.html" data-type="entity-link">Attribute</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AttributeFilter.html" data-type="entity-link">AttributeFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AttributeModel.html" data-type="entity-link">AttributeModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AttributePropertySelection.html" data-type="entity-link">AttributePropertySelection</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ChartAxisModel.html" data-type="entity-link">ChartAxisModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ChartConfig.html" data-type="entity-link">ChartConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ChartModel.html" data-type="entity-link">ChartModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ChartsState.html" data-type="entity-link">ChartsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Collection.html" data-type="entity-link">Collection</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CollectionModel.html" data-type="entity-link">CollectionModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CollectionsState.html" data-type="entity-link">CollectionsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Constraints.html" data-type="entity-link">Constraints</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Contact.html" data-type="entity-link">Contact</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactModel.html" data-type="entity-link">ContactModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactsState.html" data-type="entity-link">ContactsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataChange.html" data-type="entity-link">DataChange</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DefaultWorkspace.html" data-type="entity-link">DefaultWorkspace</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DefaultWorkspaceModel.html" data-type="entity-link">DefaultWorkspaceModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DetailConfigModel.html" data-type="entity-link">DetailConfigModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocumentDto.html" data-type="entity-link">DocumentDto</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocumentHintColumn.html" data-type="entity-link">DocumentHintColumn</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocumentMetaData.html" data-type="entity-link">DocumentMetaData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocumentModel.html" data-type="entity-link">DocumentModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocumentsState.html" data-type="entity-link">DocumentsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DraggableOptions.html" data-type="entity-link">DraggableOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EditedAttribute.html" data-type="entity-link">EditedAttribute</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Environment.html" data-type="entity-link">Environment</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EnvironmentVariables.html" data-type="entity-link">EnvironmentVariables</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Event.html" data-type="entity-link">Event</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventCallback.html" data-type="entity-link">EventCallback</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventParameter.html" data-type="entity-link">EventParameter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FeedbackDto.html" data-type="entity-link">FeedbackDto</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Group.html" data-type="entity-link">Group</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GroupModel.html" data-type="entity-link">GroupModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GroupsState.html" data-type="entity-link">GroupsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ImportedCollection.html" data-type="entity-link">ImportedCollection</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Language.html" data-type="entity-link">Language</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkInstance.html" data-type="entity-link">LinkInstance</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkInstanceModel.html" data-type="entity-link">LinkInstanceModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkInstancesState.html" data-type="entity-link">LinkInstancesState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkRowModel.html" data-type="entity-link">LinkRowModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkType.html" data-type="entity-link">LinkType</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkTypeAttributeModel.html" data-type="entity-link">LinkTypeAttributeModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkTypeModel.html" data-type="entity-link">LinkTypeModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkTypesState.html" data-type="entity-link">LinkTypesState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LinkedAttribute.html" data-type="entity-link">LinkedAttribute</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapConfig.html" data-type="entity-link">MapConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapMarkerProperties.html" data-type="entity-link">MapMarkerProperties</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapModel.html" data-type="entity-link">MapModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapQuestCopyright.html" data-type="entity-link">MapQuestCopyright</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapQuestInfo.html" data-type="entity-link">MapQuestInfo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapQuestLatLng.html" data-type="entity-link">MapQuestLatLng</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapQuestOptions.html" data-type="entity-link">MapQuestOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapQuestProvidedLocation.html" data-type="entity-link">MapQuestProvidedLocation</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapQuestResponse.html" data-type="entity-link">MapQuestResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapQuestResult.html" data-type="entity-link">MapQuestResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MapsState.html" data-type="entity-link">MapsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MovePosition.html" data-type="entity-link">MovePosition</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MovePosition-1.html" data-type="entity-link">MovePosition</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NavigationState.html" data-type="entity-link">NavigationState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Organization.html" data-type="entity-link">Organization</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OrganizationModel.html" data-type="entity-link">OrganizationModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OrganizationsState.html" data-type="entity-link">OrganizationsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Payment.html" data-type="entity-link">Payment</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PaymentModel.html" data-type="entity-link">PaymentModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PaymentsState.html" data-type="entity-link">PaymentsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Permission.html" data-type="entity-link">Permission</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PermissionModel.html" data-type="entity-link">PermissionModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Permissions.html" data-type="entity-link">Permissions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PermissionsModel.html" data-type="entity-link">PermissionsModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PerspectiveComponent.html" data-type="entity-link">PerspectiveComponent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PointData.html" data-type="entity-link">PointData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PostItConfigModel.html" data-type="entity-link">PostItConfigModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PostItRow.html" data-type="entity-link">PostItRow</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PostItState.html" data-type="entity-link">PostItState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Project.html" data-type="entity-link">Project</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ProjectModel.html" data-type="entity-link">ProjectModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ProjectsState.html" data-type="entity-link">ProjectsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Query.html" data-type="entity-link">Query</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/QueryData.html" data-type="entity-link">QueryData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/QueryItem.html" data-type="entity-link">QueryItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/QueryModel.html" data-type="entity-link">QueryModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Resource.html" data-type="entity-link">Resource</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ResourceModel.html" data-type="entity-link">ResourceModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RouterStateUrl.html" data-type="entity-link">RouterStateUrl</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SearchConfigModel.html" data-type="entity-link">SearchConfigModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SelectItemModel.html" data-type="entity-link">SelectItemModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ServiceLimits.html" data-type="entity-link">ServiceLimits</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ServiceLimitsModel.html" data-type="entity-link">ServiceLimitsModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ServiceLimitsState.html" data-type="entity-link">ServiceLimitsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SmartDocTemplateDto.html" data-type="entity-link">SmartDocTemplateDto</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SmartDocTemplatePartDto.html" data-type="entity-link">SmartDocTemplatePartDto</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Suggestions.html" data-type="entity-link">Suggestions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableBodyCursor.html" data-type="entity-link">TableBodyCursor</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableConfig.html" data-type="entity-link">TableConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableConfigColumn.html" data-type="entity-link">TableConfigColumn</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableConfigPart.html" data-type="entity-link">TableConfigPart</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableConfigRow.html" data-type="entity-link">TableConfigRow</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableCursorAction.html" data-type="entity-link">TableCursorAction</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableHeaderCursor.html" data-type="entity-link">TableHeaderCursor</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableModel.html" data-type="entity-link">TableModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TablePart.html" data-type="entity-link">TablePart</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TablesState.html" data-type="entity-link">TablesState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UiRow.html" data-type="entity-link">UiRow</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UserDto.html" data-type="entity-link">UserDto</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UserModel.html" data-type="entity-link">UserModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UserSettings.html" data-type="entity-link">UserSettings</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UsersState.html" data-type="entity-link">UsersState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ValueChange.html" data-type="entity-link">ValueChange</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/View.html" data-type="entity-link">View</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ViewConfigModel.html" data-type="entity-link">ViewConfigModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ViewCursor.html" data-type="entity-link">ViewCursor</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ViewModel.html" data-type="entity-link">ViewModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ViewsState.html" data-type="entity-link">ViewsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Workspace.html" data-type="entity-link">Workspace</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
