# Lazy loading components
1. Create a new component `LazyIvyComponent` inside the `ivy-components` directory.
2. The `IvyComponentsComponent` has a button. On Button click the new component needs to be lazy loaded.  
3. Implement the `lazyLoadComponent()` function to lazy load the new component.

## Hints

```javascript
    constructor(private readonly cfr: ComponentFactoryResolver,
                private readonly vcr: ViewContainerRef,
                private readonly injector: Injector) { }
```


