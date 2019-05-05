# gatsby-plugin-just-comments

Gatsby Plugin for [JustComments](https://just-comments.com)

## Installation

Create an account at [https://just-comments.com](https://just-comments.com) to get an API key.
Then install:

```
npm install gatsby-plugin-just-comments --save
```

## Usage

```js
import JustComments from 'gatsby-plugin-just-comments';

// in your component
  <JustComments
    apikey="YOUR API KEY"
  />
```

The component accepts all parameters described in the [docs](https://just-comments.com/docs.html) without the `data-` prefix.

## Note

The implementation does not server-render the comments at the moment

