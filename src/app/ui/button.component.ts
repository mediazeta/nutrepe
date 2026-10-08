import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-forest text-cream hover:bg-forest-2 shadow-[0_8px_24px_-8px_rgba(11,30,110,0.45)]',
  secondary: 'bg-white text-forest border border-forest/15 hover:border-forest/30 hover:bg-forest-soft',
  ghost: 'bg-transparent text-forest hover:bg-forest-soft',
};

const SIZE_CLASSES: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

/**
 * Botón polimórfico: renderiza <a> (ancla de scroll "#...", enlace externo "http...",
 * o ruta interna de Angular Router) o <button>, según lo que se pase en [href].
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>

    @if (isAnchor) {
      <a [href]="href" [class]="classes"><ng-container *ngTemplateOutlet="content"></ng-container></a>
    } @else if (isExternal) {
      <a [href]="href" target="_blank" rel="noopener noreferrer" [class]="classes">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </a>
    } @else if (href) {
      <a [routerLink]="href" [class]="classes"><ng-container *ngTemplateOutlet="content"></ng-container></a>
    } @else {
      <button [type]="type" [class]="classes" (click)="clicked.emit()" [disabled]="disabled">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </button>
    }
  `,
})
export class ButtonComponent {
  @Input() href?: string;
  @Input() variant: Variant = 'primary';
  @Input() size: Size = 'md';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() className = '';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();

  get isAnchor(): boolean {
    return !!this.href && this.href.startsWith('#');
  }

  get isExternal(): boolean {
    return !!this.href && this.href.startsWith('http');
  }

  get classes(): string {
    return [
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-70',
      VARIANT_CLASSES[this.variant],
      SIZE_CLASSES[this.size],
      this.className,
    ].join(' ');
  }
}
