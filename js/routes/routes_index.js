var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","pathMatch":"full","canActivate":["AuthGuard","AppRedirectGuard"],"component":"HomeComponent"},{"path":"**","canActivate":["AuthGuard","PageNotFoundGuard"],"component":"HomeComponent"}],"kind":"module"},{"name":"collectionRoutes","filename":"src/app/collection/collection-routing.module.ts","module":"CollectionRoutingModule","children":[{"path":"w/:organizationCode/:projectCode/f/:collectionId","canActivate":["AuthGuard","WorkspaceGuard","CollectionSettingsGuard"],"component":"CollectionSettingsComponent","children":[{"path":"attributes","component":"CollectionAttributesComponent"},{"path":"linktypes","component":"CollectionLinkTypesComponent"},{"path":"events","component":"CollectionEventsComponent"},{"path":"users","component":"CollectionUsersComponent"},{"path":"","redirectTo":"attributes","pathMatch":"full"}]}],"kind":"module"},{"name":"routes","filename":"src/app/dialog/dialog-routing.module.ts","module":"DialogRoutingModule","children":[{"path":"create-collection","component":"CreateCollectionDialogComponent","outlet":"dialog"},{"path":"create-collection","component":"CreateCollectionDialogComponent","outlet":"dialog"},{"path":"create-link","component":"CreateLinkDialogComponent","outlet":"dialog"},{"path":"overwrite-view","component":"OverwriteViewDialogComponent","outlet":"dialog"},{"path":"share-view","component":"ShareViewDialogComponent","outlet":"dialog"}],"kind":"module"},{"name":"documentRoutes","filename":"src/app/documents/documents-routing.module.ts","module":"DocumentRoutingModule","children":[{"path":"w/:organizationCode/:projectCode/f/:collectionId/records","canActivate":["AuthGuard","WorkspaceGuard"],"component":"DocumentsComponent"}],"kind":"module"},{"name":"viewRoutes","filename":"src/app/view/view-routing.module.ts","module":"ViewRoutingModule","children":[{"path":"w/:organizationCode/:projectCode/view","canActivate":["AuthGuard","WorkspaceGuard","CollectionsGuard","LinkTypesGuard","ViewsLoadedGuard","ViewExistGuard"],"component":"ViewComponent","children":[{"path":"detail","loadChildren":"./perspectives/detail/detail-perspective.module#DetailPerspectiveModule","children":[{"kind":"module","children":[{"name":"chartRoutes","filename":"src/app/view/perspectives/detail/detail-perspective-routing.module.ts","module":"DetailPerspectiveRoutingModule","children":[{"path":"","component":"DetailPerspectiveComponent"}],"kind":"module"}],"module":"DetailPerspectiveModule"}]},{"path":"postit","component":"PostItPerspectiveComponent"},{"path":"chart","loadChildren":"./perspectives/chart/chart-perspective.module#ChartPerspectiveModule","children":[{"kind":"module","children":[{"name":"chartRoutes","filename":"src/app/view/perspectives/chart/chart-perspective-routing.module.ts","module":"ChartPerspectiveRoutingModule","children":[{"path":"","component":"ChartPerspectiveComponent"}],"kind":"module"}],"module":"ChartPerspectiveModule"}]},{"path":"search","loadChildren":"./perspectives/search/search-perspective.module#SearchPerspectiveModule","children":[{"kind":"module","children":[{"name":"searchRoutes","filename":"src/app/view/perspectives/search/search-perspective-routing.module.ts","module":"SearchPerspectiveRoutingModule","children":[{"path":"","component":"SearchPerspectiveComponent","children":[{"path":"all","component":"SearchAllComponent"},{"path":"files","component":"SearchCollectionsComponent"},{"path":"records","component":"SearchDocumentsComponent"},{"path":"views","component":"SearchViewsComponent"},{"path":"","pathMatch":"full","redirectTo":"all"}]}],"kind":"module"}],"module":"SearchPerspectiveModule"}]},{"path":"table-old","component":"TablePerspectiveComponent"},{"path":"table","loadChildren":"./perspectives/table2/table2-perspective.module#Table2PerspectiveModule","children":[{"kind":"module","children":[{"name":"tableRoutes","filename":"src/app/view/perspectives/table2/table-perspective-routing.module.ts","module":"TablePerspectiveRoutingModule","children":[{"path":"","component":"Table2PerspectiveComponent"}],"kind":"module"}],"module":"Table2PerspectiveModule"}]},{"path":"smartdoc","loadChildren":"./perspectives/smartdoc/smartdoc-perspective.module#SmartDocPerspectiveModule","children":[{"kind":"module","children":[{"name":"smartDocRoutes","filename":"src/app/view/perspectives/smartdoc/smartdoc-perspective-routing.module.ts","module":"SmartDocPerspectiveRoutingModule","children":[{"path":"","component":"SmartDocPerspectiveComponent"}],"kind":"module"}],"module":"SmartDocPerspectiveModule"}]},{"path":"","pathMatch":"full","canActivate":["ViewRedirectGuard"],"component":"ViewLoadingComponent"}]}],"kind":"module"},{"name":"workspaceRoutes","filename":"src/app/workspace/workspace-routing.module.ts","module":"WorkspaceRoutingModule","children":[{"path":"organization/:organizationCode/project/:projectCode","component":"ProjectSettingsComponent","canActivate":["AuthGuard","ProjectSettingsGuard"],"children":[{"path":"users","component":"ProjectUsersComponent"},{"path":"","redirectTo":"users","pathMatch":"full"}]},{"path":"organization/:organizationCode","component":"OrganizationSettingsComponent","canActivate":["AuthGuard","OrganizationSettingsGuard"],"children":[{"path":"detail","component":"OrganizationDetailComponent"},{"path":"users","component":"OrganizationUsersComponent"},{"path":"","redirectTo":"detail","pathMatch":"full"}]},{"path":"workspace","canActivate":["AuthGuard","WorkspaceSelectGuard"],"component":"WorkspaceChooserComponent","data":{"searchBoxHidden":true}}],"kind":"module"}]}
