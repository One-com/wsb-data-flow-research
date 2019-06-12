Table of Contents
=================
* [Purpose](#purpose)
* [Functional requirements](#functional-requirements)
   * [Layout](#layout)
   * [Components panel](#components-panel)
   * [Workspace](#workspace)
   * [Properties panel](#properties-panel)
   * [Button component](#button-component)
      * ["Button &amp; PP" case](#button--pp-case)
      * ["Button &amp; PP" case: undo / redo](#button--pp-case-undo--redo)
   * [Text component](#text-component)
      * [Text component push down case](#text-component-push-down-case)
   * [Undo / Redo](#undo--redo)
   * [Data persistance](#data-persistance)
* [Technical requirements](#technical-requirements)
* [Starter kit](#starter-kit)
* [Running on codesandbox.io](#running-on-codesandboxio)

## Purpose
Of this repo is to provide a started kit to the wsb data flow research.
See more about research itself in [here](https://confluence.one.com/display/WED/Wbtgen+data+flow+framework+research).

## Functional requirements
### Layout
- Top bar
  - Save button
  - Undo / redo
- Components panel (aka left panel)
- Workspace
- Template lines

### Components panel
- Click to component to add it to workspace

### Workspace
- Move components to change their positions on the workspace
- Components should not go beyond template lines
- Components should expand template width when they touch template lines

### Properties panel
- Clicking on comopnent activates properties panel
- Each components has its own properties panel implementation

### Button component
- Update button label in place
  - Button width should be adjusted to new label
- Properties panel
  - Update button width

#### "Button & PP" case
- button text is changed
- button width growth
- PP that is near to button shifts down so no overlapping happens between button and PP

#### "Button & PP" case: undo / redo
- undo happens
- button text returns back
- button width goes back
- PP does not return back

### Text component
- Change text dimensions
- Update text in place
  - Text component might grow in height
- Properties panel
  - Update global font size

#### Text component push down case
- there are multiple Text components on the page
- there are some other (take simple Box) components below Text components
- there is global style that is applied to Text components
- global style is changed
- Text components grow in height
- push down should happen with all respects

### Undo / Redo
- Works for components in the workspace

### Data persistance
- Save should persist in local storage
- State should be preserved after reloading

## Technical requirements
- UI framework: React
- Typechecking: Flowtype
- Tests: jest

## Starter kit
- Webpack / webpack dev server
- Layout is impelemented using React
- Handlers are attached
- D&D handlers are attached to components
- PP skeleton is created

## Running on codesandbox.io
TODO

