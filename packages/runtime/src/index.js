import {h} from "./h";

console.log("This will soon be a frontend framework!")

const view = h('form', { class: 'login-form', action: 'login' }, [
  h('input', { type: 'text', name: 'user' }),
  h('input', { type: 'password', name: 'pass' }),
  h('button', { on: { click: () => {} } }, ['Login'])
])

console.log(view)