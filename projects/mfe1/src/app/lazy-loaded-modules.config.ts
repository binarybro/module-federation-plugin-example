export const lazyLoadedModules: Record<LazyModules, () => Promise<any>> = {
  'lazy-button': () => import('./lazy-button/lazy-button.module').then(mod => mod.LazyButtonModule)
};

export type LazyModules = 'lazy-button';
