<template lang="pug">
  div(class="mx-auto max-w1024px w100% min-h100% flex")
    div(class="flex px20px py15px w220px min-h100%!")
      GuidesMenu
    div(class="w[calc(100%-260px)]")
      h1 When, why, and for what?
      div
        p.
          This library is not intended to replace standard Vue features such as the Options API or Composition API.
          Instead, it is an additional tool for specific use cases. It provides an alternative approach that may be
          familiar to backend developers and is suitable for certain architectural patterns. The library utilizes
          the conventional class syntax, which is transformed into the standard Options API output, ensuring
          compatibility with current Vue versions.
        h3 When should you use this library?
        p.
          If your application is structured as a monolithic or modular monolith, with most of the business logic in
          the backend, this library can be a good fit. It also works well in scenarios where there is strong
          consistency between the frontend and backend, and where the frontend mostly displays data received
          from the server.
        p.
          Additionally, if you prefer to quickly assemble the user interface using pre-built, complex components
          that don't require complex logic on the frontend, this library could be a useful addition to your toolbox.
        h3 Why this approach?
        p.
          Simplicity and speed: Using classes and pre-built solutions allows backend developers, who are familiar
          with the object-oriented paradigm, to quickly adapt and work on the frontend without needing to dive deep
          into the specifics of the Composition API.

        p.
          Application integrity: If all business logic is handled on the backend, adding complexity to the frontend to manage state that has already been handled on the server is unnecessary.

        p.
          Clear dependencies: In a monolithic application with a consistent architecture, without "smeared" logic
          like in microservices, complex Composition API mechanisms for data aggregation are not required.

        p.
          Usability: The library offers pre-built components that encapsulate complex logic, allowing quick interface
          building. A caveat: When using any of these components, the library connects to the global $VST variable to
          simplify communication between them.


        h3 What is it not suitable for?
        p.
          Microservice architecture (оr with caution): When it comes to applications that need to gather data from
          multiple, independent microservices on the frontend, the Composition API can be an ideal tool. This API helps
          structure complex logic and manage the state and dependencies that are often present in these systems.
        p.
          Frontend complexity: If your app requires a lot of custom, non-backend logic
          (like complex animations or real-time processing) on the client-side, the
          Composition API provides more flexibility and functionality.

        h3 Conclusion

        p.
          This library isn't a replacement for the Vue ecosystem, but rather an addition that offers an alternative
          approach for specific architectural scenarios where traditional tools might be redundant.
          It's a tool for developers who value speed, accuracy, and simplicity, particularly if the majority
          of the business logic is managed securely on the backend.
</template>


<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../core'
import GuidesMenu from '../GuidesMenu.vue'

/**
 * Example
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class VueConfigGuide extends BaseComponent {
  components = {GuidesMenu}
}
</script>

<style lang="sass" scoped>
//span
//  @apply bg-red-200!
</style>

