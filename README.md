# @softisfy/cookies

> A GDPR compliant cookies component for React

[![NPM](https://img.shields.io/npm/v/@softisfy/cookies.svg)](https://www.npmjs.com/package/@softisfy/cookies) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @softisfy/cookies
```

## Usage

```jsx
import CookiesComponent from '@softisfy/cookies';
import '@softisfy/cookies/dist/index.css';

const App = () => {
	return (
		<CookiesComponent
			title="This website uses cookies"
			description={
				<p>
					We use cookies to provide social media features and to analyse our
					traffic. We also share information about your use of our site with our
					social media and analytics partners who may combine it with other
					information that you've provided to them. <a href="/">Learn more.</a>
				</p>
			}
			toggle={<img src="/cookie.svg" alt="Cookie" />} // can also be a simple string
			controls={{
				all: 'Accept all cookies',
				selected: 'Accept selected cookies'
			}}
			fields={[
				{
					id: 'necessary',
					label: 'Necessary',
					disabled: true,
					checked: true,
					scripts: [
						{
							location: 'head',
							src: '/scripts/script-A.js'
						}
					]
				},
				{
					id: 'analytics',
					label: 'Analytics',
					scripts: [
						{
							location: 'body',
							src: '/scripts/script-B.js'
						}
					]
				},
				{
					id: 'marketing',
					label: 'Marketing',
					scripts: [
						{
							location: 'head',
							src: '/scripts/script-C.js'
						}
					]
				}
			]}
		/>
	);
};
```

## Styles

For this part, you have three options:

1. Use the default stylesheet provided by the library. Example:

```jsx
import '@softisfy/cookies/dist/index.css';
```

2. Override the default stylesheet with your own. Example:

```css
:root {
	--stf-cookies-primary-color: #444c56;
	--stf-cookies-border-color: #444c56;
	--stf-cookies-dark-color: #adbac7;
	--stf-cookies-light-color: #22272e;
	--stf-cookies-border-radius: 4px;
	--stf-cookies-font-size: 13px;
	--stf-cookies-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}
```

3. Use your own stylesheet.

## License

MIT © [Softisfy](https://github.com/softisfy)
