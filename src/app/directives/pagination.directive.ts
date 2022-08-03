import { Directive, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPagination]',
  exportAs: 'pagination11'

})

export class PaginationDirective {

  PageNo: number = 1;
  @Output() onChangeEventEmit = new EventEmitter();

  constructor(private rendered: Renderer2, private el: ElementRef) { }

  onNext() {
    this.setPage(this.PageNo < 9 ? this.PageNo + 1 : this.PageNo);

  }

  onPrevious() {
    this.setPage(this.PageNo === 1 ? this.PageNo : this.PageNo - 1);
  }

  setPage(pageno: number) {
    this.PageNo = pageno;
    this.rendered.setProperty(this.el.nativeElement, "value", this.PageNo);
    // console.log(this.PageNo);
    this.onChangeEventEmit.emit(pageno);
  }

}
