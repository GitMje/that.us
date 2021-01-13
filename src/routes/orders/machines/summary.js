import { Machine, assign } from 'xstate';

import { log } from '../../../utilities/error';
import createConfig from './summaryConfig';

function createServices() {
  return {
    guards: {
      isAuthenticated: context => context.isAuthenticated,
      hasUserProfile: context => context.hasUserProfile,
    },

    services: {},

    actions: {
      logError: (context, event) =>
        log({
          error: 'summary state machine has ended in the error state.',
          extra: { context, event },
          tags: { stateMachine: 'cart' },
        }),

      setIsAuthenticated: assign({
        isAuthenticated: (_, event) => event.status,
      }),

      setHasUserProfile: assign({
        hasUserProfile: (_, event) => event.status,
      }),
    },
  };
}

function create(meta) {
  const services = createServices();
  return Machine({ ...createConfig(meta) }, { ...services });
}

export default create;
