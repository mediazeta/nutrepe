import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

type Variant = 'primary' | 'secondary' | 'ghost' | 'text';
type Size = 'md' | 'lg';

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'rounded-full justify-center active:scale-[0.97] bg-forest text-cream hover:bg-forest-2',
  secondary:
    'rounded-full justify-center active:scale-[0.97] bg-white text-forest border border-ink/15 hover:border-ink/30',
  ghost: 'rounded-full justify-center active:scale-[0.97] bg-transparent text-forest hover:text-mint',
  text: 'text-forest underline decoration-ink/25 decoration-2 underline-offset-[6px] hover:decoration-mint hover:text-mint',
};

const SIZE_CLASSES: Record<Variant, Record<Size, string>> = {
  primary: { md: 'px-5 py-2.5 text-sm', lg: 'px-7 py-3.5 text-base' },
  secondary: { md: 'px-5 py-2.5 text-sm', lg: 'px-7 py-3.5 text-base' },
  ghost: { md: 'px-5 py-2.5 text-sm', lg: 'px-7 py-3.5 text-base' },
  text: { md: 'text-sm', lg: 'text-base' },
};

/**
 * Botón polimórfico: renderiza <a> (ancla de scroll "#...", enlace externo "http...",
 * o ruta interna de Angular Router) o <button>, según lo que se pase en [href].
 * La variante "text" es un enlace subrayado sin caja (CTA de baja intensidad, al estilo
 * de los "Ver planes"/"Conocernos mejor" de referencias editoriales minimalistas).
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
      'inline-flex items-center gap-2 font-semibold transition-all duration-200 disabled:opacity-70',
      VARIANT_CLASSES[this.variant],
      SIZE_CLASSES[this.variant][this.size],
      this.className,
    ].join(' ');
  }
}
