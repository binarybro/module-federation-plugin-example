import {
  AfterViewInit,
  Compiler,
  Component,
  ElementRef,
  Injector,
  Input,
  NgModuleRef,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {lazyLoadedModules} from '../../lazy-loaded-modules.config';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.css']
})
export class LazyComponentComponent implements AfterViewInit {
  @Input() private moduleName: string;

  @ViewChild('container', {read: ViewContainerRef, static: true})
  private container: ViewContainerRef;

  constructor(
    private compiler: Compiler,
    private host: ElementRef,
    private injector: Injector,
  ) {
  }

  async ngAfterViewInit(): Promise<void> {
    const m = await lazyLoadedModules[this.moduleName]();
    const factory = await this.compiler.compileModuleAsync(m);
    const module: NgModuleRef<any> = factory.create(this.injector);
    const componentType: Type<any> = m.entryComponent;
    this.container.createComponent(componentType, {injector: module.injector});
  }

}
