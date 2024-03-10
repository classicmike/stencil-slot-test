# Stencil Slot Test
## Introduction
This repo is designed to replicatea bug as presented in the issue: [https://github.com/ionic-team/stencil/issues/5449](https://github.com/ionic-team/stencil/issues/5449).

## How to run project
1. Clone the following repo: ```https://github.com/classicmike/stencil-slot-test.git```
2. ```cd stencil-slot-test```
3. ```Run npm install```
4. Build stencil library by running ```cd packages/stencil-library``` from the root directory and ```npm run build```
5. Build react library by running ```cd packages/react-library``` from the root directory and ```npm run build```
6. Initialise Play room by running ```cd packages/stencil-library-playroom``` from the root directory and run ```npm run playroom:start```
7. Once the UI has loaded, write the following markup below character by character. Do not copy and paste.

```
<TestContainer>
  <TestBtn>Test Btn 1</TestBtn>
  <TestBtn>This should be AFTER 'TEST BUTTON 1'</TestBtn>
</TestContainer>
```

If instructions done as above, the you will see the bug as shown below:
![Current bug where children content  is being rendered in 'reverse order'](https://github.com/ionic-team/stencil/assets/1841040/abb56352-5daa-49f6-945d-2fb897ef6af4).
