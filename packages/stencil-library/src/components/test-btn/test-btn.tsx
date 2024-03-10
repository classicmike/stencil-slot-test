import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-btn',
  scoped: true,
})
export class TestBtn {

  render() {
    return (
      <Host>
        <button class={'btn btn-danger'}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
