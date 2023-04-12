import React from "react";

const Blog = () => {
	return (
		<div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					When should you use context API ?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						Context API in React is used for providing a way to share data
						between components without having to pass the data down through
						props. It is useful when you have data that needs to be accessible
						by many components in your application, and passing this data down
						through the component tree would be problem
					</p>
					<ul>
						<li>
							<p>
								Theming: If you want to provide a way for your users to change
								the theme of your application, you can use Context API to share
								the current theme data across different components.
							</p>
						</li>
						<li>
							<p>
								User Authentication: If you have user authentication in your
								application, you can use Context API to share the user's
								authentication status and information across different
								components, allowing you to show different content based on
								whether the user is logged in or not.
							</p>
						</li>
						<li>
							<p>
								Language Localization: If your application needs to support
								multiple languages, you can use Context API to share the current
								language data across different components, allowing them to
								easily update their content based on the selected language.
							</p>
						</li>
						<li>
							<p>
								Global Data: If you have any data that needs to be accessed by
								multiple components, such as a list of products, you can use
								Context API to share that data across different components,
								without having to pass it down through props.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					What is a custom hook?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						In React, a custom hook is a function that allows you to extract and
						reuse logic and stateful behavior across multiple components in your
						application. Custom hooks are a powerful way to abstract away
						complex logic and create reusable pieces of code that can be shared
						between components. Custom hooks follow a specific naming convention
						- they must start with the word "use". For example, you might create
						a custom hook called useLocalStorage to handle local storage
						operations, or useFetch to handle fetching data from an API.
					</p>
				</div>
			</div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					What is useRef?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						useRef is a built-in React hook that lets you reference a value
						that's not needed for rendering. It accepts one argument as the
						initial value and returns a reference (known as ref). The reference
						is an object having a special property current.
					</p>
					<p>
						useRef can be used to access and manipulate a DOM element, to store
						mutable data that does not trigger a re-render when it is updated,
						or to store a value between different renders of a component
					</p>
				</div>
			</div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					What is useMemo?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						useMemo is a built-in React hook that allows you to memoize a
						function's result. It accepts two arguments: a function that
						computes a result and an array of dependencies.
					</p>

					<p>
						useMemo to optimize performance by avoiding expensive calculations
						on every render3. However, overusing it can slow down your
						application
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
