'use strict';

import { KUBERNETES_LIFECYCLE_HOOK_DETAILS } from './lifecycleHookDetails.component';
import { KUBERNETES_SERVER_GROUP_CONTAINER_DETAIL } from './containerDetail.component';
import { KUBERNETES_V1_SERVERGROUP_DETAILS_DETAILS_CONTROLLER } from './details.controller';
import { KUBERNETES_V1_SERVERGROUP_DETAILS_RESIZE_RESIZE_CONTROLLER } from './resize/resize.controller';
import { KUBERNETES_V1_SERVERGROUP_DETAILS_ROLLBACK_ROLLBACK_CONTROLLER } from './rollback/rollback.controller';

import { module } from 'angular';

export const KUBERNETES_V1_SERVERGROUP_DETAILS_DETAILS_KUBERNETES_MODULE = 'spinnaker.serverGroup.details.kubernetes';
export const name = KUBERNETES_V1_SERVERGROUP_DETAILS_DETAILS_KUBERNETES_MODULE; // for backwards compatibility
module(KUBERNETES_V1_SERVERGROUP_DETAILS_DETAILS_KUBERNETES_MODULE, [
  KUBERNETES_V1_SERVERGROUP_DETAILS_DETAILS_CONTROLLER,
  KUBERNETES_V1_SERVERGROUP_DETAILS_RESIZE_RESIZE_CONTROLLER,
  KUBERNETES_V1_SERVERGROUP_DETAILS_ROLLBACK_ROLLBACK_CONTROLLER,
  KUBERNETES_LIFECYCLE_HOOK_DETAILS,
  KUBERNETES_SERVER_GROUP_CONTAINER_DETAIL,
]);