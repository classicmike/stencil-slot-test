import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'test-demo',
  scoped: true,
})
export class TestDemo {

  @State()
  testButtons = [
    (<test-container style={{ display: 'block' }} class={ 'button-1' }><test-btn>Test Button 1</test-btn></test-container>),
    (<test-container style={{ display: 'block' }} class={ 'button-2' }><test-btn>Test Button 2</test-btn></test-container>),
  ];


  addButton(e: Event) {
    e.preventDefault();

    const buttonCount = this.testButtons.length + 1;

    const newButton = (<test-container style={{display: 'block'}} class={ 'button-' + buttonCount }>
      <test-btn>Test Button {buttonCount}</test-btn>
    </test-container>);

    this.testButtons = [...this.testButtons, newButton];

    console.info('Show the correct order of the DOM elements', this.testButtons);
  }

  removeButton(e: Event) {
    e.preventDefault();

    const updatedTestButtons = this.testButtons;
    updatedTestButtons.pop();

    this.testButtons = [...updatedTestButtons];
  }

  render() {
    return (
      <Host>
        <main>
          <h1>Testing for Github Issue</h1>
          <h2>Explanation of the issue</h2>
          <p>This is a demo which will demonstrate the issue of DOM elements being inserted incorrectly before the last child.
            This happens when users dynamically at run time insert content inside of stencil components.</p>
          <section>
            <h2>Demo of the issue</h2>
            <p>Press 'Add button' to see the bug in action. There is a counter there so you can better see the issue.</p>
            <test-container style={{display: 'block'}}>
              {this.testButtons}
            </test-container>
            <ul class="list-inline">
              <li>
                <button class={'btn btn-primary'} onClick={e => this.addButton(e)}>Add Test Button</button>
              </li>
              <li>
                <button class={'btn btn-outline-danger'} onClick={e => this.removeButton(e)}>Remove Test Button
                </button>
              </li>
            </ul>
          </section>
        </main>
      </Host>
    );
  }

}
