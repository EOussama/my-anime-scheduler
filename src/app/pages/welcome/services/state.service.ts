import { Subscription } from 'rxjs';

export class StateService {

  /**
  * The MAL loader subscription
  */
  public malLoaderSubscription: Subscription;

  /**
  * The requirements object
  */
  public requiredSteps = {
    MALAccount: false,
    permission: false
  };
}
