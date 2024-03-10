import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-container',
  scoped: true,
})
export class TestContainer {
  render() {
    return (
      <Host style={{display: 'block' }} class={ 'p-4' }>
        <slot></slot>
      </Host>
    );
  }
}
