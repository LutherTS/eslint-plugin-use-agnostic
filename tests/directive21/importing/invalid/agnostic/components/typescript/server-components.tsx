// "use agnostic components"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components.tsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Invalid.
// Lineal Server Components, unlike Lineal Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.
