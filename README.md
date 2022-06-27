<div>
  <h1 align="center">
    <a href="https://react-injection.vercel.app">
        👾 useInjection 👾
    </a>
  </h1>
  <strong>
    Custom hook for html dom injections
  </strong>
</div>

<hr />

## API

### Properties

| Name         | Type       | Default  | Description                                     |
| ------------ | ---------- | -------- | ----------------------------------------------- |
| parentClass  | String     | ""       | сlasses for the parent element                  |
| wrapperClass | String     | injected | wrapper class for injected component            |
| component    | React.Node | `null`   | injected component                              |
| multi        | Boolean    | `false`  | if `true`, then multiple injections are allowed |
